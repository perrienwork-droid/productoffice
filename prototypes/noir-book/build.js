#!/usr/bin/env node
/**
 * Noir Book Build Script v4
 * 
 * Reads content files in content/, assembles full HTML pages in topics/,
 * extracts metadata + SEARCH_INDEX + MANIFEST,
 * updates: topics/*.html, index.html, js/search.js, library-manifest.json, README.md
 * 
 * Usage:
 *   node build.js            — full build (assembles pages, updates index, search, manifest)
 *   node build.js --check    — report what's out of sync without changing anything
 *   node build.js --dry-run  — show what would change without writing files
 */
const fs = require('fs');
const path = require('path');
const DRY_RUN = process.argv.includes('--dry-run');
const CHECK_MODE = process.argv.includes('--check');
const ROOT = __dirname;
const CONTENT_DIR = path.join(ROOT, 'content');
const CSS_DIR = path.join(ROOT, 'css');

// ── TOKEN GUARDRAIL ─────────────────────────────────────────────────
// Scans css/*.css for raw colour literals (hex, rgb, rgba) outside the
// :root and themed-:root token blocks. The intent is that shared.css's
// :root remains the single source of truth for colour and shadow values.
//
// An allow-list handles intentional theme-invariant rgba values (e.g.
// the translucent white glass overlay on nav-search-pill, which sits on
// a nav background that is always dark regardless of theme).
const TOKEN_ALLOWLIST = [
  // Theme-invariant rgba on always-dark nav surfaces
  { file: 'shared.css', pattern: /rgba\(255,\s*255,\s*255,\s*\.08\)/, reason: 'nav-search-pill glass overlay' },
];

