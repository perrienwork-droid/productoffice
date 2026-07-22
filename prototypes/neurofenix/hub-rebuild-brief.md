# Neurofenix Hub, Rebuild Brief

Owner: M (perrien.work@gmail.com)
Portfolio: `/sessions/clever-friendly-turing/mnt/Malgo Career/website-v22`
Case study: `neurofenix.html` (password `malgo2026`)
Target folder: `website-v22/prototypes/neurofenix/`

This brief is the single source of truth for rebuilding the Neurofenix Hub as a live, embeddable prototype inside the portfolio case study. The last attempt conflated Hub with the Clinician Dashboard. This brief exists so that does not happen again.

Read this end to end before writing any HTML. If a visual decision is not covered here, go back to the screenshots, do not borrow from the Clinician Dashboard.

---

## 1. Mission

Produce two new HTML files that replace the current `healthcare-hub.html` and `healthcare-group.html` in the portfolio prototypes folder:

1. `healthcare-hub.html`, a welcome page plus a working prototype shell with 3 key sections (Screen a new patient, Updates and insights, Patient list).
2. `healthcare-group.html`, a Care Group view rebuilt inside the Hub visual system (it is a Hub product view, not a Clinician Dashboard view).

Both files must be pixel-crisp at 1280 by 800 intrinsic, because they are embedded via a CSS scale transform inside `.pf-stage` iframes on the case study page. The iframe wrapper already exists, do not touch it.

---

## 2. Guardrails, what NOT to do

1. Do not reuse any Clinician Dashboard tokens. The dashboard uses a purple spectrum (purple-900 `#2E1450`, purple-600 `#7040A8`). The Hub is a different product and has its own identity. Do not import that palette.
2. Do not reuse the Clinician Dashboard sidebar chrome, the KPI tile layout with orange or green accent dots, or the adherence ring component. Those are Clinician Dashboard components, not Hub components.
3. Do not use the em dash character. The portfolio preference is commas or brackets. Enforce this in every string of visible copy and inside the brief itself.
4. Do not introduce new frameworks. Static HTML, inline CSS in `<style>`, vanilla JS only, to match the two clinician prototypes already shipped (`overview.html`, `patient-monitoring.html`).
5. Do not touch the patient app visuals, they are out of scope.
6. Do not touch `overview.html` or `patient-monitoring.html`, those are approved.

---

## 3. Product identity, Hub vs Clinician Dashboard

| Dimension | Clinician Dashboard | Hub |
|---|---|---|
| User | Individual clinician, per shift | Practice admin, program lead, org buyer |
| Core job | Monitor and intervene on patients this week | Understand program reach, screen new referrals, grow the practice |
| Feel | Dense analytics, pro tool, keyboard driven | Consumer adjacent, welcoming, marketing aware, still clinical |
| Primary action | Triage a patient | Screen a new patient, book a call |
| Data density | High | Medium, with more whitespace and copy |
| Typography weight | Numerals first, labels small | Headlines first, numerals supporting |

Tone words for Hub: calm, confident, spacious, modern clinical. Not playful, not corporate.

---

## 4. Visual system, Hub

All values are starting proposals extracted from the screenshots. Lock them on first build by defining `:root` custom properties.

### 4.1 Color tokens

Brand, navy and teal
```
--hub-navy-900: #0A1B4D   Sidebar background
--hub-navy-800: #10257A
--hub-navy-700: #1B3AA6   Hero dark surfaces
--hub-navy-600: #2A4EC7   Section banners
--hub-navy-500: #4169E1   Interactive accent on navy

--hub-teal-600: #00A8A8   Primary CTA on white
--hub-teal-500: #00C4C4   Hover state, accent strokes
--hub-teal-400: #00D4D4   Section accent, active tab underline
--hub-teal-200: #9FECEC   Tint for badges and pills
--hub-teal-50:  #E6FBFB   Soft fill for accent cards
```

