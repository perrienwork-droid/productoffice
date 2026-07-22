# NN/g Source Markers — Session Changelog
**Date:** 2026-04-24
**Scope:** `library-v49/content/` HTML files + `index.html` card attributes

---

## What the markers do

Two complementary mechanisms:

- **Element-level:** `data-source="NN/g"` on `.method-card`, `.callout`, `.case-study`, `.template-box`, `.pitfall` elements. Renders an orange provenance badge on the block.
- **Card-level:** `data-sources="nng"` on the `<a class="topic-card">` in `index.html`. Powers the NN/g filter button on the homepage — clicking it shows only topics with NNG-sourced content.

---

## Files confirmed complete (prior sessions, verified this session)

| File | Markers | Notes |
|---|---|---|
| `creativity-methods.html` | 41 | Kate Moran — Effective Ideation Techniques for UX Design. Fully marked in prior session; verified no gaps. |
| `personas.html` | 53 | Kim Salazar — Personas: Turn User Data Into User-Centered Design. Fully marked in prior session; verified no gaps. Two unmarked callouts in `#when-to-use` are library synthesis (JTBD + journey map references not from the course). |

---

## Files processed this session

### `data-driven-design.html`
**Course:** Kathryn Whitenton — Using Analytics for UX

**Before:** 66 markers
**After:** 69 markers (+3)

Elements added:
- `Funnel Analysis` method-card — core funnel methodology from the course
- `A/B Test Design` method-card — A/B test design framework from the course
- `"When not to A/B test"` warning callout — specific guidance from the course

Elements intentionally left unmarked (library synthesis or not from this course):
- HEART Framework, Event Taxonomy Design, Cohort Analysis, Quantitative Usability Methods cluster
- RAS, Eyetracking patterns
- A/B Test Plan template, Analytics Health Check checklist
- Airbnb, Netflix, Slack case studies
- Three non-course pitfalls
- "Vanity metrics vs actionable metrics" callout

---

### `complex-app-enterprise-ux.html`
**Course:** Kate Kaplan — Designing Complex Apps for Specialized Domains

**Before:** 26 markers
**After:** 26 markers (no changes — confirmed complete)

Apparent gaps investigated and resolved:
- Several `<p class="callout-title">` child elements were flagging as unmarked in grep — false positives; their parent `<div>` elements already carry the marker.
- "Complexity Audit" method-card — synthesized library content, not a Kaplan course method.
- "Domain Immersion Method" — general enterprise UX practice, not from the Kaplan course.
- "Multi-Tool Workflow Mapping" and "High-Stakes Error Prevention" — synthesized content.
- Bloomberg Terminal and Figma case studies — library additions; Kaplan course cases (first-responder systems, ERP satisficing) were already marked.
- First two pitfalls ("Designing for the demo", "Simplifying away power") — synthesized; Kaplan pitfalls ("Applying generalist methods", "Ignoring the ecosystem") already marked.

---

### `ux-roadmapping.html`
**Course:** (processed in prior session)

**Before:** 18 markers
**After:** 18 markers (no changes — confirmed complete)

Two unmarked `<div>` callouts investigated:
- "Why this matters for your projects" — library framing, not course content.
- "Practical tip" (don't over-engineer the template) — generic synthesized guidance.

---

## index.html fix

**Problem:** `data-driven-design.html` had 69 NN/g content markers but its homepage card was missing `data-sources="nng"`, so clicking the NN/g filter would not show the topic.

**Fix:** Added `data-sources="nng"` to the card at line 681.

---

## Current state: all marked files

| File | Content markers | In NN/g filter |
|---|---|---|
| `data-driven-design.html` | 69 | ✅ (fixed this session) |
| `personas.html` | 53 | ✅ |
| `creativity-methods.html` | 41 | ✅ |
| `presentation-communication.html` | 27 | ✅ |
| `complex-app-enterprise-ux.html` | 26 | ✅ |
| `workshop-facilitation.html` | 23 | ✅ |
| `ux-leadership.html` | 20 | ✅ |
| `ux-roadmapping.html` | 18 | ✅ |
| `product-thinking.html` | 18 | ✅ |
| `cognitive-emotional-design.html` | 13 | ✅ |
| `behavioral-design.html` | 9 | ✅ |
| `roadmapping.html` | 7 | ✅ |
| `stakeholder-management.html` | 0 | ✅ (pre-tagged, pending course) |