function findRawColorLiterals(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const src = fs.readFileSync(filePath, 'utf8');
  const lines = src.split('\n');
  const fileName = path.basename(filePath);

  // Build a set of line numbers that fall inside a :root { ... } or
  // [data-theme="..."] { ... } token block. Naive brace-balanced scan,
  // sufficient for our hand-authored CSS.
  const inTokenBlock = new Set();
  let depth = 0;
  let inBlock = false;
  const tokenHeaderRe = /^\s*(:root(?:[^\{]*)?|\[data-theme=(?:"|')[^"']+(?:"|')\])\s*\{/;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!inBlock && tokenHeaderRe.test(line)) { inBlock = true; depth = 0; }
    if (inBlock) {
      inTokenBlock.add(i);
      depth += (line.match(/\{/g) || []).length;
      depth -= (line.match(/\}/g) || []).length;
      if (depth <= 0) inBlock = false;
    }
  }

  const colorRe = /(#[0-9A-Fa-f]{3,8}\b|rgba?\([^)]+\))/g;
  const findings = [];
  for (let i = 0; i < lines.length; i++) {
    if (inTokenBlock.has(i)) continue;
    const line = lines[i];
    let m;
    colorRe.lastIndex = 0;
    while ((m = colorRe.exec(line)) !== null) {
      const literal = m[1];
      const allowed = TOKEN_ALLOWLIST.some(a => a.file === fileName && a.pattern.test(literal));
      if (allowed) continue;
      findings.push({ file: fileName, line: i + 1, literal, context: line.trim().slice(0, 100) });
    }
  }
  return findings;
}

function runTokenGuardrail() {
  if (!fs.existsSync(CSS_DIR)) return { findings: [], clean: true };
  const cssFiles = fs.readdirSync(CSS_DIR).filter(f => f.endsWith('.css')).map(f => path.join(CSS_DIR, f));
  const findings = [];
  for (const f of cssFiles) findings.push(...findRawColorLiterals(f));
  return { findings, clean: findings.length === 0 };
}

// ── CHECK MODE ──────────────────────────────────────────────────────
if (CHECK_MODE) {
  console.log('\n🔍 Noir Book — Sync Check\n');
  if (!fs.existsSync(CONTENT_DIR)) { console.log('No content/ directory.'); process.exit(0); }

  const contentFiles = fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.html') && !f.startsWith('_'));

  const searchJs = fs.readFileSync(path.join(ROOT, 'js', 'search.js'), 'utf8');
  const manifestJson = JSON.parse(fs.readFileSync(path.join(ROOT, 'library-manifest.json'), 'utf8'));
  const manifestIds = new Set(manifestJson.topics.map(t => t.id));

  let missingTopicPages = 0, missingSearch = 0, missingManifest = 0, missingCards = 0;
  const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

  for (const fname of contentFiles) {
    const base = fname.replace('.html', '');
    const content = fs.readFileSync(path.join(CONTENT_DIR, fname), 'utf8');
    const idMatch = content.match(/TOPIC_ID:\s*(\S+)/);
    if (!idMatch) continue;
    const topicId = idMatch[1];

    // Check topics/ page exists
    if (!fs.existsSync(path.join(ROOT, 'topics', fname))) {
      console.log('  ✗ Missing topic page: topics/' + fname);
      missingTopicPages++;
    }

    // Check search.js
    if (!searchJs.includes('topics/' + base + '.html')) {
      console.log('  ✗ Missing from search.js: ' + topicId + ' (' + base + ')');
      missingSearch++;
    }

    // Check manifest
    if (!manifestIds.has(topicId)) {
      console.log('  ✗ Missing from manifest: ' + topicId + ' (' + base + ')');
      missingManifest++;
    }

    // Check homepage card is linked (not "Coming soon")
    const cardIdx = indexHtml.indexOf(topicId);
    if (cardIdx > -1) {
      const nearby = indexHtml.substring(cardIdx, cardIdx + 500);
      if (nearby.includes('Coming soon')) {
        console.log('  ✗ Homepage card still "Coming soon": ' + topicId);
        missingCards++;
      }
    }
  }

  const total = missingTopicPages + missingSearch + missingManifest + missingCards;
  if (total === 0) {
    console.log('  ✓ All ' + contentFiles.length + ' content files are fully synced.\n');
    console.log('  Topic pages: ✓   Search index: ✓   Manifest: ✓   Homepage cards: ✓\n');
  } else {
    console.log('\n  ' + total + ' issue(s) found. Run "node build.js" to fix.\n');
  }

  // Token guardrail in check mode (informational, doesn't change exit code
  // unless sync issues already failed)
  console.log('🎨 Token guardrail (css/):');
  const guard = runTokenGuardrail();
  if (guard.clean) {
    console.log('  ✓ No raw colour literals outside :root token blocks.\n');
  } else {
    console.log('  ⚠️  ' + guard.findings.length + ' raw colour literal(s) outside :root token blocks:\n');
    for (const f of guard.findings) {
      console.log('     ' + f.file + ':' + f.line + '  ' + f.literal + '  → ' + f.context);
    }
    console.log('');
  }

  process.exit(total > 0 ? 1 : 0);
}
// ── END CHECK MODE ──────────────────────────────────────────────────

function readFile(f) { return fs.readFileSync(f, 'utf8'); }
function writeFile(f, c) {
  if (DRY_RUN) { console.log('  [dry-run] Would write ' + path.relative(ROOT, f)); return; }
  fs.writeFileSync(f, c, 'utf8');
}
function extractBlock(content, marker) {
  const re = new RegExp('<!-- ' + marker + '\\n([\\s\\S]*?)\\n' + marker + ' -->', 'm');
  const m = content.match(re);
  return m ? m[1].trim() : null;
}
function extractMeta(content) {
  const m = content.match(/<!--\n([\s\S]*?)-->/);
  if (!m) return null;
  const meta = {};
  for (const line of m[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    meta[line.substring(0, idx).trim()] = line.substring(idx + 1).trim();
  }
  return meta;
}

const TOPICS_DIR = path.join(ROOT, 'topics');

// Build TOC entries from content by scanning <section> and <h2> tags (h2 only — flat list)
// Also validates section IDs: duplicates and id/title mismatches (e.g. Common pitfalls
// inside id="templates-and-checklists") are reported so the TOC stays trustworthy.
function buildToc(content, sourceFile) {
  const entries = [];
  const sectionRe = /<section\s+id="([^"]+)"(?:\s+data-section="([^"]+)")?[^>]*>/g;
  const seenIds = new Set();
  let sm;
  while ((sm = sectionRe.exec(content)) !== null) {
    const id = sm[1];
    const type = sm[2] || '';
    const after = content.substring(sm.index, sm.index + 500);
    const h2m = after.match(/<h2>(.*?)<\/h2>/);
    if (h2m) {
      // Strip any inner HTML tags (e.g. <span class="source-label">)
      const title = h2m[1].replace(/<[^>]+>/g, '').trim();
      if (seenIds.has(id)) {
        console.log('  ⚠️  ' + (sourceFile || '?') + ' — duplicate section id "' + id + '" at <h2>' + title + '</h2>');
      }
      seenIds.add(id);
      // Hard-stop on the exact class of bug we just cleaned up: a section
      // whose <h2> says Common pitfalls but whose id points somewhere else
      // (both "pitfalls" and "common-pitfalls" are in-use today and accepted).
      if (/^common\s+pitfalls?$/i.test(title) && id !== 'pitfalls' && id !== 'common-pitfalls') {
        console.log('  ⚠️  ' + (sourceFile || '?') + ' — Common pitfalls section has id "' + id + '" (expected "pitfalls")');
      }
      entries.push({ id, title, type });
    }
  }
  return entries;
}

// Generate the full HTML page from metadata + content
function buildPage(meta, content, toc, totalTopics) {
  // Decode &amp; back to & first (content files store HTML entities), then re-encode once
  const title = (meta.TITLE || '').replace(/&amp;/g, '&').replace(/&/g, '&amp;');
  const subtitle = (meta.SUBTITLE || '').replace(/&amp;/g, '&').replace(/&/g, '&amp;');
  const tierNum = meta.TIER || '1';
  const tierLabel = meta.TIER_LABEL || 'Core Toolkit';
  const theory = meta.THEORY || '25';
  const practical = meta.PRACTICAL || '50';
  const examples = meta.EXAMPLES || '25';
  const topicNum = meta.TOPIC_NUMBER || meta.TOPIC_ID.replace('UX.', '');
  const shortTitle = title.split(':')[0].split(',')[0].trim();

  // Determine discipline from TOPIC_ID
  const discipline = (meta.TOPIC_ID || '').split('.')[0]; // UX, PM, MK, or CS
  const disciplineNames = { UX: 'UX Design', PM: 'Product Management', MK: 'Marketing &amp; Growth', CS: 'Content Strategy' };
  const disciplineName = disciplineNames[discipline] || 'UX Design';
  const libraryTitle = 'Noir Book';
  const logoMark = discipline || 'BB';

  // Build TOC HTML (flat, h2 only)
  const tocHtml = toc.map(e => {
    const ds = e.type ? ' data-section="' + e.type + '"' : '';
    return '            <li><a href="#' + e.id + '"' + ds + '>' + e.title + '</a></li>';
  }).join('\n');

  const mobileTocHtml = toc.map(e => {
    const ds = e.type ? ' data-section="' + e.type + '"' : '';
    return '        <li><a href="#' + e.id + '"' + ds + '>' + e.title + '</a></li>';
  }).join('\n');

  // Strip the metadata comment and SEARCH_INDEX/MANIFEST comments from content body
  let body = content
    .replace(/<!--\n(?:TOPIC_ID|TOPIC_NUMBER)[\s\S]*?-->/, '')
    .replace(/<!-- SEARCH_INDEX[\s\S]*?SEARCH_INDEX -->/, '')
    .replace(/<!-- MANIFEST[\s\S]*?MANIFEST -->/, '')
    .replace(/<!--[\s=]*(?:THEORY|PRACTICAL|EXAMPLES)[\s\S]*?-->/g, '')
    .trim();

  // Inject section markers before the FIRST <section> of each data-section type
  // This adds the colored badge + horizontal line dividers (Theory, Practical, Examples)
  const seenTypes = new Set();
  body = body.replace(/<section\s+id="([^"]+)"\s+data-section="([^"]+)"[^>]*>/g, (match, id, type) => {
    if (!seenTypes.has(type)) {
      seenTypes.add(type);
      const label = type.charAt(0).toUpperCase() + type.slice(1);
      return '        <div class="section-marker" id="' + id + '">\n' +
             '          <span class="split-badge ' + type + '">' + label + '</span>\n' +
             '          <span class="marker-line"></span>\n' +
             '        </div>\n\n        ' + match.replace(' id="' + id + '"', '');
    }
    return match;
  });

  // Wrap deep-dive section with legacy deep-dive-section styling
  body = body.replace(
    /<section id="deep-dive">\s*<h2>[^<]*<\/h2>/,
    '<div class="deep-dive-section" id="deep-dive">\n' +
    '          <div class="deep-dive-header">\n' +
    '            <span class="deep-dive-badge">Deep Dive</span>\n' +
    '            <h2 style="margin:0; border:none; padding:0;">Appendix</h2>\n' +
    '          </div>'
  );
  // Close the deep-dive-section div: replace its matching </section> with </div>
  // Deep-dive sections never contain nested <section> tags, so the first
  // </section> after the deep-dive-section marker is always the correct one.
  var ddPos = body.indexOf('class="deep-dive-section"');
  if (ddPos > -1) {
    var closePos = body.indexOf('</section>', ddPos);
    if (closePos > -1) {
      body = body.substring(0, closePos) + '</div>' + body.substring(closePos + '</section>'.length);
    }
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — ${libraryTitle}</title>
  <link rel="stylesheet" href="../css/shared.css">
  <link rel="stylesheet" href="../css/topic.css">
  <script src="../js/theme.js"></script>
  <script src="../js/topic-nav.js"></script>
</head>
<body>

  <!-- Navigation -->
  <nav class="site-nav subpage-nav" data-discipline="${discipline.toLowerCase()}">
    <div class="nav-inner">
      <a href="../index.html" class="site-logo">
        <span class="logo-mark">${logoMark}</span>
        <span class="nav-title">${libraryTitle}</span>
      </a>
      <a href="../index.html" class="nav-back-link">&#8592; Library</a>
      <div class="nav-filters">
        <button class="disc-toggle ux-toggle active" data-disc="ux" onclick="toggleDisc('ux')" title="UX Design">
          <span class="disc-dot disc-dot-ux"></span><span class="disc-label">UX Design</span><span class="disc-code">(UX)</span>
        </button>
        <button class="disc-toggle pm-toggle active" data-disc="pm" onclick="toggleDisc('pm')" title="Product Management">
          <span class="disc-dot disc-dot-pm"></span><span class="disc-label">Product</span><span class="disc-code">(PM)</span>
        </button>
        <button class="disc-toggle mk-toggle active" data-disc="mk" onclick="toggleDisc('mk')" title="Marketing &amp; Growth">
          <span class="disc-dot disc-dot-mk"></span><span class="disc-label">Marketing</span><span class="disc-code">(MK)</span>
        </button>
        <button class="disc-toggle cs-toggle active" data-disc="cs" onclick="toggleDisc('cs')" title="Content Strategy">
          <span class="disc-dot disc-dot-cs"></span><span class="disc-label">Content</span><span class="disc-code">(CS)</span>
        </button>
        <div class="search-box nav-search-box">
          <div class="nav-search-wrap">
            <div class="nav-search-pills" id="navSearchPills"></div>
            <input type="text" id="navSearchInput" placeholder="Search..." autocomplete="off"
              oninput="topicNavSearch(this.value)"
              onkeydown="handleNavSearchKey(event)"
              onfocus="handleNavSearchFocus()"
              onblur="handleNavSearchBlur()">
            <button type="button" class="nav-search-clear" id="navSearchClear" onclick="clearNavSearch()" aria-label="Clear search">&times;</button>
          </div>
          <div class="search-dropdown" id="navSearchDropdown"></div>
        </div>
      </div>
      <button class="theme-toggle" id="themeToggle" onclick="toggleTheme()" aria-label="Toggle theme">&#9790;</button>
      <button class="burger-btn" id="burgerBtn" onclick="openBurger()" aria-label="Menu">
        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="2" y1="4" x2="16" y2="4"/><line x1="2" y1="9" x2="16" y2="9"/><line x1="2" y1="14" x2="16" y2="14"/></svg>
      </button>
    </div>
  </nav>

  <!-- Burger Menu Overlay -->
  <div class="burger-overlay" id="burgerOverlay" onclick="closeBurger(event)">
    <div class="burger-panel" onclick="event.stopPropagation()">
      <div class="burger-panel-header">
        <h3>Menu</h3>
        <button class="burger-close" onclick="closeBurger()" aria-label="Close">&times;</button>
      </div>
      <div class="burger-search">
        <input type="text" id="burgerSearchInput" placeholder="Search topics, methods..." autocomplete="off" oninput="burgerSearch(this.value)">
        <div class="burger-search-results" id="burgerSearchResults"></div>
      </div>
      <div class="burger-links">
        <a href="../index.html">&#8592; Back to Library</a>
        <a href="../design-system.html">Design System</a>
        <a href="../request-topic.html">Suggest a topic or improvement</a>
      </div>
      <div class="burger-toc-section">
        <p class="burger-toc-title">On this page</p>
        <ul class="burger-toc-list">
${mobileTocHtml}
        </ul>
      </div>
    </div>
  </div>

  <!-- Topic Header -->
  <header class="topic-header container">
    <div class="breadcrumb">
      <a href="../index.html">Library</a>
      <span class="sep">&#8250;</span>
      <span class="breadcrumb-disc breadcrumb-${discipline.toLowerCase()}">${disciplineName}</span>
      <span class="sep">&#8250;</span>
      <span>Tier ${tierNum} — ${tierLabel}</span>
      <span class="sep">&#8250;</span>
      <span>${shortTitle}</span>
    </div>
    <div class="topic-meta">
      <span class="tier-badge tier${tierNum}">Tier ${tierNum}</span>
      <span style="font-size:14px;color:var(--ink-muted)">Topic ${topicNum}</span>
    </div>
    <h1>${title}</h1>
    <p class="topic-subtitle">${subtitle}</p>
    <div class="content-splits">
      <span class="split-badge theory">${theory}% Theory</span>
      <span class="split-badge practical">${practical}% Methods &amp; Templates</span>
      <span class="split-badge examples">${examples}% Examples</span>
    </div>
  </header>

  <!-- Reading Progress Bar -->
  <div class="reading-progress" id="readingProgress"></div>

  <!-- Main Layout -->
  <div class="container">
    <div class="topic-layout">

      <!-- Sidebar: Table of Contents -->
      <aside class="topic-sidebar">
        <nav class="toc">
          <p class="sidebar-topic-title">${title}</p>
          <p class="toc-title">On this page</p>
          <ul class="toc-list">
${tocHtml}
          </ul>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="topic-main topic-content">

${body}

      </main>
    </div>
  </div>

  <!-- Footer -->
  <footer class="site-footer container">
    <div class="footer-inner">
      <p>Noir Book — Built for the work, not the shelf.</p>
      <div class="footer-links">
        <a href="../design-system.html">Design System</a>
        <a href="../library-manifest.json">Manifest</a>
      </div>
    </div>
  </footer>

  <!-- Back to Top -->
  <button class="back-to-top" id="backToTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Back to top">&#8593;</button>

  <!-- Floating Mobile TOC -->
  <button class="mobile-toc-btn" id="mobileTocBtn" aria-label="Open table of contents">&#9776; Contents</button>
  <div class="mobile-toc-overlay" id="mobileTocOverlay">
    <div class="mobile-toc-panel">
      <div class="mobile-toc-panel-header">
        <h3>On this page</h3>
        <button class="mobile-toc-close" id="mobileTocClose" aria-label="Close">&times;</button>
      </div>
      <ul class="mobile-toc-list">
${mobileTocHtml}
      </ul>
    </div>
  </div>

  <script>
    // Scrollspy: highlight active TOC item
    const tocLinks = document.querySelectorAll('.toc-list a');
    const sections = [];
    tocLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const el = document.getElementById(href.slice(1));
      if (el) sections.push({ el, link });
    });

    // Reading progress bar
    const progressBar = document.getElementById('readingProgress');
    const backToTop = document.getElementById('backToTop');

    function onScroll() {
      let current = sections[0];
      for (const s of sections) {
        if (s.el.getBoundingClientRect().top <= 120) current = s;
      }
      tocLinks.forEach(l => l.classList.remove('active'));
      if (current) current.link.classList.add('active');

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
      if (progressBar) progressBar.style.width = progress + '%';
      if (backToTop) backToTop.classList.toggle('visible', scrolled > 400);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Split badges: click to scroll to section
    document.querySelectorAll('.content-splits .split-badge').forEach(function(badge) {
      badge.addEventListener('click', function() {
        var type = badge.classList.contains('theory') ? 'theory' : badge.classList.contains('practical') ? 'practical' : 'examples';
        var target = document.querySelector('section[data-section="' + type + '"]');
        if (target) {
          var marker = target.previousElementSibling;
          (marker && marker.classList.contains('section-marker') ? marker : target).scrollIntoView({behavior:'smooth'});
        }
      });
    });
  </script>

  <script src="../js/checklist.js"></script>
  <script src="../js/mobile-toc.js"></script>
  <script src="../js/search.js"></script>
  <script>
    function openBurger(){document.getElementById('burgerOverlay').classList.add('open');document.body.style.overflow='hidden'}
    function closeBurger(e){if(e&&e.target&&e.target!==document.getElementById('burgerOverlay'))return;document.getElementById('burgerOverlay').classList.remove('open');document.body.style.overflow=''}
    function burgerSearch(q){
      var r=document.getElementById('burgerSearchResults');
      if(!q||q.length<2){r.innerHTML='';return}
      var ql=q.toLowerCase(),matches=[];
      if(typeof SEARCH_INDEX!=='undefined'){
        SEARCH_INDEX.forEach(function(t){
          var hit=t.topic.toLowerCase().indexOf(ql)>-1;
          if(!hit)t.sections.forEach(function(s){if((s.title+' '+s.keywords).toLowerCase().indexOf(ql)>-1)hit=true});
          if(hit)matches.push(t);
        });
      }
      if(!matches.length){r.innerHTML='<p style="padding:8px 0;font-size:13px;color:var(--ink-muted)">No results</p>';return}
      r.innerHTML=matches.slice(0,8).map(function(m){return '<a href="../'+m.url+'">'+m.topic+'<span class="bsr-disc">'+m.discipline+'</span></a>'}).join('');
    }
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeBurger();var dd=document.getElementById('searchDropdown');if(dd)dd.classList.remove('visible');}});
    // Close burger when clicking a TOC link
    document.querySelectorAll('.burger-toc-list a').forEach(function(a){a.addEventListener('click',function(){closeBurger()})});
    // Search typeahead
    function topicSearch(q){
      var dd=document.getElementById('searchDropdown');
      if(!q||q.length<2||typeof SEARCH_INDEX==='undefined'){if(dd)dd.classList.remove('visible');return}
      var ql=q.toLowerCase(),grouped={};
      SEARCH_INDEX.forEach(function(t){
        var hit=t.topic.toLowerCase().indexOf(ql)>-1,sHits=[],mHits=[];
        t.sections.forEach(function(s){if((s.title+' '+s.keywords).toLowerCase().indexOf(ql)>-1)sHits.push(s)});
        (t.methods||[]).forEach(function(m){if((m.name+' '+(m.keywords||'')).toLowerCase().indexOf(ql)>-1)mHits.push(m)});
        if(!hit&&!sHits.length&&!mHits.length&&ql.length>=3&&typeof levenshtein==='function'){
          var words=t.topic.toLowerCase().split(/ +/);
          for(var i=0;i<words.length;i++){if(levenshtein(ql,words[i].substring(0,ql.length+1))<=1){hit=true;break}}
        }
        if(hit||sHits.length||mHits.length)grouped[t.topic]={url:'../'+t.url,disc:t.discipline||'',sections:sHits,methods:mHits,topicHit:hit};
      });
      var keys=Object.keys(grouped);
      if(!keys.length){dd.innerHTML='<div class="search-empty">No results</div>';dd.classList.add('visible');return}
      var html='';
      keys.slice(0,8).forEach(function(topic){
        var g=grouped[topic];
        html+='<div class="search-group"><div class="search-group-title">'+topic+'</div>';
        if(g.topicHit)html+='<a class="search-result" href="'+g.url+'"><span class="search-result-title">'+topic+'</span><span class="search-result-type practical">'+g.disc+'</span></a>';
        g.sections.forEach(function(s){html+='<a class="search-result" href="'+g.url+'#'+s.id+'"><span class="search-result-title">'+s.title+'</span><span class="search-result-type '+s.type+'">'+s.type+'</span></a>'});
        g.methods.slice(0,3).forEach(function(m){html+='<a class="search-result" href="'+g.url+'#'+m.section+'"><span class="search-result-title">'+m.name+'</span><span class="search-result-type practical">method</span></a>'});
        html+='</div>';
      });
      dd.innerHTML=html;dd.classList.add('visible');
    }
    document.addEventListener('click',function(e){if(!e.target.closest('.search-box')){var dd=document.getElementById('searchDropdown');if(dd)dd.classList.remove('visible')}});
  </script>

