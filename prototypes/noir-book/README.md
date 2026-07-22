# Noir Book

A structured knowledge base covering UX Design, Product Management, Marketing & Growth, and Content Strategy — reference topics across 4 tiers. Built for working on real projects. Each topic is a comprehensive reference page covering theory, practical methods with templates, and real-world examples.

4 disciplines. Noir System with light/dark mode.

## For AI Agents

**To find relevant topics for a specific problem, read `library-manifest.json`.**

The manifest contains full topic metadata: ID, title, filename, solves (problem statements the topic addresses), methods, prerequisites, pairs_with, and keywords. Match the user's problem against the solves, then open the matched topic file for full content.

## File Structure

```
├── index.html                    Homepage — topic grid, discipline toggles, search, tier filtering
├── library-manifest.json         Full topic metadata (~22K tokens)
├── README.md                     This file
├── build.js                      Assembles content/ → topics/, updates index/search/manifest
├── design-system.html            Visual design system documentation
├── css/
│   ├── shared.css                Design system — colors, typography, components
│   ├── home.css                  Homepage layout, collapsible sections
│   └── topic.css                 Topic page layout
├── js/
│   ├── search.js                 Cross-topic search
│   ├── theme.js                  Dark/light mode toggle
│   ├── checklist.js              Interactive checklists on topic pages
│   └── mobile-toc.js             Mobile table of contents overlay
├── content/                      Source fragments — what you edit
│   ├── _components.html          Component markup cheat-sheet
│   ├── _recipe.html              Target structure per tier
│   └── *.html                    topic content fragments
└── topics/                       Built output — what users view
    └── *.html                    complete topic pages
```

## Disciplines

| Discipline | Code | Topics |
|---|---|---|
| UX Design | UX | 44 (T1: 10, T2: 19, T3: 8, T4: 7) |
| Product Management | PM | 35 (T1: 10, T2: 12, T3: 7, T4: 6) |
| Marketing & Growth | MK | 28 (T1: 7, T2: 10, T3: 6, T4: 5) |
| Content Strategy | CS | 20 (T1: 5, T2: 7, T3: 5, T4: 3) |

## Topic ID Format

**`XX.T.NN`** — Discipline code, Tier number (1–4), Position within tier.

- `UX.1.01` = UX Design, Tier 1, first topic (Design Thinking)
- `PM.2.03` = Product Management, Tier 2, third topic (Growth & PLG)
- `MK.1.01` = Marketing & Growth, Tier 1, first topic (Positioning & Messaging)
- `CS.1.01` = Content Strategy, Tier 1, first topic (Content Strategy Foundations)

## For Humans

Open `index.html` in a browser. Each topic page includes a sidebar table of contents, reading progress indicator, and dark/light mode toggle.
