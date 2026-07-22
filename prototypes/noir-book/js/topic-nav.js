// ─────────────────────────────────────────────────────────────────────
// topic-nav.js, shared handlers for the topic-page nav
//
// Mirrors the homepage search mechanics so the topic-page nav search feels
// identical to the library's main search:
//   * phrase pills, committed on comma or Enter
//   * live cross-library dropdown on every keystroke
//   * clear-all X button
//   * Enter with a non-empty query navigates back to the library with the
//     committed phrases restored through sessionStorage.bb_filters
//
// Also provides:
//   toggleDisc(disc)        → discipline pills
//   handleNavSearchFocus/Blur → open/close dropdown politely
// ─────────────────────────────────────────────────────────────────────
(function () {
  'use strict';

  // ── Discipline pill → library with that discipline isolated ──────────
  window.toggleDisc = function (disc) {
    try {
      var saved = {};
      try { saved = JSON.parse(sessionStorage.getItem('bb_filters') || '{}') || {}; } catch (e) {}
      saved.discs = { ux: false, pm: false, mk: false, cs: false };
      saved.discs[disc] = true;
      saved.tier = saved.tier || 'all';
      saved.sort = saved.sort || 'disc';
      saved.sortAsc = saved.sortAsc !== undefined ? saved.sortAsc : true;
      saved.filters = saved.filters || { connected: false, bookmarked: false, nng: false };
      saved.phrases = saved.phrases || [];
      saved.view = saved.view || 'compact';
      sessionStorage.setItem('bb_filters', JSON.stringify(saved));
    } catch (e) {}
    window.location.href = '../index.html?disc=' + encodeURIComponent(disc);
  };

  // ── Local search state (matches homepage's searchPhrases + pending text) ──
  var searchPhrases = [];

  function el(id) { return document.getElementById(id); }
  function input() { return el('navSearchInput'); }
  function box() { var i = input(); return i ? i.closest('.nav-search-box') : null; }

  function escapeHtml(s) {
    var d = document.createElement('div');
    d.textContent = s == null ? '' : String(s);
    return d.innerHTML;
  }

  function updateHasQuery() {
    var b = box();
    if (!b) return;
    var i = input();
    var has = (searchPhrases.length > 0) || (i && i.value.trim().length > 0);
    b.classList.toggle('has-query', has);
  }

  function renderPills() {
    var host = el('navSearchPills');
    if (!host) return;
    var html = '';
    searchPhrases.forEach(function (p, i) {
      html += '<span class="nav-search-pill" data-index="' + i + '">'
            + '<span class="pill-text">' + escapeHtml(p) + '</span>'
            + '<span class="pill-remove" data-remove="' + i + '" aria-label="Remove">&times;</span>'
            + '</span>';
    });
    host.innerHTML = html;
    // Update placeholder hint
    var inp = input();
    if (inp) {
      inp.placeholder = searchPhrases.length ? 'Add another phrase\u2026' : 'Search\u2026';
    }
    updateHasQuery();
  }

  function addPhrase(text) {
    var phrase = (text || '').trim();
    if (!phrase) return;
    for (var i = 0; i < searchPhrases.length; i++) {
      if (searchPhrases[i].toLowerCase() === phrase.toLowerCase()) return;
    }
    searchPhrases.push(phrase);
    renderPills();
  }

  function removePhrase(i) {
    if (i < 0 || i >= searchPhrases.length) return;
    searchPhrases.splice(i, 1);
    renderPills();
    renderDropdown((input() && input().value) || '');
  }

  window.clearNavSearch = function () {
    searchPhrases = [];
    var i = input();
    if (i) i.value = '';
    renderPills();
    var dd = el('navSearchDropdown');
    if (dd) { dd.classList.remove('visible'); dd.innerHTML = ''; }
    if (i) i.focus();
  };

  // Pill remove delegation (pills re-render so we cannot bind once on an element)
  document.addEventListener('click', function (e) {
    var host = el('navSearchPills');
    if (!host || !host.contains(e.target)) return;
    var btn = e.target.closest('.pill-remove');
    if (btn) {
      var idx = parseInt(btn.getAttribute('data-remove'), 10);
      if (!isNaN(idx)) removePhrase(idx);
    }
  });

  // ── Live cross-library dropdown ──────────────────────────────────────
  // Treats committed phrases + pending input text as AND-combined filters,
  // matching the homepage's applyFilters contract.
  function renderDropdown(pendingRaw) {
    var dd = el('navSearchDropdown');
    if (!dd) return null;
    if (typeof SEARCH_INDEX === 'undefined') {
      dd.classList.remove('visible'); dd.innerHTML = '';
      return null;
    }
    var pending = (pendingRaw || '').trim();
    var phrases = searchPhrases.slice();
    if (pending) phrases.push(pending);
    if (!phrases.length) {
      dd.classList.remove('visible'); dd.innerHTML = '';
      return null;
    }
    // Every phrase must match somewhere in the topic (title, description, sections, methods).
    var lowered = phrases.map(function (p) { return p.toLowerCase(); });

    var grouped = {};
    SEARCH_INDEX.forEach(function (t) {
      var topicHay = (t.topic + ' ' + (t.description || '')).toLowerCase();
      var secHay = (t.sections || []).map(function (s) {
        return (s.title + ' ' + (s.keywords || '')).toLowerCase();
      });
      var methHay = (t.methods || []).map(function (m) {
        return (m.name + ' ' + (m.keywords || '')).toLowerCase();
      });
      var fullHay = topicHay + ' ' + secHay.join(' ') + ' ' + methHay.join(' ');

      // Require every phrase to appear somewhere in the full haystack.
      var allMatch = lowered.every(function (q) { return fullHay.indexOf(q) > -1; });
      if (!allMatch) return;

      // Determine which sections/methods matched the union of phrases for display.
      var sHits = [];
      (t.sections || []).forEach(function (s, i) {
        if (lowered.some(function (q) { return secHay[i].indexOf(q) > -1; })) sHits.push(s);
      });
      var mHits = [];
      (t.methods || []).forEach(function (m, i) {
        if (lowered.some(function (q) { return methHay[i].indexOf(q) > -1; })) mHits.push(m);
      });
      var topicHit = lowered.some(function (q) { return topicHay.indexOf(q) > -1; });

      grouped[t.topic] = {
        url: '../' + t.url,
        disc: t.discipline || '',
        sections: sHits,
        methods: mHits,
        topicHit: topicHit
      };
    });

    var keys = Object.keys(grouped);
    if (!keys.length) {
      dd.innerHTML = '<div class="search-empty">No results for ' + escapeHtml(phrases.join(' + ')) + '</div>';
      dd.classList.add('visible');
      return null;
    }

    var html = '';
    var firstHref = null;
    keys.slice(0, 8).forEach(function (topic) {
      var g = grouped[topic];
      html += '<div class="search-group"><div class="search-group-title">' + escapeHtml(topic) + '</div>';
      if (g.topicHit || (!g.sections.length && !g.methods.length)) {
        if (!firstHref) firstHref = g.url;
        html += '<a class="search-result" href="' + g.url + '">'
              + '<span class="search-result-title">' + escapeHtml(topic) + '</span>'
              + '<span class="search-result-type practical">' + escapeHtml(g.disc) + '</span></a>';
      }
      g.sections.slice(0, 4).forEach(function (s) {
        var href = g.url + '#' + s.id;
        if (!firstHref) firstHref = href;
        html += '<a class="search-result" href="' + href + '">'
              + '<span class="search-result-title">' + escapeHtml(s.title) + '</span>'
              + '<span class="search-result-type ' + escapeHtml(s.type) + '">' + escapeHtml(s.type) + '</span></a>';
      });
      g.methods.slice(0, 3).forEach(function (m) {
        var href = g.url + '#' + m.section;
        if (!firstHref) firstHref = href;
        html += '<a class="search-result" href="' + href + '">'
              + '<span class="search-result-title">' + escapeHtml(m.name) + '</span>'
              + '<span class="search-result-type practical">method</span></a>';
      });
      html += '</div>';
    });
    dd.innerHTML = html;
    dd.classList.add('visible');
    // Let clicks register before the input's blur handler hides the dropdown.
    dd.querySelectorAll('a.search-result').forEach(function (a) {
      a.addEventListener('mousedown', function (e) { e.preventDefault(); });
    });
    return firstHref;
  }

  // ── Input handlers (exposed globally, bound on the input via inline attrs) ──
  window.topicNavSearch = function (val) {
    var v = val || '';
    // Commit on comma, same as homepage syncSearch
    if (v.indexOf(',') > -1) {
      var parts = v.split(',');
      for (var i = 0; i < parts.length - 1; i++) {
        if (parts[i].trim()) addPhrase(parts[i]);
      }
      var tail = parts[parts.length - 1];
      var inp = input();
      if (inp) inp.value = tail;
      v = tail;
    }
    updateHasQuery();
    renderDropdown(v);
  };

  // Commit committed phrases into bb_filters and go to the library.
  function navigateToLibraryWithPhrases() {
    var saved = {};
    try { saved = JSON.parse(sessionStorage.getItem('bb_filters') || '{}') || {}; } catch (e) {}
    saved.discs = saved.discs || { ux: true, pm: true, mk: true, cs: true };
    // Opening library after a search: show all disciplines so results are not
    // silently filtered out by a stale single-discipline setting.
    if (!saved.discs.ux && !saved.discs.pm && !saved.discs.mk && !saved.discs.cs) {
      saved.discs = { ux: true, pm: true, mk: true, cs: true };
    }
    saved.tier = saved.tier || 'all';
    saved.sort = saved.sort || 'disc';
    saved.sortAsc = saved.sortAsc !== undefined ? saved.sortAsc : true;
    saved.filters = saved.filters || { connected: false, bookmarked: false, nng: false };
    saved.view = saved.view || 'compact';
    saved.phrases = searchPhrases.slice();
    try { sessionStorage.setItem('bb_filters', JSON.stringify(saved)); } catch (e) {}
    window.location.href = '../index.html';
  }

  window.handleNavSearchKey = function (e) {
    var inp = input();
    var val = (inp && inp.value) || '';
    if (e.key === 'Escape') {
      var dd = el('navSearchDropdown');
      if (dd) dd.classList.remove('visible');
      if (inp) inp.blur();
      return;
    }
    if (e.key === 'Backspace' && !val && searchPhrases.length > 0) {
      removePhrase(searchPhrases.length - 1);
      e.preventDefault();
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      var pending = val.trim();
      if (pending) addPhrase(pending);
      if (inp) inp.value = '';
      if (searchPhrases.length) {
        navigateToLibraryWithPhrases();
      } else {
        // Fallback: no phrases at all, open dropdown top result if any.
        var firstHref = renderDropdown('');
        if (firstHref) window.location.href = firstHref;
      }
    }
  };

  window.handleNavSearchFocus = function () {
    var inp = input();
    if (inp) renderDropdown(inp.value || '');
  };

  window.handleNavSearchBlur = function () {
    // Delay, let click on a dropdown item register before it closes.
    setTimeout(function () {
      var dd = el('navSearchDropdown');
      if (dd) dd.classList.remove('visible');
    }, 180);
  };

  // Close dropdown on outside click
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-search-box')) {
      var dd = el('navSearchDropdown');
      if (dd) dd.classList.remove('visible');
    }
  });

  // Initial paint (empty pills, correct placeholder)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderPills);
  } else {
    renderPills();
  }
})();