</body>
</html>`;
}

console.log('\n📚 Noir Book Build Script v4\n');
if (!fs.existsSync(CONTENT_DIR)) { console.log('No content/ directory.'); process.exit(0); }
if (!fs.existsSync(TOPICS_DIR)) { fs.mkdirSync(TOPICS_DIR); }

const contentFiles = fs.readdirSync(CONTENT_DIR)
  .filter(f => f.endsWith('.html') && !f.startsWith('_'))
  .map(f => path.join(CONTENT_DIR, f));

console.log('Found ' + contentFiles.length + ' content file(s):\n');

const topics = [];
for (const file of contentFiles) {
  const content = readFile(file);
  const meta = extractMeta(content);
  const searchIndex = extractBlock(content, 'SEARCH_INDEX');
  const manifest = extractBlock(content, 'MANIFEST');
  const base = path.basename(file, '.html');
  if (!meta || !meta.TOPIC_ID || !meta.TITLE) {
    console.log('  ⚠️  ' + base + '.html — missing metadata, skipping');
    continue;
  }
  const displayNum = meta.TOPIC_NUMBER || meta.TOPIC_ID.replace('UX.', '');
  console.log('  ✓ ' + meta.TOPIC_ID + ' ' + meta.TITLE);
  topics.push({ file, base, meta, searchIndex, manifest, displayNum });
}
if (topics.length === 0) { console.log('\nNo valid content files.'); process.exit(0); }

// Assemble full HTML pages in topics/
console.log('\n🔧 Assembling topic pages...');
const homepageForCount = readFile(path.join(ROOT, 'index.html'));
const totalTopicsCount = topics.length; // Use actual content file count, not HTML span counting
for (const t of topics) {
  const content = readFile(t.file);
  const toc = buildToc(content, t.base + '.html');
  const fullPage = buildPage(t.meta, content, toc, totalTopicsCount);
  const outPath = path.join(TOPICS_DIR, t.base + '.html');
  writeFile(outPath, fullPage);
  console.log('  ✓ topics/' + t.base + '.html (' + toc.length + ' TOC entries)');
}
console.log('');

// Detect new topics (not yet linked from homepage)
const homepageContent = readFile(path.join(ROOT, 'index.html'));
const newTopics = topics.filter(t => {
  const topicUrl = 'topics/' + t.base + '.html';
  return !homepageContent.includes('href="' + topicUrl + '"');
});

const totalCompleted = topics.length - newTopics.length;
const totalTopics = topics.length;
const progressPct = ((totalCompleted / totalTopics) * 100).toFixed(1);

console.log('\n📊 Status: ' + totalCompleted + ' of ' + totalTopics + ' completed (' + progressPct + '%)');
console.log('   ' + newTopics.length + ' new topic(s) to integrate\n');
if (newTopics.length === 0) { console.log('All integrated. Nothing to do.'); process.exit(0); }

// Update index.html
console.log('📄 Updating index.html...');
let html = homepageContent;
for (const t of newTopics) {
  const num = t.displayNum.replace('.', '\\.');
  // Decode &amp; back to & first, then re-encode once (same as buildPage)
  const title = (t.meta.TITLE || '').replace(/&amp;/g, '&').replace(/&/g, '&amp;');
  const subtitle = (t.meta.SUBTITLE || '').replace(/&amp;/g, '&').replace(/&/g, '&amp;');
  const topicUrl = 'topics/' + t.base + '.html';
  const cardRegex = new RegExp(
    '<a [^>]*class="card card-link topic-card"[^>]*>\\s*<span class="topic-number">' + num + '</span>[\\s\\S]*?</a>', 'm'
  );
  const match = html.match(cardRegex);
  if (match) {
    // Extract data-discipline from existing card
    const discMatch = match[0].match(/data-discipline="([^"]*)"/);
    const discAttr = discMatch ? ' data-discipline="' + discMatch[1] + '"' : '';

    let keywords = title;
    let crossAttr = '';
    let sourcesAttr = '';
    if (t.manifest) {
      try {
        const m = JSON.parse(t.manifest);
        keywords = [title, ...(m.keywords||[])].join(' ');
        // Build data-cross from cross_discipline field
        if (m.cross_discipline && m.cross_discipline.length > 0) {
          const ownDisc = m.discipline || t.meta.TOPIC_ID.split('.')[0];
          const crossDiscs = [...new Set(m.cross_discipline.map(id => id.split('.')[0].toLowerCase()))].filter(d => d !== ownDisc.toLowerCase());
          if (crossDiscs.length > 0) crossAttr = ' data-cross="' + crossDiscs.join(' ') + '"';
        }
        // Build data-sources from sources field
        if (m.sources && m.sources.length > 0) {
          sourcesAttr = ' data-sources="' + m.sources.join(' ') + '"';
        }
      } catch(e){}
    }
    const desc = subtitle.length > 140 ? subtitle.substring(0, subtitle.lastIndexOf(' ', 137)).replace(/[,;]$/, '') + '.' : subtitle;
    const newCard = '<a href="' + topicUrl + '" class="card card-link topic-card"' + discAttr + crossAttr + sourcesAttr + ' data-topic="' + keywords + '">\n' +
      '          <span class="topic-number">' + t.displayNum + '</span>\n' +
      '          <h3>' + title + '</h3>\n' +
      '          <p class="topic-desc">' + desc + '</p>\n' +
      '        </a>';
    html = html.replace(match[0], newCard);
    console.log('  ✓ Card: ' + t.displayNum + ' ' + t.meta.TITLE);
  } else {
    console.log('  ⚠️  Card not found for ' + t.displayNum);
  }
  // Pathway links
  const shortTitle = t.meta.TITLE.split(':')[0].split(',')[0].trim();
  const soonRe = new RegExp('<span class="pathway-topic-soon">' + shortTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[^<]*</span>', 'g');
  const pm = html.match(soonRe);
  if (pm) { html = html.replace(soonRe, '<a href="' + topicUrl + '">' + shortTitle + '</a>'); console.log('  ✓ Pathways: ' + pm.length); }
}
writeFile(path.join(ROOT, 'index.html'), html);
console.log('  ✓ Homepage updated\n');

// Update search.js
console.log('🔍 Updating js/search.js...');
let sjs = readFile(path.join(ROOT, 'js', 'search.js'));
for (const t of newTopics) {
  if (!t.searchIndex) { console.log('  ⚠️  No SEARCH_INDEX: ' + t.base); continue; }
  if (sjs.includes('"topics/' + t.base + '.html"')) { console.log('  – Already present: ' + t.meta.TITLE); continue; }
  const marker = "  // Future topics will be added here as they're built\n];";
  const entry = ",\n\n  // TOPIC " + t.meta.TOPIC_ID + ": " + t.meta.TITLE + "\n  " + t.searchIndex + "\n\n  // Future topics will be added here as they're built\n];";
  sjs = sjs.replace(marker, entry);
  console.log('  ✓ Added: ' + t.meta.TOPIC_ID);
}
writeFile(path.join(ROOT, 'js', 'search.js'), sjs);
console.log('');

// Update manifest
console.log('📋 Updating library-manifest.json...');
try {
  const mf = JSON.parse(readFile(path.join(ROOT, 'library-manifest.json')));
  const ids = new Set(mf.topics.map(t => t.id));
  for (const t of newTopics) {
    if (!t.manifest) continue;
    try {
      const e = JSON.parse(t.manifest);
      if (ids.has(e.id)) { const i = mf.topics.findIndex(x => x.id === e.id); mf.topics[i] = e; console.log('  ↻ Updated: ' + e.id); }
      else { mf.topics.push(e); console.log('  ✓ Added: ' + e.id); }
    } catch(e) { console.log('  ⚠️  Bad JSON: ' + t.base); }
  }
  mf.completed_topics = totalCompleted;
  mf.updated = new Date().toISOString().split('T')[0];
  writeFile(path.join(ROOT, 'library-manifest.json'), JSON.stringify(mf, null, 2) + '\n');

} catch(e) { console.log('  ⚠️  Could not parse manifest'); }
console.log('');

// Update README
console.log('📝 Updating README.md...');
const rp = path.join(ROOT, 'README.md');
if (fs.existsSync(rp)) {
  let rm = readFile(rp);
  rm = rm.replace(/\d+ topics across 4 tiers\. \d+ completed\./, totalTopics + ' topics across 4 tiers. ' + totalCompleted + ' completed.');
  writeFile(rp, rm);
  console.log('  ✓ ' + totalCompleted + ' completed\n');
}

// Token guardrail at end of normal build — prints warning, never fails the build
console.log('🎨 Token guardrail (css/):');
const tokenGuard = runTokenGuardrail();
if (tokenGuard.clean) {
  console.log('  ✓ No raw colour literals outside :root token blocks.\n');
} else {
  console.log('  ⚠️  ' + tokenGuard.findings.length + ' raw colour literal(s) outside :root token blocks:');
  for (const f of tokenGuard.findings) {
    console.log('     ' + f.file + ':' + f.line + '  ' + f.literal + '  → ' + f.context);
  }
  console.log('     (Move these to a token in shared.css :root, or add an entry to TOKEN_ALLOWLIST in build.js if intentional.)\n');
}

console.log('═══════════════════════════════════════');
console.log('✅ ' + newTopics.length + ' topic(s) integrated: ' + totalCompleted + '/' + totalTopics + ' (' + progressPct + '%)');
if (DRY_RUN) console.log('   (DRY RUN)');
console.log('═══════════════════════════════════════\n');