Supporting
```
--hub-pink-500: #E85E8A   "Book a call" CTA
--hub-pink-50:  #FDECF2   Pink pill background

--hub-amber-500: #F0A83C  Plus badge highlight
--hub-amber-50:  #FFF4DF

--hub-grey-900: #0F1430   Primary text on white
--hub-grey-700: #3A4168   Secondary text
--hub-grey-500: #6B7293   Muted text, labels
--hub-grey-300: #CBD0E3   Input borders
--hub-grey-100: #EEF0F8   Card dividers
--hub-grey-50:  #F6F8FC   Page canvas

--hub-white: #FFFFFF
```

Status reuses the same semantic colors as the dashboard so a clinician moving between products is not confused. Do NOT reuse the exact hex values from the dashboard tokens, use these near matches that sit correctly next to the Hub palette:
```
--hub-ok-600: #17926A
--hub-ok-50:  #E7F6EE
--hub-warn-600: #B67F12
--hub-warn-50:  #FFF4DA
--hub-risk-600: #C83A4A
--hub-risk-50:  #FCE6E9
```

### 4.2 Typography

Use the same family pair as the rest of the portfolio for consistency across prototypes:
```
--font-body: 'DM Sans', -apple-system, sans-serif
--font-mono: 'JetBrains Mono', monospace
```

Type scale for Hub
| Size | Weight | Usage |
|---|---|---|
| 11px | 600 | Pill labels, sidebar group headers |
| 12px | 500 | Secondary nav items, table meta |
| 13px | 500 | Body copy |
| 14px | 600 | Card titles |
| 15px | 500 | Welcome page lead paragraph |
| 18px | 700 | Section titles |
| 22px | 700 | Page H1 (inside prototype) |
| 28px | 800 | KPI values |
| 40px | 800 | Welcome hero headline |

### 4.3 Spacing, radius, shadow

```
--space-xs: 4px
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--space-2xl: 48px

--radius-sm: 8px    Inputs, small pills
--radius-md: 12px   Cards, buttons
--radius-lg: 20px   Feature cards, modals
--radius-pill: 999px

--shadow-card: 0 1px 3px rgba(10,27,77,0.06), 0 6px 16px rgba(10,27,77,0.05)
--shadow-pop:  0 12px 28px rgba(10,27,77,0.12)
```

Cards sit on `--hub-grey-50` canvas with `--hub-white` fill and `--shadow-card`. No visible card borders. The sidebar is filled `--hub-navy-900` with `rgba(255,255,255,0.85)` text.

### 4.4 Signature components

1. Plus badge, a small pill that reads `PLUS` or a `+` glyph on `--hub-amber-50` with `--hub-amber-500` text, used to gate premium features on the welcome page and on Program cards.
2. Emoji style KPI icon, a circular chip `--hub-teal-50` fill, `--hub-teal-600` glyph (line icon, not emoji character, this keeps it crisp in the scaled iframe).
3. Bifurcator step pill, a row of rounded pills numbered 1 through N, active pill filled `--hub-teal-500`, past pills outlined `--hub-teal-400`, future pills outlined `--hub-grey-300`.
4. Pink CTA, used only for "Book a call with our expert". Solid `--hub-pink-500` fill, white text, `--radius-pill`, 14px weight 700 copy.

---

## 5. Information architecture

### 5.1 `healthcare-hub.html`

The single file contains two stacked screens in one document, separated by a subtle divider and a section anchor. First screen is the welcome page. Second screen is the product shell with the 3 key sections visible as a single long scroll or as a tabbed area. Keep it one HTML file so the iframe loads fast.

1. Welcome page
   - Top app bar, white, with Neurofenix Hub lockup left, a thin nav (Product, Pricing, Login) right, and a pink "Book a call" CTA.
   - Hero, left copy, right illustration placeholder.
     - Headline: "Track your patients in Virtual Neuro Rehab, every step of the way."
     - Subhead: "Neurofenix Hub gives practice leaders a single place to screen referrals, monitor adherence, and grow the program."
     - Primary CTA: "Screen a new patient" (teal).
     - Secondary CTA: "See a live demo" (ghost teal).
   - Trust row, 3 to 4 logo placeholders labeled "Trusted by teams at" with placeholder initials like BH, UC, NHS (monogram SVGs, no real logos).
   - Feature triptych, 3 feature cards each with a line icon, a title, two lines of copy, and a "Learn more" teal link. Titles: "Bifurcator screening", "Adherence insights", "RTM ready workflows".
   - Secondary CTA band on `--hub-navy-700` with white copy and a white-outlined CTA leading into the product shell.

