# CHANGELOG

## 2026-04-27, Theme toggle clickability + visual weight (v58)

Fix for an intermittent click-miss on the homepage theme toggle ("works only after scroll, then unpredictable") and a contrast complaint ("too thin, almost invisible vs. the Suggest topic CTA"). Three coordinated changes, two CSS edits + one JS edit. Confirmed working via in-browser `elementFromPoint` diagnostic on all 4 corners + center, plus a 3-click theme-flip test (every click registered, every click flipped `data-theme` and `localStorage`).

**A. Border weight matches `.nav-cta`**
- `.theme-toggle` border changed from `1px solid var(--ink-light)` to `1px solid var(--ink)` in `css/shared.css` line 317.
- The toggle now reads with the same visual contrast as the "Suggest topic" CTA pill, no longer faded out against the parchment background.

**B. Stacking guarantee on the button**
- Added `position:relative; z-index:5` to `.theme-toggle` in `css/shared.css` line 317.
- Defensive: the nav has `backdrop-filter:blur(14px)` which creates a stacking context, and on the homepage the toggle sits next to `.home-nav-links` (visible at rest, hidden after scroll). The new z-index removes any residual ambiguity, the button always wins the topmost-element check across the entire 40x40 hit area.

**C. Glyph wrapped in `pointer-events:none` span**
- `js/theme.js`, `updateToggleIcon()` now sets `btn.innerHTML` to `<span class="theme-icon" aria-hidden="true">[glyph]</span>` instead of writing bare `textContent`.
- Added one CSS rule in `shared.css` right after the hover rule: `.theme-toggle > *{pointer-events:none}`.
- The whole button surface is the only click target. The text node inside the span never intercepts.

**Diagnostic that confirmed the fix**
- In-browser console snippet, `elementFromPoint` at center + 4 corners of the toggle, returned `<button id="themeToggle">` for all 5 spots. Computed style: `zIndex:5, position:relative, pointerEvents:auto, border:1px solid rgb(10,10,10)`. `window.toggleTheme` is `function`. Three sequential clicks: every click flipped `data-theme` (null/system to dark to null/system to dark) AND `localStorage` ('system' to 'dark' to 'system' to 'dark'). Icon swap and background change confirmed by the user.

**Files changed**
- `library-v58/css/shared.css`, line 317 (`.theme-toggle` rule rewritten with new border, `position:relative`, `z-index:5`); new line 319 added (`.theme-toggle > *{pointer-events:none}`).
- `library-v58/js/theme.js`, `updateToggleIcon()` body rewritten to set `innerHTML` with a wrapped span instead of `textContent`. Behavior identical from the user's view, the icon still swaps between sun (`☀`) and moon (`☾`).

**Not changed**
- No HTML edits across the 130+ pages that include `#themeToggle`. The wrapping happens in JS, all pages benefit automatically.
- The `.theme-toggle:hover` rule kept as-is (`border-color:var(--ink); color:var(--ink); background:var(--ink-a06)`).

---

## 2026-04-27, Typography + Nav + Dark-mode polish (v58)

A batch of visual polish across typography, navigation, and dark-mode theming. No structural changes to HTML or JS. All changes are CSS-only except the DECISIONS.md and CHANGELOG entries.

**Secondary filter right-alignment (filter bar spacer)**
- A `<span style="flex:1">` spacer was moved to sit between `.discipline-toggles` and the `.seg-group` (Cross-disciplinary / NN/g / Bookmarked) in `.filter-row-controls` row A.
- Effect: the three secondary filter buttons and the tier-links now right-align within row A. Disc-pills stay left. Layout 2 grouping intent completed.

**Sticky section bar centered**
- `.section-sticky-bar` changed to `justify-content:center`. The code + name text now centers in the bar.
- "↑ Top" back button changed to `position:absolute;right:var(--space-6)` so it sits at the right edge without pulling the centered meta text off-center.

**Disc/tier plate code color**
- `.disc-plate-code` and `.tier-plate-code` color changed from `var(--ink-medium)` to `var(--ink)`.
- Plate codes now read in the same black as the rest of the plate, consistent with the ALL CAPS typography rule below.

**ALL CAPS typography — normal weight, black**
- Decision made: keep `text-transform:uppercase` sitewide. Remove bold weight from ALL CAPS text. Set all uppercase text to `var(--ink)` (black), no grey variants.
- Files updated: `index.html` inline styles, `css/shared.css`, `css/home.css`, `css/topic.css`, `about.html`, `agents.html`, `request-topic.html`.
- Every rule with `text-transform:uppercase` now has `font-weight:var(--fw-regular)` (or `400`) and `color:var(--ink)`. Letter-spacing tokens retained.
- See DECISIONS.md entry for the locked rule.

**Show All / Show Fewer button visibility**
- `.preview-overlay-label` changed from a transparent-text overlay (near-invisible against gradient) to a solid ink pill: `background:var(--ink);color:var(--paper-white);border-radius:var(--radius-pill)`.
- Hover: `background:var(--ink-soft)`.
- Effect: the "Show all N topics" and "Show fewer" buttons are now clearly legible as action targets.

**Filter bar bottom padding reduction**
- `.filter-bar` padding-bottom changed from `var(--space-4)` to `var(--space-2)`.
- The parchment frame has less visual weight at the bottom, balancing better with the top padding.

**Filter bar margin equalization**
- `.filter-bar` margins changed from `var(--space-10) auto var(--space-2) auto` to `var(--space-6) auto var(--space-6) auto`.
- Equal top and bottom margins of 24px. The parchment block sits evenly between the nav-band illustrations above and the topic sections below.

**Logo scroll fix**
- Removed `flex-direction:column;align-items:center` from `.home-nav.scrolled .site-logo`. The logo (NB block + "Noir Book" text) now stays in its natural row layout (NB left, text right) at all scroll states.
- Removed redundant scrolled overrides for `.logo-mark` size and `.nav-title` margin/alignment. The default values are correct at all times.
- `.home-nav.scrolled .site-logo` retains only `gap:10px;margin-right:12px` (the `margin-right:auto` role passes to the filter bar's `flex:1`).

**Theme toggle far-right pinning**
- Added `order:999` to `.home-theme-toggle` and `order:998` to `.home-nav .burger-btn`.
- Root cause: `dockFilterBar()` uses `appendChild()` which inserts the filter bar after the toggle in DOM order, pushing the toggle into the middle of the nav flex row. CSS `order` overrides DOM order so the toggle always renders last regardless of where JS inserts the filter bar.

**Nav scroll — no bump on passive scroll**
- Changed `.home-nav.scrolled .nav-inner` from `height:auto;padding-top:10px;padding-bottom:10px` to `height:var(--nav-height)`. The nav no longer expands when the filter bar docks on scroll. The filter bar docks silently within the existing 72px nav height.
- The nav only expands when the user actively focuses the search: `.home-nav.scrolled:has(.search-focused) .nav-inner{height:auto;padding-top:10px;padding-bottom:10px;align-items:flex-start}`.
- `.filter-bar.docked .filter-row-search{margin-bottom:0}` in compact state; `margin-bottom:var(--space-2)` only when `.search-focused` (controls row is about to appear).

**Logo and toggle top-alignment on search expand**
- When the nav expands due to search focus, `align-items:flex-start` is used (not `center`). Logo and toggle pin to the top of the expanded nav. The search input and controls grow downward below them.

**Dark mode card contrast**
- `--paper-warm` bumped from `#141414` to `#2D2D2D` in both dark mode blocks (`prefers-color-scheme:dark` and `[data-theme="dark"]` in `css/shared.css`).
- `--paper-deep` bumped from `#1E1E1E` to `#383838`. Maintains the three-level paper hierarchy.
- `--paper-white` (used for card hover and some input backgrounds) updated to match `--paper-warm` in both dark blocks.
- `home.css`: added dark-mode card background overrides that stack a `linear-gradient(rgba(255,255,255,0.06),rgba(255,255,255,0.06))` white boost layer between the disc tint and the paper-warm base. Stack per card: disc tint (top), white boost (6% opacity), paper-warm (base). Effect: discipline cards read as distinct lifted surfaces in dark mode, with a tinted glow from the disc color above.

**Files changed**
- `library-v58/index.html` (inline CSS: filter spacer HTML, sticky bar justify/position, plate code color, ALL CAPS rules, Show All button, filter-bar padding/margin, scrolled logo, theme toggle order, nav scroll height, search-focused expansion, search row margin).
- `library-v58/css/shared.css` (ALL CAPS rules, dark mode paper token bumps in both dark blocks).
- `library-v58/css/home.css` (ALL CAPS rules, Show All/Fewer button, dark mode card backgrounds with white boost).
- `library-v58/css/topic.css` (ALL CAPS rule on `.at-a-glance-title span`).
- `library-v58/about.html`, `agents.html`, `request-topic.html` (ALL CAPS rules on label elements).

---

## 2026-04-27, Phase D.2 (v58) — Filter-bar pushed down, frame width matches content area, Layout 2 grouping, no-split groups

Initial Phase D.2 pass added an 85% centered sub-container around the controls. After live testing, that was rejected (inner-narrower-than-frame felt fussy and the parchment frame was wider than the rest of the site). Replaced with: drop the sub-container, drop `.container` from `.filter-bar`, give the bar its own `max-width` matching the inner content area of `.container` so the parchment frame aligns with disc-plates and topic cards. Other Layout 2 + no-split decisions from the initial pass are kept.

**Filter-bar pushed down so it visually belongs to the section below**
- `.filter-bar` gets `margin-top: var(--space-10)` (40px desktop, `var(--space-6)` 24px mobile) and `margin-bottom: var(--space-2)` (8px). Previously zero margins, the bar was visually attached to the nav-band illustrations above. New margins move it closer to the topic library below, so the parchment block reads as the lead-in to the grid, not as a footer to the illustrations.

**Frame width matches content area (NOT .container max-width)**
- `.container` class removed from the `.filter-bar` element. With `.container`, the parchment background extended to the `.container` max-width (1140px), while disc-plates and topic cards only span the inner content area (1140 minus 80px of padding = 1060px). The frame looked wider than the rest of the site.
- New rule: `.filter-bar{max-width:calc(var(--max-width) - 80px);margin:var(--space-10) auto var(--space-2) auto}`. Frame is now 1060px max, centered. Aligns horizontally with disc-plates and topic cards.
- Mobile (≤768px): `.filter-bar{max-width:calc(100% - 32px);margin-top:var(--space-6)}`, gives 16px screen-edge margin (the same margin `.container` used to provide on mobile via padding).
- Docked override: `.filter-bar.docked{max-width:none}` added so the content-area constraint doesn't carry into the nav (the docked bar fills available nav space via `flex:1`).

**Layout 2 grouping (filters on row A, display on row B)**
- Row A holds disc-pills (left), secondary filter chips (Cross-disciplinary / NN/g / Bookmarked, also left right after disc-pills), flex-spacer, tier-links (right). All filtering controls live here.
- Row B holds the sort group (left), flex-spacer, view-toggles (right). Display-only controls.
- Cleaner mental model: "what to show" on row A, "how to show it" on row B.

**No-split groups**
- Each control group has `flex-shrink: 0` and `flex-wrap: nowrap`, so it stays together as a unit. If a row can't fit a group, the whole group wraps to the next line, never splits mid-group.
- Applied to: `.discipline-toggles`, `.seg-group` (used for both sort and secondary filters), `.tier-links`, `.view-toggles`. (`.discipline-toggles` and `.view-toggles` already had `flex-shrink:0` from earlier; the `flex-wrap:nowrap` is the new piece.)

**Sub-container removed (rejected in live testing)**
- The `.filter-row-controls-wrap` element and its CSS rules (desktop max-width, docked override, mobile max-width) are gone. The two `.filter-row-controls` blocks are direct children of `.filter-bar` again.

**Files changed**
- `library-v58/index.html` (CSS for `.filter-bar` width / margins / docked override, `.filter-row-controls-wrap` rule removed, mobile rule on `.filter-bar` max-width, no-split additions on the four group selectors; HTML reorder per Layout 2 and removed the wrapper `<div class="filter-row-controls-wrap">`; removed `container` class from `<div class="filter-bar">`).

---

## 2026-04-27, Phase D.1 (v58) — Tier-filter right-aligned, parchment frame around the whole filter complex

Two homepage tweaks. Confirmed in chat (1B for the filter row split, A for the parchment color, scope corrected to "whole filter complex" after a first pass that wrapped only the search row).

**Filter controls split into two sub-rows (1B)**
- Old: a single `.filter-row-controls` row held disc-pills, sep, tier-links, sep, sort, flex-spacer, secondary filters, view-toggles. Tier-links sat squashed in the middle, no breathing room from the disc-pills.
- New: two `.filter-row-controls` blocks stacked. Row 1, disc-pills (left), `<span style="flex:1">` spacer, tier-links (right). Row 2, sort group (left), `<span style="flex:1">` spacer, secondary filters (Cross-disciplinary / NN/g / Bookmarked) + view-toggles (right).
- The two `controls-sep` separator spans between disc-pills/tier-links and tier-links/sort are removed (rows are spatially separated now). The `.controls-sep` CSS rule is kept (orphan, used to hide separators in mobile and docked-focused; harmless).
- New CSS rule: `.filter-row-controls + .filter-row-controls{margin-top:var(--space-2)}` for the small gap between the two rows.
- Docked-focused state still works without changes: the existing `.filter-bar.docked:has(.search-focused) .filter-row-controls .seg-group, .view-toggles{display:none}` rule hides every element of row 2, so when the user types in the docked nav input, only row 1 (disc + tier filters) shows. Same behavior as before, just spread across two rows.
- Tooltip text on tier-links updated, em-dashes replaced with commas (style preference).

**Parchment frame around the whole filter complex (option A)**
- The frame applies to `.filter-bar` itself, not just the search row. It wraps the search input, suggested pills, hint, disc-pills, tier-links, sort, secondary filters (Cross-disciplinary / NN/g / Bookmarked) and view-toggles as one block.
- `.filter-bar` gets `background: var(--paper-parchment)`, `padding: var(--space-4)`, `border-radius: var(--radius-xs)`. No border. Removed the prior `padding-top:10px;padding-bottom:10px` baseline; the new symmetric padding is the frame.
- Two new color tokens added to `css/shared.css` (light + dark mode and `[data-theme="dark"]`): `--paper-parchment: #FAF3E0` (light) / `#1A1611` (dark) for the frame; `--paper-parchment-deep: #ECE5CE` / `#221E15` for nested surfaces inside the frame.
- `.search-input-wrap` background switches from `--paper-warm` to `--paper-white`. The input reads as a white card on the parchment frame.
- `.filter-btn` (Cross-disciplinary / NN/g / Bookmarked) bg switches from `--paper-warm` to `--paper-parchment-deep` so the chips stay legible against the new frame instead of disappearing into a same-tone grey.
- `.search-pills-wrap::after` gradient fades into `--paper-parchment` (was `--paper`) to match the frame color along the right edge of the suggested-pills strip.
- Docked override: `.filter-bar.docked` already had `background:transparent;padding:0`, added `border-radius:0` so the frame fully strips off when the bar reparents into the nav. The docked nav stays neutral, no parchment leak.
- Mobile (max-width 768px): frame padding tightens to `var(--space-3) var(--space-3)` so the input keeps room. Replaces the earlier mobile override that targeted `.filter-row-search`.
- The `.filter-row-search` row no longer has its own frame, just `margin-bottom:10px` to space the search row from the controls rows below.

**Files changed**
- `library-v58/css/shared.css` (two new tokens in light mode block, both dark mode blocks).
- `library-v58/index.html` (CSS for `.filter-bar` + `.filter-bar.docked` + `.filter-row-search` + `.search-input-wrap` + `.search-pills-wrap::after` + `.filter-btn` + `.filter-row-controls + .filter-row-controls`, mobile padding rule on `.filter-bar`, HTML restructure of the controls block, removed two `controls-sep` spans).

**Note on path references in older entries**
The entries below this one mention `library-v57/index.html`. Those changes were made in v57 originally, then carried into v58 when the folder was duplicated. The paths in older entries are kept as-is for historical accuracy.

---

## 2026-04-27, Phase C.1 — Anchor polish, compact-view tightening, tier-filter bug fix, q-tiles toggle as button

Four small follow-ups after Phase C live testing. Confirmed in chat (1A, 2C, 3 batch, 4i).

**Anchor tag moves to the top-left as an eyebrow pill (1A)**
- The `.anchor-tag` was absolute-positioned at top-right, overlapping the bookmark hover icon.
- New layout: `applyAnchorMarking()` wraps the existing `.topic-number` in a `<div class="anchor-eyebrow">` flex row and prepends a discipline-colored pill `<span class="anchor-tag">Anchor</span>` to it. Pill uses font-mono, 11px bold, `--ls-widest`, white text on `--teal / --rust / --navy / --plum` background, `--radius-pill`. The topic-number's bottom margin is folded into the row's margin so the rest of the card layout is unchanged.
- Old absolute-positioning rules removed. Bookmark icon stays where it was (top-right) and never collides with the eyebrow now.

**Compact view stops dialing the anchor back (2C)**
- The three compact-view rules that shrunk the anchor's `h3` to `--fs-body-lg`, dropped its description to 15px, and hid the blurb are gone.
- New compact-view anchor rules: `padding:24px 24px 24px 28px`, `min-height:140px`, `h3` at `--fs-h3` (22px), `topic-desc` at `--fs-micro` with `display:block` and `-webkit-line-clamp: unset` so the full description shows, `anchor-blurb` stays visible.
- Net: the anchor reads as the editorial gesture it's meant to be in the default view, not a slightly-larger card. The mockup-vs-production gap on the 2-wide variant is closed.
- Regular cards in compact view bumped from `h3 font-size:15px` to `16px`. Small breathing change that lifts the entire grid without un-doing compact density.

**Tier filter now works in disc-mode (3, bug fix)**
- Symptom: clicking T1 / T2 / T3 / T4 under sort=Discipline did nothing, results stayed mixed-tier. Worked correctly under sort=Tier.
- Root cause: the tier filter was implemented at the GROUP level (hide entire `.tier-group` whose `dataset.tier` doesn't match), only effective in tier-mode. The per-card filter loop never checked `activeTier`, so in disc-mode (where cards live inside `.disc-group` containers) nothing was hiding tier-mismatched cards.
- Fix: added a card-level tier check inside the per-card pass in `applyFilters()` (`ok = getCardTier(card) === activeTier.replace('tier-','')`). The check runs in both modes. Tier-group hiding in tier-mode still works (now redundant with the card-level hide, but harmless and keeps the visual ordering of empty-tier collapse).
- Net: tier link selection now drives the grid in disc-mode too, with the same per-section visibility logic that handles disc filters.

**Question-tiles toggle now reads as a button (4i)**
- `.question-tiles-toggle` was a borderless uppercase link with a small chevron, easy to miss between the recency line and the nav-band illustrations.
- New treatment: paper-warm background, `--ink-hairline` border, `--radius-pill`, padding `8px 14px`, larger chevron at `--fs-body`, hover bumps to `--paper-deep` background and `--ink-light` border. Same markup, same `toggleQuestionTiles()` behavior, just visible as an action.
- Role unchanged. The nav-band illustrations stay navigators (Phase B.4.1 lock unchanged).
- Follow-up: `.question-tiles-grid` got `margin-top: var(--space-5)` so the expanded tile grid no longer sits flush against the button. Collapsed state still hides via `display:none`, so the margin only renders when open.

**Files changed**
- `library-v57/index.html` (anchor CSS cluster rewritten, `applyAnchorMarking()` updated, `applyFilters()` per-card tier check, compact-view tweaks, `.question-tiles-toggle` re-skin).

---

## 2026-04-27, Phase C — Per-discipline anchor cards (Variant A, 2-col span, pinned to top)

Phase C ships in v57 from the editorial-polish track. One anchor topic per discipline, rendered as a 2-column-wide card pinned to the top of its discipline subgroup. Picks selected together (chat exchange), Variant A confirmed via the `_mockups/anchor-cards-variants.html` round.

**Anchors (one per discipline, hardcoded in `index.html` JS as `ANCHOR_BY_DISC`)**
- UX, `topics/usability.html` (Usability: Principles, Patterns, and Practice)
- PM, `topics/problem-framing.html` (Problem Framing & Opportunity Sizing)
- MK, `topics/positioning-messaging.html` (Positioning & Messaging)
- CS, `topics/content-strategy-foundations.html` (Content Strategy Foundations)

**Blurb copy (drafts, edit freely in the `ANCHOR_BY_DISC` object)**
- UX: "The question UX work keeps coming back to. Heuristics, patterns, and evaluation methods, applicable to any product."
- PM: "Where every product decision starts. Frame the problem before the team builds, size the opportunity before they prioritize."
- MK: "The work most marketing comes back to. Define who you're for, how you're different, and how to say it."
- CS: "The shape of the field. Why content is a system, how to plan it, how to govern it across channels and time."

**HTML / DOM**
- No markup changes to `.topic-card` source rows. Anchor flag is applied at runtime by `applyAnchorMarking()` (looks up the four cards by `href`, adds the `.anchor-card` class, injects `<span class="anchor-tag">Anchor</span>` and `<div class="anchor-blurb">,,,</div>`).
- Idempotent. Re-runnable. The class and child elements persist across the reparenting that `applyViewMode()` performs on view swap, so the anchor stays anchor in both disc-mode and tier-mode without retagging.
- Called once on init, just before the first `applyFilters()`.

**CSS (inline `<style>` block in `index.html`)**
- New rule cluster guarded by `.topic-card.anchor-card`. Highlights:
  - `grid-column: span 2`, anchor takes 2 of 3 columns in compact view, full row of 2 in full view.
  - Tier badge hidden on anchors. `.anchor-tag` sits in the top-right slot, font-mono nano size, discipline-colored (`teal / rust / navy / plum`).
  - `h3` bumped from `--fs-body-lg` to `--fs-h3` (compact-view scales it back to `--fs-body-lg`, full-view scales it up to `--fs-h2`).
  - `.anchor-blurb` shows under a hairline divider, `--fs-micro` size, `--ink-soft` color, max-width 520px. Hidden in compact view to keep card density.
- Mobile (max-width 768px): `grid-column: auto` so anchors take the natural 1-col slot. Title bumps stay, blurb shrinks to 14px.
- All values from existing tokens, no hardcoded hex, no off-scale sizes.

**JS, `applyViewMode(mode)`**
- Disc branch: after sorting `discCards` by topic-number, scan for `.anchor-card` and `unshift` it to position 0. Tier-divider insertion that follows still works correctly (the anchor is T1, the divider for "Tier 1" appears immediately before it as the first divider in the section).
- Tier branch: split `tierCards` into per-discipline buckets, pin each disc's anchor to position 0 of its bucket, then re-flatten in disc-order honoring `sortAsc`. Disc-divider insertion runs against the flattened list as before. Net effect: in T1 each disc-divider is followed by its anchor, T2/T3/T4 are unchanged because all four anchors live in T1.

**JS, `applyCardCorners()`**
- Rewritten to compute slot positions per card. Anchor cards reserve 2 slots (`Math.min(2, cols)`), normal cards reserve 1. New `hasAt(r, c)` walks the position list to detect occupancy in either column of a span-2 anchor.
- Corner formula generalizes to `leftCol / rightCol` per card so a 1-col card behaves identically to before, while the anchor's TR/BR check `rightCol+1` instead of `col+1`. Hairlines tile cleanly.

**JS, `applyPreview()` (Phase B.4 half-row gradient)**
- `rowsTotal` was `Math.ceil(visibleCount / cols)`. New: count slots, not cards. Anchor counts as 2 slots. So a section with 1 anchor + 5 normal cards in a 3-col grid is 7 slots = 3 rows (preview kicks in), where the old math saw 6 cards = 2 rows (preview suppressed). Visual outcome now matches reality.
- `cardH` still measured from `visibleCards[0]`. The first visible card is the anchor, which is slightly taller than a normal card because of the blurb. The 2.5-row clip computed against the anchor's height lands closer to "anchor row + 1 normal row + half of next row" which reads correctly.

**Behavior on filter / search (E1)**
- Anchor styling persists when the topic is in results. `.anchor-card` class survives because nothing strips it. The card is still that topic, the styling is part of its identity in the section.

**Position rule (F1)**
- Anchor always pinned to position 0 of its discipline subgroup, regardless of internal sort order or sort direction.

**Files changed**
- `library-v57/index.html` (anchor CSS cluster, `ANCHOR_BY_DISC`, `applyAnchorMarking`, `applyViewMode` both branches, `applyCardCorners`, `applyPreview`, init call).
- `library-v57/_mockups/anchor-cards-variants.html` (round-table mockup that drove the choice, kept for reference).

**Open follow-ups**
- Anchor blurb copy is editable in `ANCHOR_BY_DISC`. Tighten any line that reads off.
- If anchors should rotate later, the same data structure can take a list per discipline, but per Malgo's call the v57 model is static.

---

## 2026-04-27, Phase B.4.1 — Post-merge polish (nav-band up, NB logo, hero padding)

Three small adjustments after the B.4 merge.

**Nav-band moved back above the filter-bar.** The four illustrations (disc variant, tier variant) shipped INSIDE `.topics-section` in Phase B.4. After live testing, they move up to sit above the filter-bar, where the old disc-band lived. Their role does not change, they are still section-navigators, smooth-scroll on click, full opacity, no active/inactive state. The discipline-filter role stays with the discipline-toggle pills inside `.filter-bar`. The Phase B.4 lock "do not put illustrations back above the search bar" is revised: position is no longer the constraint, role-distinction is.
- HTML: nav-band markup moved out of `<main class="topics-section">` to sit between the question-tiles section and the filter-bar.
- CSS visibility selector changed from `.topics-section[data-view-mode="..."]` to `body[data-view-mode="..."]` so the disc / tier variant still swaps with the sort mode while the band is outside the topic-section.
- JS: `applyFilters()` now mirrors `currentSort` onto `document.body.setAttribute('data-view-mode', currentSort)` in addition to setting it on `.topics-section`. Body-mirror is what drives the new CSS selector.
- `nav-band` margin retuned for the new placement (`margin: var(--space-4) auto var(--space-5)`, padding `0 40px`) so it sits on the same baseline as the filter-bar below.

**NB logo stays on one line in all scroll states.**
- Removed `.home-nav.scrolled .nav-title .title-break{display:inline}` and `.home-nav.scrolled .nav-title .title-space{display:none}`.
- Result: "Noir Book" reads as one line at rest AND when the nav docks the search row on scroll. The nav still grows vertically when scrolled (the docked search adds height), but the title piece no longer contributes to the growth.

**Hero banner desktop padding bumped.**
- `.hero-banner-content` inline `padding-top:56px;padding-bottom:20px` removed.
- Replaced with CSS rule on `.hero-banner-content`, desktop default `padding-top:var(--space-16);padding-bottom:var(--space-16)` (64px each side).
- Mobile media query (`max-width:768px`) keeps tighter values, `padding-top:var(--space-12)` (48px) and `padding-bottom:var(--space-5)` (20px), close to the previous mobile feel.
- Net: hero now has more breathing room top and bottom on desktop. Mobile unchanged.

**DECISIONS.md** updated. Phase B.4 role-swap rule revised to remove the position lock ("do not put illustrations back above search") and clarify the role-distinction (navigators vs filters) is the constraint going forward.

---

## 2026-04-27, Phase B.4 — Role swap, sticky compact section header, half-row gradient preview

Three changes shipped together after a prototype round (A, B, C, C2). The homepage now leads with text-only filters, the illustrations have moved into the topic-section as section-navigators, and the topic library opens compact (2.5 rows per section) with a gradient affordance to expand.

**Role swap (was Proto B)**
- `<div class="disc-band">` removed from above the filter-bar. The four disc illustrations are gone from that position.
- The CSS rules `.filter-bar .discipline-toggles{display:none}` and the sibling `.controls-sep` rule are removed. The four discipline-toggle pills (UX Design / Product / Marketing / Content) are now visible inside `.filter-bar` in their original location, below the search input. Pills still use `toggleDisc()` so they inherit the Phase A.7 cycling rule (additive, isolate, escape hatch).
- New `<nav class="nav-band">` blocks at the top of `.topics-section`, two variants:
  - `data-band="disc"`, four disc illustrations (`disc-{ux,pm,mk,cs}.webp`), labels: UX Design, Product, Marketing, Content. Active when sort=disc.
  - `data-band="tier"`, four tier illustrations (`tier-plate-{1,2,3,4}.webp`), labels: Tier 1 Core Toolkit, Tier 2 Specialized, Tier 3 Situational, Tier 4 Reference. Active when sort=tier.
- Visibility driven by `data-view-mode` on `.topics-section`. The inactive band hides via CSS, the active band shows.
- Click handler `onNavBandClick(btn)` reads `data-target` and smooth-scrolls to the matching `#disc-*` or `#tier-*` element. Full opacity always, no active/inactive state.
- Orphan `.disc-band` / `.disc-panel` CSS swept from the inline style block (no markup uses them after the move).

**Sticky compact section header (was Proto A)**
- New element `<div class="section-sticky-bar">` placed at the top of body, before the nav. Fixed-positioned, sits below the live nav (reactive top, see below). Hidden by default, slides in when a plate scrolls past.
- Bar shows the current section's code (e.g., "Tier 1" or "UX Design") and name (e.g., "Core Toolkit" or "Understanding people, designing flows, proving the work"). Clicking the bar scrolls back to the top of the current section. "↑ Top" button on the right scrolls to page top.
- In disc-mode the bar's name color picks up the discipline color via `data-discipline` (teal/rust/navy/plum).
- JS reads `nav.getBoundingClientRect().bottom` on every scroll tick and sets `bar.style.top` to match. The bar tracks the live nav height so it stays flush below it even when `.home-nav.scrolled` expands the nav (search docking from Phase A.5).
- Identifies the current section by walking visible `.disc-group` or `.tier-group` elements (whichever matches the active view mode) and finding the one whose top is above the threshold and bottom is below.

**Half-row gradient preview (was Proto C2)**
- Each section's `.topic-grid` is clipped to roughly 2.5 rows by default. The bottom half-row is overlaid by a gradient that fades into the section's background (paper-warm in tier-groups, paper in disc-groups), with "SHOW ALL N TOPICS ↓" centered at the bottom of the gradient.
- The gradient overlay is a `<button>` (not a pseudo-element). The whole gradient area is one click target, cards underneath are inert during preview. Click expands the section.
- When expanded: grid takes its full height, the overlay is hidden, a centered "SHOW FEWER ↑" button appears below the grid (sized to its content, not full-width). Clicking it re-clips and smooth-scrolls back to the section header so the user keeps context.
- State machine, `expandedGroups[id]` is sticky:
  - Default: collapsed.
  - User clicks "Show all": that section becomes expanded for this session.
  - Filter / search applied: preview disables across all sections (full grids, no overlay, no fewer button).
  - Filter / search cleared: preview re-enables. Sections the user manually expanded stay expanded. Sections that were never manually opened re-clip.
- Preview disables (and never collapses) when any of these are true: search phrase active, tier filter not "all", connected/bookmarked/NN-G filter on, single discipline isolated.
- Sections with 2 rows or fewer don't get the preview treatment (nothing to clip past 2.5 rows).
- Implementation hooks `applyFilters()` via a wrapper that calls `applyPreview()` on the next animation frame, so cards' visibility from filter changes is settled before height measurements.

**Phase A.7 toast taxonomy already in effect**, applies to the now-visible disc-toggle pills:
- "All disciplines" when state lands at 4 (escape hatch or grow-to-4).
- "[Name] only" on isolate.
- "[Name] added" on additive grow (state 2 or 3).

**Net editorial effect**
The homepage top reads: nav, hero, recency, question-tiles toggle, disc-toggle pills (filters), search, tier-links, sort/view toggles. Then `.topics-section`: nav-band illustrations (navigators), grid groups (clipped to 2.5 rows by default with gradient affordance, sticky compact header tracks scroll position). The four illustrations now frame the library entry, not the search.

---

## 2026-04-27, Phase B.3.1 + Phase A.7 — Search-restore guard hoist, disc-band cycling rule

Two small fixes ahead of the prototype round (A/B/C alternatives to default-collapsed sections, see GTM-PLAN editorial track).

**Phase B.3.1, search-empty state-restore bug fix**
- Symptom: type a phrase, press Enter, click into a result, navigate back. The chip was restored from `sessionStorage` (`bb_filters.phrases`) but the entire page below the filter-bar rendered blank: no "TOPICS MATCHING" header, no result card, no group containers visible.
- Root cause: `applyViewMode()` was the only setter for `data-view-mode` on `.topics-section`. The CSS guard `.topics-section:not([data-view-mode]){visibility:hidden}` (intended to prevent FOUC during initial parse) stayed in effect because `applyViewMode()` is only reached from the non-search branch of `applyFilters()`. When init triggered the search branch (restored phrases), `applyViewMode()` never ran, so the guard never released, so `visibility:hidden` persisted.
- Fix: hoisted the `setAttribute('data-view-mode', currentSort)` line out of `applyViewMode()` and into the top of `applyFilters()`, before the `isSearching` branch. Both branches now release the guard. `applyViewMode()` no longer touches the attribute (comment left in place noting the hoist).
- Net change: 4 lines added in `applyFilters`, 1 line removed in `applyViewMode`. No new state, no new CSS.

**Phase A.7, disc-band cycling rule with escape hatch**
- Replaces the v55-style single-select-with-reset behavior (Phase A.3 / E) with an additive-with-isolate cycle.
- Rules:
  - Default: all 4 disciplines active.
  - Click on inactive image: add it. State count grows 1 -> 2 -> 3 -> 4.
  - Click on active image while other disciplines are also active: isolate to that one (state -> 1).
  - Click on the lone active image (escape hatch): reset to all 4.
  - Click any image while at 4 active: falls under "active, others also active", isolates to that one.
- Toast taxonomy:
  - Reset to all (escape hatch or 3 -> 4 grow): "All disciplines"
  - Isolate to one: "[Name] only"
  - Additive on the way up (state 2 or 3): "[Name] added"
- `toggleDisc()` rewritten in place. No CSS, no markup change. The `.disc-toggle.active` class still drives the visual state.

---

## 2026-04-26, Phase B.3 — Dual view structure (disc-primary + tier-primary), tier plates, recovered v55 dividers

Replaces mini-plates entirely with a dual-view architecture. Each sort mode now has its own page structure with a single big plate per section and v55-style hairline+label dividers grouping cards within.

**View architecture**
- Two parallel section sets in DOM:
  - 4 `.tier-group` sections (existing, modified) each with a `.tier-plate` as the section header.
  - 4 new `.disc-group` sections (`#disc-ux`, `#disc-pm`, `#disc-mk`, `#disc-cs`) each with a `.disc-plate` as the section header.
- `data-view-mode` attribute on `.topics-section` controls which set is visible. CSS hides the inactive set: `[data-view-mode="disc"] .tier-group { display:none }` and vice versa.
- Default mode: `disc` (matches default `currentSort = 'disc'`). Set by JS on init.
- While `data-view-mode` is unset (during initial parse before JS runs), the entire section is `visibility:hidden`. Avoids flash of wrong-content.

**Disc-mode (sort=disc)**
- Each `.disc-group` has its `.disc-plate` as the section header (collapsible-header). Inside the body's `.topic-grid`, all cards of that discipline are sorted by topic ID.
- Tier transitions inside each disc section are marked with `.tier-divider` (v55-style hairline + uppercase label, e.g., "TIER 2, SPECIALIZED").

**Tier-mode (sort=tier)**
- Each `.tier-group` has its `.tier-plate` as the section header. Inside the body's `.topic-grid`, all cards of that tier are sorted by discipline order.
- Discipline transitions inside each tier section are marked with `.disc-divider` (v55-style hairline + uppercase discipline label, colored per discipline).

**Plates**
- `.disc-plate` and `.tier-plate` share the same skeleton (CSS rules combined): 280px illustration column on the left, body column on the right with code, name (h3), manifesto, and a chevron in the top-right that rotates -90° when collapsed. Click anywhere on the plate triggers `toggleSection`.
- Disc plates use the existing `disc-plate-{ux,pm,mk,cs}.webp` assets. Discipline name colored per `.ux-plate / .pm-plate / .mk-plate / .cs-plate`.
- Tier plates use new placeholder webp assets (`tier-plate-{1,2,3,4}.webp`). Solid grey paper-deep with tier label, ~8KB each. Real Midjourney renders pending (4 prompts added to `noir book illustrations/noirbook-prompts-master.md`).

**Dividers (recovered v55 idiom)**
- `.tier-divider` and `.disc-divider` share a common skeleton. Hairline + label + hairline. Label is uppercase, font-weight bold, fs-nano, ls-widest.
- Disc-divider label is colored per `data-discipline` (teal/rust/navy/plum). Tier-divider label is ink-medium (no per-tier color, since tiers don't have categorical colors).
- Inserted programmatically by JS in `applyViewMode()`. Hidden via `hideEmptyDividers()` if their following sub-group has no visible cards (handles filter interactions).

**JS — new functions**
- `applyViewMode(mode)` — gathers all cards (excluding search-result grids), reparents them into the appropriate group (disc or tier), inserts dividers between sub-groups, sets `data-view-mode`.
- `placeIntoDisciplineGroups(cards)` and `placeIntoTierGroups(cards)` — inlined into `applyViewMode`.
- `getCardTier(card)` — parses tier from topic-number ("UX.2.05" → "2").
- `makeTierDivider(tier)` and `makeDiscDivider(disc)` — element factories.
- `hideEmptyDividers(grid)` — walks the grid, hides any divider whose sub-group has no visible cards.

**JS — modified functions**
- `applySortToCards()` removed. Replaced by `applyViewMode()`.
- `toggleSort(mode, btn)` — when sort=disc, also reorders disc-group sections by discipline order (mirrors the existing tier-group reorder logic for sort=tier).
- `applyFilters()` — search-restore logic simplified (cards now eviction-routed to topics-section, reparented by `applyViewMode`); non-search branch calls `applyViewMode(currentSort)`, then iterates the active view's groups (tier or disc) for visibility, then runs `hideEmptyDividers`.
- `applyCardCorners()` — group-boundary detector now matches `.tier-divider` and `.disc-divider` (instead of the removed `.disc-separator`/`.disc-plate` inside grids).

**Removed**
- All 12 `.disc-plate-mini` markup and CSS.
- All 4 `.disc-plate` markup from inside tier-1's grid (they now live as the `.disc-plate` headers of the new disc-groups).
- All 4 `.tier-header` markup (replaced by `.tier-plate` as the collapsible-header).
- Orphan `.tier-group.collapsed .tier-header` CSS rules.

**Assets**
- 4 placeholder tier images created via ImageMagick: `tier-plate-{1,2,3,4}.webp` (paper-deep `#EBEBEB` background with bold uppercase tier name centered, 1600x1200, ~7-8KB each).
- 4 Midjourney prompts added to `noir book illustrations/noirbook-prompts-master.md` under a new "Tier images" section. Subjects: ruler+pencil (T1), calipers+magnifier (T2), folded map+compass (T3), book stack+bookmark (T4). All near-black palette on bone paper with ochre accent (no categorical tier color, distinction comes from iconography).
- Prompt log table updated with all new image entries.

**Tier manifestos (drafted, edit freely in `index.html` under `tier-plate-manifesto`)**
- Tier 1: "Methods you reach for on every project, regardless of context. The foundations."
- Tier 2: "Practices to deepen your toolkit when the basics aren't enough."
- Tier 3: "Methods to open when the situation calls for it. Not for every project."
- Tier 4: "Foundations, frameworks, and career material. Reach for these to think across topics."

**Behavior preserved**
- Disc-band single-select toggle (Phase A.3 / E)
- Question-tiles collapse (A.3 / D1)
- Discipline-pills hidden in filter-bar (A.3 / C1)
- Search docking, recency in banner, nav logo hit area, etc. — all from earlier phases.

**Known follow-ups**
- Replace 4 placeholder tier images with real Midjourney renders.
- Disc-group containers don't currently have `home.css` styling (no bg/padding); tier-groups inherit the existing `.tier-group{padding:20px;background:var(--paper-warm)}`. May want to unify visually.
- The orphan `data-orig-tier` attribute setter in `applyFilters()` is now dead code (search restore no longer needs it). Cleanup in a future sweep.
- `.disc-plate-mini` CSS removed but `home.css` still has an orphan `.disc-separator{padding:8px 16px}` rule (no markup uses it). Cleanup in a future sweep.

---

## 2026-04-26, Phase A.6 + Phase B.2 — Nav layout fix, mini-plates for tier-2/3/4

Two parallel changes in one commit. Confirmed in chat (2-E for CTA, iii for nav layout, mini-plates for the tier disparity).

**Phase A.6 — Nav cleanup**
- HTML: CTA text shortened from "Suggest a topic or improvement" to "Suggest topic →".
- HTML: `<button class="theme-toggle home-theme-toggle">` moved from outside `.nav-inner` to inside `.nav-inner`, after the burger button. Now it flows in the flex layout instead of overlapping content.
- CSS removed: `.home-theme-toggle{position:absolute;right:20px;top:50%;transform:translateY(-50%);z-index:2}` and `.home-nav.scrolled .home-theme-toggle{top:12px;transform:none}`. Both were only needed because the toggle was absolute-positioned.
- CSS added: `.home-theme-toggle{flex-shrink:0;margin-left:var(--space-3)}` — sits inline with breathing room.
- CSS rule shifted: `@media(min-width:961px)` for hiding burger → `@media(min-width:1025px)`. Added new `@media(max-width:1024px)` block that hides `.home-nav-links` and shows `.home-nav .burger-btn`. Now nav-links and burger never overlap. Above 1024px = full nav-links visible. Below = burger only.
- CSS cleaned: removed `margin-right:60px` from the mobile burger rule, no longer needed since theme toggle is inline.

Net: nav-links and theme toggle and burger no longer overlap at any width. CTA fits comfortably in the visible nav at desktop widths.

**Phase B.2 — Mini-plates for tier-2/3/4**
- New CSS rule `.disc-plate.disc-plate-mini` overrides the big plate dimensions: `grid-template-columns:90px 1fr; min-height:80px; margin:var(--space-5) 0 var(--space-2)`. Body padding compresses to `var(--space-3) var(--space-5)`. Name shrinks from `--fs-h2` to `--fs-h4`. Mobile rule collapses to 60px thumbnail and 60px height.
- HTML: 12 hairline `.disc-separator` rows in tier-2/3/4 replaced with mini-plate markup. Each mini-plate has the thumbnail image (same webp asset as the matching tier-1 big plate) on the left and just `<h3 class="disc-plate-name">[Discipline name]</h3>` on the right. No code label, no manifesto, no tagline. The discipline name picks up the disc color via the existing `.ux-plate / .pm-plate / .mk-plate / .cs-plate` rules.
- CSS removed: orphan `.disc-separator` rules (no markup uses them anymore). The base `.disc-plate` rule and the new `.disc-plate-mini` override handle everything.
- JS unchanged: the existing `.disc-separator, .disc-plate` querySelector still works (separator side never matches now, harmless).

Net: tier-1 still reads as four chapter openings. Tier-2/3/4 now have visual continuity with tier-1 (same illustration assets, same color treatment, same shape) but at a quieter weight that doesn't compete with the openings.

**Phase tracker added to GTM-PLAN.md**
A new "Homepage Editorial Polish" section at the bottom of `/GTM-PLAN.md` lists Phases A through E, sub-phase status, and the tracking convention (CHANGELOG per phase, DECISIONS for locked rules). The editorial-polish track is now visible alongside the existing Phases 0-7.

---

## 2026-04-26, Phase B — Editorial discipline plates in tier-1 (A3 + B1 + C2 + D1)

Replaces the four hairline `.disc-separator` rows in tier-1 with full chapter-opener plates. Tier-2/3/4 keep the existing `.disc-separator` lines as-is. Builds the editorial layer Malgo asked for, so the homepage stops feeling like 127 identical cards.

**Assets**
- 4 illustrations copied from `noir book illustrations/prompted/` (UX, PM, MK, CS) into `library-v56/img/`. Converted from PNG (~2.5MB each) to WebP at quality 80, max width 1600px (~210-265KB each). Source PNGs deleted after conversion.
- Final filenames: `disc-plate-ux.webp`, `disc-plate-pm.webp`, `disc-plate-mk.webp`, `disc-plate-cs.webp`.

**HTML**
- Tier-1 only: replaced 4 `<div class="disc-separator">` rows with `<div class="disc-plate">` markup. New structure per plate: `.disc-plate-image` (background image, 280px wide on desktop) on the left, `.disc-plate-body` (code label + name + manifesto) on the right. `data-discipline` attribute preserved on the wrapper so JS sort/filter still keys off it.
- Tier-2/3/4 unchanged. Twelve `.disc-separator` rows remain as quieter chapter divisions in the deeper tiers.

**Manifesto copy (drafts, edit freely)**
- UX: "Methods for research, structure, interaction, and evaluation. From discovery questions to usability evidence."
- PM: "Strategy, discovery, prioritisation, and delivery. Frameworks for setting direction and measuring outcomes."
- MK: "Positioning, lifecycle, paid and organic. Practices for the channels that compound and the work that brings people in."
- CS: "Editorial systems, structure, governance, and craft. Methods for content that works across channels and time."

Names (the h3 line in each plate) read as taglines, not as discipline labels: "Understanding people, designing flows, proving the work" for UX, etc. The discipline label (UX Design, PM, MK, CS) sits above as a small uppercase code.

**CSS additions**
- `.disc-plate` — grid wrapper, 280px image column + flex body column, `var(--paper-warm)` background, `var(--ink-hairline)` border, `var(--radius-xs)` corners, `min-height:240px`. Spans full grid width via `grid-column:1/-1`. Margin uses `var(--space-6)` top, `var(--space-3)` bottom.
- `.disc-plate-image` — background-size:cover, background-position:center, no-repeat.
- `.disc-plate-body` — flex column, `var(--space-8)` padding, vertically centered content.
- `.disc-plate-code` — small uppercase nano label.
- `.disc-plate-name` — h2-sized display heading, discipline color (per .ux-plate / .pm-plate / .mk-plate / .cs-plate variants).
- `.disc-plate-manifesto` — body-lg, ink-soft, max-width 520px.
- Mobile (≤768px): grid collapses to single column, image becomes 160px tall band on top, body padding drops to space-5.
- All values use existing tokens. No hardcoded hex, no off-scale sizes.

**JS**
- `applyCardCorners()` (the function that decides which corners to round per discipline group) updated: the children-grouping loop now treats both `.disc-separator` and `.disc-plate` as group boundaries.
- The sort/re-insertion logic now queries `.disc-separator, .disc-plate` together. Same `data-discipline`-keyed map handles both element types.
- No new functions. No state added.

**Net effect**
Tier-1 reads like four short opening chapters. Each discipline gets a face, a tagline, and a one-line statement before its 8-10 cards. Tier-2/3/4 keep the lighter rhythm so the page doesn't shout four times in a row.

---

## 2026-04-26, Phase A.5 — Recency back in banner, nav logo click target enlarged, stale CSS swept

**Recency back inside the hero banner**
- `<div class="recency-strip container">` removed.
- `<p class="recency-signal" id="recencySignal">` placed back inside `.hero-banner-content`, after the subtitle line. Same position as pre-Phase-A.3.
- The `.recency-strip` CSS rule removed. The existing `.recency-signal` typography in `home.css` already styles the line correctly inside the hero, no change needed.
- JS `fetch('recent.json')` handler still finds `#recencySignal` by ID, so the date update behavior is unchanged.

**Nav logo (NB + Noir Book) click target enlarged**
- The `<a class="site-logo">` already wrapped both elements but felt small to hit. Added `padding:var(--space-2) var(--space-3)` and a compensating negative `margin-left:calc(-1 * var(--space-3))` so the visual position is unchanged but the clickable area is roughly 3x larger.
- Added a hover state: `background:var(--ink-a06)` with `border-radius:var(--radius-xs)` and a 0.15s transition. Now the area visually communicates "clickable" on hover, so the user knows where the hit zone is.
- Scoped to `.home-nav .site-logo` so subpage nav (topic pages) is unaffected.

**Stale CSS swept**
- Removed orphan `.search-band .search-box`, `.search-band .search-input-wrap`, and mobile `.search-band .search-input-wrap input` rules. Selectors swapped back to `.filter-bar` (their pre-Phase-A scope).
- Removed orphan `.question-tiles-heading` rule (no markup uses it since A.3 replaced the h2 with `.question-tiles-toggle`).
- No new IDs, no broken refs, no duplicate IDs detected.

---

## 2026-04-26, Phase A.4 — Search back below disc-band, question-tiles toggle bulletproofed

Two corrections on top of Phase A.3.

**Search returned to .filter-bar (below disc-band)**
- The `.hero-search-slot` wrapper and its filter-row-search were removed from the hero. Hero `padding-bottom` returned to its pre-A.3 value of 20px.
- The full `<div class="filter-row-search" id="filterRowSearch">` block was inserted back inside `<div class="filter-bar">`, before `.filter-row-controls`. All IDs preserved.
- Dock/undock JS simplified back to v55 model: the entire filter-bar (search + controls) reparents into the nav on scroll. No reparenting of individual rows. Scroll sentinel returned to `filter-bar.top vs nav.bottom` (was `filter-row-search.bottom vs nav.bottom` during A.3).
- The two `.hero-search-slot` CSS rules removed.
- Order on the page now reads: nav, hero, recency-strip, question-tiles toggle, disc-band, filter-bar (search + controls), grid.

**Question-tiles toggle hardened**
- `toggleQuestionTiles()` rewritten to set inline `style.display` in addition to toggling the `.collapsed` class. This guarantees the show/hide works regardless of any CSS specificity edge case. Added a `console.warn` if the grid or toggle element is missing, to help diagnose any remaining issue from the browser console.
- Read `isCollapsed` from BOTH the `.collapsed` class AND `style.display === 'none'`, so if state ever drifts the next click still corrects it.
- Behavior unchanged: click expands and re-shuffles the 8 tiles; click again collapses; chevron rotates via the existing `aria-expanded` CSS rule.

**Not changed**
Recency strip, question-tiles toggle markup, disc-band single-select logic, hidden discipline-toggle pills inside filter-bar — all from Phase A.3 stay as they are.

---

## 2026-04-26, Phase A.3 — Search inside hero, recency below banner, question tiles collapsed, disc-band single-select, discipline pills hidden

Reverts Phase A and Phase A.2. New layout decisions confirmed by Malgo (A1, B2, C1, D1, E in the chat exchange).

**Search lives inside the hero (A1)**
- `<section class="search-band">` removed.
- `<div class="hero-search-slot">` added inside `.hero-banner-content`, below the discipline-words subtitle. The full filter-row-search (input, hint, pills, dropdown) sits inside it. All IDs preserved.
- Hero `padding-bottom` raised from `20px` to `32px` to give the search room.

**Search docks into nav on scroll (B2)**
- `dockFilterBar()` now reparents `#filterRowSearch` from `.hero-search-slot` into `.filter-bar` (before `.filter-row-controls`), then docks the filter-bar into the nav. v55 model preserved.
- `undockFilterBar()` reverses: filter-bar back to flow, search row back to `.hero-search-slot`.
- Scroll listener trigger changed: dock now fires when `#filterRowSearch.bottom <= nav.bottom` (i.e., when the search row scrolls past the nav). Previously triggered when filter-bar's top reached nav. New trigger means the search docks into nav early, before the user passes question-tiles and disc-band, so the nav search is always available.
- Undock fires when the placeholder slot (where filter-bar would be in flow) returns below the nav.
- Auto-scroll on commit (`scrollToTopicsForSearch`) removed entirely. No forced page movement on search interaction.

**Recency moved below the banner**
- `<p class="recency-signal" id="recencySignal">` moved out of `.hero-banner-content` into a new `<div class="recency-strip container">` placed immediately after the hero.
- New `.recency-strip` CSS rule: `padding-top:var(--space-3);padding-bottom:0`. Reuses the existing `.recency-signal` typography from `home.css`.

**"Start with a question" collapsed by default (D1)**
- The h2 heading and inline shuffle button were replaced with `<button class="question-tiles-toggle">` that toggles the grid visibility in place.
- New CSS rules: `.question-tiles-toggle` (small uppercase link, chevron suffix), `.question-tiles-chevron` (rotates 180° when expanded), `.question-tiles-grid.collapsed{display:none}`.
- New JS function `toggleQuestionTiles()` flips the collapsed class and `aria-expanded` attribute. Re-runs `renderQuestionTiles()` on each expand so users see fresh prompts.
- Orphan rule `.question-tiles-heading` left in CSS for now (no markup uses it; harmless).

**Discipline-toggle pills hidden inside filter-bar (C1)**
- New CSS: `.filter-bar .discipline-toggles{display:none}` and `.filter-bar .discipline-toggles + .controls-sep{display:none}`.
- Markup left in place for easy revert; only CSS-hidden. The disc-band illustrations now carry the discipline-toggle role.

**Disc-band single-select-with-reset (E)**
- `toggleDisc()` rewritten. Single click on a panel = isolate that discipline (only one active). Re-clicking the lone active panel = reset to all four active. Clicking a different panel = isolate that one (others, including any previously isolated, deactivate).
- The old double-click logic and `lastDiscClick`/`discHintShown` variables removed. Toast feedback preserved (`"UX Design only"` / `"All disciplines"`).

**New CSS classes introduced (for reference)**
`.hero-search-slot`, `.recency-strip`, `.question-tiles-toggle`, `.question-tiles-chevron`, `.question-tiles-grid.collapsed`, plus the two `display:none` overrides for `.filter-bar .discipline-toggles` and its sibling `.controls-sep`. All built from existing tokens (`--space-*`, `--fs-*`, `--fw-*`, `--ls-*`, color tokens). No hardcoded hex, no off-scale sizes added.

---

## 2026-04-26 — Phase A and A.2 superseded (search-band + auto-scroll rejected)

Phases A and A.2 (entries below) are kept in this changelog as history but are scheduled to be reverted. The search-band placement above the hero, the auto-scroll on phrase commit, and the v55-style search reparenting on scroll all created clutter and broke the search bar's role of making the active search visible in context. Decision logged in `/DECISIONS.md` (Phase A Search-Band + Auto-Scroll Experiment, rejected).

Next: Phase A.3 will revert all of A and A.2, integrate the search input into the hero banner directly, move the recency signal below the banner, collapse "Start with a question" behind a small link, hide the discipline-toggle pills (replaced by the disc-band illustrations), and rework the disc-band to single-select-with-toggle behavior. To be implemented after layout details are confirmed.

---

## 2026-04-27, Phase A.2 — Restore docked nav search, add auto-scroll on commit, fix tokens

**Why**
Phase A landed the rich search at the top of the page but introduced two regressions: results invisible from the search-band position (grid is below hero/tiles/disc-band/filter-bar so user gets no visual feedback when committing a phrase), and no search input in the nav while scrolled (v55 had this; users expect it back). Also some hardcoded values slipped into Phase A's CSS that should have used tokens.

**Restored v55 nav-search docking**
- `dockFilterBar()` now reparents `#filterRowSearch` from `#searchBand` into `#filterBar` (inserted before `.filter-row-controls`) BEFORE docking. So when scrolled, the docked filter-bar in the nav holds search row + controls row, exactly like v55.
- `undockFilterBar()` reverses: moves `#filterRowSearch` back into `#searchBand` and undocks filter-bar.
- Placeholder height is measured BEFORE the search row is inserted, so it reflects the rest height (controls only) and the page doesn't jump.
- Restored CSS rules removed in Phase A: `.filter-bar.docked .filter-row-search`, `.search-hint` hidden, `.search-pills-wrap` hidden, `.filter-row-controls` hidden by default with `.search-focused` reveal for disc/tier only.

**Auto-scroll on phrase commit**
- New `scrollToTopicsForSearch()` smooth-scrolls page so the topics-section sits just below the nav. Triggers nav docking on the way down (so the search input ends up in the nav, with the grid filtering visible beneath).
- Called from `addPhrase()`, which fires on pill click (suggested searches), Enter key, and comma-commit. Skipped on mobile (≤768px) since the page is already short there.
- Guard: only scrolls if the target is meaningfully below current scroll position (>50px), so it doesn't fight the user when they're already in browse mode.

**Tokens fixed**
- `.search-band` now uses `var(--space-6)` and `var(--space-2)` for padding (was `24px` and `8px`), and `var(--z-back-to-top)` for z-index (was `90`).
- `.filter-bar`'s pre-existing `10px` paddings and `z-index:90` left as-is with a comment noting the scale has no 10px token, to match the established pattern in the rest of the file.

**Net result**
At rest: rich search bar at the top of the page (above hero), full chips, hint, pills, dropdown. Scrolled: search reparents into the nav alongside filter controls (v55 model). Phrase commit: page auto-scrolls so user sees results in the grid immediately, search input lands in the nav for follow-up edits.

---

## 2026-04-27, Phase A (1A) — Search bar moved to top of page

**Why**
Per locked decision in DECISIONS.md (Search Bar Position): the search bar must sit at the top of the page, not inside the filter-bar above the grid. The filter-bar was doing two unrelated jobs (search entry + filter toolbar) which forced an impossible placement compromise. Splitting them resolves the deadlock.

**HTML**
- New `<section class="search-band container" id="searchBand">` inserted between `</div>` (burger overlay) and `<!-- Hero -->`, holding the full search experience (input, chips, hint, pills, dropdown).
- `<div class="filter-row-search" id="filterRowSearch">` block removed from inside `<div class="filter-bar">` and moved into `.search-band`. All IDs preserved (`searchInput`, `filterRowSearch`, `searchInputWrap`, `searchPills`, `searchHint`, `searchClear`, `searchDropdown`, `searchPhrasePills`).
- Filter-bar now contains only `.filter-row-controls` (disc toggles, tier links, sort, secondary filters, view toggles).

**CSS**
- New `.search-band` rule: `padding-top:24px;padding-bottom:8px;background:var(--paper);position:relative;z-index:90`. Sits in normal page flow, full container width.
- New `.search-band .filter-row-search{margin-bottom:0}` to remove inherited bottom margin.
- Removed `.filter-bar.docked .filter-row-search`, `.filter-bar.docked .search-hint`, `.filter-bar.docked .search-pills-wrap`, `.filter-bar.docked .filter-row-controls` (display:none then revealed on focus), and the `.filter-bar.docked:has(.search-focused) .filter-row-controls` group. None of these apply now, since search no longer lives inside filter-bar.
- Updated stale selectors: `.filter-bar .search-box` to `.search-band .search-box`; mobile `.filter-bar .search-input-wrap` rules to `.search-band .search-input-wrap`.

**JS** No change. The docking script (`dockFilterBar`, `undockFilterBar`, scroll listener) operates on `#filterBar` which still exists. Filter-bar still docks into the nav on scroll, only now it docks as filters-only (no search). Per locked decision (option A from chat): search does NOT dock on scroll. To search again after scrolling, user scrolls back up to `.search-band` or opens the burger (which has its own search input).

**Trade-off accepted**
On scrolled desktop, search is no longer in the nav. Reaching it costs one scroll-to-top or one burger open. This is the explicit choice (Wikipedia/MDN model) over duplicating the input or building two-element docking.

**Not changed**
Hero markup, question-tiles, disc-band, topic grid, all unchanged. CHANGELOG-nng-markers.md untouched.

---

## 2026-04-27 — Hero banner image, search UX fixes

- Added `img/hero-banner.webp` (262KB, converted from PNG). Midjourney prompt locked in `noir book illustrations/noirbook-prompts-master.md`.
- Hero section restructured: image sits as CSS background on `.hero-banner` wrapper, gradient overlay `var(--paper) 40% → transparent 68%` keeps text readable in both light and dark mode. Text layout, font sizes, and alignment unchanged.
- Scroll sentinel updated: filter bar now docks the moment its top edge reaches the nav, not when question tiles section clears. Eliminates the "search bar disappears too early" gap.
- Docked nav search behaviour: controls row hidden at rest. On focus/typing: discipline + tier filters reveal; sort bar, secondary filters, and view toggles stay hidden (not needed in quick-search context). Search chips appear below the docked input on typing, matching homepage behaviour.
- `recent.json` created at library-v55 root. Recency signal fallback in HTML updated to 27 April 2026.
- Hero subtitle line-height tightened from `--lh-body` (1.7) to `--lh-card` (1.3) so the two lines read as one block.

## 2026-04-26, Phase 7 — /agents page

- Created `agents.html`. Single-column, 720px max-width, Noir System design.
- Sections: intro + manifest path callout, full schema table (12 fields with types, descriptions, and examples), 4 copy-ready code snippets (Claude/Claude Code, Cursor, ChatGPT custom GPT, plain JS fetch), ready-to-paste HN post with copy button.
- Copy buttons use `navigator.clipboard`. Label flips to "Copied" for 2s on success.
- Added "For AI agents" nav link to `index.html` between About and the Suggest CTA.
- No topic counts anywhere on the page.

## 2026-04-26, Phase 5 — About page

- Created `about.html`. Single-column, 680px max-width, follows existing design system. No external CSS file, all rules inline.
- Sections: photo placeholder (80px initial block, same pattern as logo-mark), intro, why this exists, what's in it, how it's maintained, newsletter stub (disabled inputs, "coming soon" state).
- Copy written and approved by Malgo. No topic counts anywhere.
- Added "About" nav link to `index.html` homepage nav, before the "Suggest a topic" CTA.

## 2026-04-26, Phase 4 — Skipped (deferred)

Social proof scaffold deferred. No markup added. Revisit when testimonials and a "used at X" attribution are ready.

## 2026-04-26, Phase 3 — Reverted (skipped)

Preview panel removed. All HTML, CSS, and JS from the hover preview implementation stripped from `index.html` and `home.css`. Feature deferred indefinitely.

## 2026-04-26, Phase 3 — Live preview panel (reverted)

**New: topic hover preview**
- Added `<div id="topicPreviewPanel">` to index.html (before `</body>`). Right-anchored fixed panel, 480px wide, starts below the sticky nav.
- Slides in via `translateX(100% → 0)` on topic card mouseenter, slides out on mouseleave. 150ms debounce so mouse can cross into the panel without it closing.
- ESC key dismisses instantly.
- Disabled on mobile (≤768px, `display:none`).
- Content sourced from `library-manifest.json` (already fetched on page load), not from individual topic files. Individual file fetches fail on `file://` protocol; manifest is already available. Manifest loaded once on script init, shared across all hovers via `manifestData` lookup.
- Panel shows: discipline badge (disc color), topic ID (mono), topic title, "What this covers" label, up to 3 solves (arrow-prefixed), up to 5 methods (hairline-separated), "Read full topic" link.
- New CSS in `home.css`: 16 rules, all tokens from existing `shared.css` (no hardcoded hex except `#fff` for badge text, matching the existing disc toggle pattern).

## 2026-04-26, Phase 0 in v55 — stale count cleanup

- `design-system.html` line 758: removed stale "(123 topics)" count from `search.js` code comment inside the file-structure block. Count was not updated when topology grew from 123 to 127. Removed per locked decision (no numeric counts on site-facing pages).

## 2026-04-25, Phase 0 — Cleanup and infrastructure

**Rename cleanup**
- Replaced "Design System design system" with "Noir System" in README.md.
- No "Black Book" or "Ink & Paper" strings found in CSS, JS, or HTML files. Already clean.

**Count correction and site cleanup**
- Manifest verified at 127 topics (UX: 44, PM: 35, MK: 28, CS: 20).
- README.md: single count reference kept on line 5 ("127 topics. 4 disciplines. Noir System with light/dark mode."). All other numeric count references removed or rephrased (intro paragraph, file-structure comments, disciplines table row for UX corrected).
- index.html and design-system.html: all hardcoded topic counts removed from site-facing copy per locked decision.

**New files**
- DECISIONS.md created at project root, seeded with deferred and rejected decisions from GTM-PLAN.md.
- CHANGELOG.md (this file) created at library-v54/.

## 2026-04-25, Phase 1 — Homepage hero rework

**Tagline**
- index.html h1 updated from "Every method. One place." to "The reference your bookmarks were trying to be." Removed `white-space:nowrap` from the h1 inline style (new tagline is longer).

**Hero subtitle**
- Removed `<span id="topicCount">` (count was injected via JS). Subtitle rephrased to "Design, product, marketing, and content — in one place." JS topicCount line null-guarded so no errors if element is absent.

**Recency signal**
- Added `<p class="recency-signal" id="recencySignal">` below the subtitle, hidden by default.
- Populated via the existing manifest fetch: reads `manifest.updated` field (currently 2026-03-30), formats as "Last topic added 30 March 2026", shows gracefully only when date is present.
- `.recency-signal` style added to home.css (nano size, light ink, uppercase, tracked).

**No CTA button removed** — no standalone CTA existed in the hero. Nav-level "Suggest a topic" link is appropriate and untouched.

**Search chips confirmed** — `searchPills` div present, JS pool of 25 terms, 8 randomly shown on load. No changes needed.

## 2026-04-26, Hero copy and subtitle refinement

**Final hero copy**
- h1: "Every method. One place." (hero size, unchanged)
- Subtitle restored to full sentence: "The reference your bookmarks were trying to be — design, product, marketing, and content in one place." at `--fs-h2`, `--fw-medium`, `--ink-soft`.
- Discipline words inline-colored: design (`--teal`), product (`--rust`), marketing (`--navy`), content (`--plum`).
- Cycling word experiment reverted entirely (HTML, CSS, JS removed).
- Recency signal remains, fetched from `recent.json`.

## 2026-04-26, Hero layout refinement

**Option B: two-line hero**
- Subtitle ends with a period: "The reference your bookmarks were trying to be."
- Cycling discipline word sits solo on its own line at `--fs-hero` as visual punctuation.
- Removed "in one place." tail and `.hero-sub-end` CSS rule.

## 2026-04-25, Phase 2 — Entry frame (question tiles)

**New section: "Start with a question"**
- Added between the filter bar and the topic grid in index.html.
- 8 tiles, balanced 2-2-2-2 across MK, UX, PM, CS.
- Each tile: question (semibold body), topic name + discipline code (nano, uppercase, light), one-line blurb (nano, ink-medium).
- Styled distinctly from topic cards: bare border, no discipline color, no tier badge. Hover darkens border and adds a faint ink wash.
- Responsive: 4 columns desktop, 2 columns tablet (≤900px), 1 column mobile (≤560px).
- All CSS in inline style block of index.html (.question-tiles, .question-tiles-grid, .question-tile, etc.).

**Tiles (confirmed by user):**
1. How do I find the right message for my audience? → positioning-messaging.html (MK T1)
2. Why do users keep making the same mistake? → usability.html (UX T1)
3. How do I decide what to build next? → problem-framing.html (PM T1)
4. How do I make complex content easy to read? → content-design-readability.html (CS T1)
5. How do I write copy that actually converts? → landing-pages-cro.html (MK T2)
6. How do I set goals my team will actually hit? → okrs-goals.html (PM T2)
7. How do I make a form people actually complete? → forms-data-entry.html (UX T2)
8. How do I build a content system that scales? → editorial-operations.html (CS T1)