2. Product shell, 3 key sections, from the screenshots
   - Left sidebar, navy, with brand lockup at top, nav items (Screen a new patient, Updates and insights, Patient list, Care groups, Billing, Settings), an org switcher at the bottom with a placeholder org "Baptist Health Florida" and a tiny avatar.
   - Top bar inside the shell, white, with a contextual page title, a search field, a bell, and the user avatar.
   - Section A, Screen a new patient
     - Intro card with the Bifurcator brand and a one liner "Find the right program for each patient in under 2 minutes."
     - Step pill row (1 Patient info, 2 Medical history, 3 Goals, 4 Result).
     - Active step shows the form for Medical history, with labeled inputs and a teal primary button "Continue".
     - Right rail, "Why we ask" explainer card with light teal fill.
   - Section B, Updates and insights
     - Header row with tab pills (This week, Last 30 days, Quarter), active teal underline.
     - 4 KPI cards, Patients screened, Conversion to active, Adherence this week, Intervention rate. Each card has the Hub KPI icon chip, a number in 28px 800, a teal delta chip.
     - Two feature cards side by side, "Program reach" (a simple horizontal bar chart) and "What changed this week" (a list of 4 textual insights with timestamps).
   - Section C, Patient list
     - Toolbar, search, filter chips (All, Active, Onboarding, Discharged), sort dropdown, "Export" ghost button.
     - Table with columns: Patient, Program, Status, Adherence, Last activity, Clinician. Row hover `--hub-grey-50`. Status uses the Hub status pills defined above. Adherence is a compact 120px sparkline with a final percent label.
     - Pagination row at the bottom, 1 of 8 pages, text only.

Sign off anchor, a small footer in the product shell with "Neurofenix Hub, 2026" and legal links.

### 5.2 `healthcare-group.html`

Care Group view for a single program group, still inside the Hub visual system. This page is reached from the Hub sidebar "Care groups" entry and from the case study link on the portfolio.

Sections in order
1. Breadcrumb, Care groups, Stroke Recovery.
2. Banner card on `--hub-teal-50`, program name H1, owner, size, "Book a call" pink CTA right aligned.
3. KPI strip, 4 cards, Active patients, Intervention rate, RTM units this month, Discharge rate.
4. Pipeline funnel, 4 stages (Referral, Onboarded, Active, Discharged) with volume numbers and a conversion arrow between stages.
5. 16 week adherence chart, stacked bars using the Hub status colors.
6. Clinician roster, 4 to 6 small cards, avatar monogram, name, caseload count, average adherence, "View patients" ghost link.
7. Activity log, a 6 row list of recent events (screened, onboarded, exceeded target, flagged, discharged).

No sidebar in this page, it is rendered inside the same shell as `healthcare-hub.html`. So actually, keep the sidebar and top bar identical, just set "Care groups" as the active nav item and load this page content in the main area.

---

## 6. States required, per screen

For each state, show it inline on the page rather than behind interactions, because this is a prototype meant to be read, not clicked. Use small labels like "State, empty" or "State, error" above the relevant block if more than one state is shown in the same screen.

Welcome page
- Default, as described above.

Product shell, Screen a new patient
- Default step 2 of 4 active.
- Empty state placeholder under the form, "No past patients yet. Your first screening will appear here."

Product shell, Updates and insights
- Default this week.
- Stale data banner variant, a thin `--hub-warn-50` ribbon "Data last synced 2h ago" at the top of the block.

Product shell, Patient list
- Default with 8 rows of realistic placeholder data.
- Filtered variant, Onboarding chip active, 2 rows shown, rest dimmed.

Care group page
- Default with all sections populated.
- One clinician card in a "Capacity full" state with an amber pill.

---

## 7. Interaction and navigation

1. Hub sidebar items are presentational, clicking does nothing except toggle the visible `.is-active` class, already wired by analogous code in `overview.html`.
2. Tab pills in Updates and insights toggle the active class only, numbers do not change.
3. Filter chips in Patient list toggle active class only.
4. Every cross-prototype link goes to a relative href in the same folder.
   - From Hub sidebar, "Care groups" href is `healthcare-group.html`.
   - From Care group page, breadcrumb "Care groups" href is `healthcare-hub.html#care-groups`.
   - From anywhere, "Open a patient" href is `patient-monitoring.html`.
   - From anywhere, "See all patients this week" href is `overview.html`.
5. The pink "Book a call with our expert" CTA is an anchor with `href="#book"` and opens nothing, it is visual.

---

## 8. Content vocabulary, canonical

Use these strings exactly, do not paraphrase.
- Neurofenix Hub, never "the Hub app" or "Hub Portal".
- Neurofenix Bifurcator (no trademark symbol, the screenshots show one but legally we keep it off the prototype).
- Screen a new patient.
- Updates and insights.
- Patient list.
- Care groups.
- Book a call with our expert.
- Trusted by teams at.

Status pill copy: Exceeded, Good, Slightly below, Low. Match the Clinician Dashboard vocabulary so the two products feel like a family.

Placeholder org name: Baptist Health Florida. Program name for the care group page: Stroke Recovery. Clinician names: use invented but plausible names (Dr. Amara Okafor, Dr. Priya Shah, Tom Weatherall, Nadia Costa, Luis Peralta).

---

## 9. Handoff specs

1. Intrinsic size, 1280 by 800. Build every layout to look correct at this size. The iframe scale is handled by the parent case study page, do not add your own zoom.
2. Fonts, load DM Sans and JetBrains Mono via the same Google Fonts link used in `overview.html`. Trigger a redraw of any canvas on `document.fonts.ready.then()`.
3. File structure, a single `.html` file per screen. All CSS in a `<style>` block in the head. All JS in a `<script>` block at the end of the body. No external JS.
4. IDs and classes prefixed `hub-` to avoid collision if both files are ever inlined into the same page.
5. Accessibility, pass AA contrast on all text sizes against their actual backgrounds. Use the provided text tokens, do not hand pick new greys.
6. The case study page (`neurofenix.html`) already embeds these two files at `prototypes/neurofenix/healthcare-hub.html` and `prototypes/neurofenix/healthcare-group.html`. Do not rename.

---

## 10. Assets the next context needs before starting

Ship these into the next chat alongside this brief.
1. Welcome page screenshot (done).
2. Screen a new patient, step 1 through step 4 screenshots.
3. Updates and insights, default and one stale or alert variant.
4. Patient list, default and filtered variants.
5. Care group page, default view.
6. Any secondary asset that shows the Plus badge, the pink CTA in context, or the Bifurcator active state.
7. Any brand guideline snippet the founder or team has shared (logos, hex values, type).

If screenshots conflict with the tokens in section 4, the screenshots win, update the brief.

---

## 11. Acceptance criteria, the rebuild is done when

1. Opening `neurofenix.html` in a browser at the case study anchor and scrolling to the first two prototype frames shows the new Hub welcome page and the new Care group view, both pixel-crisp in the scaled iframe.
2. A side by side visual check against the reference screenshots shows the same palette, typography hierarchy, and component language (Plus badge, Bifurcator step pills, emoji KPI chip, pink CTA).
3. No purple `#2E1450`, `#7040A8`, `#8B5FBF`, `#C5A3E6` tokens anywhere in the two new files (grep confirms zero matches).
4. No em dash character `—` anywhere in the files (grep confirms zero matches).
5. All inter-prototype links resolve (manual click test in a local static server).
6. `healthcare-hub.html` contains the welcome page section and the product shell with 3 key sections, all populated with realistic placeholder data.
7. `healthcare-group.html` uses the Hub sidebar and top bar verbatim, with "Care groups" as the active nav item.

---

## 12. Suggested build order, for the next session

1. Drop this brief and all screenshots in a fresh chat.
2. Ask the model to echo back section 2 (guardrails) and section 4 (tokens) in its own words, before writing code. This catches any drift from Clinician Dashboard patterns.
3. Build `healthcare-hub.html` first, welcome page, then product shell.
4. Build `healthcare-group.html` second, reusing the Hub sidebar and top bar component exactly.
5. Run the acceptance checks in section 11.
6. Open `neurofenix.html` in a browser, confirm both frames render, ship.

End of brief.
