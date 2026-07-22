var SEARCH_INDEX = [
{
  topic: "Topic Title",
  url: "topics/topic-name.html",
  tier: "Tier N",
  discipline: "UX",
  sections: [
    { title: "Section Title", id: "section-id", type: "theory", keywords: "keyword1 keyword2" }
  ],
  methods: [
    { name: "Method Name", section: "section-id", keywords: "keyword1 keyword2" }
  ]
},
{
  topic: "ABM & Enterprise Marketing",
  url: "topics/abm-enterprise.html",
  tier: "Tier 3",
  discipline: "MK",
  sections: [
    { title: "What ABM is", id: "what-and-why", type: "theory", keywords: "ABM account-based marketing enterprise sales funnel MQL" },
    { title: "Building an ABM strategy", id: "strategy", type: "practical", keywords: "ABM strategy tier model target account ICP one-to-one one-to-few one-to-many" },
    { title: "ABM campaigns and personalization", id: "campaigns", type: "practical", keywords: "personalization content landing page intent data engagement scoring attribution" },
    { title: "Marketing-sales alignment", id: "alignment", type: "practical", keywords: "SLA marketing sales alignment follow-up pipeline CRM" },
    { title: "ABM in practice", id: "examples", type: "examples", keywords: "one-to-one one-to-few vertical expansion MQL pipeline" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "too many accounts sales ignores personalization theater lead-gen metrics" }
  ],
  methods: [
    { name: "ABM Strategy Framework", section: "strategy", keywords: "tier model one-to-one one-to-few one-to-many scope resources" },
    { name: "Target Account Selection Criteria", section: "strategy", keywords: "firmographic technographic intent signals relationship access" },
    { name: "Personalized Content Playbook", section: "campaigns", keywords: "personalization custom landing page industry cluster programmatic" },
    { name: "Multi-Touch Attribution for ABM", section: "campaigns", keywords: "attribution engagement scoring account-level touchpoints" },
    { name: "Marketing-Sales Alignment SLA", section: "alignment", keywords: "SLA commitments follow-up pipeline review escalation" }
  ]
},
{
  topic: "Accessibility in Practice",
  url: "topics/accessibility.html",
  tier: "Tier 1",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "accessibility disability inclusive design WCAG ADA legal obligation" },
    { title: "POUR principles", id: "pour-principles", type: "theory", keywords: "POUR perceivable operable understandable robust WCAG principles framework" },
    { title: "Perceivable", id: "perceivable", type: "practical", keywords: "alt text color contrast captions transcripts text resize reflow" },
    { title: "Operable", id: "operable", type: "practical", keywords: "keyboard navigation focus management skip link touch targets tabindex" },
    { title: "Understandable", id: "understandable", type: "practical", keywords: "form labels error messages predictable behavior input validation" },
    { title: "Robust", id: "robust", type: "practical", keywords: "semantic HTML ARIA roles screen reader landmarks native elements" },
    { title: "Testing", id: "testing", type: "practical", keywords: "screen reader VoiceOver NVDA axe Lighthouse WAVE keyboard testing automated" },
    { title: "Accessibility engineering communication", id: "engineering-handoff", type: "practical", keywords: "ARIA handoff engineering keyboard specs accessible name annotation requirements" },
    { title: "Cognitive accessibility", id: "cognitive-accessibility", type: "practical", keywords: "cognitive young users older adults literacy reading level plain language age groups" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "accessibility audit checklist review worksheet POUR template" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "GOV.UK Microsoft inclusive design Target lawsuit" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "automated only checklist mentality overlay separate version focus outline" },
    { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "WCAG levels A AA AAA ARIA tabs accordion modal live regions" }
  ],
  methods: [
    { name: "WCAG Audit", section: "templates", keywords: "POUR accessibility review worksheet compliance" },
    { name: "Screen Reader Testing", section: "testing", keywords: "VoiceOver NVDA TalkBack blind low-vision" },
    { name: "Keyboard Navigation Audit", section: "operable", keywords: "tab focus keyboard-only trap skip link" },
    { name: "Color Contrast Check", section: "perceivable", keywords: "contrast ratio 4.5:1 3:1 WebAIM Stark" },
    { name: "Inclusive Design Checklist", section: "templates", keywords: "audit accessibility compliance review" },
    { name: "Accessibility Requirements Handoff", section: "engineering-handoff", keywords: "ARIA keyboard specs annotation engineering handoff accessible name" },
    { name: "Cognitive Accessibility Framework", section: "cognitive-accessibility", keywords: "cognitive young older adults literacy plain language age groups" }
  ]
},
{
  topic: "Affordances and Physical Intuition",
  url: "topics/affordances.html",
  tier: "Tier 4",
  discipline: "UX",
  sections: [
    { title: "What affordances are", id: "what-and-why", type: "theory", keywords: "affordance Gibson action possibility ecological perception" },
    { title: "Gibson vs Norman", id: "gibson-norman", type: "theory", keywords: "Gibson Norman signifier perceived affordance debate distinction" },
    { title: "Physical vs digital", id: "physical-digital", type: "theory", keywords: "physical digital skeuomorphism metaphor convention direct manipulation" },
    { title: "Skeuomorphism and flat design", id: "skeuomorphism", type: "practical", keywords: "skeuomorphism flat design affordance spectrum discoverability" },
    { title: "Mapping and constraints", id: "mapping-constraints", type: "practical", keywords: "natural mapping spatial directional constraint physical logical" },
    { title: "Applying affordance theory", id: "applying", type: "practical", keywords: "affordance audit false floor false affordance interactive static" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "iOS toggle Material Design elevation shadow" }
  ],
  methods: [
    { name: "Affordance Spectrum Analysis", section: "skeuomorphism", keywords: "skeuomorphism flat moderate affordance discoverability" },
    { name: "Natural Mapping Design", section: "mapping-constraints", keywords: "spatial directional conceptual mapping control effect" },
    { name: "Constraint Analysis", section: "mapping-constraints", keywords: "physical logical semantic cultural constraint error prevention" },
    { name: "Affordance Audit", section: "applying", keywords: "interactive static false floor false affordance classify" }
  ]
},
{
  topic: "Agile, Lean & Sprint Methods",
  url: "topics/agile-lean-sprint.html",
  tier: "Tier 3",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "agile lean design sprint process framework waterfall" },
    { title: "Agile UX", id: "agile-ux", type: "practical", keywords: "dual-track agile sprint ceremonies scrum kanban designer" },
    { title: "Lean UX", id: "lean-ux", type: "practical", keywords: "lean UX hypothesis MVP experiment build-measure-learn" },
    { title: "Design Sprint", id: "design-sprint", type: "practical", keywords: "design sprint GV five-day map sketch decide prototype test" },
    { title: "Choosing the right process", id: "choosing", type: "practical", keywords: "process selection uncertainty scope agile lean sprint" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "hypothesis card lean UX template" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Spotify squad Dropbox lean experiment" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "process religion no research sprint theater dogma" }
  ],
  methods: [
    { name: "Dual-Track Agile", section: "agile-ux", keywords: "discovery delivery track sprint ahead parallel" },
    { name: "Lean UX Hypothesis", section: "lean-ux", keywords: "hypothesis believe achieve measurable signal" },
    { name: "Minimum Viable Experiment", section: "lean-ux", keywords: "MVP experiment smallest test validate" },
    { name: "Build-Measure-Learn Loop", section: "lean-ux", keywords: "persevere pivot iterate learn cycle" },
    { name: "Five-Day Design Sprint", section: "design-sprint", keywords: "GV map sketch decide prototype test five days" },
    { name: "Process Selection Framework", section: "choosing", keywords: "choosing process uncertainty scope situation" }
  ]
},
{
    topic: "Agile Product Management",
    url: "topics/agile-pm.html",
    tier: "Tier 1",
  discipline: "PM",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "agile PM sprint scrum iterative delivery discovery stability flexibility" },
      { title: "Agile PM methods", id: "agile-methods", type: "practical", keywords: "dual-track backlog grooming sprint planning interrupt buffer tech debt" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "sprint readiness checklist PM preparation" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Basecamp Shape Up Spotify squad model autonomy" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "ticket writer mid-sprint changes velocity retros" },
      { title: "When to adapt", id: "when-to-use", type: "practical", keywords: "2-week sprint 6-week cycle kanban Shape Up decision" }
    ],
    methods: [
      { name: "Dual-Track Agile", section: "agile-methods", keywords: "dual-track discovery delivery parallel validated opportunities" },
      { name: "Backlog Grooming", section: "agile-methods", keywords: "refinement cull stale context dependencies weekly grooming" },
      { name: "Sprint Planning Facilitation", section: "agile-methods", keywords: "sprint goal team pull scope negotiation capacity" },
      { name: "Interrupt Buffer", section: "agile-methods", keywords: "interrupt buffer unplanned urgent 15-20% protection" },
      { name: "Tech Debt Allocation", section: "agile-methods", keywords: "tech debt 15-20% standing allocation infrastructure developer experience" }
    ]
  },
{
  topic: "AI for Designers",
  url: "topics/ai-for-designers.html",
  tier: "Tier 3",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "AI artificial intelligence design workflow tool interface expectations literacy" },
    { title: "AI in the design workflow", id: "ai-in-workflow", type: "theory", keywords: "AI-augmented research ideation prototyping testing workflow" },
    { title: "AI-powered interfaces", id: "designing-ai-interfaces", type: "practical", keywords: "AI interaction patterns chat suggestion ambient assisted trust outcome-oriented adaptive" },
    { title: "Transparency and explainability", id: "transparency", type: "practical", keywords: "explainability transparency attribution counterfactual confidence" },
    { title: "AI error design", id: "error-handling", type: "practical", keywords: "error correction feedback fallback graceful degradation" },
    { title: "Ethics and bias", id: "ethics-bias", type: "practical", keywords: "ethics bias fairness representation consent autonomy" },
    { title: "Prompt design as UX", id: "prompt-design", type: "practical", keywords: "prompt UX starter templates progressive refinement" },
    { title: "Dual-audience design", id: "dual-audience", type: "practical", keywords: "dual audience agent human AI handoff structured data semantic" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "AI feature design review checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "GitHub Copilot Google Photos suggestion ambient" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "feature checklist magic framing no fallback" }
  ],
  methods: [
    { name: "AI Interaction Patterns", section: "designing-ai-interfaces", keywords: "chat suggestion ambient assisted conversational" },
    { name: "Outcome-Oriented Design", section: "designing-ai-interfaces", keywords: "outcome adaptive framework variable content guardrails quality gates" },
    { name: "AI Trust Patterns", section: "designing-ai-interfaces", keywords: "trust transparency control consistency failure support calibration" },
    { name: "AI Literacy Framework", section: "what-and-why", keywords: "literacy prompt fluency output assessment team readiness" },
    { name: "Dual-Audience Design Framework", section: "dual-audience", keywords: "dual audience agent human handoff structured semantic" },
    { name: "Explainability Patterns", section: "transparency", keywords: "attribution counterfactual example-based confidence" },
    { name: "Graceful AI Failure", section: "error-handling", keywords: "correction feedback fallback degradation" },
    { name: "AI Ethics Checklist", section: "ethics-bias", keywords: "bias representation impact consent autonomy" },
    { name: "Prompt UX Design", section: "prompt-design", keywords: "starter prompts templates refinement constraints" }
  ]
},
{
  topic: "AI in Marketing",
  url: "topics/ai-marketing.html",
  tier: "Tier 3",
  discipline: "MK",
  sections: [
    { title: "What AI in marketing means", id: "what-and-why", type: "theory", keywords: "AI marketing automation LLM personalization content" },
    { title: "AI content workflows", id: "content-workflow", type: "practical", keywords: "AI content workflow draft editing brand voice guardrails" },
    { title: "AI-powered personalization", id: "personalization", type: "practical", keywords: "AI personalization segment behavioral individual dynamic" },
    { title: "AI tool evaluation", id: "tool-evaluation", type: "practical", keywords: "AI tool evaluation quality integration privacy cost adoption" },
    { title: "AI and search landscape", id: "ai-search", type: "practical", keywords: "AI search SGE Perplexity original research citation" },
    { title: "AI in marketing in practice", id: "examples", type: "examples", keywords: "AI content engine personalization brand voice guardrails" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "hallucination volume distinctiveness workflow ethics" },
    { title: "AI search disruption", id: "ai-search-disruption", type: "practical", keywords: "AI search disruption zero-click SGE Perplexity AI-proof monitoring citation authority" }
  ],
  methods: [
    { name: "AI Content Workflow", section: "content-workflow", keywords: "AI content draft editing enrichment quality review" },
    { name: "Brand Voice Guardrails for AI", section: "content-workflow", keywords: "brand voice prompt template attributes vocabulary examples" },
    { name: "AI Personalization Strategy", section: "personalization", keywords: "personalization segment behavioral individual dynamic" },
    { name: "AI Tool Evaluation Framework", section: "tool-evaluation", keywords: "AI tool quality integration privacy cost adoption" },
    { name: "AI-Proof Content Strategy", section: "ai-search", keywords: "AI search original research interactive community citation" },
    { name: "AI Search Disruption Strategy", section: "ai-search-disruption", keywords: "AI search disruption zero-click authority monitoring citation structured data" }
  ]
},
{
  topic: "AI Product Management",
  url: "topics/ai-pm.html",
  tier: "Tier 3",
  discipline: "PM",
  sections: [
    { title: "What AI PM is and why it's different", id: "what-and-why", type: "theory", keywords: "AI ML LLM product management probabilistic" },
    { title: "AI suitability assessment", id: "suitability", type: "practical", keywords: "suitability assessment AI fit rules data" },
    { title: "Evaluation and quality frameworks", id: "evaluation", type: "practical", keywords: "evaluation quality metrics accuracy human rating" },
    { title: "Human-in-the-loop design", id: "hitl", type: "practical", keywords: "HITL human loop confidence threshold review" },
    { title: "Model performance monitoring", id: "monitoring", type: "practical", keywords: "monitoring drift degradation alert feedback" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "Notion Copilot AI case study" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "demo cost fallback inference" },
    { title: "Trust and AI agent considerations", id: "ai-trust-agents", type: "practical", keywords: "trust transparency control consistency failure recovery AI agent task completion" }
  ],
  methods: [
    { name: "AI Suitability Assessment", section: "suitability", keywords: "AI suitability pattern data error tolerance" },
    { name: "Evaluation Framework Design", section: "evaluation", keywords: "evaluation automated human user metrics" },
    { name: "Prompt Engineering as Product Spec", section: "evaluation", keywords: "prompt LLM spec version test" },
    { name: "AI Failure Mode Analysis", section: "evaluation", keywords: "failure hallucination bias refusal latency" },
    { name: "Human-in-the-Loop Workflow", section: "hitl", keywords: "HITL confidence review feedback escalation" },
    { name: "Model Performance Monitoring", section: "monitoring", keywords: "monitoring drift quality feedback alert" },
    { name: "Responsible AI Checklist", section: "monitoring", keywords: "responsible bias privacy transparency safety" },
    { name: "Trust as Product Quality", section: "ai-trust-agents", keywords: "trust transparency control consistency failure recovery AI product quality" },
    { name: "AI Agent Product Considerations", section: "ai-trust-agents", keywords: "AI agent task completion metrics structured data API accessibility" }
  ]
},
{
    topic: "B2B Product Management",
    url: "topics/b2b-pm.html",
    tier: "Tier 2",
  discipline: "PM",
    sections: [
      { title: "What it is & how it differs", id: "what-and-why", type: "theory", keywords: "B2B enterprise buyer user gap procurement sales cycle multi-persona" },
      { title: "B2B methods", id: "b2b-methods", type: "practical", keywords: "buyer user persona triage advisory board multi-persona journey health score" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "enterprise readiness SSO RBAC audit compliance" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Atlassian bottom-up Salesforce strategic account platform" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "buyer over user one customer roadmap afterthought" },
      { title: "When to go upmarket", id: "when-to-use", type: "practical", keywords: "upmarket enterprise capacity support SLA" },
      { title: "Sales-product feedback loop", id: "sales-feedback", type: "practical", keywords: "sales feedback win/loss feature request triage CAB advisory board" }
    ],
    methods: [
      { name: "Buyer vs User Persona", section: "b2b-methods", keywords: "buyer user persona separation goals pain points evaluation" },
      { name: "Enterprise Feature Request Triage", section: "b2b-methods", keywords: "triage pattern one-off platform value revenue justified" },
      { name: "Customer Advisory Board", section: "b2b-methods", keywords: "CAB advisory board quarterly problems outcomes strategy" },
      { name: "Multi-Persona Journey Map", section: "b2b-methods", keywords: "multi-persona journey admin manager user handoff roles" },
      { name: "Account Health Scoring", section: "b2b-methods", keywords: "health score usage depth breadth engagement trend churn prediction" },
      { name: "Sales-Product Feedback Loop", section: "sales-feedback", keywords: "sales feedback win/loss feature request triage CAB advisory board" }
    ]
  },
{
  topic: "Behavioral Design & Persuasion",
  url: "topics/behavioral-design.html",
  tier: "Tier 2",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "behavioral design persuasion manipulation influence behavior change" },
    { title: "Choice architecture", id: "choice-architecture", type: "theory", keywords: "choice architecture defaults framing options paradox nudge" },
    { title: "Fogg Behavior Model", id: "fogg-model", type: "theory", keywords: "Fogg behavior model motivation ability prompt trigger MAP" },
    { title: "Nudge theory", id: "nudge-theory", type: "practical", keywords: "nudge social proof salience feedback simplification default EAST sludge" },
    { title: "Habit loops", id: "habit-loops", type: "practical", keywords: "habit loop cue routine reward variable engagement streak" },
    { title: "Social influence", id: "social-influence", type: "practical", keywords: "social proof scarcity urgency FOMO testimonials ratings fresh start backlash" },
    { title: "Principles of influence", id: "principles-of-influence", type: "practical", keywords: "Cialdini reciprocation consistency liking authority commitment persuasion Gamberini Bickman" },
    { title: "Dark patterns", id: "dark-patterns", type: "practical", keywords: "dark patterns roach motel confirm-shaming misdirection forced continuity" },
    { title: "Ethical framework", id: "ethical-framework", type: "practical", keywords: "ethics transparency aligned interest informed choice reversibility vulnerability" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "dark pattern review behavioral audit ethics check" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Duolingo Amazon Apple Screen Time habit behavioral" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "engagement without value context-dependent defaults afterthought scarcity backlash" },
    { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "Cialdini unity Hook Model Nir Eyal decision architecture Roller novice expert" }
  ],
  methods: [
    { name: "Choice Architecture", section: "choice-architecture", keywords: "defaults framing options order number choices" },
    { name: "Fogg Behavior Model", section: "fogg-model", keywords: "motivation ability prompt trigger diagnosis" },
    { name: "Nudge Design", section: "nudge-theory", keywords: "nudge default social proof salience feedback simplification" },
    { name: "EAST Framework", section: "nudge-theory", keywords: "EAST easy attractive social timely Behavioural Insights Team nudge checklist" },
    { name: "Habit Loop Design", section: "habit-loops", keywords: "cue routine reward habit streak engagement" },
    { name: "Variable Reward Patterns", section: "habit-loops", keywords: "variable reward unpredictable reinforcement engagement" },
    { name: "Social Proof", section: "social-influence", keywords: "testimonials ratings numbers activity endorsement" },
    { name: "Fresh Start Effect", section: "social-influence", keywords: "fresh start temporal landmark timing Monday new year birthday Milkman" },
    { name: "Reciprocation", section: "principles-of-influence", keywords: "reciprocity give before ask free trial Gamberini reward obligation" },
    { name: "Commitment and Consistency", section: "principles-of-influence", keywords: "commitment consistency small ask graduated engagement Yelp LinkedIn" },
    { name: "Liking", section: "principles-of-influence", keywords: "liking similarity familiarity cooperation association photos De Vries" },
    { name: "Authority", section: "principles-of-influence", keywords: "authority credentials uniform expert endorsement Bickman compliance" },
    { name: "Dark Pattern Taxonomy", section: "dark-patterns", keywords: "roach motel confirm-shaming misdirection forced continuity" },
    { name: "Ethics Decision Framework", section: "ethical-framework", keywords: "transparency aligned interest informed choice reversibility" }
  ]
},
{
    topic: "Brand Strategy & Identity",
    url: "topics/brand-strategy.html",
    tier: "Tier 1",
  discipline: "MK",
    sections: [
      { title: "What it is & why it matters", id: "what-brand-strategy-is", type: "theory", keywords: "brand strategy identity perception trust recognition equity" },
      { title: "Brand vs branding", id: "brand-vs-branding", type: "theory", keywords: "brand branding difference input output perception activities" },
      { title: "Brand equity", id: "brand-equity", type: "theory", keywords: "brand equity awareness associations quality loyalty compound flywheel" },
      { title: "Core methods", id: "core-methods", type: "practical", keywords: "brand canvas archetype voice tone architecture naming audit" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "brand guidelines kit logo color typography voice photography templates" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "brand from scratch voice framework architecture decision case study" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "mistakes refresh values awards inconsistency touchpoints" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "startup established measuring brand health NPS awareness further reading Neumeier Wheeler Miller" }
    ],
    methods: [
      { name: "Brand Strategy Canvas", section: "core-methods", keywords: "purpose values personality audience promise differentiation canvas" },
      { name: "Brand Archetype Selection", section: "core-methods", keywords: "archetype Jung personality Creator Ruler Hero Rebel Sage Jester" },
      { name: "Voice & Tone Framework", section: "core-methods", keywords: "voice tone attributes vocabulary context this not that examples" },
      { name: "Brand Architecture", section: "core-methods", keywords: "branded house house of brands endorsed sub-brand product portfolio" },
      { name: "Brand Naming Process", section: "core-methods", keywords: "naming descriptive invented metaphorical trademark domain screening" },
      { name: "Brand Audit", section: "core-methods", keywords: "audit touchpoints consistency quality alignment score gaps" }
    ]
  },
{
  topic: "Cognitive and Emotional Design",
  url: "topics/cognitive-emotional-design.html",
  tier: "Tier 2",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "cognitive emotional design thinking feeling behavior" },
    { title: "Mental models", id: "mental-models", type: "theory", keywords: "mental model conceptual model expectation alignment intuitive" },
    { title: "Cognitive load", id: "cognitive-load", type: "theory", keywords: "cognitive load intrinsic extraneous germane progressive disclosure" },
    { title: "Affect, emotion & processing", id: "affect-emotion", type: "theory", keywords: "affect emotion cognition processing chain mood meter valence Norman positive negative" },
    { title: "Cognitive biases", id: "biases", type: "practical", keywords: "anchoring peak-end serial position framing choice overload bias priming heuristic" },
    { title: "Emotional design", id: "emotional-design", type: "practical", keywords: "visceral behavioral reflective Norman emotion feeling delight" },
    { title: "Achieving delight", id: "achieving-delight", type: "practical", keywords: "delight hierarchy user needs surface deep aesthetics joy gamification core drives Walter Chou Fetell Lee" },
    { title: "Building trust", id: "trust", type: "practical", keywords: "trust credibility benevolence disposition commitment levels cognitive ease imagery transparency prominence interpretation Fogg" },
    { title: "Measuring trust & emotion", id: "measuring-trust", type: "practical", keywords: "trust measurement observation protocol perspective-getting empathy survey flawed research SEQ" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "cognitive load review checklist trust audit credibility benevolence" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Duolingo Booking.com Slack Geblod Lyft Uber surge framing progressive disclosure" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "manipulation bias ethics oversimplify negative emotions imposing delight measuring trust" },
    { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "Kahneman System 1 System 2 bias codex von Restorff Zeigarnik reading Walter Chou Cialdini Ariely" }
  ],
  methods: [
    { name: "Cognitive Load Audit", section: "templates", keywords: "cognitive load review extraneous intrinsic" },
    { name: "Mental Model Mapping", section: "mental-models", keywords: "mental model expectation alignment interview" },
    { name: "Emotional Journey Mapping", section: "emotional-design", keywords: "visceral behavioral reflective emotion peak-end" },
    { name: "Delight Framework", section: "emotional-design", keywords: "delight visceral behavioral reflective surprise pleasure" },
    { name: "Bias Checklist Review", section: "biases", keywords: "anchoring framing choice overload serial position" },
    { name: "Trust as Design Quality for AI", section: "trust", keywords: "AI trust transparency control consistency failure support calibration" },
    { name: "Affect-Cognition-Emotion Chain", section: "affect-emotion", keywords: "affect emotion cognition processing chain positive negative valence System 1" },
    { name: "Mood Meter", section: "affect-emotion", keywords: "mood meter pleasantness energy emotion vocabulary Brackett" },
    { name: "Priming", section: "biases", keywords: "priming implicit memory stimulus associative imagery Bateson" },
    { name: "Hierarchy of User Needs", section: "achieving-delight", keywords: "hierarchy needs functionality reliability usability pleasure Walter" },
    { name: "Surface vs Deep Delight", section: "achieving-delight", keywords: "surface delight deep delight local holistic animation workflow" },
    { name: "Aesthetics of Joy", section: "achieving-delight", keywords: "aesthetics joy energy abundance freedom harmony play surprise transcendence Fetell Lee" },
    { name: "Gamification Core Drives", section: "achieving-delight", keywords: "gamification Octalysis core drives meaning accomplishment empowerment ownership scarcity Chou" },
    { name: "Disposition to Trust", section: "trust", keywords: "disposition trust truster mistruster personality culture Rotter" },
    { name: "Experiential Commitment Levels", section: "trust", keywords: "commitment levels trust escalation pacing onboarding data requests" },
    { name: "Cognitive Ease for Credibility", section: "trust", keywords: "cognitive ease credibility legibility clarity Kahneman" },
    { name: "Meaningful Imagery for Trust", section: "trust", keywords: "imagery trust visual first impression credibility Lindgaard" },
    { name: "Transparency and Kindness Signals", section: "trust", keywords: "benevolence transparency pricing visibility kindness suspicion" },
    { name: "Humor in Microcopy", section: "trust", keywords: "humor microcopy benevolence tone copy error messages Aaker" },
    { name: "Prominence-Interpretation Theory", section: "trust", keywords: "prominence interpretation credibility Fogg five-second test visibility" },
    { name: "Trust Observation Protocol", section: "measuring-trust", keywords: "trust measurement observation survey flawed Lumsden Fogg SEQ task" },
    { name: "Perspective-Getting", section: "measuring-trust", keywords: "perspective-getting empathy observation interview user research" },
    { name: "Trust Audit Checklist", section: "templates", keywords: "trust audit credibility benevolence checklist five-second test" }
  ]
},
{
  topic: "Community Building & Developer Marketing",
  url: "topics/community-devrel.html",
  tier: "Tier 3",
  discipline: "MK",
  sections: [
    { title: "What community building is", id: "what-and-why", type: "theory", keywords: "community building developer marketing DevRel compound" },
    { title: "Community strategy", id: "community-strategy", type: "practical", keywords: "community strategy canvas purpose audience platform health metrics" },
    { title: "Developer relations", id: "developer-marketing", type: "practical", keywords: "DevRel developer evangelism documentation education community" },
    { title: "Community-led growth", id: "community-led-growth", type: "practical", keywords: "community-led growth network effects word-of-mouth referral" },
    { title: "Community building in practice", id: "examples", type: "examples", keywords: "developer community user community honest comparison trust" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "purpose value developer trust total members staffing" }
  ],
  methods: [
    { name: "Community Strategy Canvas", section: "community-strategy", keywords: "community purpose audience platform content business model" },
    { name: "Community Health Metrics", section: "community-strategy", keywords: "active rate user-to-user response return business impact" },
    { name: "DevRel Program Design", section: "developer-marketing", keywords: "DevRel education community evangelism documentation" },
    { name: "Developer Evangelism Playbook", section: "developer-marketing", keywords: "evangelism conference open-source comparison content" },
    { name: "Community-Led Growth Framework", section: "community-led-growth", keywords: "CLG network effects invitation graduation attribution" }
  ]
},
{
    topic: "Competitive Analysis & Market Positioning",
    url: "topics/competitive-analysis.html",
    tier: "Tier 1",
  discipline: "PM",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "competitive analysis alternatives differentiation positioning landscape" },
      { title: "Competitive analysis methods", id: "competitive-methods", type: "practical", keywords: "feature matrix market map win loss teardown response playbook positioning" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "competitive intelligence baseline checklist" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "HEY Figma Linear positioning differentiation" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "feature parity obsession direct competitors only" },
      { title: "When to analyze", id: "when-to-use", type: "practical", keywords: "deep analysis monitoring ongoing pre-PMF" }
    ],
    methods: [
      { name: "Competitive Feature Matrix", section: "competitive-methods", keywords: "feature matrix grid capabilities user needs comparison" },
      { name: "Market Map 2x2", section: "competitive-methods", keywords: "market map 2x2 positioning whitespace axes dimensions" },
      { name: "Win/Loss Analysis", section: "competitive-methods", keywords: "win loss interview decision drivers patterns quarterly" },
      { name: "Competitive Teardown", section: "competitive-methods", keywords: "teardown signup use real tasks onboarding failure delighters" },
      { name: "Competitive Response Playbook", section: "competitive-methods", keywords: "response ignore monitor respond tiers reactive protocol" },
      { name: "Positioning Statement (Dunford)", section: "competitive-methods", keywords: "April Dunford positioning alternatives unique attributes value target category" }
    ]
  },
{
  topic: "Complex Application & Enterprise UX",
  url: "topics/complex-app-enterprise-ux.html",
  tier: "Tier 2",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "complex application enterprise expert users specialized domain generalist nonlinear unstructured" },
    { title: "Five layers of complexity", id: "five-layers", type: "theory", keywords: "integrative informational intent environmental institutional complexity layers framework" },
    { title: "Expert users", id: "expert-users", type: "practical", keywords: "expert legacy legend learner archetype proficiency satisficing training resistance" },
    { title: "Domain exclusiveness", id: "domain-exclusiveness", type: "theory", keywords: "domain exclusiveness specialization training knowledge gap outsiders" },
    { title: "Managing complexity", id: "complexity-management", type: "practical", keywords: "complexity audit essential incidental progressive disclosure staged responsive enabling density" },
    { title: "Research methods", id: "research-methods", type: "practical", keywords: "contextual inquiry work-domain analysis cooperative usability testing expert walkthrough requirements recruiting" },
    { title: "Domain immersion", id: "domain-immersion", type: "practical", keywords: "domain immersion shadow vocabulary mental model" },
    { title: "Patterns: learning & efficiency", id: "patterns-learning", type: "practical", keywords: "safe exploration incremental construction route knowledge accelerators tooltips customization bulk actions automation" },
    { title: "Patterns: inquiry & workflow", id: "patterns-workflow", type: "practical", keywords: "patterns of inquiry flexible pathways interruption resumption long waits demi-analysis visual momentum" },
    { title: "Patterns: information & sensemaking", id: "patterns-information", type: "practical", keywords: "progressive disclosure clutter information layering visual salience alerts errors confirmation" },
    { title: "Evaluation instruments", id: "evaluation-instruments", type: "practical", keywords: "NASA-TLX SART workload situational awareness post-task measurement" },
    { title: "Complex workflows", id: "workflows", type: "practical", keywords: "multi-tool workflow mapping context switching session persistence ecosystem visual momentum" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Bloomberg Terminal Figma first-responder ERP satisficing density" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "demo workflow simplifying power generalist methods ecosystem" }
  ],
  methods: [
    { name: "Five-Layer Complexity Framework", section: "five-layers", keywords: "integrative informational intent environmental institutional complexity diagnosis" },
    { name: "Expert User Archetype Framework", section: "expert-users", keywords: "legacy legend learner archetype expert marginalization" },
    { name: "Domain Exclusiveness Model", section: "domain-exclusiveness", keywords: "domain exclusiveness specialization training knowledge gap" },
    { name: "Complexity Audit", section: "complexity-management", keywords: "essential incidental complexity mapping screen space" },
    { name: "Clutter-Capability Balance", section: "complexity-management", keywords: "progressive disclosure staged responsive enabling role-based customizable density" },
    { name: "Contextual Inquiry (Complex Domains)", section: "research-methods", keywords: "contextual inquiry field study observation environment indicators poor support" },
    { name: "Work-Domain Analysis", section: "research-methods", keywords: "work-domain analysis cognitive work analysis abstraction hierarchy Vicente constraints" },
    { name: "Cooperative Usability Testing", section: "research-methods", keywords: "cooperative usability testing interaction interpretation video replay domain expert" },
    { name: "Group-Based Expert Walkthrough", section: "research-methods", keywords: "expert walkthrough domain experts evaluators pluralistic validity thoroughness" },
    { name: "Requirements Specification (Complex Domains)", section: "research-methods", keywords: "requirements specification engineers multiple methods incremental testing" },
    { name: "Expert User Recruiting", section: "research-methods", keywords: "recruiting expert users relationships trade shows internal proxy" },
    { name: "Domain Immersion Method", section: "domain-immersion", keywords: "shadow observe vocabulary mental model 80/20" },
    { name: "Safe Exploration Patterns", section: "patterns-learning", keywords: "incremental construction route knowledge spatial predictability preview" },
    { name: "Novice-to-Expert Transition", section: "patterns-learning", keywords: "satisficing accelerators tooltips vocabulary extension intermodal calm messaging" },
    { name: "Customization and Efficiency Patterns", section: "patterns-learning", keywords: "customization personalization bulk actions automation adaptability" },
    { name: "Flexible Pathway Patterns", section: "patterns-workflow", keywords: "patterns of inquiry flexibility wizards decision tracking multiple pathways" },
    { name: "Interruption and Resumption Patterns", section: "patterns-workflow", keywords: "task resumption historical content access points persistent dialogues comments" },
    { name: "Long-Wait Design Patterns", section: "patterns-workflow", keywords: "progress indicators background processing demi-analysis completion context" },
    { name: "Visual Momentum Patterns", section: "patterns-workflow", keywords: "visual momentum spatial dedication dual-function menus modal caution transitions" },
    { name: "Information Reduction Patterns", section: "patterns-information", keywords: "progressive disclosure contextual menus external memory icons clutter" },
    { name: "Information Layering Patterns", section: "patterns-information", keywords: "super tooltips altered states return paths domain conventions defaults" },
    { name: "Visual Salience and Alerting Patterns", section: "patterns-information", keywords: "visual salience alerts errors confirmation dialogues non-data pixels" },
    { name: "Workload and Awareness Measurement", section: "evaluation-instruments", keywords: "NASA-TLX SART workload situational awareness measurement post-task" },
    { name: "Multi-Tool Workflow Mapping", section: "workflows", keywords: "multi-tool context switching parallel session persistence ecosystem" },
    { name: "High-Stakes Error Prevention", section: "workflows", keywords: "confirmation scaling undo audit trails guardrails" }
  ]
},
{
  topic: "Content Accessibility",
  url: "topics/content-accessibility.html",
  tier: "Tier 2",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "content accessibility inclusive alt text captions plain language" },
    { title: "Alt text", id: "alt-text", type: "practical", keywords: "alt text images informative decorative functional complex" },
    { title: "Captions and transcripts", id: "captions", type: "practical", keywords: "captions transcripts audio description media accessibility" },
    { title: "Accessible documents", id: "accessible-documents", type: "practical", keywords: "PDF slides tables tagged reading order screen reader" },
    { title: "Plain language accessibility", id: "plain-language-accessibility", type: "practical", keywords: "reading level plain language cognitive accessibility health literacy" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "BBC accessible broadcast scale" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "alt text afterthought" }
  ],
  methods: [
    { name: "Alt Text Decision Tree", section: "alt-text", keywords: "alt text informative decorative functional complex" },
    { name: "Caption & Transcript Workflow", section: "captions", keywords: "captions transcripts audio description workflow" },
    { name: "Accessible Document Checklist", section: "accessible-documents", keywords: "PDF slides tables tagged reading order" },
    { name: "Reading Level Guidelines by Audience", section: "plain-language-accessibility", keywords: "reading level plain language health legal general" }
  ]
},
{
  topic: "Content Analytics & Performance",
  url: "topics/content-analytics-performance.html",
  tier: "Tier 2",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "content analytics measurement performance pageviews outcomes" },
    { title: "Content KPI framework", id: "kpi-framework", type: "practical", keywords: "KPI metrics awareness consideration support product" },
    { title: "Engagement metrics", id: "engagement-metrics", type: "practical", keywords: "scroll depth engaged time read-through completion return rate" },
    { title: "Content scoring", id: "content-scoring", type: "practical", keywords: "scoring model prioritization traffic engagement outcome freshness" },
    { title: "Content attribution", id: "attribution", type: "practical", keywords: "attribution first-touch last-touch multi-touch content-influenced" },
    { title: "Content decay", id: "content-decay", type: "practical", keywords: "decay detection lifecycle ROI calculation maintenance" },
    { title: "Performance dashboard", id: "dashboard", type: "practical", keywords: "dashboard reporting found consumed outcomes health" },
    { title: "A/B testing", id: "ab-testing", type: "practical", keywords: "A/B testing headlines structure format experimentation" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "KPI definition template" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Intercom HubSpot content decay optimization" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "vanity metrics correlation causation wrong metric" }
  ],
  methods: [
    { name: "Content KPI Framework", section: "kpi-framework", keywords: "KPI metrics awareness consideration support product" },
    { name: "Read-Through Rate Analysis", section: "engagement-metrics", keywords: "scroll depth engaged time completion return" },
    { name: "Content Scoring Model", section: "content-scoring", keywords: "scoring prioritization traffic engagement outcome freshness" },
    { name: "Content Attribution Analysis", section: "attribution", keywords: "attribution first-touch last-touch multi-touch influenced" },
    { name: "Content Decay Detection", section: "content-decay", keywords: "decay detection signals alerts seasonal competitive" },
    { name: "Content ROI Calculation", section: "content-decay", keywords: "ROI cost value time horizon compound" },
    { name: "Content Performance Dashboard Template", section: "dashboard", keywords: "dashboard reporting health trends" },
    { name: "Content A/B Testing", section: "ab-testing", keywords: "A/B testing headlines structure format" }
  ]
},
{
  topic: "Content Auditing & Governance",
  url: "topics/content-auditing-governance.html",
  tier: "Tier 1",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "content governance audit decay ownership maintenance" },
    { title: "Content auditing", id: "content-audit", type: "practical", keywords: "inventory audit ROT redundant outdated trivial health score" },
    { title: "Governance models", id: "governance-models", type: "practical", keywords: "centralized decentralized federated hybrid ownership lifecycle" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "GOV.UK government content standards federated" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "governance without maintenance orphaned content" }
  ],
  methods: [
    { name: "Content Inventory & Audit Methodology", section: "content-audit", keywords: "inventory audit quantitative qualitative ROT" },
    { name: "Content Health Score", section: "content-audit", keywords: "health score freshness accuracy completeness tracking" },
    { name: "Governance Model Selection", section: "governance-models", keywords: "centralized decentralized federated hybrid" },
    { name: "Content Ownership Matrix", section: "governance-models", keywords: "owner creator reviewer maintainer retire" },
    { name: "Content Lifecycle Framework", section: "governance-models", keywords: "lifecycle create review publish maintain archive retire" }
  ]
},
{
  topic: "The Content Career",
  url: "topics/content-career.html",
  tier: "Tier 4",
  discipline: "CS",
  sections: [
    { title: "What the content career looks like", id: "what-and-why", type: "theory", keywords: "content career specializations roles titles non-linear" },
    { title: "Content career map", id: "career-map", type: "practical", keywords: "career map strategy design technical writing operations" },
    { title: "Choosing a specialization", id: "specialization", type: "practical", keywords: "specialization assessment strategy design writing operations" },
    { title: "Building a portfolio", id: "portfolio", type: "practical", keywords: "portfolio case studies samples process NDA" },
    { title: "Interview preparation", id: "interview-prep", type: "practical", keywords: "interview portfolio review writing exercise strategic discussion" },
    { title: "T-shaped professional", id: "t-shaped", type: "practical", keywords: "T-shaped depth breadth adjacent skills development" },
    { title: "Content careers in the AI era", id: "ai-era", type: "practical", keywords: "AI era skills audit automation judgment editorial" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "journalism teaching career transition pipeline" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "tools identity early specialization AI shift" }
  ],
  methods: [
    { name: "Content Career Map", section: "career-map", keywords: "career map strategy design technical writing operations roles" },
    { name: "Specialization Assessment", section: "specialization", keywords: "specialization strategy design writing operations assessment" },
    { name: "Content Portfolio Guide", section: "portfolio", keywords: "portfolio case studies process outcome NDA" },
    { name: "Content Interview Prep", section: "interview-prep", keywords: "interview portfolio writing exercise strategic discussion" },
    { name: "T-Shaped Content Professional Framework", section: "t-shaped", keywords: "T-shaped depth breadth adjacent skills" },
    { name: "AI-Era Content Skills Audit", section: "ai-era", keywords: "AI skills audit valuable augmented automated judgment" }
  ]
},
{
  topic: "Content for Complex Domains",
  url: "topics/content-complex-domains.html",
  tier: "Tier 2",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "complex domains legal healthcare financial government compliance clarity" },
    { title: "Regulatory simplification", id: "simplification", type: "practical", keywords: "regulatory simplification layering plain language style guide" },
    { title: "Risk communication", id: "risk-communication", type: "practical", keywords: "risk communication absolute numbers context framing" },
    { title: "Expert-to-layperson translation", id: "expert-to-layperson", type: "practical", keywords: "expert layperson translation concept bridge curse of knowledge" },
    { title: "Domain-specific patterns", id: "domain-specific", type: "practical", keywords: "medical financial legal disclosure consent" },
    { title: "Compliance auditing", id: "compliance-audit", type: "practical", keywords: "compliance audit regulatory calendar disclosure inventory" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "complex domain content review checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "GOV.UK Mayo Clinic layered content" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "simplifying accuracy reading level legal ownership" }
  ],
  methods: [
    { name: "Regulatory Content Simplification", section: "simplification", keywords: "regulatory simplification layering plain language" },
    { name: "Domain-Specific Style Guide Creation", section: "simplification", keywords: "style guide terminology accuracy thresholds" },
    { name: "Risk Communication Patterns", section: "risk-communication", keywords: "risk absolute numbers context framing visual" },
    { name: "Expert-to-Layperson Translation Method", section: "expert-to-layperson", keywords: "expert layperson concept bridge validation" },
    { name: "Medical Content Guidelines", section: "domain-specific", keywords: "medical clinical consumer health patient" },
    { name: "Financial Literacy Content Patterns", section: "domain-specific", keywords: "financial literacy concrete comparisons disclosure" },
    { name: "Legal Plain Language Framework", section: "domain-specific", keywords: "legal plain language active voice defined terms" },
    { name: "Disclosure & Consent Content Design", section: "domain-specific", keywords: "disclosure consent layered just-in-time withdrawal" },
    { name: "Compliance Content Audit", section: "compliance-audit", keywords: "compliance audit regulatory calendar inventory" }
  ]
},
{
  topic: "Content Design & Readability",
  url: "topics/content-design-readability.html",
  tier: "Tier 1",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "content design readability scanning reading comprehension" },
    { title: "Scanning patterns", id: "scanning-patterns", type: "practical", keywords: "F-pattern layer-cake spotted commitment scanning eye-tracking" },
    { title: "Plain language", id: "plain-language", type: "practical", keywords: "plain language readability Flesch-Kincaid SMOG active voice" },
    { title: "Formatting", id: "formatting", type: "practical", keywords: "chunking heading hierarchy paragraphs lists callouts mobile" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "GOV.UK content design plain language government" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "writing for author not reader expert assumptions" }
  ],
  methods: [
    { name: "Scanning Pattern Design", section: "scanning-patterns", keywords: "F-pattern layer-cake spotted commitment scanning" },
    { name: "Plain Language Checklist", section: "plain-language", keywords: "plain language short sentences active voice concrete" },
    { name: "Readability Scoring", section: "plain-language", keywords: "Flesch-Kincaid SMOG grade level readability" },
    { name: "Content Chunking Framework", section: "formatting", keywords: "chunking headings paragraphs lists callouts emphasis" },
    { name: "Mobile Reading Optimization", section: "formatting", keywords: "mobile reading short paragraphs collapsible front-loaded" }
  ]
},
{
  topic: "Content & Design Systems",
  url: "topics/content-design-systems.html",
  tier: "Tier 2",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "content design systems consistency patterns voice tone" },
    { title: "Content pattern library", id: "content-patterns", type: "practical", keywords: "content patterns error messages empty states confirmation success loading" },
    { title: "Voice and tone", id: "voice-tone", type: "practical", keywords: "voice tone tokens brand personality context contribution" },
    { title: "Naming conventions", id: "naming", type: "practical", keywords: "naming conventions features actions navigation glossary" },
    { title: "Content components", id: "content-components", type: "practical", keywords: "content components anatomy variants slots linting" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "content integration checklist design system" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Shopify Polaris Atlassian content patterns" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "guidelines nobody reads abstract voice standards review" }
  ],
  methods: [
    { name: "Content Pattern Library", section: "content-patterns", keywords: "patterns error empty state confirmation success" },
    { name: "Error Message Pattern Library", section: "content-patterns", keywords: "error validation system permission not-found" },
    { name: "Voice & Tone Token System", section: "voice-tone", keywords: "voice tone tokens brand context mapping" },
    { name: "Content Contribution Guidelines", section: "voice-tone", keywords: "contribution guidelines non-writers decision trees" },
    { name: "Naming Convention Framework", section: "naming", keywords: "naming features actions navigation glossary" },
    { name: "Content Component Design", section: "content-components", keywords: "components anatomy variants slots composition" },
    { name: "Content Linting Rules", section: "content-components", keywords: "linting automation terminology character limits" }
  ]
},
{
  topic: "Content for AI Systems",
  url: "topics/content-for-ai-systems.html",
  tier: "Tier 2",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "AI content governance structured labeling training data" },
    { title: "AI content governance", id: "ai-governance", type: "practical", keywords: "AI governance quality tiers review attribution brand voice guardrails" },
    { title: "Content for AI consumption", id: "content-for-consumption", type: "practical", keywords: "RAG retrieval labeling chunks metadata semantic clarity" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "knowledge base AI-ready documentation accuracy" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "garbage in garbage out outdated training data" }
  ],
  methods: [
    { name: "AI Content Governance Framework", section: "ai-governance", keywords: "governance quality tiers review attribution policy" },
    { name: "Brand Voice Guardrails for AI", section: "ai-governance", keywords: "voice guardrails anti-examples prompt templates scoring" },
    { name: "Content Labeling for ML/RAG", section: "content-for-consumption", keywords: "labeling RAG chunks metadata semantic retrieval" }
  ]
},
{
  topic: "Content Leadership & Team Building",
  url: "topics/content-leadership.html",
  tier: "Tier 4",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "content leadership team building organizational value" },
    { title: "Team structure", id: "team-structure", type: "practical", keywords: "team structure stage solo small growing scaled org chart" },
    { title: "Hiring", id: "hiring", type: "practical", keywords: "hiring rubric portfolio writing exercise content strategist" },
    { title: "Career paths", id: "career-paths", type: "practical", keywords: "career ladder IC management levels skills assessment" },
    { title: "Agency and freelancer", id: "agency-freelancer", type: "practical", keywords: "agency freelancer outsource quality onboarding" },
    { title: "Business case", id: "business-case", type: "practical", keywords: "business case ROI cost reduction revenue risk competitive" },
    { title: "Team onboarding", id: "onboarding", type: "practical", keywords: "onboarding week-by-week context workflow contribution" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Shopify Atlassian content design center of excellence" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "writers vs strategists service desk" }
  ],
  methods: [
    { name: "Content Team Structure by Stage", section: "team-structure", keywords: "team structure solo small growing scaled" },
    { name: "Content Hiring Rubric", section: "hiring", keywords: "hiring portfolio writing exercise evaluation" },
    { name: "Content Career Ladder", section: "career-paths", keywords: "career ladder IC management levels promotion" },
    { name: "Content Skills Assessment", section: "career-paths", keywords: "skills craft strategic operational domain" },
    { name: "Agency & Freelancer Management Framework", section: "agency-freelancer", keywords: "agency freelancer outsource quality briefing" },
    { name: "Content Function Business Case", section: "business-case", keywords: "business case ROI cost revenue risk competitive" },
    { name: "Content Team Onboarding", section: "onboarding", keywords: "onboarding context workflow contribution independence" }
  ]
},
{
  topic: "Content Localization & Translation",
  url: "topics/content-localization-translation.html",
  tier: "Tier 2",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "localization translation transcreation cultural adaptation global content" },
    { title: "Localization readiness", id: "readiness-audit", type: "practical", keywords: "readiness audit infrastructure CMS locale" },
    { title: "Translation, localization, transcreation", id: "decision-framework", type: "practical", keywords: "translation localization transcreation decision framework" },
    { title: "Translation workflow", id: "translation-workflow", type: "practical", keywords: "translation workflow TMS translation memory machine translation" },
    { title: "Terminology management", id: "terminology", type: "practical", keywords: "terminology glossary terms consistency enforcement" },
    { title: "Cultural adaptation", id: "cultural-adaptation", type: "practical", keywords: "cultural adaptation RTL right-to-left visual content formats" },
    { title: "Locale-aware content modeling", id: "locale-content-modeling", type: "practical", keywords: "content model locale inheritance fallback variants" },
    { title: "Localization QA", id: "localization-qa", type: "practical", keywords: "QA linguistic functional cultural regression testing" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "localization readiness checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Netflix Airbnb localization transcreation" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "afterthought machine translation pseudo-localization" }
  ],
  methods: [
    { name: "Localization Readiness Audit", section: "readiness-audit", keywords: "readiness audit infrastructure assessment" },
    { name: "Translation vs. Transcreation Decision Framework", section: "decision-framework", keywords: "translation localization transcreation decision" },
    { name: "Translation Workflow Design", section: "translation-workflow", keywords: "workflow TMS process review integration" },
    { name: "Translation Memory Strategy", section: "translation-workflow", keywords: "TM translation memory reuse segments" },
    { name: "Terminology Management System", section: "terminology", keywords: "glossary terms consistency enforcement" },
    { name: "Cultural Adaptation Checklist", section: "cultural-adaptation", keywords: "cultural visual humor formats length" },
    { name: "Right-to-Left Content Design", section: "cultural-adaptation", keywords: "RTL Arabic Hebrew mirroring bidirectional" },
    { name: "Locale-Aware Content Modeling", section: "locale-content-modeling", keywords: "content model locale inheritance fallback" },
    { name: "Localization QA Process", section: "localization-qa", keywords: "QA linguistic functional cultural regression" }
  ]
},
{
    topic: "Content Marketing & Strategy",
    url: "topics/content-marketing.html",
    tier: "Tier 1",
  discipline: "MK",
    sections: [
      { title: "What it is & why it matters", id: "what-content-marketing-is", type: "theory", keywords: "content marketing strategy value audience attract engage retain" },
      { title: "Content vs advertising", id: "content-vs-advertising", type: "theory", keywords: "content advertising earn rent attention compound owned asset" },
      { title: "Core methods", id: "core-methods", type: "practical", keywords: "content strategy pillars editorial calendar content-market fit repurposing" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "content brief audience keyword takeaway CTA distribution success" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "content pillar measurement pipeline pageviews case study" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "company stage AI future content quality further reading Sheridan Halvorson Handley" }
    ],
    methods: [
      { name: "Content Strategy Framework", section: "core-methods", keywords: "audience questions format distribution measurement five questions foundation" },
      { name: "Content Pillar Model", section: "core-methods", keywords: "pillar cluster topical authority SEO internal linking architecture themes" },
      { name: "Editorial Calendar", section: "core-methods", keywords: "calendar cadence planning schedule publishing sustainable reactive planned" },
      { name: "Content-Market Fit Assessment", section: "core-methods", keywords: "traffic quality engagement depth pipeline influence ICP validation" },
      { name: "Content Repurposing Workflow", section: "core-methods", keywords: "repurpose atomize pillar blog social email infographic video" }
    ]
  },
{
  topic: "Content Ops Tooling & CMS Strategy",
  url: "topics/content-ops-tooling.html",
  tier: "Tier 3",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "content ops tooling CMS technology stack" },
    { title: "CMS evaluation", id: "cms-evaluation", type: "practical", keywords: "CMS evaluation headless traditional hybrid selection" },
    { title: "Content tool stack", id: "content-tool-stack", type: "practical", keywords: "tool stack audit API requirements creation assets workflow" },
    { title: "Workflow automation", id: "workflow-automation", type: "practical", keywords: "workflow automation safe automate editorial control" },
    { title: "CMS migration", id: "migration", type: "practical", keywords: "migration planning content audit URL strategy rollback cutover" },
    { title: "Vendor evaluation", id: "vendor-selection", type: "practical", keywords: "vendor selection scorecard proof of concept lock-in cost" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "CMS selection requirements checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Spotify headless Washington Post Arc XP" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "CMS before strategy headless trendy migrate without audit" }
  ],
  methods: [
    { name: "CMS Evaluation Framework", section: "cms-evaluation", keywords: "CMS evaluation content model editorial API workflow scalability cost" },
    { name: "Headless vs. Traditional vs. Hybrid Decision Matrix", section: "cms-evaluation", keywords: "headless traditional hybrid CMS architecture decision" },
    { name: "Content Tool Stack Audit", section: "content-tool-stack", keywords: "tool stack audit creation assets workflow analytics" },
    { name: "Content API Requirements", section: "content-tool-stack", keywords: "API query localization preview webhooks performance" },
    { name: "Content Workflow Automation Design", section: "workflow-automation", keywords: "workflow automation notifications scheduling validation" },
    { name: "CMS Migration Planning Template", section: "migration", keywords: "migration audit content model URLs phasing rollback" },
    { name: "Vendor Selection Scorecard", section: "vendor-selection", keywords: "vendor scorecard proof of concept references lock-in cost" }
  ]
},
{
  topic: "Content Strategy Foundations",
  url: "topics/content-strategy-foundations.html",
  tier: "Tier 1",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "content strategy planning governance useful usable system-level" },
    { title: "Content strategy frameworks", id: "content-strategy-canvas", type: "practical", keywords: "canvas pillar content-market fit mission audience metrics" },
    { title: "Content as product", id: "content-as-product", type: "theory", keywords: "content product value proposition lifecycle ROI business case" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "content strategy one-pager template" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Stripe documentation developer competitive advantage" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "content without strategy confusing content marketing" }
  ],
  methods: [
    { name: "Content Strategy Canvas", section: "content-strategy-canvas", keywords: "canvas mission audience pillars types metrics governance" },
    { name: "Content Pillar Framework", section: "content-strategy-canvas", keywords: "pillars themes user demand business relevance authority" },
    { name: "Content-Market Fit Assessment", section: "content-strategy-canvas", keywords: "content-market fit demand signals organic growth" },
    { name: "Content Value Proposition", section: "content-as-product", keywords: "value proposition lifecycle ROI business case" }
  ]
},
{
  topic: "Content Strategy Frameworks",
  url: "topics/content-strategy-frameworks-ref.html",
  tier: "Tier 4",
  discipline: "CS",
  sections: [
    { title: "Why a frameworks reference matters", id: "what-and-why", type: "theory", keywords: "content strategy frameworks reference compendium" },
    { title: "Strategy and planning", id: "strategy-frameworks", type: "theory", keywords: "Brain Traffic Quad COPE content pillars hub-and-spoke" },
    { title: "Content design and creation", id: "content-design-frameworks", type: "theory", keywords: "content design Sarah Richards JTBD topic cluster" },
    { title: "Governance and maturity", id: "governance-frameworks", type: "theory", keywords: "maturity assessment adaptive content governance" },
    { title: "Choosing frameworks", id: "choosing-frameworks", type: "practical", keywords: "framework selection guide choosing combining" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "GOV.UK content design national scale" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "framework substitute thinking overload" }
  ],
  methods: [
    { name: "Brain Traffic Content Strategy Quad", section: "strategy-frameworks", keywords: "Brain Traffic Quad substance structure workflow governance" },
    { name: "COPE Framework", section: "strategy-frameworks", keywords: "COPE create once publish everywhere structured" },
    { name: "Content Pillar Model", section: "strategy-frameworks", keywords: "pillars themes demand relevance authority" },
    { name: "Hub-and-Spoke Content Model", section: "strategy-frameworks", keywords: "hub spoke topical authority internal linking" },
    { name: "Content Design Method", section: "content-design-frameworks", keywords: "content design Sarah Richards user needs" },
    { name: "Jobs-to-be-Done for Content", section: "content-design-frameworks", keywords: "JTBD progress job hire content purpose" },
    { name: "Topic Cluster Model", section: "content-design-frameworks", keywords: "topic cluster search authority SEO" },
    { name: "Content Maturity Assessment", section: "governance-frameworks", keywords: "maturity assessment levels ad hoc strategic" },
    { name: "Adaptive Content Framework", section: "governance-frameworks", keywords: "adaptive structured context-aware personalization" }
  ]
},
{
  topic: "Content for Conversational Interfaces",
  url: "topics/conversational-content.html",
  tier: "Tier 3",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "conversational interfaces chatbot voice assistant dialogue" },
    { title: "Conversation design", id: "conversation-design", type: "practical", keywords: "conversation design framework dialogue flow mapping intents" },
    { title: "Personality and voice", id: "personality", type: "practical", keywords: "chatbot personality canvas traits tone adaptation" },
    { title: "Error and fallback", id: "error-fallback", type: "practical", keywords: "error fallback no-match no-input out-of-scope graceful" },
    { title: "Voice interface content", id: "voice-interfaces", type: "practical", keywords: "voice interface audio-only memory prosody" },
    { title: "Conversation analytics", id: "conversational-analytics", type: "practical", keywords: "analytics task completion fallback rate escalation satisfaction" },
    { title: "Managing content at scale", id: "content-management", type: "practical", keywords: "content inventory variant management deprecation testing" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Google Assistant Woebot personality therapeutic" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "Turing test scripting framework" }
  ],
  methods: [
    { name: "Conversation Design Framework", section: "conversation-design", keywords: "macro meso micro conversation architecture" },
    { name: "Dialogue Flow Mapping", section: "conversation-design", keywords: "dialogue flow intents slot filling confirmation branching" },
    { name: "Chatbot Personality Canvas", section: "personality", keywords: "personality traits relationship knowledge anti-patterns tone" },
    { name: "Error & Fallback Dialogue Patterns", section: "error-fallback", keywords: "no-match no-input out-of-scope system error graceful" },
    { name: "Voice Interface Content Guidelines", section: "voice-interfaces", keywords: "voice audio choices memory disambiguation prosody" },
    { name: "Conversation Analytics", section: "conversational-analytics", keywords: "task completion fallback escalation satisfaction" },
    { name: "Conversational Content Inventory", section: "content-management", keywords: "inventory variants deprecation testing" }
  ]
},
{
  topic: "Copywriting & Storytelling",
  url: "topics/copywriting-storytelling.html",
  tier: "Tier 4",
  discipline: "MK",
  sections: [
    { title: "What marketing copywriting is", id: "what-and-why", type: "theory", keywords: "copywriting storytelling persuasive writing marketing copy" },
    { title: "Copywriting formulas", id: "formulas", type: "practical", keywords: "PAS AIDA Before After Bridge problem agitate solve" },
    { title: "Headline and CTA craft", id: "headlines", type: "practical", keywords: "headline formula CTA call to action button writing" },
    { title: "Brand storytelling", id: "storytelling", type: "practical", keywords: "brand story narrative origin hero enemy vision tone" },
    { title: "Copywriting in practice", id: "examples", type: "examples", keywords: "headline rewrite brand story CTA test conversion" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "writing for yourself clever clear formula dependence" }
  ],
  methods: [
    { name: "PAS Problem Agitate Solve", section: "formulas", keywords: "problem agitate solve urgency copy sales" },
    { name: "AIDA Attention Interest Desire Action", section: "formulas", keywords: "attention interest desire action landing page ads" },
    { name: "Before After Bridge", section: "formulas", keywords: "before after bridge transformation concise" },
    { name: "Headline Formula Library", section: "headlines", keywords: "headline how-to number question proof contrast" },
    { name: "CTA Writing Guidelines", section: "headlines", keywords: "CTA call to action first person value risk" },
    { name: "Storytelling Arc for Brands", section: "storytelling", keywords: "hero customer origin story enemy vision narrative" },
    { name: "Tone Adaptation by Channel", section: "storytelling", keywords: "voice tone email social landing page ads channel" }
  ]
},
{
  topic: "Ideation & Creativity Methods",
  url: "topics/creativity-methods.html",
  tier: "Tier 2",
  discipline: "UX",
  sections: [
    { title: "What ideation is and why structure matters", id: "what-and-why", type: "theory", keywords: "ideation creativity brainstorming structured divergent convergent 18% effective" },
    { title: "Setting up an ideation session", id: "setting-up", type: "practical", keywords: "setup timing group composition facilitator goal scope rules remote async sync parking lot" },
    { title: "Warm-up techniques", id: "warm-ups", type: "practical", keywords: "warm-up telephone opposite day mission impossible toddler paper airplane icebreaker" },
    { title: "Finding inspiration for ideation", id: "inspiration", type: "practical", keywords: "inspiration Drucker innovation sources remember the future research artifacts" },
    { title: "Reframing the problem", id: "reframing", type: "practical", keywords: "reframing abstraction laddering modeling bodystorming deprivation simulation ask outsider cross-domain" },
    { title: "Jumping-off points", id: "jumping-off-points", type: "practical", keywords: "design idea cards trend projection systematic prediction persona edge cases stimulus" },
    { title: "Brainstorming and rapid ideation", id: "brainstorming-and-rapid-methods", type: "practical", keywords: "brainwriting 6-3-5 SCAMPER crazy eights worst possible idea analogous constraint" },
    { title: "Ideation frameworks", id: "ideation-frameworks", type: "practical", keywords: "design charrettes parallel design design studio LDJ lightning design jam sprint" },
    { title: "Managing group dynamics", id: "group-dynamics", type: "practical", keywords: "groupthink primacy blocking shyness free riding hierarchy intimidation facilitation" },
    { title: "Post-ideation convergence and selection", id: "convergence", type: "practical", keywords: "convergence selection voting forced ranking dot voting critique idea selection consolidate" },
    { title: "Choosing the right technique", id: "technique-selector", type: "practical", keywords: "technique selector solo remote warm-up stuck choosing" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "IDEO deep dive Twitter constraint NASA origami OXO deprivation artisan persona parallel" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "unstructured brainstorming vague problem premature commitment skip ideation dynamics" }
  ],
  methods: [
    { name: "Five Rules of Ideation", section: "setting-up", keywords: "rules user focus quantity quality document ideas parking lot" },
    { name: "Telephone", section: "warm-ups", keywords: "warm-up collaborative drawing pass rotate build" },
    { name: "Opposite Day", section: "warm-ups", keywords: "inversion reverse evil flip warm-up reframe" },
    { name: "Mission Impossible", section: "warm-ups", keywords: "impossible constraint workaround warm-up" },
    { name: "Toddler (Five Whys for Ideation)", section: "warm-ups", keywords: "why root cause need implementation warm-up" },
    { name: "Paper Airplane", section: "warm-ups", keywords: "warm-up physical collaboration pairs play" },
    { name: "Drucker's Eight Sources of Innovation", section: "inspiration", keywords: "innovation sources unexpected failure discrepancy process change demographics technology" },
    { name: "Remember the Future", section: "inspiration", keywords: "innovation games future success imagine outcomes Hohmann" },
    { name: "Abstraction", section: "reframing", keywords: "abstract generalize cross-domain inspiration NASA origami" },
    { name: "Laddering", section: "reframing", keywords: "granularity why how abstract concrete ladder" },
    { name: "Modeling", section: "reframing", keywords: "visual representation affinity diagram flow chart mind map" },
    { name: "Bodystorming", section: "reframing", keywords: "act out physical roleplay experience embody" },
    { name: "Deprivation & Simulation Studies", section: "reframing", keywords: "empathy simulation aging suit vision impairment accessibility" },
    { name: "Ask an Outsider", section: "reframing", keywords: "fresh perspective explain outsider child naive" },
    { name: "Design Idea Cards", section: "jumping-off-points", keywords: "cards deck principles prompt trigger shuffle random" },
    { name: "Trend Projection", section: "jumping-off-points", keywords: "trend future extreme technology scale back" },
    { name: "Systematic Prediction", section: "jumping-off-points", keywords: "prediction timeline ideal scale back roadmap 5 years" },
    { name: "Design to the Persona", section: "jumping-off-points", keywords: "persona user group narrow focus compare" },
    { name: "Edge Cases", section: "jumping-off-points", keywords: "extreme users edge case accessibility curb cut" },
    { name: "Brainwriting 6-3-5", section: "brainstorming-and-rapid-methods", keywords: "brainwriting silent writing group 108 ideas" },
    { name: "SCAMPER", section: "brainstorming-and-rapid-methods", keywords: "substitute combine adapt modify eliminate reverse rearrange" },
    { name: "Crazy Eights / 6-Up-1-Up", section: "brainstorming-and-rapid-methods", keywords: "rapid sketch 8 panels time-boxed visual vote" },
    { name: "Worst Possible Idea", section: "brainstorming-and-rapid-methods", keywords: "inversion worst bad idea safe psychological" },
    { name: "Analogous Inspiration", section: "brainstorming-and-rapid-methods", keywords: "analogy cross-domain different context theme park" },
    { name: "Constraint-Based Design", section: "brainstorming-and-rapid-methods", keywords: "constraint limitation what-if restriction catalyst" },
    { name: "Design Charrettes", section: "ideation-frameworks", keywords: "charrette iterative sketch critique refine cycle" },
    { name: "Parallel Design", section: "ideation-frameworks", keywords: "parallel solo regroup synthesize independent viewpoints" },
    { name: "Design Studio", section: "ideation-frameworks", keywords: "sketch critique iterate collaborative I like I wish what if" },
    { name: "Lightning Design Jam (LDJ)", section: "ideation-frameworks", keywords: "LDJ lightning jam silent voting how might we timed" },
    { name: "Idea Selection Process (Five Steps)", section: "convergence", keywords: "consolidate eliminate critique vote assign convergence selection" },
    { name: "Forced Ranking", section: "convergence", keywords: "ranking score prioritize vote impact individual" }
  ]
},
{
  topic: "Cross-Functional Collaboration",
  url: "topics/cross-functional-collaboration.html",
  tier: "Tier 2",
  discipline: "PM",
  sections: [
    { title: "What cross-functional collaboration means", id: "what-and-why", type: "theory", keywords: "cross-functional collaboration trio design engineering" },
    { title: "Product trio operating model", id: "product-trio", type: "practical", keywords: "trio PM designer tech lead discovery framing" },
    { title: "Design-engineering handoffs", id: "handoffs", type: "practical", keywords: "handoff design engineering Figma spec" },
    { title: "Healthy conflict norms", id: "conflict", type: "practical", keywords: "conflict disagree commit norm evidence" },
    { title: "Working with data sales support", id: "beyond-trio", type: "practical", keywords: "data science sales support feedback loop" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "Spotify Linear squad trio" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "consensus coordination document communication" },
    { title: "Product trio partnership", id: "trio-facilitation", type: "practical", keywords: "trio ownership boundaries defer facilitation silent ideation conflict protocols" }
  ],
  methods: [
    { name: "Product Trio Operating Model", section: "product-trio", keywords: "trio discovery framing delivery sync" },
    { name: "Shared Decision Framework", section: "product-trio", keywords: "RACI decision accountable responsible" },
    { name: "Design-Engineering Handoff Checklist", section: "handoffs", keywords: "handoff spec acceptance criteria edge case" },
    { name: "Healthy Conflict Norms", section: "conflict", keywords: "disagree commit evidence debate resolve" },
    { name: "Cross-Functional Ritual Design", section: "conflict", keywords: "ritual cadence alignment review planning" },
    { name: "Product Trio Partnership Methods", section: "trio-facilitation", keywords: "ownership boundaries defer shared decisions PM-design" },
    { name: "Cross-Functional Facilitation Techniques", section: "trio-facilitation", keywords: "facilitation silent ideation role rotation decision documentation conflict protocols" }
  ]
},
{
    topic: "Customer & Market Segmentation",
    url: "topics/customer-segmentation.html",
    tier: "Tier 1",
  discipline: "MK",
    sections: [
      { title: "What it is & why it matters", id: "what-segmentation-is", type: "theory", keywords: "segmentation market customers groups targeting focus ICP" },
      { title: "Segmentation vs personas vs ICP", id: "segmentation-vs-personas-vs-icp", type: "theory", keywords: "segmentation persona ICP ideal customer profile difference marketing" },
      { title: "Core methods", id: "core-methods", type: "practical", keywords: "segmentation framework ICP persona prioritization TAM sizing" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "segment message map template ICP update cadence" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "ICP discovery segment messaging mapping case study targeting" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "PLG sales-led hybrid segmentation Moore Dunford Ross further reading" }
    ],
    methods: [
      { name: "Segmentation Framework", section: "core-methods", keywords: "demographic firmographic behavioral psychographic needs-based JTBD layers" },
      { name: "ICP Definition", section: "core-methods", keywords: "ideal customer profile trigger events pain intensity budget authority success" },
      { name: "Marketing Persona", section: "core-methods", keywords: "persona buying behavior channels objections messaging one-page" },
      { name: "Segment Prioritization Matrix", section: "core-methods", keywords: "attractiveness accessibility 2x2 matrix scoring focus prioritize" },
      { name: "TAM by Segment Analysis", section: "core-methods", keywords: "TAM SAM SOM bottom-up segment sizing revenue opportunity" }
    ]
  },
{
  topic: "Customer Storytelling & Case Studies",
  url: "topics/customer-stories.html",
  tier: "Tier 2",
  discipline: "MK",
  sections: [
    { title: "What customer storytelling is", id: "what-and-why", type: "theory", keywords: "customer storytelling case study testimonial social proof credibility" },
    { title: "Case study methodology", id: "case-study-method", type: "practical", keywords: "case study interview template situation challenge solution results" },
    { title: "Testimonial collection", id: "testimonials", type: "practical", keywords: "testimonial collection NPS video review scale" },
    { title: "Social proof strategy", id: "social-proof", type: "practical", keywords: "social proof logos quotes metrics badges reviews" },
    { title: "Customer advocacy", id: "advocacy", type: "practical", keywords: "reference program advocacy match track reward" },
    { title: "Customer storytelling in practice", id: "examples", type: "examples", keywords: "metric case study selfie video review program" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "product hero qualitative findability timing" }
  ],
  methods: [
    { name: "Case Study Interview Guide", section: "case-study-method", keywords: "interview situation challenge solution results quote" },
    { name: "Case Study Template", section: "case-study-method", keywords: "case study template headline snapshot challenge solution results" },
    { name: "Testimonial Collection System", section: "testimonials", keywords: "testimonial NPS milestone CS review collection" },
    { name: "Video Testimonial Production Guide", section: "testimonials", keywords: "video testimonial selfie authentic production" },
    { name: "Social Proof Strategy", section: "social-proof", keywords: "logos quotes case studies metrics badges" },
    { name: "Reference Program Design", section: "advocacy", keywords: "reference program match limits reward track" }
  ]
},
{
    topic: "Dashboard & Data-Dense Interface Design",
    url: "topics/dashboard-design.html",
    tier: "Tier 2",
  discipline: "UX",
    sections: [
      { title: "What makes dashboards hard", id: "what-makes-dashboards-hard", type: "theory", keywords: "density clarity feature-first decision-first intersection information interaction product" },
      { title: "Decision-first design", id: "decision-first", type: "theory", keywords: "audience decisions metrics frequency five-second test who what how often" },
      { title: "Information hierarchy", id: "information-hierarchy", type: "theory", keywords: "inverted pyramid hero metrics KPI level summary detail drill-down newspaper" },
      { title: "Density vs. usability", id: "density-vs-usability", type: "theory", keywords: "Tufte tension cluttered dense whitespace breathing room within between widgets" },
      { title: "Layout systems", id: "layout-systems", type: "practical", keywords: "12-column grid sidebar fixed fluid responsive row widget width gutter" },
      { title: "Widget patterns", id: "widget-patterns", type: "practical", keywords: "KPI card chart table sparkline status indicator map minimum dimensions" },
      { title: "KPI & metric cards", id: "kpi-cards", type: "practical", keywords: "hero metric value trend comparison sparkline threshold conditional formatting" },
      { title: "Filter & control patterns", id: "filter-patterns", type: "practical", keywords: "global widget-level filter bar date range segment clear-all saved views" },
      { title: "Data tables", id: "data-tables", type: "practical", keywords: "sorting pagination sticky headers row density inline actions responsive card horizontal scroll" },
      { title: "Drill-down & navigation", id: "drill-down", type: "practical", keywords: "click-to-filter slide-out panel modal linked breadcrumbs context back" },
      { title: "Data states & loading", id: "data-states", type: "practical", keywords: "loading skeleton populated empty error stale refresh timestamp independent widget" },
      { title: "Dark mode & theming", id: "dark-mode", type: "practical", keywords: "dark mode chart colors background levels card hierarchy text contrast halation" },
      { title: "Responsive dashboards", id: "responsive-dashboards", type: "practical", keywords: "mobile tablet priority widgets swipeable carousel collapse sidebar breakpoint" },
      { title: "Accessibility", id: "accessibility", type: "practical", keywords: "screen reader ARIA live region keyboard navigation zoom 200% chart table alternative" },
      { title: "Templates & checklists", id: "templates", type: "practical", keywords: "pre-flight checklist scoping questions design review" },
      { title: "Dashboard case studies", id: "case-studies", type: "examples", keywords: "analytics operational monitoring financial portfolio SaaS DevOps CFO" },
      { title: "Before/after redesigns", id: "redesigns", type: "examples", keywords: "everything dashboard beautiful useless redesign split audience focused" },
      { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "three audiences hierarchy populated state pie chart inconsistent real-time timestamp" },
      { title: "When to use this", id: "when-to-use", type: "practical", keywords: "decision guidance admin panel monitoring reporting Grafana Metabase Looker" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "widget sizing grid configurations executive operational analytical build buy Metabase Grafana Few Wexler Knaflic" }
    ],
    methods: [
      { name: "Five-Second Test", section: "decision-first", keywords: "validation stakeholder glance health check hierarchy" },
      { name: "Grid-Based Dashboard Layout", section: "layout-systems", keywords: "12-column hero row primary chart supporting detail" },
      { name: "KPI Card Anatomy", section: "kpi-cards", keywords: "value label comparison trend sparkline threshold" },
      { name: "Filter Bar Pattern", section: "filter-patterns", keywords: "global persistent visible active indicator clear-all saved views" },
      { name: "Five Data States", section: "data-states", keywords: "loading skeleton populated empty error stale refresh" },
      { name: "Dashboard Scoping Questions", section: "templates", keywords: "audience decisions frequency hero metric bad thresholds" }
    ]
  },
{
  topic: "Data-Driven Design",
  url: "topics/data-driven-design.html",
  discipline: "UX",
  tier: "Tier 2",
  sections: [
    { title: "What & isn't", id: "what-and-why", type: "theory", keywords: "data-driven data-informed quantitative analytics evidence" },
    { title: "What analytics data tells you", id: "analytics-data", type: "theory", keywords: "places actions paths people triangulation qualitative quantitative methods blind spots discovery questions" },
    { title: "Choosing metrics", id: "metrics", type: "theory", keywords: "HEART framework happiness engagement adoption retention task success vanity actionable metric source mapping" },
    { title: "Analytics setup", id: "analytics", type: "practical", keywords: "event taxonomy tracking naming conventions analytics setup heatmap click scroll hover event metadata category action label tag manager tool landscape" },
    { title: "Interpreting analytics metrics", id: "metric-interpretation", type: "practical", keywords: "pageviews unique pageviews bounce rate exit rate entrances pogo-sticking time on page Twyman's Law metric interpretation" },
    { title: "Search log analysis", id: "search-analytics", type: "practical", keywords: "internal search site search search log content strategy navigation failed search query analysis" },
    { title: "Funnel analysis", id: "funnel-analysis", type: "practical", keywords: "funnel drop-off conversion steps acquisition activation goal architecture macro micro conversion process milestones secondary actions goal value page value" },
    { title: "A/B testing", id: "ab-testing", type: "practical", keywords: "A/B test hypothesis sample size significance p-value variant multivariate iterative false positive adoption curve four requirements" },
    { title: "Cohort analysis", id: "cohort-analysis", type: "practical", keywords: "cohort retention curve signup date group behavior" },
    { title: "Segmentation & path analysis", id: "segmentation-paths", type: "practical", keywords: "segment persona validation path analysis time lag path length recency frequency retention feature correlation long tail 80/20 traffic source device" },
    { title: "Quantitative usability methods", id: "quant-usability", type: "practical", keywords: "SUS SUPR-Q UMUX-Lite NASA-TLX SEQ CSAT NPS time-on-task error rate task success post-task post-test survey instruments sample size" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "A/B test plan analytics health check" },
    { title: "UX benchmarking", id: "benchmarking", type: "practical", keywords: "benchmarking summative evaluation longitudinal metrics comparison competitor industry standard goals pyramid confounding variables seven steps holistic lifecycle North Star KPI mapping success outcomes" },
    { title: "Data storytelling", id: "data-storytelling", type: "practical", keywords: "data storytelling setting characters plot conflict resolution narrative visualization dashboard tables communication stakeholder presentation" },
    { title: "Calculating UX ROI", id: "roi", type: "practical", keywords: "ROI return on investment KPI conversion business case cost savings revenue predictive correlation UX-Revenue Chain reporting assumptions" },
    { title: "Magnitude of UX improvements", id: "improvement-magnitude", type: "theory", keywords: "improvement score magnitude redesign 75% shrinking expectations metric category effectiveness efficiency satisfaction" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Airbnb photos Netflix artwork Slack 2000 messages HelloFresh benchmarking intranet savings ecommerce ROI PetSmart form fields real estate athenahealth correlation airline seat upgrade KinderCare museum NPR retention Faction Media resource center" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "wrong metric not enough traffic ethics dark patterns ROI projections confounding variables browsing without questions" },
    { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "statistical significance p-value Bayesian frequentist Moran Liu Tullis Albert Sauro Lewis Beasley Rosenfeld Kaushik Tufte" }
  ],
  methods: [
    { name: "A/B Test Design", section: "ab-testing", keywords: "hypothesis variant control sample size significance" },
    { name: "Multivariate Testing", section: "ab-testing", keywords: "multivariate combinations elements traffic page variant" },
    { name: "Iterative A/B Testing Plan", section: "ab-testing", keywords: "iterative sequential phases compounding winner" },
    { name: "Funnel Analysis", section: "funnel-analysis", keywords: "funnel drop-off conversion steps diagnosis" },
    { name: "Goal Architecture", section: "funnel-analysis", keywords: "macro micro conversion process milestones secondary actions revenue acquisition engagement goal value" },
    { name: "Page Value Analysis", section: "funnel-analysis", keywords: "page value contribution conversion priority traffic" },
    { name: "Event Taxonomy Design", section: "analytics", keywords: "tracking naming event taxonomy analytics" },
    { name: "Event Metadata Model", section: "analytics", keywords: "category action label event metadata naming filter comparison" },
    { name: "Heatmap Analysis", section: "analytics", keywords: "heatmap click scroll hover tap attempted interactions layout" },
    { name: "Triangulation", section: "analytics-data", keywords: "triangulation multiple methods analytics usability testing surveys support" },
    { name: "HEART Framework", section: "metrics", keywords: "happiness engagement adoption retention task effectiveness efficiency Google" },
    { name: "HEART Metric Source Mapping", section: "metrics", keywords: "metric source analytics surveys usability testing method selection" },
    { name: "Metric Interpretation Framework", section: "metric-interpretation", keywords: "pageviews bounce rate exit rate entrances pogo-sticking time on page Twyman's Law" },
    { name: "Time-on-Page Inference", section: "metric-interpretation", keywords: "time on page web analytics session scroll event last page" },
    { name: "Internal Search Log Analysis", section: "search-analytics", keywords: "search log query content strategy navigation terminology" },
    { name: "Cohort Analysis", section: "cohort-analysis", keywords: "cohort retention curve signup group" },
    { name: "Analytics Segmentation", section: "segmentation-paths", keywords: "segment filter traffic source device activity user history session" },
    { name: "Persona Validation via Analytics", section: "segmentation-paths", keywords: "persona segment validation behavioral traits volume outcomes" },
    { name: "Path Analysis", section: "segmentation-paths", keywords: "path exploratory linear multi-session time lag path length conversion" },
    { name: "Recency-Frequency Analysis", section: "segmentation-paths", keywords: "recency frequency retention return visits feature prediction" },
    { name: "Quantitative Usability Methods", section: "quant-usability", keywords: "SUS time-on-task error rate task success SEQ" },
    { name: "Standardized Questionnaire Instruments", section: "quant-usability", keywords: "SUPR-Q UMUX-Lite NASA-TLX NPS CSAT SUS SEQ workload satisfaction" },
    { name: "Post-Task vs Post-Test Survey Design", section: "quant-usability", keywords: "post-task post-test survey SEQ SUS within-testing online distribution sample size" },
    { name: "Practical vs. Statistical Significance", section: "quant-usability", keywords: "effect size p-value sample size minimum detectable" },
    { name: "RAS Recommendation-Adoption Score", section: "quant-usability", keywords: "RAS research impact adoption tracking" },
    { name: "Eyetracking Evidence", section: "quant-usability", keywords: "F-pattern layer-cake spotted scanning visual hierarchy" },
    { name: "Benchmarking Philosophies", section: "benchmarking", keywords: "holistic lifecycle North Star discovery usage operations retention focus" },
    { name: "KPI-to-Metric Mapping Process", section: "benchmarking", keywords: "success outcomes user actions metrics selection top-down KPI" },
    { name: "UX Benchmarking Process", section: "benchmarking", keywords: "seven steps summative longitudinal baseline measurement cadence comparison" },
    { name: "Four Comparison Types", section: "benchmarking", keywords: "previous version competitor industry benchmark stakeholder goal" },
    { name: "Goals Pyramid", section: "benchmarking", keywords: "vision organization goals product goals metrics alignment stakeholder" },
    { name: "Benchmarking Method Comparison", section: "benchmarking", keywords: "analytics surveys quant usability testing cost difficulty observed reported" },
    { name: "Data Storytelling Framework", section: "data-storytelling", keywords: "setting characters plot conflict resolution narrative presentation stakeholder" },
    { name: "Data Visualization Principles", section: "data-storytelling", keywords: "visualization chart graph emphasis context minimal takeaway title" },
    { name: "UX ROI Calculation", section: "roi", keywords: "ROI KPI conversion ratio cost savings revenue assumptions three steps" },
    { name: "Predictive ROI", section: "roi", keywords: "predictive estimate funding improvement score 75% interquartile" },
    { name: "ROI Reporting Template", section: "roi", keywords: "reporting stakeholders assumptions transparency framing" },
    { name: "Correlation-Based ROI", section: "roi", keywords: "UX-Revenue Chain correlation satisfaction loyalty referrals retention enterprise athenahealth" },
    { name: "Improvement Score Formula", section: "improvement-magnitude", keywords: "good metric bad metric before after ratio percentage calculation" }
  ]
},
{
  topic: "Design Systems",
  url: "topics/design-systems.html",
  tier: "Tier 2",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "design system component library style guide pattern library" },
    { title: "Anatomy", id: "anatomy", type: "theory", keywords: "anatomy tokens components patterns guidelines atomic design" },
    { title: "Design tokens", id: "tokens", type: "practical", keywords: "design tokens color spacing typography naming semantic global" },
    { title: "Component architecture", id: "components", type: "practical", keywords: "component inventory API props variants states audit" },
    { title: "Documentation", id: "documentation", type: "practical", keywords: "documentation component page when to use anatomy states do dont" },
    { title: "Versioning", id: "versioning", type: "practical", keywords: "versioning semver changelog breaking changes migration" },
    { title: "Governance", id: "governance", type: "practical", keywords: "governance centralized federated hybrid contribution process" },
    { title: "Adoption and ROI", id: "adoption", type: "practical", keywords: "adoption tracking coverage compliance velocity measuring ROI" },
    { title: "Design token architecture", id: "design-tokens", type: "practical", keywords: "design tokens global semantic component bridge code pipeline Style Dictionary content integration" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "health check design system audit" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Polaris Carbon Gov.uk Shopify IBM enterprise" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "over-engineering Figma library nobody asked" }
  ],
  methods: [
    { name: "Token Architecture", section: "tokens", keywords: "design tokens color spacing typography semantic naming" },
    { name: "Token Naming Convention", section: "tokens", keywords: "naming global semantic component three-tier" },
    { name: "Component Inventory", section: "components", keywords: "audit inventory screenshot catalog inconsistency" },
    { name: "Component API Design", section: "components", keywords: "props variants slots states composition" },
    { name: "Component Documentation Template", section: "documentation", keywords: "documentation when to use anatomy states do dont" },
    { name: "Governance Models", section: "governance", keywords: "centralized federated hybrid contribution" },
    { name: "Adoption Tracking", section: "adoption", keywords: "coverage compliance velocity currency measuring" },
    { name: "Atomic Design", section: "anatomy", keywords: "atoms molecules organisms templates pages Brad Frost" },
    { name: "Design-to-Code Token Pipeline", section: "design-tokens", keywords: "token pipeline Style Dictionary Figma variables automation platform output" }
  ]
},
{
    topic: "Design Thinking",
    url: "topics/design-thinking.html",
    tier: "Tier 1",
  discipline: "UX",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "human-centered innovation problem-solving framework empathy IDEO stanford d.school Herbert Simon" },
      { title: "Core principles", id: "core-principles", type: "theory", keywords: "human-centeredness bias toward action radical collaboration ambiguity iterate" },
      { title: "The five stages", id: "the-five-stages", type: "practical", keywords: "empathize define ideate prototype test stages process" },
      { title: "Empathize", id: "stage-empathize", type: "practical", keywords: "user interviews observation contextual inquiry empathy mapping stakeholder" },
      { title: "Define", id: "stage-define", type: "practical", keywords: "affinity mapping point of view POV statement how might we HMW problem statement synthesis" },
      { title: "Ideate", id: "stage-ideate", type: "practical", keywords: "brainstorming brainwrite crazy eights SCAMPER ideation divergent thinking" },
      { title: "Prototype", id: "stage-prototype", type: "practical", keywords: "paper prototype clickable wireframe high fidelity mockup wizard of oz fidelity spectrum lo-fi hi-fi" },
      { title: "Test", id: "stage-test", type: "practical", keywords: "usability testing five user protocol A/B testing validation feedback" },
      { title: "Templates & checklists", id: "templates", type: "practical", keywords: "empathy map canvas project readiness checklist how might we generator template" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Airbnb GE Healthcare Bank of America Keep the Change case study" },
      { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "mistakes errors falling in love first idea skipping empathy over-investing prototypes" },
      { title: "When to use this", id: "when-to-use", type: "practical", keywords: "decision guidance when not design sprint compressed" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "facilitation resistant stakeholders remote workshops solo practitioner lean startup agile design sprint systems thinking IBM PillPack wallet project further reading" }
    ],
    methods: [
      { name: "User Interviews", section: "stage-empathize", keywords: "interview guide recruit participants debrief one-on-one conversation" },
      { name: "Contextual Inquiry", section: "stage-empathize", keywords: "observation field study ethnographic watch workarounds" },
      { name: "Empathy Mapping", section: "stage-empathize", keywords: "says thinks does feels quadrant canvas" },
      { name: "Affinity Mapping", section: "stage-define", keywords: "sticky notes grouping patterns themes synthesis clustering" },
      { name: "Point-of-View Statement", section: "stage-define", keywords: "POV user needs because insight problem statement" },
      { name: "How Might We Questions", section: "stage-define", keywords: "HMW creative prompts reframe bridge ideation" },
      { name: "Brainstorming", section: "stage-ideate", keywords: "brainwrite share build cluster vote group ideation" },
      { name: "Crazy Eights", section: "stage-ideate", keywords: "sketching rapid 8 panels visual exploration speed" },
      { name: "SCAMPER", section: "stage-ideate", keywords: "substitute combine adapt modify put eliminate reverse structured" },
      { name: "Wizard of Oz Prototyping", section: "stage-prototype", keywords: "fake backend human-powered simulate test concept" },
      { name: "Usability Testing (5-User Protocol)", section: "stage-test", keywords: "jakob nielsen five users tasks think aloud severity" },
      { name: "A/B Testing", section: "stage-test", keywords: "split test quantitative conversion rate compare versions" }
    ]
  },
{
  topic: "Designing for AI Agents",
  url: "topics/designing-for-ai-agents.html",
  tier: "Tier 3",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "AI agents dual-audience machine user automated agent-mediated" },
    { title: "Dual-audience design", id: "dual-audience", type: "practical", keywords: "dual-audience human agent structural semantic conflict reinforce" },
    { title: "Agent-readable interfaces", id: "agent-interfaces", type: "practical", keywords: "semantic markup structured data schema.org selectors state communication" },
    { title: "Human-AI handoffs", id: "handoffs", type: "practical", keywords: "handoff trigger context trust calibration autonomy intervention" },
    { title: "Agent testing", id: "testing", type: "practical", keywords: "agent task completion testing protocol success metrics regression" },
    { title: "Collaborative actors", id: "collaborative-actors", type: "practical", keywords: "collaborative actor mapping workflow multi-actor human agent system" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "airline booking API-first Stripe agent-native" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "agents as threats today's agents forgetting human" }
  ],
  methods: [
    { name: "Dual-Audience Design Framework", section: "dual-audience", keywords: "dual-audience human agent layers conflict reinforcement" },
    { name: "Agent-Readable Interface Patterns", section: "agent-interfaces", keywords: "semantic markup structured data selectors state" },
    { name: "Human-AI Handoff Design", section: "handoffs", keywords: "handoff trigger context transfer trust autonomy" },
    { name: "Agent Task Completion Testing", section: "testing", keywords: "testing protocol completion rate error recovery regression" },
    { name: "Collaborative Actor Mapping", section: "collaborative-actors", keywords: "actor mapping workflow multi-actor service design" }
  ]
},
{
  topic: "Design Philosophy: Don Norman's Vision",
  url: "topics/don-norman.html",
  tier: "Tier 4",
  discipline: "UX",
  sections: [
    { title: "Who Norman is", id: "what-and-why", type: "theory", keywords: "Don Norman user experience cognitive science design philosophy" },
    { title: "Design of Everyday Things", id: "everyday-things", type: "theory", keywords: "affordances signifiers constraints mapping feedback conceptual model" },
    { title: "Human error", id: "human-error", type: "theory", keywords: "human error slips mistakes design responsibility blame" },
    { title: "Emotional design", id: "emotional-design", type: "theory", keywords: "emotional design visceral behavioral reflective three levels" },
    { title: "Systems and complexity", id: "systems-design", type: "practical", keywords: "systems thinking sustainability humane design equity complexity" },
    { title: "Applying Norman today", id: "applying-norman", type: "practical", keywords: "Norman principles checklist discoverability feedback model" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Norman Door Gmail Undo Send error recovery" }
  ],
  methods: [
    { name: "Norman's Core Design Principles", section: "everyday-things", keywords: "affordances signifiers constraints mapping feedback conceptual model" },
    { name: "Three Levels of Emotional Design", section: "emotional-design", keywords: "visceral behavioral reflective emotional" },
    { name: "Systems Thinking for Designers", section: "systems-design", keywords: "systems second-order effects scale impact" },
    { name: "Norman's Design Principles Checklist", section: "applying-norman", keywords: "discoverability feedback model mapping constraints undo" }
  ]
},
{
  topic: "Dynamic User Experience",
  url: "topics/dynamic-ux.html",
  tier: "Tier 3",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "dynamic UX adaptive personalization context-aware responsive" },
    { title: "Context-aware design", id: "context-aware", type: "practical", keywords: "context matrix device location time network behavior" },
    { title: "Personalization spectrum", id: "personalization", type: "practical", keywords: "personalization segment rule collaborative ML-driven filter bubble" },
    { title: "Progressive disclosure", id: "progressive-disclosure", type: "practical", keywords: "progressive disclosure adaptive expertise power user beginner" },
    { title: "Dynamic content", id: "dynamic-content", type: "practical", keywords: "content personalization reordering selection generation layout" },
    { title: "Privacy and creepiness", id: "privacy", type: "practical", keywords: "privacy creepiness threshold transparent control consent" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "dynamic UX review checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Spotify Discover Weekly Netflix adaptive UI" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "personalizing everything cold-start new users fallback" }
  ],
  methods: [
    { name: "Context Matrix", section: "context-aware", keywords: "context device location time network behavior environmental" },
    { name: "Personalization Strategy", section: "personalization", keywords: "segment rule collaborative content ML-driven" },
    { name: "Adaptive Progressive Disclosure", section: "progressive-disclosure", keywords: "adaptive expertise progressive disclosure power user" },
    { name: "Content Personalization", section: "dynamic-content", keywords: "reordering selection generation layout adaptation" },
    { name: "Creepiness Check", section: "privacy", keywords: "privacy creepiness threshold transparent control" }
  ]
},
{
  topic: "Ecommerce & Transactional UX",
  url: "topics/ecommerce-transactional-ux.html",
  tier: "Tier 3",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "ecommerce transactional buying conversion checkout" },
    { title: "Product pages", id: "product-pages", type: "practical", keywords: "product page hero evidence detail action cross-sell" },
    { title: "Cart and wishlist", id: "cart", type: "practical", keywords: "cart mini-cart save for later price transparency empty cart" },
    { title: "Checkout flow", id: "checkout", type: "practical", keywords: "checkout guest account single-page multi-step trust payment" },
    { title: "Trust and pricing", id: "trust-signals", type: "practical", keywords: "trust signals reviews guarantees security pricing anchor comparison" },
    { title: "Post-purchase", id: "post-purchase", type: "practical", keywords: "confirmation tracking follow-up returns review" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Amazon one-click trust friction" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "surprise costs dark patterns urgency hidden fees" }
  ],
  methods: [
    { name: "Product Page Anatomy Framework", section: "product-pages", keywords: "hero evidence detail action cross-sell zones" },
    { name: "Cart UX Patterns", section: "cart", keywords: "mini-cart save for later editing transparency" },
    { name: "Checkout Flow Design", section: "checkout", keywords: "guest account single-page multi-step progress" },
    { name: "Guest vs Account Checkout", section: "checkout", keywords: "guest account social login post-purchase creation" },
    { name: "Trust Signal Placement", section: "trust-signals", keywords: "reviews guarantees security social proof" },
    { name: "Price Presentation Guidelines", section: "trust-signals", keywords: "anchor per-unit subscription plan comparison" },
    { name: "Post-Purchase Experience Design", section: "post-purchase", keywords: "confirmation tracking returns review follow-up" }
  ]
},
{
  topic: "Editorial Operations & Workflow",
  url: "topics/editorial-operations.html",
  tier: "Tier 1",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "editorial operations workflow publishing process production" },
    { title: "Editorial workflow", id: "editorial-workflow", type: "practical", keywords: "workflow stages ideation briefing drafting review approval publishing" },
    { title: "Content calendar", id: "content-calendar", type: "practical", keywords: "content calendar pipeline capacity planning brief template" },
    { title: "Scaling production", id: "scaling", type: "practical", keywords: "scaling templates contributors repurposing AI-assisted pipeline" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "HubSpot editorial newsroom scale" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "process stifles production bureaucratic approval" }
  ],
  methods: [
    { name: "Editorial Workflow Design", section: "editorial-workflow", keywords: "workflow stages entry exit criteria transitions" },
    { name: "Approval Chain Optimization", section: "editorial-workflow", keywords: "approval tier risk time limits parallel trust" },
    { name: "Content Calendar Architecture", section: "content-calendar", keywords: "calendar pipeline capacity themes tool" },
    { name: "Content Brief Template", section: "content-calendar", keywords: "brief purpose audience key message outline SEO" },
    { name: "Content Production Pipeline", section: "scaling", keywords: "scaling templates contributors repurposing AI-assisted" }
  ]
},
{
  topic: "Enterprise & Regulated Product Management",
  url: "topics/enterprise-regulated-pm.html",
  tier: "Tier 3",
  discipline: "PM",
  sections: [
    { title: "What enterprise regulated PM is", id: "what-and-why", type: "theory", keywords: "enterprise regulated compliance SOC HIPAA GDPR" },
    { title: "Compliance landscape", id: "compliance-landscape", type: "theory", keywords: "SOC2 HIPAA GDPR FedRAMP compliance framework" },
    { title: "Compliance as product work", id: "compliance-methods", type: "practical", keywords: "compliance matrix privacy design security audit" },
    { title: "Enterprise procurement", id: "enterprise-selling", type: "practical", keywords: "enterprise readiness SSO RBAC procurement" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "Vanta compliance automation" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "one-time gold-plating ongoing" }
  ],
  methods: [
    { name: "Compliance Requirements Matrix", section: "compliance-methods", keywords: "compliance matrix requirement feature gap" },
    { name: "Privacy-by-Design Framework", section: "compliance-methods", keywords: "privacy design GDPR data minimization consent" },
    { name: "Security Review Checklist", section: "compliance-methods", keywords: "security review encryption authentication authorization" },
    { name: "Audit Trail Design", section: "compliance-methods", keywords: "audit trail log who what when tamper-proof" },
    { name: "Regulatory Change Impact Assessment", section: "enterprise-selling", keywords: "regulatory change impact assessment timeline" }
  ]
},
{
  topic: "Event Marketing & Webinars",
  url: "topics/event-marketing.html",
  tier: "Tier 2",
  discipline: "MK",
  sections: [
    { title: "What event marketing is", id: "what-and-why", type: "theory", keywords: "event marketing webinar conference live relationship" },
    { title: "Webinar programs", id: "webinars", type: "practical", keywords: "webinar production checklist format expert panel workshop" },
    { title: "Conference strategy", id: "conferences", type: "practical", keywords: "conference sponsorship ROI booth speaking follow-up" },
    { title: "Virtual and hybrid events", id: "virtual-hybrid", type: "practical", keywords: "virtual event platform hybrid engagement" },
    { title: "Community events", id: "community-events", type: "practical", keywords: "community event meetup user group recurring" },
    { title: "Content repurposing", id: "repurposing", type: "practical", keywords: "repurposing video clips blog podcast infographic" },
    { title: "Event marketing in practice", id: "examples", type: "examples", keywords: "webinar series conference speaking community event" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "product demo FOMO follow-up registrations" }
  ],
  methods: [
    { name: "Webinar Production Checklist", section: "webinars", keywords: "webinar production timeline promotion recording follow-up" },
    { name: "Webinar Format Options", section: "webinars", keywords: "expert panel workshop AMA fireside quick hit" },
    { name: "Conference Sponsorship ROI Calculator", section: "conferences", keywords: "conference sponsorship cost ROI leads" },
    { name: "Event Follow-Up Cadence", section: "conferences", keywords: "follow-up hot warm nurture CRM tag" },
    { name: "Virtual Event Platform Selection", section: "virtual-hybrid", keywords: "virtual platform engagement analytics integration" },
    { name: "Community Event Playbook", section: "community-events", keywords: "community event recurring user-generated" },
    { name: "Event Content Repurposing", section: "repurposing", keywords: "repurposing video blog podcast slides social" }
  ]
},
{
    topic: "Experimentation & A/B Testing",
    url: "topics/experimentation.html",
    tier: "Tier 2",
  discipline: "PM",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "experimentation A/B testing hypothesis controlled test evidence scientific method" },
      { title: "Experiment methods", id: "experiment-methods", type: "practical", keywords: "hypothesis sample size guardrail sequential testing multi-armed bandit post-mortem" },
      { title: "Experimentation culture", id: "experimentation-culture", type: "practical", keywords: "maturity model levels ad hoc systematic data-driven culture velocity" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "experiment launch readiness checklist" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Booking.com Microsoft Bing Airbnb $100M guardrail search" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "HiPPO peeking p-hacking survivorship bias multiple changes" },
      { title: "When to experiment", id: "when-to-use", type: "practical", keywords: "when test when not traffic significance alternative methods" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "p-value confidence interval power multiple comparisons Kohavi Thomke" }
    ],
    methods: [
      { name: "Hypothesis Template", section: "experiment-methods", keywords: "hypothesis believe result because measure need template" },
      { name: "Sample Size Calculator", section: "experiment-methods", keywords: "sample size duration baseline detectable effect significance power traffic" },
      { name: "Guardrail Metrics", section: "experiment-methods", keywords: "guardrail counter-metric safety primary secondary degradation threshold" },
      { name: "Sequential Testing", section: "experiment-methods", keywords: "sequential always-valid continuous monitoring peeking Bayesian" },
      { name: "Multi-Armed Bandit", section: "experiment-methods", keywords: "bandit optimization traffic allocation regret winning variant" },
      { name: "Experiment Post-Mortem", section: "experiment-methods", keywords: "post-mortem result learning decision follow-up ship iterate abandon" },
      { name: "Experimentation Maturity Model", section: "experimentation-culture", keywords: "maturity ad hoc emerging systematic data-driven levels assessment" }
    ]
  },
{
  topic: "Feature Flags, Rollouts & Release Management",
  url: "topics/feature-flags-rollouts.html",
  tier: "Tier 2",
  discipline: "PM",
  sections: [
    { title: "What feature flags mean for PMs", id: "what-and-why", type: "theory", keywords: "feature flag toggle rollout release deploy" },
    { title: "Feature flag strategy", id: "flag-strategy", type: "practical", keywords: "flag type release experiment ops permission" },
    { title: "Canary releases and dark launches", id: "canary-dark", type: "practical", keywords: "canary dark launch shadow traffic" },
    { title: "Kill switches and incidents", id: "kill-switch", type: "practical", keywords: "kill switch incident rollback disable" },
    { title: "Beta program design", id: "beta-programs", type: "practical", keywords: "beta program early access feedback" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "GitHub Netflix canary feature flag" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "flag debt cleanup testing off state" }
  ],
  methods: [
    { name: "Feature Flag Strategy Matrix", section: "flag-strategy", keywords: "flag type release experiment ops permission" },
    { name: "Percentage Rollout Plan", section: "flag-strategy", keywords: "percentage gradual stage advance rollback" },
    { name: "Canary Release Protocol", section: "canary-dark", keywords: "canary traffic comparison latency" },
    { name: "Dark Launch Pattern", section: "canary-dark", keywords: "dark launch shadow compare production" },
    { name: "Kill Switch Checklist", section: "kill-switch", keywords: "kill switch disable incident emergency" },
    { name: "Beta Program Design", section: "beta-programs", keywords: "beta feedback selection criteria timeline" }
  ]
},
{
  topic: "Forms & Data Entry",
  url: "topics/forms-data-entry.html",
  tier: "Tier 2",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "forms data entry friction conversion abandonment" },
    { title: "Form structure", id: "form-structure", type: "practical", keywords: "grouping sequencing pacing single column layout" },
    { title: "Labels and inputs", id: "labels-inputs", type: "practical", keywords: "labels placeholders input types radio dropdown checkbox toggle date address" },
    { title: "Inline validation", id: "validation", type: "practical", keywords: "inline validation blur timing error success confirmation" },
    { title: "Multi-step forms", id: "multi-step", type: "practical", keywords: "multi-step wizard progress indicator save progress steps" },
    { title: "Conditional logic", id: "conditional-logic", type: "practical", keywords: "conditional show hide dynamic fields branching progressive disclosure" },
    { title: "Error prevention and reporting", id: "error-reporting", type: "practical", keywords: "error prevention smart defaults format guidance error messages" },
    { title: "Form analytics", id: "form-analytics", type: "practical", keywords: "analytics drop-off completion time error frequency abandonment" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "form design review checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Stripe checkout TurboTax conversational form" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "unnecessary fields eager validation form reset" }
  ],
  methods: [
    { name: "Form Structure Framework", section: "form-structure", keywords: "grouping sequencing pacing single column" },
    { name: "Input Type Selection Matrix", section: "labels-inputs", keywords: "radio dropdown checkbox toggle date address text" },
    { name: "Inline Validation Patterns", section: "validation", keywords: "blur timing positive validation error placement" },
    { name: "Multi-Step Form Architecture", section: "multi-step", keywords: "wizard steps progress save context" },
    { name: "Conditional Logic Design", section: "conditional-logic", keywords: "show hide dynamic branching dependent" },
    { name: "Error Prevention Checklist", section: "error-reporting", keywords: "defaults format guidance masking constraints" },
    { name: "Error Message Guidelines", section: "error-reporting", keywords: "what why how fix plain language" },
    { name: "Form Analytics Setup", section: "form-analytics", keywords: "drop-off completion time error frequency" }
  ]
},
{
  topic: "Product Frameworks Encyclopedia",
  url: "topics/frameworks-encyclopedia.html",
  tier: "Tier 4",
  discipline: "PM",
  sections: [
    { title: "How to use this encyclopedia", id: "what-and-why", type: "theory", keywords: "framework encyclopedia reference quick" },
    { title: "Prioritization frameworks", id: "prioritization", type: "practical", keywords: "RICE ICE MoSCoW Kano opportunity cost delay" },
    { title: "Metrics frameworks", id: "metrics-frameworks", type: "practical", keywords: "AARRR HEART North Star pirate metrics" },
    { title: "Strategy frameworks", id: "strategy-frameworks", type: "practical", keywords: "JTBD value proposition lean canvas" },
    { title: "Framework selection guide", id: "comparison", type: "practical", keywords: "comparison when which framework select" }
  ],
  methods: [
    { name: "RICE Scoring", section: "prioritization", keywords: "RICE reach impact confidence effort" },
    { name: "ICE Scoring", section: "prioritization", keywords: "ICE impact confidence ease quick" },
    { name: "MoSCoW", section: "prioritization", keywords: "MoSCoW must should could won't" },
    { name: "Kano Model", section: "prioritization", keywords: "Kano must-be performance attractive" },
    { name: "Opportunity Scoring", section: "prioritization", keywords: "opportunity importance satisfaction Ulwick" },
    { name: "Cost of Delay", section: "prioritization", keywords: "cost delay WSJF weighted shortest" },
    { name: "AARRR Pirate Metrics", section: "metrics-frameworks", keywords: "AARRR acquisition activation retention revenue referral" },
    { name: "HEART Framework", section: "metrics-frameworks", keywords: "HEART happiness engagement adoption retention task" },
    { name: "North Star Metric", section: "metrics-frameworks", keywords: "North Star input metric align" },
    { name: "Jobs-to-be-Done", section: "strategy-frameworks", keywords: "JTBD jobs hire motivation outcome" },
    { name: "Value Proposition Canvas", section: "strategy-frameworks", keywords: "value proposition jobs pains gains" },
    { name: "Lean Canvas", section: "strategy-frameworks", keywords: "lean canvas business model one-page" }
  ]
},
{
  topic: "Gamification",
  url: "topics/gamification.html",
  tier: "Tier 3",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "gamification game mechanics engagement motivation intrinsic extrinsic" },
    { title: "Core game mechanics", id: "core-mechanics", type: "theory", keywords: "points levels badges progress bar leaderboard challenges streaks" },
    { title: "Player types", id: "player-types", type: "practical", keywords: "player types Bartle achiever explorer socializer competitor" },
    { title: "Progression systems", id: "progression", type: "practical", keywords: "progression levels milestones pacing XP unlock" },
    { title: "Social mechanics", id: "social-mechanics", type: "practical", keywords: "social team challenges cooperative recognition mentorship" },
    { title: "When it fails", id: "when-it-fails", type: "practical", keywords: "failure pointsification badge inflation leaderboard depression" },
    { title: "Ethical gamification", id: "ethical-gamification", type: "practical", keywords: "ethical gamification review checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Duolingo Stack Overflow reputation badges XP" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "wrong mechanic activity vs outcomes motivation" }
  ],
  methods: [
    { name: "Game Mechanics Vocabulary", section: "core-mechanics", keywords: "points levels badges progress leaderboard streaks challenges" },
    { name: "Player Motivation Analysis", section: "player-types", keywords: "Bartle achiever explorer socializer competitor" },
    { name: "Progression System Design", section: "progression", keywords: "levels milestones pacing XP unlock progression" },
    { name: "Social Gamification Patterns", section: "social-mechanics", keywords: "team cooperative recognition mentorship relative" },
    { name: "Gamification Failure Patterns", section: "when-it-fails", keywords: "pointsification badge inflation gaming system" }
  ]
},
{
    topic: "Go-to-Market & Product Launches",
    url: "topics/go-to-market.html",
    tier: "Tier 1",
  discipline: "PM",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "go-to-market GTM launch orchestration coordination adoption" },
      { title: "Launch methods", id: "launch-methods", type: "practical", keywords: "launch tier go no-go phased rollout internal brief retrospective rollback" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Slack invite beta GitHub Copilot Stripe API migration" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "no metric every P0 launch forget no rollback" },
      { title: "When to invest", id: "when-to-use", type: "practical", keywords: "P0 P1 P2 P3 tier planning" }
    ],
    methods: [
      { name: "Launch Tier Framework", section: "launch-methods", keywords: "P0 P1 P2 P3 tier major significant standard silent effort matching" },
      { name: "Go/No-Go Checklist", section: "launch-methods", keywords: "go no-go decision gate readiness product quality rollout support sales" },
      { name: "Phased Rollout Plan", section: "launch-methods", keywords: "phased rollout dogfood beta percentage GA staged risk" },
      { name: "Internal Launch Brief", section: "launch-methods", keywords: "internal brief messaging limitations escalation success metrics" },
      { name: "Launch Retrospective", section: "launch-methods", keywords: "retro went well didn't metrics vs targets differently" },
      { name: "Rollback Plan", section: "launch-methods", keywords: "rollback revert feature flag threshold on-call safety" }
    ]
  },
{
    topic: "Growth Channels & Acquisition",
    url: "topics/growth-channels.html",
    tier: "Tier 1",
  discipline: "MK",
    sections: [
      { title: "What it is & why it matters", id: "what-channel-strategy-is", type: "theory", keywords: "channel strategy acquisition growth distribution reach customers" },
      { title: "Channel-market fit", id: "channel-market-fit", type: "theory", keywords: "channel-market fit audience presence purchase context unit economics" },
      { title: "Core methods", id: "core-methods", type: "practical", keywords: "Bullseye framework channel scoring paid organic CAC funnel" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "channel discovery channel mix evolution testing case study" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "copying competitors scaling prematurely single channel dependency organic" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "company stage seed Series A B diversify Weinberg Ellis Chen further reading" }
    ],
    methods: [
      { name: "Bullseye Framework", section: "core-methods", keywords: "Traction Weinberg brainstorm test focus 19 channels systematic discovery" },
      { name: "Channel Scoring Matrix", section: "core-methods", keywords: "audience fit cost scalability time results competitive scoring comparison" },
      { name: "Paid vs Organic Mix Model", section: "core-methods", keywords: "paid organic SEM SEO content compound investment ratio trajectory" },
      { name: "CAC Calculation & Benchmarks", section: "core-methods", keywords: "customer acquisition cost LTV ratio payback period blended channel" },
      { name: "Acquisition Funnel Mapping", section: "core-methods", keywords: "funnel impression click conversion activation leak diagnostic" }
    ]
  },
{
    topic: "Growth & Product-Led Growth (PLG)",
    url: "topics/growth-plg.html",
    tier: "Tier 2",
  discipline: "PM",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "PLG product-led growth loops self-serve acquisition activation expansion" },
      { title: "Growth methods", id: "growth-methods", type: "practical", keywords: "growth loop activation metric time-to-value viral coefficient PLG scorecard self-serve funnel expansion" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "PLG readiness assessment checklist" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Calendly Figma Loom viral loop content multiplayer" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "free tier generous acquisition without activation no sales confusion" },
      { title: "When to go PLG", id: "when-to-use", type: "practical", keywords: "fit assessment individual adoption enterprise hybrid" }
    ],
    methods: [
      { name: "Growth Loop Mapping", section: "growth-methods", keywords: "growth loop input action output cycle viral content paid data" },
      { name: "Activation Metric Definition", section: "growth-methods", keywords: "activation metric behavior retention correlation aha moment threshold" },
      { name: "Time-to-Value Audit", section: "growth-methods", keywords: "time-to-value TTV signup aha moment onboarding speed sample data" },
      { name: "Viral Coefficient", section: "growth-methods", keywords: "viral coefficient K invitations conversion exponential referral" },
      { name: "PLG Scorecard", section: "growth-methods", keywords: "PLG scorecard fit assessment self-serve sales-led hybrid" },
      { name: "Self-Serve Funnel Design", section: "growth-methods", keywords: "self-serve funnel signup onboarding activation habit conversion stages" },
      { name: "Expansion Revenue Triggers", section: "growth-methods", keywords: "expansion NRR seats upgrade usage threshold feature gate upsell" }
    ]
  },
{
  topic: "Hardware-Software & IoT PM",
  url: "topics/hardware-software-iot.html",
  tier: "Tier 3",
  discipline: "PM",
  sections: [
    { title: "What hardware-software PM is", id: "what-and-why", type: "theory", keywords: "hardware software IoT connected device firmware" },
    { title: "Timeline alignment", id: "timeline-alignment", type: "practical", keywords: "EVT DVT PVT timeline firmware OTA" },
    { title: "Supply chain and manufacturing", id: "supply-chain", type: "practical", keywords: "supply chain BOM MOQ tooling manufacturing" },
    { title: "OTA updates and lifecycle", id: "ota-lifecycle", type: "practical", keywords: "OTA update firmware lifecycle end-of-support" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "Tesla Ring hardware IoT OTA" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "under-spec firmware web mentality" }
  ],
  methods: [
    { name: "Hardware-Software Timeline Alignment", section: "timeline-alignment", keywords: "EVT DVT PVT timeline milestone firmware" },
    { name: "Firmware Rollout Strategy", section: "timeline-alignment", keywords: "firmware OTA staged rollout rollback" },
    { name: "Supply Chain PM Checklist", section: "supply-chain", keywords: "supply chain lead time MOQ BOM tooling" },
    { name: "Connected Device State Machine", section: "supply-chain", keywords: "state machine online offline degraded error" },
    { name: "OTA Update Strategy", section: "ota-lifecycle", keywords: "OTA update frequency lifecycle interoperability" }
  ]
},
{
  topic: "Heuristic Evaluation",
  url: "topics/heuristic-evaluation.html",
  tier: "Tier 2",
  discipline: "UX",
  sections: [
    { title: "What & when", id: "what-and-why", type: "theory", keywords: "heuristic evaluation expert review usability inspection" },
    { title: "Nielsen's 10 heuristics", id: "nielsen-heuristics", type: "practical", keywords: "Nielsen 10 heuristics visibility consistency error prevention recognition" },
    { title: "Conducting an evaluation", id: "conducting", type: "practical", keywords: "process scope evaluator two-pass consolidation" },
    { title: "Cognitive walkthrough", id: "cognitive-walkthrough", type: "practical", keywords: "cognitive walkthrough learnability four questions discoverability" },
    { title: "Severity rating", id: "severity", type: "practical", keywords: "severity 0-4 frequency impact persistence rating" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "finding template evaluation setup checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "e-commerce checkout onboarding government form accessibility" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "substitute single evaluator no severity no priority" },
    { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "Shneiderman golden rules Gerhardt-Powals cognitive" }
  ],
  methods: [
    { name: "Nielsen's Heuristic Evaluation", section: "nielsen-heuristics", keywords: "10 heuristics expert review inspection" },
    { name: "Cognitive Walkthrough", section: "cognitive-walkthrough", keywords: "learnability four questions step-by-step" },
    { name: "Accessibility Audit", section: "conducting", keywords: "WCAG POUR audit expert review" },
    { name: "Pluralistic Walkthrough", section: "cognitive-walkthrough", keywords: "group review stakeholder walkthrough" },
    { name: "Severity Rating Scale", section: "severity", keywords: "0-4 frequency impact persistence" }
  ]
},
{
  topic: "Internationalization & Localization",
  url: "topics/i18n-localization.html",
  tier: "Tier 3",
  discipline: "PM",
  sections: [
    { title: "What i18n and l10n mean for PMs", id: "what-and-why", type: "theory", keywords: "internationalization localization i18n l10n global" },
    { title: "Market selection", id: "market-selection", type: "practical", keywords: "market selection priority international expansion" },
    { title: "Localization strategy", id: "localization-strategy", type: "practical", keywords: "localization depth translation cultural adaptation" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "Spotify international launch market" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "retrofit hard-code UX assumption" }
  ],
  methods: [
    { name: "Market Selection Matrix", section: "market-selection", keywords: "market selection TAM demand regulatory" },
    { name: "i18n Readiness Audit", section: "market-selection", keywords: "i18n audit string date RTL encoding" },
    { name: "Localization Priority Framework", section: "localization-strategy", keywords: "localization level language format content culture" },
    { name: "Cultural Adaptation Checklist", section: "localization-strategy", keywords: "culture color icon imagery legal social" },
    { name: "Multi-Currency Architecture", section: "localization-strategy", keywords: "currency billing display conversion pricing" }
  ]
},
{
  topic: "Immersive & Voice Interfaces",
  url: "topics/immersive-voice.html",
  tier: "Tier 4",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "immersive voice AR VR spatial conversational beyond screens" },
    { title: "AR design", id: "ar-design", type: "practical", keywords: "AR augmented reality spatial anchoring context overlay" },
    { title: "VR design", id: "vr-design", type: "practical", keywords: "VR virtual reality comfort motion sickness presence" },
    { title: "Voice UI", id: "voice-ui", type: "practical", keywords: "voice UI intent utterance slot conversational dialogue" },
    { title: "Multi-modal", id: "multimodal", type: "practical", keywords: "multi-modal voice touch gesture screen modality" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "voice interface review checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Apple Vision Pro Alexa spatial voice" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "no fallback screen patterns spatial flat menu" }
  ],
  methods: [
    { name: "Spatial Interaction Design", section: "ar-design", keywords: "AR spatial anchoring context overlay depth" },
    { name: "VR Comfort and Presence", section: "vr-design", keywords: "VR motion sickness comfort zone locomotion" },
    { name: "Voice Intent Design", section: "voice-ui", keywords: "intent utterance slot voice mapping" },
    { name: "Conversational Design Patterns", section: "voice-ui", keywords: "confirmation disambiguation error recovery handoff" },
    { name: "Multi-Modal Design", section: "multimodal", keywords: "multi-modal switching redundant appropriate" }
  ]
},
{
  topic: "Influencer & Creator Marketing",
  url: "topics/influencer-marketing.html",
  tier: "Tier 3",
  discipline: "MK",
  sections: [
    { title: "What influencer marketing is", id: "what-and-why", type: "theory", keywords: "influencer creator borrowed trust endorsement partnership" },
    { title: "Finding the right influencers", id: "identification", type: "practical", keywords: "influencer identification audience overlap engagement content alignment micro macro" },
    { title: "Structuring partnerships", id: "partnerships", type: "practical", keywords: "partnership structure ambassador affiliate product seeding brief" },
    { title: "Measuring influencer ROI", id: "measurement", type: "practical", keywords: "ROI attribution lift engagement cost efficiency" },
    { title: "Influencer marketing in practice", id: "examples", type: "examples", keywords: "micro influencer B2B ambassador product seeding organic" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "over-scripting follower count FTC disclosure transaction" }
  ],
  methods: [
    { name: "Influencer Identification Framework", section: "identification", keywords: "audience overlap engagement content alignment previous partnerships" },
    { name: "Micro vs. Macro Influencer Strategy", section: "identification", keywords: "micro macro nano influencer tier strategy" },
    { name: "Partnership Structure Templates", section: "partnerships", keywords: "sponsored ambassador affiliate seeding contract" },
    { name: "Creator Brief Template", section: "partnerships", keywords: "brief objective message creative freedom CTA" },
    { name: "Influencer ROI Measurement", section: "measurement", keywords: "attribution lift engagement cost qualitative" }
  ]
},
{
    topic: "Information Architecture",
    url: "topics/information-architecture.html",
    tier: "Tier 1",
  discipline: "UX",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "IA organize structure label content findability navigation Richard Wurman Peter Morville Rosenfeld polar bear book" },
      { title: "Core components", id: "core-components", type: "theory", keywords: "organization systems labeling navigation search four components" },
      { title: "IA principles", id: "ia-principles", type: "theory", keywords: "objects choices disclosure front doors growth scalability progressive" },
      { title: "Organization systems", id: "organization-systems", type: "practical", keywords: "hierarchical top-down faceted sequential matrix structure taxonomy" },
      { title: "Labeling systems", id: "labeling", type: "practical", keywords: "labels naming conventions jargon user language testing" },
      { title: "Navigation design", id: "navigation-design", type: "practical", keywords: "global local contextual supplemental breadcrumbs wayfinding sidebar menu" },
      { title: "Card sorting", id: "card-sorting", type: "practical", keywords: "open closed hybrid mental model categorization grouping OptimalSort similarity matrix dendrogram" },
      { title: "Tree testing", id: "tree-testing", type: "practical", keywords: "reverse card sort findability validation Treejack success rate hierarchy" },
      { title: "Sitemaps & flows", id: "sitemaps", type: "practical", keywords: "sitemap user flow page hierarchy diagram documentation blueprint" },
      { title: "Templates & checklists", id: "templates", type: "practical", keywords: "IA audit checklist card sorting planning brief template" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "GOV.UK government IKEA faceted navigation Spotify personalization case study" },
      { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "org chart jargon labels content volume top-level categories mobile" },
      { title: "When to use this", id: "when-to-use", type: "practical", keywords: "decision guidance new site redesign findability problems" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "SaaS enterprise settings architecture content modeling metadata taxonomy controlled vocabulary" }
    ],
    methods: [
      { name: "Open Card Sorting", section: "card-sorting", keywords: "generative user grouping categories mental model discovery no predefined" },
      { name: "Closed Card Sorting", section: "card-sorting", keywords: "evaluative validation predefined categories placement testing" },
      { name: "Hybrid Card Sorting", section: "card-sorting", keywords: "flexible mixed approach improving existing IA" },
      { name: "Tree Testing", section: "tree-testing", keywords: "reverse card sort findability success rate Treejack validation hierarchy navigation" },
      { name: "Label Testing", section: "labeling", keywords: "naming labels survey user language terminology" },
      { name: "Sitemap Creation", section: "sitemaps", keywords: "visual hierarchy documentation page structure blueprint" },
      { name: "Hierarchical Structure", section: "organization-systems", keywords: "top-down tree parent child depth breadth taxonomy" },
      { name: "Faceted Structure", section: "organization-systems", keywords: "multiple dimensions filter combine attributes metadata" }
    ]
  },
{
    topic: "Information Visualization",
    url: "topics/information-visualization.html",
    tier: "Tier 3",
  discipline: "UX",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "data graphics visual representation patterns comparisons statistical charts graphs Tufte Playfair" },
      { title: "Graphical excellence", id: "graphical-excellence", type: "theory", keywords: "Tufte show data substance statistics design clarity efficiency data-dense" },
      { title: "Graphical integrity", id: "graphical-integrity", type: "theory", keywords: "Tufte Lie Factor distortion proportional representation truncated axis honesty ethics accuracy" },
      { title: "The data-ink ratio", id: "data-ink-ratio", type: "theory", keywords: "Tufte data-ink maximize erase non-data redundant ink pixels minimize" },
      { title: "Chartjunk", id: "chartjunk", type: "theory", keywords: "Tufte moire vibration grid duck decoration clutter noise 3D effects" },
      { title: "Data density & small multiples", id: "data-density", type: "theory", keywords: "Tufte high-information dense small multiples multivariate panels trellis facets" },
      { title: "Visual encoding principles", id: "visual-encoding", type: "theory", keywords: "Cleveland McGill position length angle area color hue saturation pre-attentive perception hierarchy" },
      { title: "Choosing the right chart", id: "choosing-charts", type: "practical", keywords: "chart selection bar line scatter pie histogram box plot treemap map comparison trend proportion distribution correlation" },
      { title: "Color in data visualization", id: "color-in-data", type: "practical", keywords: "sequential diverging categorical palette colorblind accessibility redundant encoding" },
      { title: "Annotation & labeling", id: "annotation", type: "practical", keywords: "direct labels legend context annotation multifunctioning elements storytelling" },
      { title: "Responsive data graphics", id: "responsive-data", type: "practical", keywords: "mobile tablet responsive progressive disclosure sparkline breakpoints touch" },
      { title: "Redesign exercises", id: "redesign-exercises", type: "practical", keywords: "erasure test bar chart minimization before after improve strip defaults" },
      { title: "Templates & checklists", id: "templates", type: "practical", keywords: "visualization review checklist chart selection decision matrix template" },
      { title: "Great data graphics", id: "great-graphics", type: "examples", keywords: "Minard Napoleon Financial Times New York Times Pudding case study gallery" },
      { title: "Common failures", id: "common-failures", type: "examples", keywords: "pie chart 3D rainbow spaghetti truncated axis failures mistakes" },
      { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "aesthetics over data decorating colorblind context comparison baseline" },
      { title: "When to use this", id: "when-to-use", type: "practical", keywords: "decision guidance dashboard report presentation" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "Tufte complete principles Cleveland McGill ranking tools Chart.js D3 Observable ggplot resources reading ColorBrewer Few Cairo Knaflic" }
    ],
    methods: [
      { name: "Lie Factor", section: "graphical-integrity", keywords: "distortion proportional accuracy visual effect numerical change" },
      { name: "Data-Ink Ratio", section: "data-ink-ratio", keywords: "maximize data-ink erase non-data redundant erasing principles" },
      { name: "The Erasure Test", section: "redesign-exercises", keywords: "remove border background grid redundant encoding review" },
      { name: "Small Multiples", section: "data-density", keywords: "trellis facet panel grid same design different data multivariate" },
      { name: "Chart Selection Framework", section: "choosing-charts", keywords: "comparison bar trend line proportion stacked distribution histogram correlation scatter" },
      { name: "Palette Selection", section: "color-in-data", keywords: "sequential diverging categorical colorblind safe color scheme" },
      { name: "Bar Chart Minimization", section: "redesign-exercises", keywords: "exercise reduce minimal effective strip defaults horizontal sorted" }
    ]
  },
{
  topic: "Interaction Design: Micro-interactions & Motion",
  url: "topics/interaction-design.html",
  tier: "Tier 1",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "interaction design motion animation response behavior feel" },
    { title: "Motion principles", id: "motion-principles", type: "theory", keywords: "easing duration Disney principles anticipation follow-through staging" },
    { title: "Micro-interactions", id: "micro-interactions", type: "practical", keywords: "trigger rules feedback loops toggle button press swipe pull-to-refresh" },
    { title: "State transitions", id: "state-transitions", type: "practical", keywords: "empty loading error partial ideal skeleton spinner five states" },
    { title: "Feedback patterns", id: "feedback-patterns", type: "practical", keywords: "hover focus progress loading success confirmation" },
    { title: "Functional vs decorative", id: "animation-purpose", type: "practical", keywords: "functional decorative purpose test remove animation" },
    { title: "Reduced motion", id: "reduced-motion", type: "practical", keywords: "prefers-reduced-motion vestibular accessibility a11y" },
    { title: "Notification and attention design", id: "notification-design", type: "practical", keywords: "notification alert hierarchy interruption attention smart batching AI-generated" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "motion design review checklist animation audit" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Stripe iOS Apple Slack skeleton screen" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "animation for its sake too slow reduced motion ignore" },
    { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "Saffer signature moments CSS animation performance transform opacity" }
  ],
  methods: [
    { name: "Micro-interaction Design", section: "micro-interactions", keywords: "trigger rules feedback loops Saffer" },
    { name: "State Transition Mapping", section: "state-transitions", keywords: "empty loading error partial ideal five states" },
    { name: "Animation Audit", section: "templates", keywords: "motion review functional decorative duration easing" },
    { name: "Motion Choreography", section: "motion-principles", keywords: "easing duration stagger sequence choreography" },
    { name: "Notification Design Framework", section: "notification-design", keywords: "notification alert hierarchy interruption smart batching AI governance attention" }
  ]
},
{
  topic: "International & Multicultural Marketing",
  url: "topics/international-marketing.html",
  tier: "Tier 3",
  discipline: "MK",
  sections: [
    { title: "What international marketing is", id: "what-and-why", type: "theory", keywords: "international marketing cultural adaptation transcreation localization" },
    { title: "Market entry marketing", id: "market-entry", type: "practical", keywords: "market entry positioning channels partnerships research" },
    { title: "Cultural adaptation", id: "cultural-adaptation", type: "practical", keywords: "cultural sensitivity audit transcreation translation imagery tone" },
    { title: "Managing regional marketing", id: "regional-management", type: "practical", keywords: "regional team centralized federated decentralized structure" },
    { title: "International marketing in practice", id: "examples", type: "examples", keywords: "localization Japan global campaign GDPR compliance" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "positioning transfer machine translation EMEA APAC market" }
  ],
  methods: [
    { name: "Market Entry Marketing Playbook", section: "market-entry", keywords: "market entry research positioning channels partnerships" },
    { name: "Cultural Sensitivity Audit", section: "cultural-adaptation", keywords: "cultural audit imagery tone humor formats legal regulatory" },
    { name: "Transcreation vs. Translation Decision", section: "cultural-adaptation", keywords: "transcreation translation create locally adapt" },
    { name: "Regional Marketing Team Structure", section: "regional-management", keywords: "centralized federated decentralized regional team" }
  ]
},
{
  topic: "Journey Mapping, Flows & Task Analysis",
  url: "topics/journey-mapping.html",
  tier: "Tier 1",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "journey mapping visualization experience perspective shift pain points touchpoints" },
    { title: "The zoom-level framework", id: "zoom-levels", type: "theory", keywords: "experience map journey map user flow task analysis zoom levels hierarchy" },
    { title: "Journey maps", id: "journey-maps", type: "practical", keywords: "journey map anatomy stages lanes actions thoughts emotions touchpoints pain points opportunities emotion curve" },
    { title: "Building a journey map", id: "building-journey-map", type: "practical", keywords: "journey mapping workshop persona scenario stages lanes emotion curve opportunities stakeholders" },
    { title: "Empathy maps", id: "empathy-maps", type: "practical", keywords: "empathy map says thinks does feels quadrant synthesis contradictions" },
    { title: "User flows", id: "user-flows", type: "practical", keywords: "user flow diagram screens decision points branches error states happy path unhappy path entry point" },
    { title: "Building a user flow", id: "building-user-flow", type: "practical", keywords: "flow diagramming task entry point happy path decision points error states edge cases annotations" },
    { title: "Task analysis", id: "task-analysis", type: "practical", keywords: "hierarchical task analysis HTA cognitive task analysis CTA decomposition sub-goals operations cognitive load" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "journey map canvas empathy map canvas readiness checklist flow completeness checklist template" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Uber rider journey NHS patient emergency Spotify onboarding case study" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "assumptions no research org chart happy path only outdated map" },
    { title: "When to use which tool", id: "when-to-use", type: "practical", keywords: "decision guide journey map empathy map user flow task analysis when" },
    { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "current-state future-state day-in-the-life service blueprint GOMS KLM keystroke-level model" }
  ],
  methods: [
    { name: "Journey Mapping Workshop", section: "building-journey-map", keywords: "persona scenario stages lanes emotion curve opportunities collaborative workshop" },
    { name: "Empathy Mapping", section: "empathy-maps", keywords: "says thinks does feels quadrant synthesis contradictions user segment" },
    { name: "User Flow Diagramming", section: "building-user-flow", keywords: "screens decision points branches error states happy path flowchart" },
    { name: "Hierarchical Task Analysis (HTA)", section: "task-analysis", keywords: "goal decomposition sub-goals operations plans cognitive load hierarchy" },
    { name: "Cognitive Task Analysis (CTA)", section: "task-analysis", keywords: "expert users knowledge decisions cues strategies errors mental model" }
  ]
},
{
  topic: "Landing Pages & Conversion Optimization",
  url: "topics/landing-pages-cro.html",
  tier: "Tier 2",
  discipline: "MK",
  sections: [
    { title: "What CRO is", id: "what-and-why", type: "theory", keywords: "CRO conversion rate optimization landing page fulcrum" },
    { title: "Landing page anatomy", id: "landing-page-anatomy", type: "practical", keywords: "headline subheadline hero CTA social proof benefits objections" },
    { title: "CRO methodology", id: "cro-methodology", type: "practical", keywords: "audit A/B testing clarity friction trust mobile" },
    { title: "Form optimization", id: "forms", type: "practical", keywords: "form fields validation progress mobile autocomplete" },
    { title: "Behavioral analysis", id: "heatmaps", type: "practical", keywords: "heatmap scroll click session recording Hotjar" },
    { title: "Page personalization", id: "personalization", type: "practical", keywords: "personalization dynamic headline social proof segment" },
    { title: "CRO in practice", id: "examples", type: "examples", keywords: "form reduction headline test iterative compound" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "redesign button color quality page speed" },
    { title: "Ecommerce conversion optimization", id: "ecommerce-cro", type: "practical", keywords: "ecommerce CRO comparison tables social proof choice overload trust signals product pages" }
  ],
  methods: [
    { name: "Landing Page Anatomy Framework", section: "landing-page-anatomy", keywords: "headline hero CTA social proof benefits objection" },
    { name: "Above-the-Fold Formula", section: "landing-page-anatomy", keywords: "above fold headline CTA 5 seconds" },
    { name: "CRO Audit Checklist", section: "cro-methodology", keywords: "message match clarity friction trust mobile audit" },
    { name: "A/B Testing for Landing Pages", section: "cro-methodology", keywords: "A/B test sample size significance variant" },
    { name: "Form Optimization Checklist", section: "forms", keywords: "form fields reduce validation progress mobile" },
    { name: "Heatmap & Session Recording Analysis", section: "heatmaps", keywords: "heatmap scroll click session recording" },
    { name: "Personalized Landing Pages", section: "personalization", keywords: "personalization dynamic headline social proof segment" },
    { name: "Ecommerce CRO Methods", section: "ecommerce-cro", keywords: "ecommerce comparison tables social proof choice overload trust signals" }
  ]
},
{
    topic: "Launch Marketing & Campaigns",
    url: "topics/launch-marketing.html",
    tier: "Tier 1",
  discipline: "MK",
    sections: [
      { title: "What it is & why it matters", id: "what-launch-marketing-is", type: "theory", keywords: "launch marketing campaign awareness demand product announcement external" },
      { title: "Campaigns beyond launches", id: "campaigns-beyond-launches", type: "theory", keywords: "campaign demand generation seasonal awareness brand time-bound" },
      { title: "Core methods", id: "core-methods", type: "practical", keywords: "launch tier campaign brief assets press influencer post-launch" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "tier 1 launch campaign planning demand generation case study" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "timing sequencing pre-launch sustain momentum further reading Walker Moore" }
    ],
    methods: [
      { name: "Launch Tier Framework", section: "core-methods", keywords: "tier transformative significant incremental maintenance proportional effort" },
      { name: "Campaign Brief", section: "core-methods", keywords: "objective audience message channels assets metrics timeline planning" },
      { name: "Launch Asset Checklist", section: "core-methods", keywords: "landing page blog press email social ads sales enablement demo video" },
      { name: "Press & Influencer Outreach", section: "core-methods", keywords: "media journalist pitch influencer earned coverage amplification exclusive" },
      { name: "Post-Launch Analysis", section: "core-methods", keywords: "week month quarter awareness conversion revenue retrospective lessons" }
    ]
  },
{
  topic: "Lifecycle Marketing & Email",
  url: "topics/lifecycle-email.html",
  tier: "Tier 2",
  discipline: "MK",
  sections: [
    { title: "What lifecycle marketing is", id: "what-and-why", type: "theory", keywords: "lifecycle marketing email ROI behavior-triggered owned channel" },
    { title: "Lifecycle email framework", id: "lifecycle-framework", type: "practical", keywords: "welcome onboarding activation engagement retention expansion win-back" },
    { title: "Drip campaign architecture", id: "drip-architecture", type: "practical", keywords: "drip campaign sequence trigger branching exit" },
    { title: "Email segmentation", id: "segmentation", type: "practical", keywords: "segmentation behavioral lifecycle firmographic engagement" },
    { title: "Deliverability", id: "deliverability", type: "practical", keywords: "deliverability SPF DKIM DMARC list hygiene reputation" },
    { title: "Subject line optimization", id: "subject-lines", type: "practical", keywords: "subject line A/B test open rate personalization" },
    { title: "Lifecycle email in practice", id: "examples", type: "examples", keywords: "onboarding activation re-engagement newsletter segmentation" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "frequency overlap opens vs outcomes unsubscribes" }
  ],
  methods: [
    { name: "Lifecycle Email Framework", section: "lifecycle-framework", keywords: "lifecycle welcome onboarding activation engagement retention win-back" },
    { name: "Drip Campaign Architecture", section: "drip-architecture", keywords: "drip campaign trigger sequence branching exit" },
    { name: "Email Segmentation Strategy", section: "segmentation", keywords: "segmentation behavioral lifecycle firmographic engagement" },
    { name: "Email Deliverability Checklist", section: "deliverability", keywords: "SPF DKIM DMARC hygiene reputation warm-up" },
    { name: "Subject Line Testing Protocol", section: "subject-lines", keywords: "subject line A/B testing open rate" }
  ]
},
{
    topic: "Marketing Analytics & Attribution",
    url: "topics/marketing-analytics.html",
    tier: "Tier 1",
  discipline: "MK",
    sections: [
      { title: "What it is & why it matters", id: "what-marketing-analytics-is", type: "theory", keywords: "marketing analytics measurement performance ROI effectiveness" },
      { title: "The attribution problem", id: "the-attribution-problem", type: "theory", keywords: "attribution cross-device influence last click offline touchpoints privacy" },
      { title: "Core methods", id: "core-methods", type: "practical", keywords: "attribution model funnel metrics dashboard incrementality UTM" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "analytics foundation checklist UTM CRM closed-loop data quality" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "attribution comparison dashboard design case study" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "vanity metrics last touch false precision measuring everything" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "privacy cookies first-party MMM marketing mix modeling further reading" }
    ],
    methods: [
      { name: "Attribution Model Comparison", section: "core-methods", keywords: "last-touch first-touch linear time-decay position-based data-driven algorithmic" },
      { name: "Full-Funnel Metrics Framework", section: "core-methods", keywords: "awareness engagement conversion revenue efficiency funnel stages primary diagnostic" },
      { name: "Marketing Dashboard Design", section: "core-methods", keywords: "dashboard executive channel diagnostic tiers CEO leadership weekly monthly" },
      { name: "Incrementality Testing", section: "core-methods", keywords: "incrementality holdout geo-holdout causation correlation retargeting true impact" },
      { name: "UTM Strategy & Taxonomy", section: "core-methods", keywords: "UTM source medium campaign naming convention taxonomy tracking consistency" }
    ]
  },
{
  topic: "The Marketing Career",
  url: "topics/marketing-career.html",
  tier: "Tier 4",
  discipline: "MK",
  sections: [
    { title: "What a marketing career looks like", id: "what-and-why", type: "theory", keywords: "marketing career specialization AI change field" },
    { title: "Marketing specializations", id: "specializations", type: "theory", keywords: "content performance growth product brand operations PR specialization T-shaped" },
    { title: "Career progression", id: "progression", type: "practical", keywords: "career path IC management CMO portfolio transition" },
    { title: "Staying relevant as AI changes marketing", id: "ai-adaptation", type: "practical", keywords: "AI automation skill gap judgment strategy adaptation" },
    { title: "Marketing careers in practice", id: "examples", type: "examples", keywords: "generalist specialist portfolio AI adaptation career" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "specialize early title chasing business context AI resistance" }
  ],
  methods: [
    { name: "Specialization Assessment", section: "specializations", keywords: "content performance product brand operations PR career path" },
    { name: "T-Shaped Marketer Framework", section: "specializations", keywords: "breadth depth horizontal vertical skill development" },
    { name: "Marketing Career Map", section: "progression", keywords: "IC management cross-functional transition CMO" },
    { name: "Marketing Portfolio Guide", section: "progression", keywords: "portfolio case study work sample interview" },
    { name: "Skill Gap Analysis", section: "ai-adaptation", keywords: "AI automation commoditized premium new skills" }
  ]
},
{
  topic: "Marketing Leadership & Team Building",
  url: "topics/marketing-leadership.html",
  tier: "Tier 4",
  discipline: "MK",
  sections: [
    { title: "What marketing leadership requires", id: "what-and-why", type: "theory", keywords: "marketing leadership team building management function" },
    { title: "Hiring marketers", id: "hiring", type: "practical", keywords: "hiring generalist specialist rubric agency freelancer in-house" },
    { title: "Team structure by stage", id: "team-structure", type: "practical", keywords: "team structure stage seed series startup growth" },
    { title: "Budget and resource allocation", id: "budget", type: "practical", keywords: "budget allocation defense agency management" },
    { title: "Marketing leadership in practice", id: "examples", type: "examples", keywords: "first hire agency briefing scaling team" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "specialists too early activity metrics marketing ops agency oversight" }
  ],
  methods: [
    { name: "Marketing Hiring Rubric", section: "hiring", keywords: "first hire specialist generalist evaluation criteria" },
    { name: "In-House vs Agency Decision Framework", section: "hiring", keywords: "agency freelancer in-house build buy capability" },
    { name: "Team Structure by Stage", section: "team-structure", keywords: "seed series growth functional teams" },
    { name: "Marketing Budget Template", section: "budget", keywords: "budget categories allocation defense pipeline" },
    { name: "Agency Management Framework", section: "budget", keywords: "agency selection onboarding management KPIs" }
  ]
},
{
  topic: "Marketing Psychology & Persuasion",
  url: "topics/marketing-psychology.html",
  tier: "Tier 4",
  discipline: "MK",
  sections: [
    { title: "Why psychology matters", id: "what-and-why", type: "theory", keywords: "psychology marketing behavioral economics cognitive bias decision-making" },
    { title: "Core persuasion principles", id: "principles", type: "theory", keywords: "Cialdini reciprocity social proof authority consistency liking scarcity" },
    { title: "Cognitive biases in marketing", id: "biases", type: "theory", keywords: "anchoring loss aversion default effect framing bandwagon cognitive bias" },
    { title: "Applying psychology ethically", id: "application", type: "practical", keywords: "ethical persuasion audit decision architecture choice overload decoy pricing" },
    { title: "Marketing psychology in practice", id: "examples", type: "examples", keywords: "social proof loss framing fake urgency ethical persuasion" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "mechanical application one size fits all manipulation persuasion" }
  ],
  methods: [
    { name: "Cialdini's Principles Marketing Application", section: "principles", keywords: "reciprocity social proof authority consistency liking scarcity" },
    { name: "Cognitive Bias Checklist", section: "biases", keywords: "anchoring loss aversion default framing bandwagon" },
    { name: "Ethical Persuasion Audit", section: "application", keywords: "ethical transparency customer interest truth" },
    { name: "Decision Architecture for Marketing", section: "application", keywords: "choice overload decoy pricing sequencing defaults" }
  ]
},
{
  topic: "Marketing Strategy Frameworks",
  url: "topics/marketing-strategy-frameworks.html",
  tier: "Tier 4",
  discipline: "MK",
  sections: [
    { title: "Why frameworks matter", id: "what-and-why", type: "theory", keywords: "marketing strategy framework planning strategic thinking" },
    { title: "Classic marketing frameworks", id: "classic", type: "theory", keywords: "STP segmentation targeting positioning 4Ps 7Ps marketing mix" },
    { title: "Growth and planning frameworks", id: "growth", type: "practical", keywords: "growth marketing funnel AAARRR experiment plan maturity" },
    { title: "Strategic frameworks in practice", id: "examples", type: "examples", keywords: "STP exercise growth audit marketing plan" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "framework tourism strategy execution tactics" }
  ],
  methods: [
    { name: "STP Segmentation Targeting Positioning", section: "classic", keywords: "segmentation targeting positioning strategy foundation" },
    { name: "Marketing Mix 4Ps 7Ps", section: "classic", keywords: "product price place promotion people process physical evidence" },
    { name: "Growth Marketing Framework", section: "growth", keywords: "funnel AAARRR conversion growth levers experiment" },
    { name: "Marketing Plan Template", section: "growth", keywords: "plan objectives strategy tactics measurement calendar" },
    { name: "Marketing Maturity Assessment", section: "growth", keywords: "maturity level ad hoc foundational scaling optimized" }
  ]
},
{
  topic: "Marketplaces & Multi-Sided Platforms",
  url: "topics/marketplaces-platforms.html",
  tier: "Tier 3",
  discipline: "PM",
  sections: [
    { title: "What marketplace PM is", id: "what-and-why", type: "theory", keywords: "marketplace platform two-sided network effect" },
    { title: "Solving the cold-start problem", id: "cold-start", type: "practical", keywords: "cold start chicken egg seed supply launch" },
    { title: "Supply and demand balancing", id: "supply-demand", type: "practical", keywords: "supply demand balance take rate commission" },
    { title: "Quality and trust systems", id: "quality-trust", type: "practical", keywords: "trust safety review rating verification dispute" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "Airbnb Uber marketplace cold start" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "disintermediation GMV liquidity" }
  ],
  methods: [
    { name: "Cold-Start Strategy Matrix", section: "cold-start", keywords: "cold start single-player seed constrain subsidize" },
    { name: "Liquidity Metrics Framework", section: "cold-start", keywords: "liquidity search fill time match utilization" },
    { name: "Supply/Demand Balancing", section: "supply-demand", keywords: "supply demand constrained surplus balance" },
    { name: "Take-Rate Modeling", section: "supply-demand", keywords: "take rate commission benchmark category" },
    { name: "Marketplace Flywheel Design", section: "quality-trust", keywords: "flywheel supply demand selection growth" },
    { name: "Trust & Safety Framework", section: "quality-trust", keywords: "trust safety review verification dispute fraud" }
  ]
},
{
  topic: "Mobile & Responsive Design",
  url: "topics/mobile-responsive.html",
  tier: "Tier 2",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "mobile design responsive mobile-first context constraints screen size" },
    { title: "Touch interaction fundamentals", id: "touch-design", type: "theory", keywords: "touch interaction fingertip thumb zone one-handed steven hoober" },
    { title: "Tap target sizing", id: "tap-targets", type: "practical", keywords: "tap target 44pt 48dp hit area spacing WCAG touch" },
    { title: "Gesture design", id: "gestures", type: "practical", keywords: "gesture swipe pinch long-press pull-to-refresh discoverable" },
    { title: "Responsive layout", id: "responsive-layout", type: "practical", keywords: "breakpoint fluid grid column drop layout shifter off-canvas" },
    { title: "Mobile navigation", id: "mobile-navigation", type: "practical", keywords: "bottom tab bar hamburger menu drawer navigation contextual" },
    { title: "Mobile form design", id: "mobile-forms", type: "practical", keywords: "form mobile keyboard input type autofill single column" },
    { title: "Performance", id: "performance", type: "practical", keywords: "performance budget skeleton screen progressive loading speed 3G" },
    { title: "Platform conventions", id: "platform-conventions", type: "practical", keywords: "iOS Android cross-platform Material Design HIG convention" },
    { title: "Offline design", id: "offline", type: "practical", keywords: "offline-first cache queue connectivity intermittent sync" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "mobile design review responsive audit checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Google Maps Spotify Instagram bottom sheet progressive loading" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "hamburger menu fat finger landscape desktop testing" }
  ],
  methods: [
    { name: "Tap Target Guidelines", section: "tap-targets", keywords: "44pt 48dp hit area minimum size" },
    { name: "Thumb-Zone Analysis", section: "tap-targets", keywords: "thumb reach one-handed bottom placement" },
    { name: "Gesture Vocabulary", section: "gestures", keywords: "universal learned custom gesture swipe tap" },
    { name: "Breakpoint Strategy", section: "responsive-layout", keywords: "breakpoint content-driven fluid responsive" },
    { name: "Layout Patterns", section: "responsive-layout", keywords: "mostly fluid column drop layout shifter off-canvas" },
    { name: "Bottom Tab Bar", section: "mobile-navigation", keywords: "bottom navigation tabs thumb-friendly" },
    { name: "Mobile Form Optimization", section: "mobile-forms", keywords: "keyboard type autofill single column labels" },
    { name: "Mobile Performance Budget", section: "performance", keywords: "page weight time to interactive 3G" },
    { name: "Cross-Platform Pattern Comparison", section: "platform-conventions", keywords: "iOS Android Material HIG convention" },
    { name: "Offline-First Design", section: "offline", keywords: "cache queue sync offline connectivity" }
  ]
},
{
  topic: "Multi-Channel Content Orchestration",
  url: "topics/multi-channel-orchestration.html",
  tier: "Tier 3",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "multi-channel orchestration coordination consistency distribution" },
    { title: "Channel content matrix", id: "channel-matrix", type: "practical", keywords: "channel matrix content types adaptation primary sequencing" },
    { title: "Channel adaptation", id: "adaptation", type: "practical", keywords: "adaptation web mobile email social in-product AI formatting" },
    { title: "Cross-channel consistency", id: "consistency", type: "practical", keywords: "consistency audit message voice visual information timing" },
    { title: "Distribution workflow", id: "distribution", type: "practical", keywords: "distribution workflow calendar create-once-adapt-many scheduling" },
    { title: "Cross-channel measurement", id: "cross-channel-measurement", type: "practical", keywords: "measurement channel performance attribution cost comparison" },
    { title: "Content syndication", id: "syndication", type: "practical", keywords: "syndication canonical URLs timing platform third-party" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Notion Morning Brew multi-channel launch" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "copy-paste syndication channel sprawl" }
  ],
  methods: [
    { name: "Channel Content Matrix", section: "channel-matrix", keywords: "channel matrix content types adaptation sequence" },
    { name: "Content Adaptation Guidelines", section: "adaptation", keywords: "adaptation web mobile email social in-product" },
    { name: "Channel-Specific Formatting Rules", section: "adaptation", keywords: "formatting character limits visuals links hashtags" },
    { name: "Cross-Channel Consistency Audit", section: "consistency", keywords: "consistency message voice visual information timing" },
    { name: "Content Distribution Workflow", section: "distribution", keywords: "distribution create-once checklist scheduling feedback" },
    { name: "Omnichannel Content Calendar", section: "distribution", keywords: "calendar channels timeline lead times evergreen timely" },
    { name: "Channel Performance Comparison", section: "cross-channel-measurement", keywords: "performance normalize attribution contribution cost" },
    { name: "Content Syndication Strategy", section: "syndication", keywords: "syndication canonical timing adaptation platform" }
  ]
},
{
  topic: "Object-Oriented UI Design",
  url: "topics/object-oriented-ui.html",
  tier: "Tier 2",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "OOUX object-oriented UX objects actions nouns verbs mental model" },
    { title: "Objects actions mental models", id: "mental-model", type: "theory", keywords: "mental model content metadata nested objects CTAs properties" },
    { title: "Noun foraging", id: "noun-foraging", type: "practical", keywords: "noun foraging identify objects cluster deduplicate rank" },
    { title: "Object mapping", id: "object-mapping", type: "practical", keywords: "object map content metadata relationships CTAs nested" },
    { title: "ORCA process", id: "orca", type: "practical", keywords: "ORCA objects relationships CTAs attributes Sophia Prater" },
    { title: "Container-first layout", id: "container-first", type: "practical", keywords: "container-first layout detail view collection view compact reference" },
    { title: "Enterprise applications", id: "enterprise", type: "practical", keywords: "enterprise hierarchy navigation breadcrumbs complex nested" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "object definition card OOUX quality check" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Notion Salesforce GitHub object model" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "screens before objects engineering terms containers" }
  ],
  methods: [
    { name: "Noun Foraging", section: "noun-foraging", keywords: "noun highlight cluster deduplicate rank objects" },
    { name: "Object Map", section: "object-mapping", keywords: "content metadata nested relationships CTAs" },
    { name: "ORCA Process", section: "orca", keywords: "objects relationships CTAs attributes structured" },
    { name: "Container-First Design", section: "container-first", keywords: "detail view collection view layout" },
    { name: "Object Hierarchy Design", section: "enterprise", keywords: "hierarchy navigation enterprise complex" }
  ]
},
{
  topic: "OKRs, Goals & Accountability",
  url: "topics/okrs-goals.html",
  tier: "Tier 2",
  discipline: "PM",
  sections: [
    { title: "What OKRs are", id: "what-and-why", type: "theory", keywords: "OKR objective key result goal alignment" },
    { title: "Writing effective OKRs", id: "writing", type: "practical", keywords: "OKR writing template stretch ambitious outcome" },
    { title: "Cascading and alignment", id: "cascading", type: "practical", keywords: "cascade alignment company team workshop" },
    { title: "Check-in cadences and grading", id: "check-ins", type: "practical", keywords: "check-in weekly grading score rubric" },
    { title: "Goal-setting alternatives", id: "alternatives", type: "practical", keywords: "NCT V2MOM North Star bets alternative" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "Google Figma OKR case study" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "theater too many mid-quarter change sandbag" }
  ],
  methods: [
    { name: "OKR Writing Template", section: "writing", keywords: "OKR objective key result write format" },
    { name: "Anti-Pattern Checklist", section: "writing", keywords: "anti-pattern output BAU sandbagged review" },
    { name: "Cascade vs Alignment Model", section: "cascading", keywords: "cascade alignment company team connect" },
    { name: "OKR Alignment Workshop", section: "cascading", keywords: "workshop quarterly alignment breakout" },
    { name: "Weekly Check-In Format", section: "check-ins", keywords: "weekly check-in confidence trend value" },
    { name: "OKR Grading Rubric", section: "check-ins", keywords: "grading score 0.7 stretch rubric" },
    { name: "Goal-Setting Alternatives", section: "alternatives", keywords: "NCT V2MOM North Star bets framework" }
  ]
},
{
  topic: "Paid Acquisition (SEM, Social Ads, Display)",
  url: "topics/paid-acquisition.html",
  tier: "Tier 2",
  discipline: "MK",
  sections: [
    { title: "What paid acquisition is", id: "what-and-why", type: "theory", keywords: "paid acquisition ads SEM social ads display demand" },
    { title: "Platform selection", id: "platform-selection", type: "practical", keywords: "Google Ads Meta LinkedIn YouTube TikTok platform channel" },
    { title: "Campaign architecture", id: "campaign-structure", type: "practical", keywords: "campaign structure ad group targeting naming audience" },
    { title: "Creative testing", id: "creative-testing", type: "practical", keywords: "creative testing ad copy PAS concept variation format" },
    { title: "Bidding and budget", id: "bidding-budget", type: "practical", keywords: "bidding CPC CPA ROAS budget allocation scaling" },
    { title: "Landing page alignment", id: "landing-page-alignment", type: "practical", keywords: "landing page message match ad-to-page conversion" },
    { title: "Paid acquisition in practice", id: "examples", type: "examples", keywords: "LinkedIn SaaS creative testing scaling" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "clicks conversions testing variables scaling" }
  ],
  methods: [
    { name: "Ad Platform Selection Framework", section: "platform-selection", keywords: "Google Meta LinkedIn YouTube TikTok channel-market fit" },
    { name: "Campaign Structure Framework", section: "campaign-structure", keywords: "campaign ad group hierarchy naming objective" },
    { name: "Audience Targeting Layers", section: "campaign-structure", keywords: "targeting custom lookalike contextual retargeting" },
    { name: "Creative Testing Protocol", section: "creative-testing", keywords: "creative testing concept variation format fatigue" },
    { name: "Ad Copy Formula Library", section: "creative-testing", keywords: "PAS before-after-bridge social proof CTA" },
    { name: "Bid Strategy Selection", section: "bidding-budget", keywords: "manual CPC target CPA ROAS maximize conversions" },
    { name: "Budget Allocation Model", section: "bidding-budget", keywords: "budget 70/20/10 scaling experimentation" }
  ]
},
{
  topic: "Partnerships & Co-Marketing",
  url: "topics/partnerships.html",
  tier: "Tier 2",
  discipline: "MK",
  sections: [
    { title: "What partnership marketing is", id: "what-and-why", type: "theory", keywords: "partnership co-marketing trust distribution credibility" },
    { title: "Partner identification", id: "identification", type: "practical", keywords: "partner identification audience overlap brand alignment capability" },
    { title: "Partnership structures", id: "partnership-types", type: "practical", keywords: "strategic co-marketing affiliate referral tiers" },
    { title: "Co-marketing campaigns", id: "co-marketing", type: "practical", keywords: "co-marketing campaign ebook webinar lead sharing" },
    { title: "Integration partnerships", id: "integration-partnerships", type: "practical", keywords: "integration marketplace directory co-sell" },
    { title: "Affiliate programs", id: "affiliate", type: "practical", keywords: "affiliate referral commission tracking program" },
    { title: "Measuring partnership ROI", id: "measurement", type: "practical", keywords: "ROI pipeline influence strategic value" },
    { title: "Partnerships in practice", id: "examples", type: "examples", keywords: "co-marketing ebook integration newsletter swap" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "vague agreement asymmetric effort competitors" }
  ],
  methods: [
    { name: "Partner Identification Matrix", section: "identification", keywords: "partner audience overlap brand capability" },
    { name: "Partnership Scoring Model", section: "partnership-types", keywords: "strategic co-marketing affiliate tier" },
    { name: "Co-Marketing Campaign Framework", section: "co-marketing", keywords: "campaign goal labor promotion leads timeline" },
    { name: "Co-Branded Content Strategy", section: "co-marketing", keywords: "co-branded ebook webinar research template" },
    { name: "Integration Partner Playbook", section: "integration-partnerships", keywords: "integration announcement directory use case co-sell" },
    { name: "Affiliate Program Design", section: "affiliate", keywords: "affiliate commission tracking assets quality" },
    { name: "Partnership ROI Measurement", section: "measurement", keywords: "ROI pipeline influence strategic quarterly" }
  ]
},
{
    topic: "Personas & User Segmentation",
    url: "topics/personas.html",
    discipline: "UX",
    tier: "Tier 2",
    sections: [
      { title: "What personas are and why they matter", id: "what-and-why", type: "theory", keywords: "persona user segment archetype behavior goals motivations ghost personas self-referential design alignment" },
      { title: "The science of why personas work", id: "why-they-work", type: "theory", keywords: "experience-taking theory of mind empathy storytelling effectiveness study Frank Long radiologist" },
      { title: "Challenges that derail persona projects", id: "challenges", type: "theory", keywords: "buy-in leadership ownership silo failure adoption" },
      { title: "Planning the persona effort", id: "planning", type: "practical", keywords: "effort spectrum lightweight medium in-depth situational analysis cross-functional team goal statement scope broad narrow" },
      { title: "The persona creation process", id: "creation-process", type: "practical", keywords: "qualitative research interviews field studies attribute grid analysis segmentation dimension plotting clusters coding patterns saturation" },
      { title: "Lightweight persona variants", id: "lightweight", type: "practical", keywords: "assumptive personas proto-personas workshop lean UX agile sprint zero lightweight" },
      { title: "Quantitative validation and segmentation", id: "quantitative", type: "practical", keywords: "latent class analysis LCA survey quantitative statistical validation discriminant analysis" },
      { title: "Crafting the persona deliverable", id: "deliverable", type: "practical", keywords: "building blocks biography goals behaviors frustrations quote image guidelines fluff prioritization primary secondary" },
      { title: "Communicating and rolling out personas", id: "communication", type: "practical", keywords: "communication strategy rollout posters swag roadshow adoption evangelism buy-in" },
      { title: "Applying personas to design and product work", id: "using-personas", type: "practical", keywords: "feature brainstorm feature matrix cognitive walkthrough scenario writing scenario mapping journey maps usability testing agile integration" },
      { title: "Persona maintenance", id: "maintenance", type: "practical", keywords: "maintenance revision triggers update tweak refresh retire evergreen alignment" },
      { title: "Cultural and accessibility considerations", id: "cultural-accessibility", type: "practical", keywords: "cross-cultural regional international accessibility disability inclusive personas" },
      { title: "Templates and checklists", id: "templates", type: "practical", keywords: "situational analysis template proto-persona template checklist project planning" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "hospital healthcare University of Washington Digital Telepathy eBay ethnographic" },
      { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "demographics silo fluff big reveal shelf-ware over-delivering" }
    ],
    methods: [
      { name: "Effort Spectrum Assessment", section: "planning", keywords: "lightweight medium in-depth calibration effort level" },
      { name: "Situational Analysis", section: "planning", keywords: "organizational readiness user-focus assessment process mapping" },
      { name: "Interview Question Framework", section: "creation-process", keywords: "domain experience goals behaviors attitudes questions" },
      { name: "Attribute Grid Analysis", section: "creation-process", keywords: "grid participants attributes patterns correlate" },
      { name: "Dimension Plotting", section: "creation-process", keywords: "continuum categorical clusters visualization segmentation" },
      { name: "Assumptive Persona Workshop", section: "lightweight", keywords: "factoid approach skeleton validate existing knowledge assumptions" },
      { name: "Proto-Persona Workshop", section: "lightweight", keywords: "lean UX four-quadrant brainstorm alignment Gothelf" },
      { name: "Research-Based Lightweight Personas", section: "lightweight", keywords: "rolling sample sprint zero incremental agile" },
      { name: "Quantitative Persona Validation", section: "quantitative", keywords: "latent class analysis LCA survey statistical clusters discriminant" },
      { name: "Persona Deliverable Design", section: "deliverable", keywords: "style building blocks image guidelines dimension scales one-page" },
      { name: "Persona Prioritization", section: "deliverable", keywords: "primary secondary trade-offs weighted" },
      { name: "Persona Communication Strategy", section: "communication", keywords: "rollout posters swag roadshow adoption multi-touch" },
      { name: "Persona-Driven Feature Brainstorm", section: "using-personas", keywords: "brainstorm goals sprint ceremony features" },
      { name: "Persona-Driven Feature Matrix", section: "using-personas", keywords: "prioritization weighted scoring matrix trade-offs" },
      { name: "Cognitive Walkthrough with Personas", section: "using-personas", keywords: "walkthrough evaluation competitor analysis theory of mind" },
      { name: "Scenario Writing", section: "using-personas", keywords: "character motivator intent action resolution story" },
      { name: "Scenario Mapping", section: "using-personas", keywords: "steps questions comments ideas design requirements" },
      { name: "Persona-Agile Integration", section: "using-personas", keywords: "story mapping sprint planning standup design review grooming retrospective" },
      { name: "Persona Maintenance Audit", section: "maintenance", keywords: "revision triggers tweak refresh retire five-year" },
      { name: "Cultural Considerations Framework", section: "cultural-accessibility", keywords: "cross-cultural regional market prioritization accessibility" }
    ]
  },
{
  topic: "Platform & API Product Management",
  url: "topics/platform-api-pm.html",
  tier: "Tier 2",
  discipline: "PM",
  sections: [
    { title: "What platform & API PM is", id: "what-and-why", type: "theory", keywords: "platform API developer experience DX ecosystem" },
    { title: "Platform types and ecosystem models", id: "platform-types", type: "theory", keywords: "integration infrastructure marketplace developer tool" },
    { title: "API design principles", id: "api-design", type: "practical", keywords: "REST GraphQL gRPC endpoint design" },
    { title: "Developer experience", id: "developer-experience", type: "practical", keywords: "DX TTFAC documentation SDK onboarding" },
    { title: "Versioning and backward compatibility", id: "versioning", type: "practical", keywords: "versioning deprecation breaking change semver" },
    { title: "Ecosystem and partner strategy", id: "ecosystem-strategy", type: "practical", keywords: "partner tier ecosystem developer funnel" },
    { title: "Platform-specific metrics", id: "metrics", type: "practical", keywords: "API calls uptime latency developer NPS" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "Stripe Twilio API case study" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "versioning SDK over-promise" }
  ],
  methods: [
    { name: "REST API Design Review", section: "api-design", keywords: "REST endpoint resource naming" },
    { name: "GraphQL vs REST Decision Framework", section: "api-design", keywords: "GraphQL REST gRPC paradigm" },
    { name: "TTFAC Optimization", section: "developer-experience", keywords: "time first call onboarding DX" },
    { name: "Documentation Audit", section: "developer-experience", keywords: "docs tutorial reference guide" },
    { name: "SDK Strategy Matrix", section: "developer-experience", keywords: "SDK language auto-generation" },
    { name: "API Versioning Strategy", section: "versioning", keywords: "version URL header date-based" },
    { name: "Deprecation Playbook", section: "versioning", keywords: "deprecation sunset migration" },
    { name: "Developer Funnel Analysis", section: "ecosystem-strategy", keywords: "funnel adoption registration integration" },
    { name: "Partner Tier Framework", section: "ecosystem-strategy", keywords: "partner self-serve strategic tier" }
  ]
},
{
  topic: "The PM Career",
  url: "topics/pm-career.html",
  tier: "Tier 4",
  discipline: "PM",
  sections: [
    { title: "PM career landscape", id: "what-and-why", type: "theory", keywords: "PM career path role ambiguous" },
    { title: "Career progression", id: "career-map", type: "practical", keywords: "APM PM senior staff director VP CPO IC management" },
    { title: "PM specializations", id: "specialization", type: "practical", keywords: "growth platform technical design data specialization" },
    { title: "Breaking into PM", id: "breaking-in", type: "practical", keywords: "transition engineering design consulting breaking in" },
    { title: "PM interviews", id: "interviews", type: "practical", keywords: "interview product sense metrics behavioral" },
    { title: "Career paths", id: "examples", type: "examples", keywords: "career path origin story T-shape" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "title CEO product learning optimize" }
  ],
  methods: [
    { name: "PM Career Map", section: "career-map", keywords: "career map APM PM senior director VP" },
    { name: "IC vs Management Decision Framework", section: "career-map", keywords: "IC management track decision energy" },
    { name: "Specialization Assessment", section: "specialization", keywords: "specialization growth platform technical design data" },
    { name: "Transition Playbook", section: "breaking-in", keywords: "transition engineering design consulting sales" },
    { name: "PM Interview Prep Guide", section: "interviews", keywords: "interview product sense metrics execution behavioral" }
  ]
},
{
  topic: "Build a Standout Portfolio",
  url: "topics/portfolio.html",
  tier: "Tier 4",
  discipline: "UX",
  sections: [
    { title: "What hiring managers look for", id: "what-and-why", type: "theory", keywords: "portfolio hiring manager evaluate process impact collaboration" },
    { title: "Portfolio structure", id: "structure", type: "practical", keywords: "portfolio structure landing page case studies about" },
    { title: "Writing a case study", id: "case-study", type: "practical", keywords: "case study STAR situation task action result impact" },
    { title: "Showing process", id: "process", type: "practical", keywords: "process artifacts research ideation testing iteration" },
    { title: "Different roles", id: "different-roles", type: "practical", keywords: "product designer UX visual researcher generalist role" },
    { title: "NDA-restricted work", id: "nda", type: "practical", keywords: "NDA confidential abstract permission password" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "portfolio audit checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "before after unsolicited redesign structure" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "screenshot gallery too many projects shallow" }
  ],
  methods: [
    { name: "Portfolio Architecture", section: "structure", keywords: "landing case studies about structure" },
    { name: "Case Study Framework (STAR)", section: "case-study", keywords: "situation task action result narrative" },
    { name: "Impact Statement Writing", section: "case-study", keywords: "impact metrics quantitative qualitative result" },
    { name: "Role-Specific Portfolio Focus", section: "different-roles", keywords: "product UX visual researcher generalist" },
    { name: "NDA Work Presentation", section: "nda", keywords: "NDA abstract permission password protected" }
  ]
},
{
  topic: "Positioning & Messaging",
  url: "topics/positioning-messaging.html",
  tier: "Tier 1",
  discipline: "MK",
  sections: [
    { title: "What positioning is", id: "what-and-why", type: "theory", keywords: "positioning perception alternatives differentiation market category" },
    { title: "Positioning frameworks", id: "positioning-frameworks", type: "practical", keywords: "April Dunford positioning canvas competitive alternatives unique attributes value" },
    { title: "Messaging hierarchy", id: "messaging", type: "practical", keywords: "messaging hierarchy value pillars proof points message testing" },
    { title: "Value proposition", id: "value-proposition", type: "practical", keywords: "value proposition canvas jobs pains gains pain relievers" },
    { title: "Competitive messaging", id: "competitive-messaging", type: "practical", keywords: "competitive messaging teardown whitespace differentiation" },
    { title: "Positioning in practice", id: "examples", type: "examples", keywords: "repositioning messaging alignment headline testing" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "committee feature-first messaging vs positioning competitive alternative" },
    { title: "AI-mediated discovery", id: "ai-discovery", type: "practical", keywords: "AI-mediated discovery AI search agents positioning structured differentiation authority" }
  ],
  methods: [
    { name: "April Dunford's Positioning Canvas", section: "positioning-frameworks", keywords: "positioning competitive alternatives unique attributes value category" },
    { name: "Positioning Statement Formula", section: "positioning-frameworks", keywords: "positioning statement target customer market category differentiator" },
    { name: "Category Entry Points", section: "positioning-frameworks", keywords: "category entry points buying triggers demand" },
    { name: "Messaging Hierarchy Template", section: "messaging", keywords: "messaging hierarchy value pillars proof points" },
    { name: "Message Testing Protocol", section: "messaging", keywords: "message testing preference ad landing page" },
    { name: "Value Proposition Canvas", section: "value-proposition", keywords: "value proposition canvas jobs pains gains" },
    { name: "Competitive Messaging Teardown", section: "competitive-messaging", keywords: "competitive messaging teardown whitespace landscape" },
    { name: "Positioning for AI-Mediated Discovery", section: "ai-discovery", keywords: "AI search agents structured differentiation source authority machine-readable" }
  ]
},
{
  topic: "PR, Earned Media & Thought Leadership",
  url: "topics/pr-earned-media.html",
  tier: "Tier 2",
  discipline: "MK",
  sections: [
    { title: "What earned media is", id: "what-and-why", type: "theory", keywords: "earned media PR credibility third-party thought leadership" },
    { title: "Media relations", id: "media-relations", type: "practical", keywords: "media list journalist pitch press release coverage" },
    { title: "Thought leadership", id: "thought-leadership", type: "practical", keywords: "thought leadership point of view executive content LinkedIn" },
    { title: "Analyst relations", id: "analyst-relations", type: "practical", keywords: "analyst Gartner Forrester briefing enterprise" },
    { title: "PR crisis management", id: "crisis", type: "practical", keywords: "crisis PR response transparency spokesperson" },
    { title: "Measuring earned media", id: "measurement", type: "practical", keywords: "share of voice referral traffic domain authority" },
    { title: "PR in practice", id: "examples", type: "examples", keywords: "data pitch CEO thought leadership crisis response" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "product pitch point of view relationship overreact" }
  ],
  methods: [
    { name: "Media List Building", section: "media-relations", keywords: "media list journalist outlet tier" },
    { name: "Journalist Pitch Framework", section: "media-relations", keywords: "pitch journalist subject line news hook" },
    { name: "Press Release Template", section: "media-relations", keywords: "press release announcement format" },
    { name: "Thought Leadership Content Plan", section: "thought-leadership", keywords: "thought leadership point of view cadence channel" },
    { name: "Analyst Relations Playbook", section: "analyst-relations", keywords: "analyst Gartner Forrester briefing" },
    { name: "PR Crisis Playbook", section: "crisis", keywords: "crisis response assess assemble respond follow-up" },
    { name: "Earned Media Measurement", section: "measurement", keywords: "share of voice referral traffic brand search" }
  ]
},
{
  topic: "Presentation and Communication",
  url: "topics/presentation-communication.html",
  tier: "Tier 4",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "communication presentation design skill alignment persuasion myth good design sells itself" },
    { title: "Setting the stage", id: "setting-the-stage", type: "practical", keywords: "present own work questions demands explain methodology remove distractions placeholder" },
    { title: "Using evidence effectively", id: "evidence", type: "practical", keywords: "evidence quality fact-based pseudo-evidence non-evidence Carnegie Mellon discourse analysis speak goals alternatives" },
    { title: "Structuring presentations", id: "structuring", type: "practical", keywords: "presentation structure problem insight solution evidence" },
    { title: "Different audiences", id: "audiences", type: "practical", keywords: "audience executives engineers product managers designers" },
    { title: "Storytelling with data", id: "storytelling", type: "practical", keywords: "storytelling research narrative characters conflict highlight reel" },
    { title: "Feedback environment", id: "feedback-environment", type: "practical", keywords: "feedback guidelines allies before meeting subjective tee-ups constructive setting" },
    { title: "Handling pushback", id: "pushback", type: "practical", keywords: "pushback objection feedback defensive evidence alternatives" },
    { title: "Listening to feedback", id: "listening", type: "practical", keywords: "listening ego hear out digging assess potential diminishing language jargon" },
    { title: "Responding to feedback", id: "responding", type: "practical", keywords: "responding alternative choice postpone Thank Repeat Prepare IDEAL Greever lock agreement" },
    { title: "Implementing feedback", id: "implementing-feedback", type: "practical", keywords: "feedback triage To Do Clarify Persuade yes-and compromise subtle conditional iteration trust bank Covey" },
    { title: "Building a business case", id: "business-case", type: "practical", keywords: "business case ROI research finding cost impact hypothesis Lean UX ally champion revenue expenses" },
    { title: "Tracking improvements", id: "tracking", type: "practical", keywords: "OKR alignment top tasks tracking measuring usability testing NPS CSAT SUS metrics" },
    { title: "Sharing UX status", id: "status-sharing", type: "practical", keywords: "share plans results issue tracking severity status accountability visible" },
    { title: "Written communication", id: "written", type: "practical", keywords: "design doc written async documentation decisions" },
    { title: "Data storytelling", id: "data-storytelling", type: "practical", keywords: "data storytelling insight framing narrative dashboard presentation metrics" },
    { title: "UX postmortem facilitation", id: "postmortem", type: "practical", keywords: "postmortem retrospective shipped design learnings system-level changes" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "pre-presentation review checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Airbnb storyboard Snow White highlight reel ESPN IDEAL logo app header" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "process instead outcomes defensive feedback pseudo-evidence sending without explanation" }
  ],
  methods: [
    { name: "Presentation Structure Template", section: "structuring", keywords: "problem insight approach solution evidence next steps" },
    { name: "Audience Mapping", section: "audiences", keywords: "executives engineers PM designers tailoring" },
    { name: "Research Storytelling", section: "storytelling", keywords: "characters conflict insight implication narrative" },
    { name: "Highlight Reel", section: "storytelling", keywords: "video usability clips emotional impact" },
    { name: "Evidence Quality Framework", section: "evidence", keywords: "fact-based pseudo-evidence non-evidence Carnegie Mellon discourse analysis audit" },
    { name: "Present Your Own Work", section: "setting-the-stage", keywords: "present own work intermediary body language follow-up" },
    { name: "Explain Research Goals and Methodology", section: "setting-the-stage", keywords: "explain research methodology credibility context" },
    { name: "Remove Distractions", section: "setting-the-stage", keywords: "placeholder lorem ipsum competitor images mockup distractions" },
    { name: "Speak to Goals Not Features", section: "evidence", keywords: "goals features framing user problem business need" },
    { name: "Show Alternatives Considered", section: "evidence", keywords: "alternatives explored thoroughness preempt objections" },
    { name: "Feedback Guidelines", section: "feedback-environment", keywords: "feedback guidelines focus ignore scope timing" },
    { name: "Solicit Allies Before Meeting", section: "feedback-environment", keywords: "allies support consensus pre-meeting alignment" },
    { name: "Pushback Response Framework", section: "pushback", keywords: "objection response evidence empathy alternatives" },
    { name: "Listening Tactics (Four-Step)", section: "listening", keywords: "ego hear out digging assess potential trade-offs" },
    { name: "Responding Tactics (Four Options)", section: "responding", keywords: "alternative choice weigh in postpone decision" },
    { name: "Thank Repeat Prepare Framework", section: "responding", keywords: "Thank Repeat Prepare Greever feedback response heard" },
    { name: "IDEAL Response Framework", section: "responding", keywords: "Identify Describe Empathize Appeal Lock Greever articulating" },
    { name: "Feedback Triage", section: "implementing-feedback", keywords: "To Do To Clarify To Persuade organize feedback response" },
    { name: "Five Yes-And Compromise Tactics", section: "implementing-feedback", keywords: "yes-and alternative subtle conditional iteration research compromise" },
    { name: "UX Business Impact Formula", section: "business-case", keywords: "research finding cost business impact revenue expenses efficiency ally" },
    { name: "Hypothesis Template", section: "business-case", keywords: "hypothesis Lean UX problem statement proposal measurable testable" },
    { name: "Business Impact Statement", section: "business-case", keywords: "business impact create solve need result simplified" },
    { name: "Align to OKRs", section: "tracking", keywords: "OKR objectives key results quarterly revenue adoption satisfaction" },
    { name: "Top-Task Tracking", section: "tracking", keywords: "top tasks task success usability testing periodic tracking" },
    { name: "UX Issue Status Tracking", section: "status-sharing", keywords: "issue tracking severity status reported fixed deferred accountability" },
    { name: "Design Doc Template", section: "written", keywords: "design doc problem approach alternatives metrics" },
    { name: "Data Storytelling for Design", section: "data-storytelling", keywords: "data narrative insight framing dashboard presentation actionable" },
    { name: "UX Postmortem", section: "postmortem", keywords: "postmortem retrospective shipped design learnings system-level" }
  ]
},
{
  topic: "Pricing Communication & Value Messaging",
  url: "topics/pricing-communication.html",
  tier: "Tier 2",
  discipline: "MK",
  sections: [
    { title: "What pricing communication is", id: "what-and-why", type: "theory", keywords: "pricing communication value perception framing" },
    { title: "Pricing page design", id: "pricing-page", type: "practical", keywords: "pricing page plans comparison table toggle FAQ" },
    { title: "Anchoring and framing", id: "anchoring", type: "practical", keywords: "anchoring framing decoy loss per-unit value" },
    { title: "Communicating price changes", id: "price-changes", type: "practical", keywords: "price increase communication grandfather transparency" },
    { title: "Free tier and trial messaging", id: "freemium", type: "practical", keywords: "free trial freemium upgrade feature gating" },
    { title: "Pricing communication in practice", id: "examples", type: "examples", keywords: "pricing page redesign price increase decoy plan" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "hidden price plans feature dumping surprise billing" }
  ],
  methods: [
    { name: "Pricing Page Best Practices", section: "pricing-page", keywords: "pricing page plan names comparison toggle FAQ social proof" },
    { name: "Plan Comparison Table Design", section: "pricing-page", keywords: "comparison table features plans progressive disclosure" },
    { name: "Anchoring & Framing Techniques", section: "anchoring", keywords: "anchoring value framing decoy per-unit loss" },
    { name: "Price Increase Communication Plan", section: "price-changes", keywords: "price increase notice value grandfather transparency" },
    { name: "Free Trial vs. Freemium Messaging", section: "freemium", keywords: "free trial freemium upgrade gating" }
  ]
},
{
    topic: "Pricing & Monetization Strategy",
    url: "topics/pricing.html",
    tier: "Tier 2",
  discipline: "PM",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "pricing monetization value metric model subscription usage-based freemium" },
      { title: "Pricing methods", id: "pricing-methods", type: "practical", keywords: "Van Westendorp tier architecture freemium conversion usage-based price sensitivity" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "pricing readiness checklist" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Slack fair billing Notion free Twilio usage-based" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "cost-plus fear raising too many tiers" },
      { title: "When to revisit", id: "when-to-use", type: "practical", keywords: "18 months conversion win loss competitor" },
      { title: "B2B pricing mechanics", id: "b2b-pricing", type: "practical", keywords: "B2B custom pricing volume discounts contract negotiation enterprise" }
    ],
    methods: [
      { name: "Van Westendorp Price Sensitivity", section: "pricing-methods", keywords: "Van Westendorp survey too cheap bargain expensive four questions" },
      { name: "Pricing Tier Architecture", section: "pricing-methods", keywords: "tier free pro enterprise packaging structure persona" },
      { name: "Freemium Conversion Modeling", section: "pricing-methods", keywords: "freemium conversion rate free tier job lead gen PLG" },
      { name: "Usage-Based Pricing", section: "pricing-methods", keywords: "usage-based API calls transactions hybrid base overage" },
      { name: "Price Sensitivity Testing", section: "pricing-methods", keywords: "price test survey fake door A/B live validation" },
      { name: "B2B Pricing Mechanics", section: "b2b-pricing", keywords: "B2B custom volume discounts contract negotiation enterprise pricing calculator" }
    ]
  },
{
    topic: "Problem Framing & Opportunity Sizing",
    url: "topics/problem-framing.html",
    tier: "Tier 1",
  discipline: "PM",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "problem framing opportunity sizing scope definition question before solution" },
      { title: "Problem framing methods", id: "framing-methods", type: "practical", keywords: "problem statement five whys root cause scope hammering opportunity canvas" },
      { title: "Opportunity sizing methods", id: "opportunity-sizing", type: "practical", keywords: "TAM SAM SOM market sizing Fermi estimation impact effort matrix" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "checklist readiness template" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Slack Dropbox Basecamp case study reframing" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "solution-first sizing theater too broad obvious" },
      { title: "When to use this", id: "when-to-use", type: "practical", keywords: "decision guidance when formal framing" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "uncertainty platform infrastructure hair on fire further reading" }
    ],
    methods: [
      { name: "Problem Statement Template", section: "framing-methods", keywords: "problem statement current situation affected users impact root cause success criteria" },
      { name: "Five Whys Root-Cause Analysis", section: "framing-methods", keywords: "five whys root cause diagnostic why chain" },
      { name: "Scope Hammering", section: "framing-methods", keywords: "scope hammer smallest version phase cut reduce MVP" },
      { name: "Opportunity Canvas", section: "framing-methods", keywords: "opportunity canvas evaluation comparison strategic fit effort impact" },
      { name: "TAM SAM SOM", section: "opportunity-sizing", keywords: "total addressable serviceable obtainable market sizing bottom-up top-down" },
      { name: "Fermi Estimation", section: "opportunity-sizing", keywords: "Fermi estimate order magnitude quick sizing rough calculation" },
      { name: "Impact Effort Matrix", section: "opportunity-sizing", keywords: "2x2 matrix prioritization quick wins strategic bets time sinks" }
    ]
  },
{
  topic: "Product Adoption",
  url: "topics/product-adoption.html",
  tier: "Tier 3",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "product adoption lifecycle aha moment Rogers chasm" },
    { title: "Onboarding patterns", id: "onboarding", type: "practical", keywords: "onboarding self-serve contextual progressive guided tutorial" },
    { title: "Activation metrics", id: "activation", type: "practical", keywords: "activation metric time-to-value aha moment measurement" },
    { title: "Retention and habit", id: "retention", type: "practical", keywords: "retention curve Day 1 7 30 re-engagement habit" },
    { title: "Churn prevention", id: "churn", type: "practical", keywords: "churn signals prevention exit survey win-back" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "adoption design review checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Notion templates Slack team activation" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "product tour signup conversion activation vanity" }
  ],
  methods: [
    { name: "Onboarding Flow Design", section: "onboarding", keywords: "onboarding self-serve contextual progressive guided tutorial" },
    { name: "Activation Metric Definition", section: "activation", keywords: "activation metric aha moment correlation retention" },
    { name: "Time-to-Value Optimization", section: "activation", keywords: "time-to-value eliminate defer simplify automate" },
    { name: "Retention Curve Analysis", section: "retention", keywords: "retention curve Day 1 7 30 drop-off flatten" },
    { name: "Re-engagement Patterns", section: "retention", keywords: "re-engagement notification email digest social pull" },
    { name: "Churn Prevention Framework", section: "churn", keywords: "churn signals warning outreach exit survey win-back" }
  ]
},
{
  topic: "Product Analytics Infrastructure",
  url: "topics/product-analytics-infrastructure.html",
  tier: "Tier 2",
  discipline: "PM",
  sections: [
    { title: "What product analytics infrastructure is", id: "what-and-why", type: "theory", keywords: "analytics tracking infrastructure data pipeline" },
    { title: "Event tracking architecture", id: "tracking-architecture", type: "theory", keywords: "event CDP segment RudderStack data layer" },
    { title: "Building a tracking plan", id: "tracking-plan", type: "practical", keywords: "tracking plan naming convention event property taxonomy" },
    { title: "Analytics tool selection", id: "tool-selection", type: "practical", keywords: "Amplitude Mixpanel PostHog GA4 analytics stack" },
    { title: "Data quality and governance", id: "data-quality", type: "practical", keywords: "data quality scorecard governance audit" },
    { title: "Identity resolution", id: "identity-resolution", type: "practical", keywords: "identity resolution stitching anonymous authenticated" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "Amplitude PostHog analytics case study" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "tracking plan owner migration pageview" }
  ],
  methods: [
    { name: "Event Naming Convention", section: "tracking-plan", keywords: "naming snake_case object action taxonomy" },
    { name: "Tracking Plan Audit", section: "tracking-plan", keywords: "audit cleanup event unused broken" },
    { name: "Property Standardization", section: "tracking-plan", keywords: "property dictionary global standard" },
    { name: "Analytics Stack Decision Matrix", section: "tool-selection", keywords: "tool selection analytics product web session warehouse" },
    { name: "Data Quality Scorecard", section: "data-quality", keywords: "quality completeness accuracy consistency" },
    { name: "Tracking Plan Review Process", section: "data-quality", keywords: "review process feature ship QA" },
    { name: "Identity Resolution Strategy", section: "identity-resolution", keywords: "identity anonymous user stitching device" }
  ]
},
{
  topic: "Product Communication & Storytelling",
  url: "topics/product-communication.html",
  tier: "Tier 4",
  discipline: "PM",
  sections: [
    { title: "Why communication matters", id: "what-and-why", type: "theory", keywords: "communication writing presenting PM skill invisible" },
    { title: "Product narratives", id: "narrative", type: "practical", keywords: "6-pager Amazon narrative RFC ADR decision doc strategy" },
    { title: "Status updates", id: "status-updates", type: "practical", keywords: "status update executive briefing BLUF milestone risk" },
    { title: "Communicating bad news", id: "bad-news", type: "practical", keywords: "bad news missed deadline delay scope cut sunset own it" },
    { title: "Product storytelling", id: "storytelling", type: "practical", keywords: "storytelling narrative arc tension stakes possibility evidence" },
    { title: "Communication patterns", id: "examples", type: "examples", keywords: "launch email roadmap decision doc cross-functional" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "audience over-communicate slides crutch bury ask" },
    { title: "Data storytelling", id: "data-storytelling", type: "practical", keywords: "data storytelling narrative insight framing dashboard presentation metrics leadership" }
  ],
  methods: [
    { name: "Amazon 6-Pager Template", section: "narrative", keywords: "6-pager Amazon narrative strategy proposal" },
    { name: "RFC/ADR Template", section: "narrative", keywords: "RFC ADR architecture decision record request for comments" },
    { name: "Executive Status Update", section: "status-updates", keywords: "status update BLUF milestone risk executive" },
    { name: "Executive Briefing", section: "status-updates", keywords: "executive briefing board presentation strategy" },
    { name: "Bad News Communication Framework", section: "bad-news", keywords: "bad news delay missed deadline own plan" },
    { name: "Product Narrative Arc", section: "storytelling", keywords: "storytelling narrative arc tension stakes possibility" },
    { name: "Data Storytelling for Product Leaders", section: "data-storytelling", keywords: "data narrative insight framing numbers narrative leadership" }
  ]
},
{
    topic: "Product Discovery & Customer Research",
    url: "topics/product-discovery.html",
    tier: "Tier 1",
  discipline: "PM",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "discovery validation value risk usability feasibility viability customer research" },
      { title: "Discovery methods", id: "discovery-methods", type: "practical", keywords: "customer interview assumption mapping opportunity solution tree competitive discovery switching moment" },
      { title: "Synthesis and outputs", id: "synthesis-and-output", type: "practical", keywords: "synthesis patterns opportunity ranking one-pager go no-go recommendation" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "interview guide discovery sprint checklist template" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Intercom Figma Superhuman PMF survey continuous discovery" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "validation theater wrong people stated preferences synthesis" },
      { title: "When to use this", id: "when-to-use", type: "practical", keywords: "heavy lightweight continuous weekly baseline" },
      { title: "AI in discovery research", id: "ai-research", type: "practical", keywords: "AI-moderated interview synthesis evaluation breadth depth automated" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "weekly habit recruitment automation visible discovery Torres Fitzpatrick Cagan Christensen" }
    ],
    methods: [
      { name: "Customer Interview (PM Version)", section: "discovery-methods", keywords: "interview switching moment workarounds value assessment PM customer" },
      { name: "Assumption Mapping", section: "discovery-methods", keywords: "assumptions risk importance evidence cheapest test riskiest" },
      { name: "Opportunity Solution Tree", section: "discovery-methods", keywords: "Teresa Torres outcome opportunities solutions experiments tree structured discovery" },
      { name: "Problem vs Solution Interview", section: "discovery-methods", keywords: "problem interview solution interview validation sequence" },
      { name: "Competitive Discovery", section: "discovery-methods", keywords: "competitor signup reviews community forums experience gaps" },
      { name: "Research Synthesis (PM)", section: "synthesis-and-output", keywords: "patterns assumption validation opportunity ranking one-pager output" },
      { name: "AI-Moderated Research Evaluation", section: "ai-research", keywords: "AI moderated interview synthesis evaluation breadth depth" }
    ]
  },
{
  topic: "Product Ethics & Responsible Innovation",
  url: "topics/product-ethics.html",
  tier: "Tier 4",
  discipline: "PM",
  sections: [
    { title: "What product ethics is", id: "what-and-why", type: "theory", keywords: "product ethics harm responsible innovation PM defense" },
    { title: "Ethics impact assessment", id: "ethics-assessment", type: "practical", keywords: "ethics impact assessment user harm misuse second-order power reversibility" },
    { title: "Dark pattern detection", id: "dark-patterns", type: "practical", keywords: "dark pattern audit confirmshaming roach motel hidden costs misdirection" },
    { title: "Algorithmic bias and fairness", id: "algorithmic-bias", type: "practical", keywords: "algorithmic bias fairness training data demographic parity equal opportunity" },
    { title: "Privacy-by-design", id: "privacy-by-design", type: "practical", keywords: "privacy data minimization consent retention GDPR CCPA" },
    { title: "Stakeholder harm mapping", id: "stakeholder-harm", type: "practical", keywords: "stakeholder harm matrix likelihood severity reversibility mitigation" },
    { title: "Ethical escalation", id: "ethical-escalation", type: "practical", keywords: "ethical escalation refusal leadership documentation" },
    { title: "Ethics case patterns", id: "examples", type: "examples", keywords: "engagement algorithm dark pattern AI bias cancellation" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "ethics checkbox competitor legality power asymmetry" }
  ],
  methods: [
    { name: "Ethics Impact Assessment", section: "ethics-assessment", keywords: "ethics impact harm misuse second-order reversibility" },
    { name: "Dark Pattern Audit", section: "dark-patterns", keywords: "dark pattern confirmshaming roach motel misdirection" },
    { name: "Algorithmic Bias Review", section: "algorithmic-bias", keywords: "algorithmic bias fairness training data monitoring" },
    { name: "Privacy-by-Design Checklist", section: "privacy-by-design", keywords: "privacy data minimization consent retention" },
    { name: "Stakeholder Harm Matrix", section: "stakeholder-harm", keywords: "stakeholder harm likelihood severity mitigation" },
    { name: "Ethical Escalation Framework", section: "ethical-escalation", keywords: "escalation refusal documentation leadership" }
  ]
},
{
  topic: "Product Leadership & Team Building",
  url: "topics/product-leadership.html",
  tier: "Tier 4",
  discipline: "PM",
  sections: [
    { title: "What product leadership is", id: "what-and-why", type: "theory", keywords: "product leadership director VP CPO team" },
    { title: "Hiring PMs", id: "hiring", type: "practical", keywords: "hiring rubric PM interview onboarding" },
    { title: "Coaching PMs", id: "coaching", type: "practical", keywords: "coaching feedback career ladder level" },
    { title: "Product org design", id: "org-design", type: "practical", keywords: "org design feature platform journey team" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "Stripe product culture" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "promote IC manage career ladder" },
    { title: "Journey-centric organizational design", id: "journey-org", type: "practical", keywords: "journey-centric org design ownership cross-team coordination health metrics" }
  ],
  methods: [
    { name: "PM Hiring Rubric", section: "hiring", keywords: "hiring rubric product sense analytical execution" },
    { name: "PM Onboarding 30/60/90", section: "hiring", keywords: "onboarding 30 60 90 ramp learn" },
    { name: "PM Coaching Framework", section: "coaching", keywords: "coaching decision review artifact feedback" },
    { name: "Career Ladder Design", section: "coaching", keywords: "career ladder level scope autonomy impact" },
    { name: "Org Model Comparison", section: "org-design", keywords: "org model feature platform journey dual-track" },
    { name: "Product Culture Assessment", section: "org-design", keywords: "culture authority customer outcome experiment" },
    { name: "Journey-Centric Org Design", section: "journey-org", keywords: "journey-centric ownership cross-team coordination health metrics" }
  ]
},
{
  topic: "Product Marketing",
  url: "topics/product-marketing.html",
  tier: "Tier 3",
  discipline: "MK",
  sections: [
    { title: "What product marketing is", id: "what-and-why", type: "theory", keywords: "product marketing PMM bridge product market sales positioning messaging" },
    { title: "Product positioning and messaging", id: "positioning-for-pmm", type: "practical", keywords: "positioning statement value pillars message testing competitive frame objections" },
    { title: "Sales enablement", id: "sales-enablement", type: "practical", keywords: "sales enablement battle card objection handling demo deck one-pager" },
    { title: "Product launches from PMM side", id: "launches", type: "practical", keywords: "feature announcement launch tier narrative win loss interview" },
    { title: "Product marketing in practice", id: "examples", type: "examples", keywords: "repositioning conversion battle card competitive win rate launch tier" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "feature-first messaging enablement positioning committee competitor terms" },
    { title: "Demo design and product storytelling", id: "demo-design", type: "practical", keywords: "demo design scripting feature prioritization interactive demo sales storytelling" }
  ],
  methods: [
    { name: "Product Marketing Brief", section: "positioning-for-pmm", keywords: "target audience positioning value pillars competitive frame objections" },
    { name: "Message Testing Protocol", section: "positioning-for-pmm", keywords: "concept testing A/B testing win loss validation messaging" },
    { name: "Sales Enablement Kit", section: "sales-enablement", keywords: "sales deck battle card objection handling demo one-pager" },
    { name: "Competitive Battle Card Template", section: "sales-enablement", keywords: "competitor overview win lose trap questions" },
    { name: "Feature Announcement Framework", section: "launches", keywords: "launch tier narrative timing coordination" },
    { name: "Win/Loss Interview Marketing", section: "launches", keywords: "buyer interview messaging perception competitive positioning" },
    { name: "Demo Design for Sales", section: "demo-design", keywords: "demo scripting feature prioritization interactive demo narrative pain point" }
  ]
},
{
    topic: "Product Metrics & Analytics",
    url: "topics/product-metrics.html",
    tier: "Tier 1",
  discipline: "PM",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "metrics analytics measurement quantitative evidence vanity actionable leading lagging" },
      { title: "Metrics frameworks", id: "metrics-frameworks", type: "practical", keywords: "North Star AARRR pirate metrics HEART counter-metrics input output metric tree" },
      { title: "Building a measurement practice", id: "measurement-practice", type: "practical", keywords: "event taxonomy tracking plan naming convention metrics review ritual weekly" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "metrics health check checklist" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Spotify Slack HubSpot North Star activation counter-metric" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "too many output vs outcome Goodhart's Law qualitative" },
      { title: "When to invest", id: "when-to-use", type: "practical", keywords: "pre-PMF post-PMF stage investment decision" },
      { title: "CX metrics and data literacy", id: "cx-metrics", type: "practical", keywords: "NPS CSAT CES CASTLE data literacy RAS recommendation-adoption practical statistical significance" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "SaaS marketplace platform content media further reading Croll Ellis Doerr" }
    ],
    methods: [
      { name: "North Star Metric", section: "metrics-frameworks", keywords: "North Star value moment single metric input metrics alignment" },
      { name: "AARRR Pirate Metrics", section: "metrics-frameworks", keywords: "acquisition activation retention revenue referral funnel pirate Dave McClure" },
      { name: "HEART Framework", section: "metrics-frameworks", keywords: "happiness engagement adoption retention task success Google goals signals metrics" },
      { name: "Counter-Metrics", section: "metrics-frameworks", keywords: "guardrails counter-metric unintended consequences gaming trade-off" },
      { name: "Input Output Metric Trees", section: "metrics-frameworks", keywords: "metric tree decomposition drivers leverage bottleneck ownership" },
      { name: "Event Taxonomy Design", section: "measurement-practice", keywords: "event naming taxonomy tracking plan properties convention documentation" },
      { name: "Metrics Review Ritual", section: "measurement-practice", keywords: "weekly review diagnose decide team practice ceremony" },
      { name: "CX Metrics Cluster", section: "cx-metrics", keywords: "NPS CSAT CES customer experience satisfaction effort net promoter" },
      { name: "CASTLE Framework", section: "cx-metrics", keywords: "CASTLE completion adoption satisfaction task time learning error enterprise internal" },
      { name: "Data Literacy for Non-Analysts", section: "cx-metrics", keywords: "data literacy dashboards misleading metrics significance reading" },
      { name: "RAS Recommendation-Adoption Score", section: "cx-metrics", keywords: "RAS recommendation adoption research impact tracking" }
    ]
  },
{
  topic: "Product Operations",
  url: "topics/product-operations.html",
  tier: "Tier 2",
  discipline: "PM",
  sections: [
    { title: "What product operations is", id: "what-and-why", type: "theory", keywords: "product ops operations scale process" },
    { title: "The product operating model", id: "operating-model", type: "theory", keywords: "operating model planning discovery execution communication" },
    { title: "Tooling strategy", id: "tooling", type: "practical", keywords: "tool stack audit Jira Linear Productboard" },
    { title: "Rituals and cadences", id: "rituals", type: "practical", keywords: "cadence ritual sprint quarterly planning" },
    { title: "Templates and standards", id: "templates", type: "practical", keywords: "template charter standard process" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "Pendo Airbnb product ops case study" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "process police bureaucracy feedback" },
    { title: "Postmortems and content collaboration", id: "postmortem-content", type: "practical", keywords: "UX postmortem retrospective learnings content teams cross-discipline" }
  ],
  methods: [
    { name: "Tool Stack Audit", section: "tooling", keywords: "tool audit consolidation sprawl" },
    { name: "Feature Request Pipeline", section: "tooling", keywords: "feature request intake triage routing" },
    { name: "Analytics Tool Configuration", section: "tooling", keywords: "analytics self-serve dashboard configuration" },
    { name: "Cadence Design", section: "rituals", keywords: "cadence meeting rhythm weekly quarterly" },
    { name: "Launch Readiness Checklist", section: "rituals", keywords: "launch checklist readiness coordination" },
    { name: "Customer Insight Synthesis", section: "rituals", keywords: "customer feedback synthesis insight report" },
    { name: "UX Postmortem Methodology", section: "postmortem-content", keywords: "postmortem retrospective shipped design learnings system-level" }
  ]
},
{
    topic: "Product Strategy & Vision",
    url: "topics/product-strategy.html",
    tier: "Tier 1",
  discipline: "PM",
    sections: [
      { title: "What it is & why it matters", id: "what-product-strategy-is-and-why-it-matters", type: "theory", keywords: "strategy vision mission product direction trade-offs coherence alignment" },
      { title: "Strategy vs vision vs mission", id: "strategy-vs-vision-vs-mission", type: "theory", keywords: "mission vision strategy difference hierarchy purpose direction approach" },
      { title: "Strategy-execution gap", id: "the-strategy-execution-gap", type: "theory", keywords: "execution gap alignment principles translation abstract concrete daily decisions" },
      { title: "Core strategy frameworks", id: "core-strategy-frameworks", type: "practical", keywords: "frameworks tools structured thinking strategic choices" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "strategy readiness one-pager quarterly review template checklist" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Stripe Superhuman Notion case study strategy execution" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "mistakes goals consensus parity changing frequency drawer problem" },
      { title: "When to use this", id: "when-to-use", type: "practical", keywords: "decision guidance when not adapt solo founder early stage" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "product stages growth mature founder executives platform further reading Lafley Martin Rumelt Cagan Christensen" }
    ],
    methods: [
      { name: "Product Vision Statement", section: "core-strategy-frameworks", keywords: "vision target user differentiator category benefit positioning" },
      { name: "Product Strategy Stack", section: "core-strategy-frameworks", keywords: "Gibson Biddle Netflix layers mission vision strategy principles goals roadmap hierarchy cascade" },
      { name: "Playing to Win Framework", section: "core-strategy-frameworks", keywords: "Lafley Roger Martin P&G winning aspiration where play how win capabilities management systems cascade" },
      { name: "Strategic Bet Framework", section: "core-strategy-frameworks", keywords: "bet canvas assumptions riskiest exit criteria investment opportunity evaluation" },
      { name: "Jobs-to-be-Done Strategy", section: "core-strategy-frameworks", keywords: "JTBD Christensen hiring switching moment milkshake jobs competitive landscape progress" },
      { name: "Product Principles", section: "core-strategy-frameworks", keywords: "principles trade-off rules decision guide opinionated tensions conflicts" },
      { name: "Strategy Narrative", section: "core-strategy-frameworks", keywords: "narrative 6-pager Amazon written document story prose communication world as it is could be" }
    ]
  },
{
  topic: "Product Sunset & Pivot Decisions",
  url: "topics/product-sunset-pivot.html",
  tier: "Tier 3",
  discipline: "PM",
  sections: [
    { title: "What sunset and pivot decisions are", id: "what-and-why", type: "theory", keywords: "sunset pivot end-of-life kill feature product" },
    { title: "Sunset decision frameworks", id: "sunset-framework", type: "practical", keywords: "sunset decision usage revenue maintenance cost" },
    { title: "Sunset execution", id: "sunset-execution", type: "practical", keywords: "sunset communication migration warning timeline" },
    { title: "Pivot decision frameworks", id: "pivot-decisions", type: "practical", keywords: "pivot criteria customer segment problem solution" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "Google Reader Slack pivot sunset" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "slow sunset neglect pivot learning" }
  ],
  methods: [
    { name: "Sunset Decision Framework", section: "sunset-framework", keywords: "sunset usage revenue maintenance strategic" },
    { name: "Feature Usage Audit", section: "sunset-framework", keywords: "usage audit bottom feature candidate" },
    { name: "Sunk Cost Audit", section: "sunset-framework", keywords: "sunk cost bias past investment future" },
    { name: "Sunset Communication Plan", section: "sunset-execution", keywords: "communication timeline migration warning" },
    { name: "Migration Planning Template", section: "sunset-execution", keywords: "migration path alternative export transition" },
    { name: "Pivot Criteria Checklist", section: "pivot-decisions", keywords: "pivot criteria segment problem solution channel" }
  ]
},
{
  topic: "Product Thinking: Mental Models & Decision-Making",
  url: "topics/product-thinking.html",
  tier: "Tier 4",
  discipline: "PM",
  sections: [
    { title: "What product thinking is", id: "what-and-why", type: "theory", keywords: "product thinking mental models senior PM judgment" },
    { title: "First principles thinking", id: "first-principles", type: "practical", keywords: "first principles assumption bedrock reasoning analogy" },
    { title: "Systems thinking", id: "systems-thinking", type: "practical", keywords: "systems thinking stock flow feedback loop leverage point delay" },
    { title: "Second-order effects", id: "second-order", type: "practical", keywords: "second-order effects third-order consequences unintended" },
    { title: "Inversion", id: "inversion", type: "practical", keywords: "inversion pre-mortem failure mode stress test" },
    { title: "Classifying decisions", id: "decision-taxonomy", type: "practical", keywords: "decision type impact reversibility tactical strategic satisficing maximizing" },
    { title: "Problem contexts", id: "problem-contexts", type: "practical", keywords: "Cynefin simple complicated complex chaotic problem context Snowden" },
    { title: "Quick-decision frameworks", id: "decision-frameworks", type: "practical", keywords: "intuition design principles tradeoff analysis quick decision pattern recognition" },
    { title: "Long-deliberation frameworks", id: "long-deliberations", type: "practical", keywords: "hypothesis research prioritization multi-factor weighted cost translation ROI" },
    { title: "Deciding who decides", id: "collaboration-models", type: "practical", keywords: "Vroom-Yetton-Jago autocratic consultative collaborative disagree commit pre-mortem groupthink" },
    { title: "Cognitive biases", id: "cognitive-biases", type: "theory", keywords: "cognitive bias framing overconfidence loss aversion sunk cost halo effect confirmation anchoring" },
    { title: "Decision frameworks in action", id: "examples", type: "examples", keywords: "Gov.UK eBay Airbnb Google AdWords travel booking design principles ROI" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "analysis paralysis framework judgment one-size-fits-all hard-to-measure" }
  ],
  methods: [
    { name: "First Principles Reasoning", section: "first-principles", keywords: "first principles assumption bedrock reasoning" },
    { name: "Systems Thinking", section: "systems-thinking", keywords: "systems stock flow feedback loop leverage" },
    { name: "Second-Order Effects Analysis", section: "second-order", keywords: "second-order third-order consequences" },
    { name: "Inversion", section: "inversion", keywords: "inversion pre-mortem failure mode" },
    { name: "Decision Classification (Three-Axis Taxonomy)", section: "decision-taxonomy", keywords: "decision type impact reversibility tactical strategic classify" },
    { name: "Satisficing vs Maximizing", section: "decision-taxonomy", keywords: "satisficing maximizing decision strategy effort calibration" },
    { name: "Cynefin Problem Contexts", section: "problem-contexts", keywords: "Cynefin simple complicated complex chaotic Snowden" },
    { name: "Intuition (Expert Pattern Recognition)", section: "decision-frameworks", keywords: "intuition pattern recognition Klein naturalistic" },
    { name: "Design Principles as Decision Framework", section: "decision-frameworks", keywords: "design principles value statement specific essential deal-breaker differentiator" },
    { name: "Tradeoff Analysis (Three Questions)", section: "decision-frameworks", keywords: "tradeoff cost alternatives missing information worst-case" },
    { name: "Decision Journal", section: "decision-frameworks", keywords: "decision journal predict outcome bias" },
    { name: "Hypothesis-Based Research", section: "long-deliberations", keywords: "hypothesis unknowns research problem decomposition knowledge kanban" },
    { name: "Multi-Factor Prioritization", section: "long-deliberations", keywords: "priority matrix symbolic numeric weighted comparison table" },
    { name: "UX-to-Business Cost Translation", section: "long-deliberations", keywords: "UX cost business ROI opportunity cost efficiency frequency wage" },
    { name: "Vroom-Yetton-Jago Leadership Model", section: "collaboration-models", keywords: "Vroom Yetton Jago autocratic consultative collaborative who decides" },
    { name: "Disagree-and-Commit", section: "collaboration-models", keywords: "disagree commit consensus decision" },
    { name: "Pre-Mortem and Post-Mortem", section: "collaboration-models", keywords: "pre-mortem post-mortem groupthink risk" }
  ]
},
{
  topic: "Prototyping & Wireframing",
  url: "topics/prototyping.html",
  tier: "Tier 1",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "prototype wireframe fidelity question testing build learn" },
    { title: "Fidelity spectrum", id: "fidelity-spectrum", type: "theory", keywords: "sketch wireframe mockup interactive fidelity low high spectrum" },
    { title: "Paper prototyping", id: "paper-prototyping", type: "practical", keywords: "paper prototype sketch sticky note workshop low-fidelity" },
    { title: "Wireframing", id: "wireframing", type: "practical", keywords: "wireframe gray boxes layout structure content hierarchy low-fidelity" },
    { title: "Interactive prototypes", id: "interactive-prototypes", type: "practical", keywords: "click-through hotspot interactive high-fidelity Figma prototype" },
    { title: "Wizard of Oz", id: "wizard-of-oz", type: "practical", keywords: "Wizard of Oz concierge prototype manual behind-the-scenes fake" },
    { title: "Choosing fidelity", id: "choosing-fidelity", type: "practical", keywords: "fidelity decision guide low high when" },
    { title: "Testing with prototypes", id: "testing-with-prototypes", type: "practical", keywords: "usability test prototype task think-aloud fidelity expectations" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "prototype planning brief readiness checklist scope question" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "PillPack concierge Airbnb paper Google HEART" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "high fidelity too early scope creep never testing" },
    { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "Figma Framer ProtoPie Design Sprint facade technique tool comparison" }
  ],
  methods: [
    { name: "Paper Prototyping", section: "paper-prototyping", keywords: "paper sketch sticky note swap workshop" },
    { name: "Wireframing", section: "wireframing", keywords: "wireframe layout structure gray boxes content" },
    { name: "Interactive Prototyping", section: "interactive-prototypes", keywords: "click-through Figma hotspot interactive high-fidelity" },
    { name: "Wizard of Oz", section: "wizard-of-oz", keywords: "wizard concierge manual behind-the-scenes fake backend" },
    { name: "Prototype Usability Testing", section: "testing-with-prototypes", keywords: "test task think-aloud observe user" }
  ]
},
{
    topic: "Requirements: User Stories, PRDs & Specs",
    url: "topics/requirements.html",
    tier: "Tier 1",
  discipline: "PM",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "requirements specification translation strategy execution ambiguity context" },
      { title: "Requirements formats", id: "requirements-methods", type: "practical", keywords: "user stories INVEST acceptance criteria PRD one-pager edge case job story RFC" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "spec review definition of done checklist template" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Amazon press release Basecamp Shape Up pitch Stripe RFC" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "UI prescription long PRD writing alone out of scope" },
      { title: "When to use each format", id: "when-to-use", type: "practical", keywords: "one-pager user stories PRD RFC press release pitch" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "AI features probabilistic quality thresholds further reading" }
    ],
    methods: [
      { name: "User Stories (INVEST)", section: "requirements-methods", keywords: "user story as a I want so that INVEST independent negotiable valuable estimable small testable" },
      { name: "Acceptance Criteria (Given/When/Then)", section: "requirements-methods", keywords: "acceptance criteria given when then BDD done contract happy path error" },
      { name: "PRD Template", section: "requirements-methods", keywords: "PRD product requirements document problem goals scope design dependencies launch" },
      { name: "One-Pager Template", section: "requirements-methods", keywords: "one-pager lightweight problem solution metric scope questions" },
      { name: "Edge Case Matrix", section: "requirements-methods", keywords: "edge case matrix states roles plans permissions error conditions" },
      { name: "Job Story Format", section: "requirements-methods", keywords: "job story when situation motivation outcome context JTBD" }
    ]
  },
{
  topic: "Retention, Churn & Customer Success",
  url: "topics/retention-churn.html",
  tier: "Tier 2",
  discipline: "PM",
  sections: [
    { title: "What retention and churn is", id: "what-and-why", type: "theory", keywords: "retention churn customer success lifetime value" },
    { title: "Retention models and measurement", id: "retention-models", type: "theory", keywords: "N-day bounded unbounded NRR revenue retention" },
    { title: "Churn root-cause analysis", id: "churn-analysis", type: "practical", keywords: "churn root cause early mid late cohort" },
    { title: "Customer health scoring", id: "health-scoring", type: "practical", keywords: "health score at-risk prediction leading indicator" },
    { title: "At-risk interventions", id: "interventions", type: "practical", keywords: "intervention re-engagement win-back activation" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "Superhuman HubSpot retention case study" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "wrong measurement segment hero save" }
  ],
  methods: [
    { name: "Churn Root-Cause Framework", section: "churn-analysis", keywords: "churn cause early mid late segment" },
    { name: "Retention Curve Analysis", section: "churn-analysis", keywords: "retention curve cohort plateau flatten" },
    { name: "Cohort Retention Table", section: "churn-analysis", keywords: "cohort table color diagonal trend" },
    { name: "Customer Health Score", section: "health-scoring", keywords: "health score usage frequency support engagement" },
    { name: "At-Risk Intervention Design", section: "interventions", keywords: "intervention activation feature gap engagement" },
    { name: "Net Revenue Retention Modeling", section: "interventions", keywords: "NRR expansion contraction model revenue" }
  ]
},
{
    topic: "Roadmapping & Prioritization",
    url: "topics/roadmapping.html",
    tier: "Tier 1",
  discipline: "PM",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "roadmap prioritization communication plan direction trade-offs politics history origins mapping vs maps creator contributor consumer" },
      { title: "Roadmap formats", id: "roadmap-formats", type: "practical", keywords: "now next later outcome-based theme-based format timeline" },
      { title: "Roadmap anatomy", id: "roadmap-anatomy", type: "practical", keywords: "component model context scope time theme beneficiary need business objective ownership confidence disclaimers subtheme primary secondary" },
      { title: "Creation process", id: "creation-process", type: "practical", keywords: "six steps establish goals gather inputs create themes prioritize visualize share revisit workshop" },
      { title: "Prioritization frameworks", id: "prioritization-frameworks", type: "practical", keywords: "RICE scoring opportunity scoring cost of delay MoSCoW saying no" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "roadmap health check RICE sheet template" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Linear Spotify Intercom Buffer Gov.UK bets cycles saying no transparent public roadmap" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "contract dates commitment feature factory tech debt" },
      { title: "When to revisit", id: "when-to-use", type: "practical", keywords: "update cadence quarterly review adapt" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "multi-team remote dependencies tooling ProductPlan ProdPad Roadmunk Aha Miro Jira further reading" }
    ],
    methods: [
      { name: "Now Next Later Roadmap", section: "roadmap-formats", keywords: "now next later columns confidence no dates" },
      { name: "Outcome-Based Roadmap", section: "roadmap-formats", keywords: "outcomes metrics impact empowered teams discovery" },
      { name: "Theme-Based Roadmap", section: "roadmap-formats", keywords: "themes strategic narrative executive communication" },
      { name: "Roadmap Component Model", section: "roadmap-anatomy", keywords: "context scope time theme beneficiary need business objective ownership confidence anatomy" },
      { name: "6-Step Roadmap Creation Process", section: "creation-process", keywords: "establish goals gather inputs create themes prioritize visualize share revisit" },
      { name: "RICE Scoring", section: "prioritization-frameworks", keywords: "reach impact confidence effort quantitative scoring" },
      { name: "Opportunity Scoring (Ulwick)", section: "prioritization-frameworks", keywords: "importance satisfaction gap outcome-driven innovation" },
      { name: "Cost of Delay", section: "prioritization-frameworks", keywords: "time-sensitive urgency CD3 duration WSJF" },
      { name: "MoSCoW Prioritization", section: "prioritization-frameworks", keywords: "must should could won't scope fixed deadline" },
      { name: "Saying No with Evidence", section: "prioritization-frameworks", keywords: "stakeholder trade-off decline evidence data" }
    ]
  },
{
  topic: "Search & Filtering UX",
  url: "topics/search-filtering-ux.html",
  tier: "Tier 2",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "search filtering discovery findability information retrieval" },
    { title: "Search browse filter", id: "discovery-patterns", type: "practical", keywords: "search browse filter decision framework discovery patterns" },
    { title: "Search interface", id: "search-interface", type: "practical", keywords: "search box scope results layout snippet metadata" },
    { title: "Autocomplete", id: "autocomplete", type: "practical", keywords: "autocomplete suggestions type-ahead predictive query" },
    { title: "Faceted navigation", id: "faceted-navigation", type: "practical", keywords: "faceted navigation filter checkbox range slider sidebar chips" },
    { title: "Zero-results", id: "zero-results", type: "practical", keywords: "zero results empty no results recovery suggestions corrections" },
    { title: "Search analytics", id: "search-analytics", type: "practical", keywords: "search analytics queries zero-result rate refinement click-through" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Algolia Airbnb instant search faceted filter" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "backend problem too many filters mobile search" }
  ],
  methods: [
    { name: "Search/Browse/Filter Decision Framework", section: "discovery-patterns", keywords: "search browse filter decision pattern" },
    { name: "Search UI Pattern Library", section: "search-interface", keywords: "search box scope results layout snippet" },
    { name: "Autocomplete Design Patterns", section: "autocomplete", keywords: "autocomplete suggestions type-ahead debounce keyboard" },
    { name: "Faceted Navigation Design", section: "faceted-navigation", keywords: "faceted filter checkbox range slider count feedback" },
    { name: "Zero-Results Recovery", section: "zero-results", keywords: "zero results corrections suggestions recovery" },
    { name: "Search Analytics Setup", section: "search-analytics", keywords: "queries zero-result refinement click-through exits" }
  ]
},
{
  topic: "SEO & Content Discoverability",
  url: "topics/seo-content-discoverability.html",
  tier: "Tier 2",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "SEO content discoverability search organic findability" },
    { title: "Search intent", id: "search-intent", type: "practical", keywords: "search intent keyword content cluster pillar topical authority" },
    { title: "AI search readiness", id: "ai-search", type: "practical", keywords: "AI search structured data schema authority freshness" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "HubSpot cluster pillar organic" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "SEO-first keyword stuffing thin content" }
  ],
  methods: [
    { name: "Search Intent Mapping", section: "search-intent", keywords: "intent informational navigational commercial transactional" },
    { name: "Content Cluster Architecture", section: "search-intent", keywords: "cluster pillar internal linking topical authority" },
    { name: "AI Search Readiness Audit", section: "ai-search", keywords: "AI search structured data authority freshness" }
  ]
},
{
  topic: "SEO & Organic Growth",
  url: "topics/seo-organic.html",
  tier: "Tier 2",
  discipline: "MK",
  sections: [
    { title: "What SEO is", id: "what-and-why", type: "theory", keywords: "SEO organic search intent ranking compound traffic" },
    { title: "Keyword strategy", id: "keyword-strategy", type: "practical", keywords: "keyword research intent classification difficulty business value" },
    { title: "Content-led organic growth", id: "content-seo", type: "practical", keywords: "content cluster pillar page internal linking SEO brief" },
    { title: "Technical SEO", id: "technical-seo", type: "practical", keywords: "crawlability indexability page speed Core Web Vitals structured data mobile" },
    { title: "Authority and link building", id: "link-building", type: "practical", keywords: "backlinks link building original research digital PR authority" },
    { title: "Measuring SEO", id: "measurement", type: "practical", keywords: "rank tracking organic traffic business outcomes reporting" },
    { title: "AI search", id: "ai-search", type: "theory", keywords: "AI search AI Overviews Perplexity zero-click brand search" },
    { title: "SEO in practice", id: "examples", type: "examples", keywords: "content cluster technical audit original research" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "volume vs intent content decay promotion" }
  ],
  methods: [
    { name: "Keyword Research Framework", section: "keyword-strategy", keywords: "keyword research seed intent difficulty business value" },
    { name: "Search Intent Mapping", section: "keyword-strategy", keywords: "search intent informational commercial transactional SERP analysis" },
    { name: "Content Cluster Strategy", section: "content-seo", keywords: "content cluster pillar page topical authority internal linking" },
    { name: "SEO Content Brief", section: "content-seo", keywords: "content brief writer subtopics unique angle" },
    { name: "Technical SEO Audit Checklist", section: "technical-seo", keywords: "crawl index speed mobile structured data HTTPS" },
    { name: "Internal Linking Strategy", section: "technical-seo", keywords: "internal links anchor text authority distribution" },
    { name: "Ethical Link Acquisition", section: "link-building", keywords: "backlinks original research tools digital PR" },
    { name: "Rank Tracking & Reporting", section: "measurement", keywords: "rankings traffic leads revenue organic ROI" }
  ]
},
{
  topic: "Service Design",
  url: "topics/service-design.html",
  tier: "Tier 2",
  discipline: "UX",
  sections: [
    { title: "What & how", id: "what-and-why", type: "theory", keywords: "service design touchpoints channels frontstage backstage ecosystem" },
    { title: "Principles", id: "principles", type: "theory", keywords: "user-centered co-creative sequencing evidencing holistic" },
    { title: "Service blueprinting", id: "service-blueprint", type: "practical", keywords: "service blueprint frontstage backstage support processes line of visibility" },
    { title: "Touchpoint inventory", id: "touchpoints", type: "practical", keywords: "touchpoint inventory channel mapping gaps redundancies" },
    { title: "Stakeholder mapping", id: "stakeholder-mapping", type: "practical", keywords: "stakeholder map relationships silos information flow" },
    { title: "Systems thinking", id: "systems-thinking", type: "practical", keywords: "systems thinking feedback loops emergent behavior leverage points" },
    { title: "Service prototyping", id: "prototyping-services", type: "practical", keywords: "desktop walkthrough bodystorming LEGO service prototype" },
    { title: "Omnichannel and journey orchestration", id: "omnichannel", type: "practical", keywords: "omnichannel journey orchestration seamlessness AI-era service design actor" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "service blueprint canvas readiness checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "IKEA GDS Starbucks third place government" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "channels independently backstage ignored staff forgotten" },
    { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "double diamond service design" }
  ],
  methods: [
    { name: "Service Blueprint", section: "service-blueprint", keywords: "frontstage backstage support line of visibility" },
    { name: "Stakeholder Map", section: "stakeholder-mapping", keywords: "stakeholders relationships silos" },
    { name: "Touchpoint Inventory", section: "touchpoints", keywords: "touchpoints channels gaps inventory" },
    { name: "Desktop Walkthrough", section: "prototyping-services", keywords: "LEGO miniature walkthrough prototype" },
    { name: "Bodystorming", section: "prototyping-services", keywords: "act out physical simulate service" },
    { name: "Omnichannel Design Principles", section: "omnichannel", keywords: "omnichannel seamlessness context optimization orchestration" },
    { name: "Journey Orchestration", section: "omnichannel", keywords: "journey orchestration continuous management health metrics ownership" },
    { name: "AI-Era Service Design", section: "omnichannel", keywords: "AI actor service blueprint AI-to-AI handoff trust" }
  ]
},
{
  topic: "Social Media Strategy",
  url: "topics/social-media.html",
  tier: "Tier 2",
  discipline: "MK",
  sections: [
    { title: "What social media strategy is", id: "what-and-why", type: "theory", keywords: "social media strategy platform organic reach attention" },
    { title: "Platform selection", id: "platform-fit", type: "practical", keywords: "platform audience fit LinkedIn Instagram TikTok Twitter" },
    { title: "Content strategy", id: "content-strategy", type: "practical", keywords: "content mix educate engage entertain calendar cadence" },
    { title: "Community management", id: "community", type: "practical", keywords: "community response comments DMs tone voice" },
    { title: "Social listening", id: "listening", type: "practical", keywords: "social listening brand monitoring competitive intelligence" },
    { title: "Measuring social ROI", id: "measurement", type: "practical", keywords: "social ROI engagement attribution business impact" },
    { title: "Crisis communication", id: "crisis", type: "practical", keywords: "crisis PR negative viral response protocol" },
    { title: "Social media in practice", id: "examples", type: "examples", keywords: "LinkedIn B2B content mix community listening" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "every platform same content followers engagement" }
  ],
  methods: [
    { name: "Platform-Audience Fit Matrix", section: "platform-fit", keywords: "platform audience format competitive density" },
    { name: "Content Mix Framework", section: "content-strategy", keywords: "educate engage entertain earn content mix" },
    { name: "Social Content Calendar", section: "content-strategy", keywords: "calendar cadence fixed planned reactive" },
    { name: "Community Response Playbook", section: "community", keywords: "response tiers tone comments DMs" },
    { name: "Social Listening Setup", section: "listening", keywords: "listening monitoring brand competitor" },
    { name: "Social ROI Framework", section: "measurement", keywords: "ROI engagement attribution business impact" },
    { name: "Crisis Communication Protocol", section: "crisis", keywords: "crisis PR protocol response" }
  ]
},
{
    topic: "Stakeholder Management & Influence",
    url: "topics/stakeholder-management.html",
    tier: "Tier 1",
  discipline: "PM",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "stakeholder management influence authority responsibility politics organizational" },
      { title: "Stakeholder methods", id: "stakeholder-methods", type: "practical", keywords: "stakeholder map power interest RACI pre-mortem disagree commit alignment narrative" },
      { title: "Templates and checklists", id: "templates-and-checklists", type: "practical", keywords: "alignment before launch checklist executive update" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "managing up framing revenue Amazon disagree commit Figma alignment" },
      { title: "Common pitfalls", id: "common-pitfalls", type: "practical", keywords: "political surprising over-consulting avoiding conflict" },
      { title: "When to invest", id: "when-to-use", type: "practical", keywords: "major launch cross-functional new team" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "founder VP sales engineering lead further reading Radical Candor" }
    ],
    methods: [
      { name: "Stakeholder Map", section: "stakeholder-methods", keywords: "power interest 2x2 key players keep satisfied informed monitor engagement workshop" },
      { name: "Pain/Gain Map", section: "stakeholder-methods", keywords: "pain gain empathy motivations pains gains value proposition communication strategy" },
      { name: "RACI Matrix", section: "stakeholder-methods", keywords: "responsible accountable consulted informed decision clarity ownership" },
      { name: "Pre-Mortem", section: "stakeholder-methods", keywords: "pre-mortem risk surface objections imagine failure six months" },
      { name: "Disagree-and-Commit", section: "stakeholder-methods", keywords: "disagree commit consensus decision closure Bezos Amazon protocol" },
      { name: "Executive Update Template", section: "stakeholder-methods", keywords: "weekly update progress risks decisions next week concise leadership" },
      { name: "Alignment Narrative", section: "stakeholder-methods", keywords: "persuasion framing stakeholder language goals concerns buy-in" },
      { name: "Ally-Finding Strategy", section: "stakeholder-methods", keywords: "ally champion sponsor internal frustration salespeople dev managers call center UX cost business impact coalition" }
    ]
  },
{
  topic: "Structured Content & Content Modeling",
  url: "topics/structured-content.html",
  tier: "Tier 1",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "structured content content model reusable searchable AI-ready" },
    { title: "Content modeling", id: "content-modeling", type: "practical", keywords: "content model types fields relationships COPE workshop" },
    { title: "Metadata and taxonomy", id: "metadata", type: "practical", keywords: "metadata schema taxonomy flat hierarchical faceted tags categories" },
    { title: "AI-ready architecture", id: "ai-ready", type: "practical", keywords: "AI schema.org JSON-LD headings self-contained API structured data" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "NPR COPE create once publish everywhere" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "over-modeling complexity paralysis" }
  ],
  methods: [
    { name: "Content Modeling Workshop", section: "content-modeling", keywords: "content types fields relationships COPE" },
    { name: "Metadata Schema Design", section: "metadata", keywords: "metadata descriptive administrative structural controlled vocabulary" },
    { name: "Taxonomy Architecture", section: "metadata", keywords: "taxonomy flat hierarchical faceted classification" },
    { name: "Content Architecture for AI Systems", section: "ai-ready", keywords: "AI schema.org JSON-LD heading hierarchy content API" }
  ]
},
{
  topic: "Technical Product Management",
  url: "topics/technical-pm.html",
  tier: "Tier 2",
  discipline: "PM",
  sections: [
    { title: "What technical PM is", id: "what-and-why", type: "theory", keywords: "technical PM TPM engineering bridge" },
    { title: "Build vs. buy decisions", id: "build-buy", type: "practical", keywords: "build buy vendor make decision" },
    { title: "Tech debt quantification", id: "tech-debt", type: "practical", keywords: "tech debt quantify velocity reliability security" },
    { title: "Architecture decision-making", id: "architecture", type: "practical", keywords: "architecture ADR decision record dependency" },
    { title: "Migration planning", id: "migration", type: "practical", keywords: "migration rewrite strangler fig rollback" },
    { title: "Engineering partnership", id: "engineering-partnership", type: "practical", keywords: "engineering trust partnership collaborate advise" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "Slack Figma migration build buy" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "overstep second system effect" }
  ],
  methods: [
    { name: "Build vs. Buy Framework", section: "build-buy", keywords: "build buy differentiation cost control" },
    { name: "Build vs. Buy Scoring Matrix", section: "build-buy", keywords: "scoring matrix vendor comparison" },
    { name: "Tech Debt Quantification", section: "tech-debt", keywords: "tech debt velocity reliability scalability" },
    { name: "20% Time Allocation", section: "tech-debt", keywords: "allocation capacity infrastructure debt" },
    { name: "Architecture Decision Record", section: "architecture", keywords: "ADR architecture decision document" },
    { name: "Dependency Risk Matrix", section: "architecture", keywords: "dependency risk vendor substitutability" },
    { name: "Migration Planning Template", section: "migration", keywords: "migration rollback dual-write validation" },
    { name: "Engineering Partnership Model", section: "engineering-partnership", keywords: "collaborate advise inform engineering trust" }
  ]
},
{
  topic: "Technical Writing & Documentation",
  url: "topics/technical-writing-documentation.html",
  tier: "Tier 3",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "technical writing documentation help center knowledge base" },
    { title: "Documentation architecture", id: "doc-architecture", type: "practical", keywords: "documentation architecture IA help center navigation Diataxis" },
    { title: "API documentation", id: "api-docs", type: "practical", keywords: "API docs developer documentation code samples getting started" },
    { title: "Documentation-product sync", id: "doc-product-sync", type: "practical", keywords: "sync workflow docs-as-code ownership deprecation" },
    { title: "Troubleshooting content", id: "troubleshooting", type: "practical", keywords: "troubleshooting decision tree symptom-first escalation" },
    { title: "Documentation metrics", id: "doc-metrics", type: "practical", keywords: "metrics deflection search success task completion feedback" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "getting started guide template" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Stripe GitLab docs-as-code API documentation" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "features vs tasks linear reading broken code samples" }
  ],
  methods: [
    { name: "Documentation Architecture", section: "doc-architecture", keywords: "architecture content types hierarchy navigation versioning Diataxis" },
    { name: "Help Center IA Design", section: "doc-architecture", keywords: "help center categories search contextual" },
    { name: "API Documentation Template", section: "api-docs", keywords: "API getting started authentication endpoints code samples" },
    { name: "Code Sample Guidelines", section: "api-docs", keywords: "code samples runnable tested CI progressive" },
    { name: "Documentation-Product Sync Workflow", section: "doc-product-sync", keywords: "sync workflow ownership review deprecation" },
    { name: "Troubleshooting Content Framework", section: "troubleshooting", keywords: "troubleshooting symptom decision tree verification escalation" },
    { name: "Documentation Metrics", section: "doc-metrics", keywords: "deflection search success task completion feedback" }
  ]
},
{
  topic: "UI Design Patterns",
  url: "topics/ui-design-patterns.html",
  tier: "Tier 1",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "UI design patterns reusable solutions interface conventions expectations" },
    { title: "Pattern anatomy", id: "pattern-anatomy", type: "theory", keywords: "problem solution when to use when not variants structure" },
    { title: "Navigation patterns", id: "navigation-patterns", type: "practical", keywords: "top nav bottom nav sidebar breadcrumbs tabs hamburger mega menu sticky" },
    { title: "Search and filtering", id: "search-patterns", type: "practical", keywords: "search autocomplete faceted filtering sort controls typeahead" },
    { title: "Content and layout", id: "content-patterns", type: "practical", keywords: "card layout infinite scroll pagination modal dialog skeleton screens" },
    { title: "Data display", id: "data-patterns", type: "practical", keywords: "data tables sortable columns status indicators responsive tables" },
    { title: "Input and actions", id: "input-patterns", type: "practical", keywords: "stepper multi-step form wizard FAB floating action button toggle checkbox" },
    { title: "Social and engagement", id: "social-patterns", type: "practical", keywords: "notifications badge onboarding checklist progressive empty state" },
    { title: "Collaborative and multiplayer", id: "collaborative-patterns", type: "practical", keywords: "multiplayer presence cursors conflict resolution commenting real-time collaboration" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "pattern selection checklist documentation template" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Airbnb cards Slack sidebar Stripe data tables case study" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "cargo-culting overloading mobile-first" },
    { title: "How to use this topic", id: "when-to-use", type: "practical", keywords: "reference navigation search forms data quick lookup" },
    { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "UI-Patterns.com Material Design Apple HIG command palette Cmd+K AI dark mode emerging" }
  ],
  methods: [
    { name: "Top Navigation Bar", section: "navigation-patterns", keywords: "horizontal persistent global nav links utility" },
    { name: "Bottom Navigation (Mobile)", section: "navigation-patterns", keywords: "mobile tabs fixed bar icons labels thumb zone" },
    { name: "Sidebar Navigation", section: "navigation-patterns", keywords: "vertical collapsible expandable hierarchy admin tools" },
    { name: "Search-as-You-Type", section: "search-patterns", keywords: "autocomplete suggestions typeahead debounce instant results" },
    { name: "Faceted Filtering", section: "search-patterns", keywords: "checkboxes range sliders chips catalog filter panel" },
    { name: "Card Layout", section: "content-patterns", keywords: "grid browsable visual thumbnail masonry horizontal scroll" },
    { name: "Data Tables", section: "data-patterns", keywords: "sortable columns row actions responsive comparison structured" },
    { name: "Multi-Step Form", section: "input-patterns", keywords: "stepper wizard progress indicator steps groups checkout" },
    { name: "Onboarding Patterns", section: "social-patterns", keywords: "progressive checklist empty state product tour coach marks" },
    { name: "Multiplayer UI Patterns", section: "collaborative-patterns", keywords: "presence cursors conflict resolution commenting real-time collaboration locking" }
  ]
},
{
  topic: "Conducting Usability Testing",
  url: "topics/usability-testing.html",
  tier: "Tier 2",
  discipline: "UX",
  sections: [
    { title: "What & when", id: "what-and-why", type: "theory", keywords: "usability testing observation tasks users 5 users" },
    { title: "Test formats", id: "formats", type: "theory", keywords: "moderated unmoderated remote in-person guerrilla format" },
    { title: "Planning", id: "planning", type: "practical", keywords: "test plan research questions participants tasks metrics" },
    { title: "Writing tasks", id: "writing-tasks", type: "practical", keywords: "task scenario leading words instructions" },
    { title: "Moderating", id: "moderating", type: "practical", keywords: "think-aloud protocol neutral echo technique probing" },
    { title: "Unmoderated testing", id: "unmoderated", type: "practical", keywords: "unmoderated remote UserTesting Maze first-click" },
    { title: "Analyzing results", id: "analyzing", type: "practical", keywords: "rainbow spreadsheet severity rating SUS SEQ metrics" },
    { title: "Reporting", id: "reporting", type: "practical", keywords: "report highlight reel video clips findings stakeholders" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "test plan template session readiness checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Krug rocket surgery GDS Maze unmoderated" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "validate not learn opinion not behavior too late" },
    { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "5-user formula Nielsen SUS scoring guide" }
  ],
  methods: [
    { name: "Moderated Usability Test", section: "moderating", keywords: "think-aloud moderated observe tasks" },
    { name: "Unmoderated Remote Test", section: "unmoderated", keywords: "UserTesting Maze remote self-service" },
    { name: "Think-Aloud Protocol", section: "moderating", keywords: "verbalize thoughts observe real-time" },
    { name: "Rainbow Spreadsheet Analysis", section: "analyzing", keywords: "rainbow spreadsheet color-code pattern" },
    { name: "Severity Rating", section: "analyzing", keywords: "severity 0-4 frequency impact persistence" }
  ]
},
{
  topic: "Usability: Principles, Patterns, and Practice",
  url: "topics/usability.html",
  tier: "Tier 1",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "usability effectiveness efficiency satisfaction ISO 9241 user experience" },
    { title: "Nielsen's 10 Heuristics", id: "core-principles", type: "theory", keywords: "nielsen heuristics visibility system status match real world user control consistency error prevention recognition recall flexibility minimalist error recovery help documentation" },
    { title: "Shneiderman's 8 Golden Rules", id: "shneiderman", type: "theory", keywords: "shneiderman golden rules consistency universal usability feedback closure prevent errors reversal control memory load" },
    { title: "Usability patterns", id: "patterns", type: "practical", keywords: "progressive disclosure defaults forgiving input inline validation confirmation destructive empty states" },
    { title: "Navigation usability", id: "navigation", type: "practical", keywords: "navigation three-click rule global local utility search breadcrumbs" },
    { title: "Form usability", id: "forms", type: "practical", keywords: "form design single column labels validation optional required fields" },
    { title: "Feedback and system status", id: "feedback", type: "practical", keywords: "feedback timing loading spinner progress bar skeleton screen" },
    { title: "Performance as usability", id: "performance-usability", type: "practical", keywords: "performance page speed loading skeleton screen progressive loading optimistic UI perceived quality" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "usability review checklist problem report severity heuristic" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Google Search Amazon 1-Click ATM case study" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "aesthetics vs usability designing for yourself adding features instead fixing" },
    { title: "When to apply", id: "when-to-use", type: "practical", keywords: "usability review vs testing always lens design review" },
    { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "ISO 9241 Miller's Law Hick's Law Fitts's Law cognitive psychology Don't Make Me Think Steve Krug Don Norman" }
  ],
  methods: [
    { name: "Progressive Disclosure", section: "patterns", keywords: "show hide advanced options frequency of use" },
    { name: "Sensible Defaults", section: "patterns", keywords: "pre-fill pre-select common option smart defaults" },
    { name: "Forgiving Input", section: "patterns", keywords: "multiple formats normalize accept liberal strict" },
    { name: "Inline Validation", section: "patterns", keywords: "field validation real-time error success onBlur" },
    { name: "Form Design Checklist", section: "forms", keywords: "single column labels grouping primary action optional" },
    { name: "Feedback Timing Framework", section: "feedback", keywords: "instant delay wait loading background progress" },
    { name: "Usability Review Checklist", section: "templates", keywords: "heuristic review expert evaluation ten principles" },
    { name: "Performance-Usability Connection", section: "performance-usability", keywords: "page speed skeleton screen progressive loading optimistic UI perceived quality" }
  ]
},
{
    topic: "User Research: Methods, Personas, and Synthesis",
    url: "topics/user-research.html",
    tier: "Tier 1",
  discipline: "UX",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "attitudinal behavioral qualitative quantitative research landscape" },
      { title: "Core principles", id: "core-principles", type: "theory", keywords: "research what you don't know real users observe behavior small samples team sport insights action" },
      { title: "Research planning", id: "research-planning", type: "practical", keywords: "planning framework method selection discovery definition design post-launch when to research" },
      { title: "Generative methods", id: "generative-methods", type: "practical", keywords: "user interviews contextual inquiry diary studies surveys discovery exploration" },
      { title: "Evaluative methods", id: "evaluative-methods", type: "practical", keywords: "card sorting tree testing first-click testing evaluation validation" },
      { title: "Building personas", id: "building-personas", type: "practical", keywords: "persona behavioral patterns JTBD jobs to be done user archetypes segments" },
      { title: "Synthesis", id: "synthesis", type: "practical", keywords: "affinity diagram thematic analysis insight statements findings patterns" },
      { title: "Scaling and modernizing research", id: "scaling-research", type: "practical", keywords: "democratization self-serve AI-moderated mixed-methods triangulation" },
      { title: "Templates & checklists", id: "templates", type: "practical", keywords: "research plan template interview guide persona document template" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Spotify Discover Weekly Slack GOV.UK case study" },
      { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "leading questions confirmation bias small sample stakeholder proxy" },
      { title: "When to use this", id: "when-to-use", type: "practical", keywords: "decision guidance guerrilla research lean budget" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "advanced techniques remote research cross-cultural international longitudinal studies" }
    ],
    methods: [
      { name: "User Interviews", section: "generative-methods", keywords: "semi-structured open-ended questions rapport probing" },
      { name: "Contextual Inquiry", section: "generative-methods", keywords: "field observation master apprentice model workplace" },
      { name: "Diary Studies", section: "generative-methods", keywords: "longitudinal daily entries self-report over time habits" },
      { name: "Surveys", section: "generative-methods", keywords: "questionnaire quantitative Likert scale sample size distribution" },
      { name: "Card Sorting", section: "evaluative-methods", keywords: "open closed hybrid information architecture categories mental model" },
      { name: "Tree Testing", section: "evaluative-methods", keywords: "reverse card sort navigation findability hierarchy structure" },
      { name: "First-Click Testing", section: "evaluative-methods", keywords: "where users click first task success navigation" },
      { name: "Persona Building", section: "building-personas", keywords: "user archetype behavioral patterns goals frustrations demographics" },
      { name: "Affinity Diagramming", section: "synthesis", keywords: "clustering themes patterns sticky notes grouping" },
      { name: "Thematic Analysis", section: "synthesis", keywords: "coding themes patterns qualitative data" },
      { name: "Research Democratization", section: "scaling-research", keywords: "self-serve kits non-specialist guides lightweight templates scaling" },
      { name: "AI-Moderated Research Evaluation", section: "scaling-research", keywords: "AI moderated interview synthesis evaluation criteria" },
      { name: "Mixed-Methods Research Design", section: "scaling-research", keywords: "triangulation sequential exploratory explanatory qualitative quantitative" }
    ]
  },
{
  topic: "UX Leadership & Influence",
  url: "topics/ux-leadership.html",
  tier: "Tier 4",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "UX leadership influence effectiveness title authority management six pillars" },
    { title: "Five leadership strengths", id: "leadership-strengths", type: "theory", keywords: "Architect Foreperson Orator Interpreter Evangelist strengths assessment distribution survey" },
    { title: "Driving vision", id: "vision", type: "practical", keywords: "vision statement team vision shared vision experience brief visioning workshop prioritization roadmap" },
    { title: "Evangelizing UX", id: "evangelizing", type: "practical", keywords: "evangelism visibility research community of practice transactional transformational leadership culture" },
    { title: "Evaluating yourself", id: "self-evaluation", type: "practical", keywords: "self-evaluation bad habits imposter syndrome thought partner personal action plan" },
    { title: "Developing charisma", id: "charisma", type: "practical", keywords: "charisma listening curiosity attitude questions trust" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Apple Knowledge Navigator Lemonade vision university shared vision roadmap" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "position title vision without plan evangelizing without listening Interpreter neglect" }
  ],
  methods: [
    { name: "UX Leadership Strengths Model", section: "leadership-strengths", keywords: "Architect Foreperson Orator Interpreter Evangelist self-assessment distribution" },
    { name: "Vision Definition", section: "vision", keywords: "vision attainable experience-focused specific research-based practical shared who why different" },
    { name: "UX Team Vision", section: "vision", keywords: "team vision impact purpose direction design system" },
    { name: "Shared Vision Process (Three-Step)", section: "vision", keywords: "planning visioning prioritization experience brief workshop roadmap OKR" },
    { name: "Vision Board", section: "vision", keywords: "vision board artifact target group needs product business goals one-page" },
    { name: "Make Your Work Visible", section: "evangelizing", keywords: "visibility research observation show-and-tell highlight reel" },
    { name: "Share the Ownership of UX", section: "evangelizing", keywords: "ownership participation workshops critiques usability testing advocacy" },
    { name: "UX Community of Practice", section: "evangelizing", keywords: "community of practice skill-sharing patterns advocacy support network regular informal" },
    { name: "Transactional vs. Transformational UX Leadership", section: "evangelizing", keywords: "transactional transformational monitoring vision culture growth" },
    { name: "UX Leader Self-Evaluation", section: "self-evaluation", keywords: "bad habits out-of-touch managing up dismissing trust reporting shifting priorities" },
    { name: "Personal Action Plan", section: "self-evaluation", keywords: "action plan growth six pillars gaps assessment week month year" },
    { name: "UX Charisma Practices", section: "charisma", keywords: "listening selective hearing attitude words curiosity questions trust" }
  ]
},
{
  topic: "UX Management",
  url: "topics/ux-management.html",
  tier: "Tier 4",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "UX management design leadership team organization" },
    { title: "UX maturity", id: "ux-maturity", type: "theory", keywords: "UX maturity stages absent limited emergent structured integrated" },
    { title: "Stakeholder management", id: "stakeholders", type: "practical", keywords: "stakeholder mapping influence interest business language ROI" },
    { title: "Design critique", id: "design-critique", type: "practical", keywords: "critique feedback I like I wish what if framework" },
    { title: "Hiring and growing", id: "hiring", type: "practical", keywords: "hiring designers portfolio process collaboration culture add" },
    { title: "Design ROI", id: "design-roi", type: "practical", keywords: "ROI revenue cost reduction efficiency satisfaction measurement" },
    { title: "DesignOps and ResearchOps", id: "designops", type: "practical", keywords: "DesignOps ResearchOps workflow tooling hiring pipeline research repository participant panel" },
    { title: "UX maturity and org design", id: "ux-maturity", type: "practical", keywords: "UX maturity model NN/g levels journey-centric organizational design" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "design team health check" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "IBM design thinking Airbnb culture ROI transformation" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "managing pixels output vs outcome micromanagement" }
  ],
  methods: [
    { name: "UX Maturity Assessment", section: "ux-maturity", keywords: "maturity stages absent limited emergent structured integrated" },
    { name: "Stakeholder Mapping", section: "stakeholders", keywords: "influence interest partners sponsors advocates" },
    { name: "Design Critique Framework", section: "design-critique", keywords: "critique I like I wish what if observe evaluate" },
    { name: "Design ROI Calculation", section: "design-roi", keywords: "ROI revenue cost efficiency satisfaction risk" },
    { name: "DesignOps Practice", section: "designops", keywords: "DesignOps workflow tooling quality metrics hiring pipeline" },
    { name: "ResearchOps Practice", section: "designops", keywords: "ResearchOps repository participant panel request pipeline tools" },
    { name: "UX Maturity Model", section: "ux-maturity", keywords: "maturity NN/g six levels absent limited emergent structured integrated user-driven" },
    { name: "Journey-Centric Organizational Design", section: "ux-maturity", keywords: "journey-centric org design ownership cross-team coordination" }
  ]
},
{
    topic: "UX Roadmapping",
    url: "topics/ux-roadmapping.html",
    tier: "Tier 2",
  discipline: "UX",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "UX roadmap strategic living artifact align prioritize communicate PROSPER benefits challenges field specialty product" },
      { title: "UX roadmap structure", id: "roadmap-structure", type: "practical", keywords: "context scope time now next future theme beneficiary need business objective ownership confidence disclaimers subtheme primary secondary components anatomy" },
      { title: "Creation workshops", id: "creation-workshops", type: "practical", keywords: "workshop single two approach establish goals gather inputs create themes prioritize visualize share revisit affinity diagramming hopes fears" },
      { title: "Visualizing and sharing", id: "visualization-sharing", type: "practical", keywords: "distribution formula audience detail format presentation executive stakeholder pivot report assessment" },
      { title: "UX roadmapping tools", id: "tooling", type: "practical", keywords: "Miro MURAL ProductPlan ProdPad Jira spreadsheet Google Sheets tool comparison" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "NN/g customer portal Greetings Gifts ASU Online Atlassian research specialty field roadmap" },
      { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "building alone themes vs tasks duplicating product roadmap never updating stale" },
      { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "evolving practice UX product sync further reading" }
    ],
    methods: [
      { name: "UX Field Roadmap", section: "what-and-why", keywords: "field roadmap UX team scope design research content" },
      { name: "UX Specialty Roadmap", section: "what-and-why", keywords: "specialty roadmap single discipline research design system" },
      { name: "Roadmap Component Model (UX)", section: "roadmap-structure", keywords: "theme beneficiary need business objective ownership confidence" },
      { name: "Single-Workshop Roadmap Creation", section: "creation-workshops", keywords: "3 hours workshop hopes fears distill themes affinity prioritize" },
      { name: "Two-Workshop Roadmap Creation", section: "creation-workshops", keywords: "two workshops strategy collection research gap fill" },
      { name: "PROSPER Benefits Framework", section: "what-and-why", keywords: "put plans strategic context reorient priorities orchestrate single source truth prompt excitement embrace learning rally" }
    ]
  },
{
  topic: "UX Writing & Content Design",
  url: "topics/ux-writing.html",
  tier: "Tier 2",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "UX writing content design microcopy interface text words" },
    { title: "Voice and tone", id: "voice-and-tone", type: "theory", keywords: "voice tone personality brand consistent context-dependent" },
    { title: "Microcopy patterns", id: "microcopy", type: "practical", keywords: "button labels form labels placeholder tooltip help text" },
    { title: "Error messages", id: "error-messages", type: "practical", keywords: "error message what why fix actionable plain language" },
    { title: "Empty states", id: "empty-states", type: "practical", keywords: "empty state zero data first use no results onboarding" },
    { title: "Onboarding copy", id: "onboarding-copy", type: "practical", keywords: "onboarding progressive disclosure first use tutorial" },
    { title: "Content-first design", id: "content-first", type: "practical", keywords: "content-first wireframe real copy Lorem ipsum" },
    { title: "Accessibility & localization", id: "accessibility-localization", type: "practical", keywords: "accessible alt text link text plain language localization translation" },
    { title: "GenAI content design", id: "genai-content", type: "practical", keywords: "AI-generated content voice consistency prompt engineering content review GenAI" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "UX copy review voice tone documentation" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Stripe Mailchimp Slack error messages voice guide empty states" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "Lorem ipsum clever copy inconsistent terminology afterthought" }
  ],
  methods: [
    { name: "Voice & Tone Framework", section: "voice-and-tone", keywords: "voice personality tone context attributes" },
    { name: "Button Labels", section: "microcopy", keywords: "button CTA verb specific action" },
    { name: "Form Labels and Help Text", section: "microcopy", keywords: "label placeholder help text optional required" },
    { name: "Error Message Framework", section: "error-messages", keywords: "error what why fix actionable blame" },
    { name: "Empty State Design", section: "empty-states", keywords: "empty first-use cleared no-results onboarding" },
    { name: "Content-First Wireframing", section: "content-first", keywords: "content-first real copy wireframe layout" },
    { name: "Accessible Content Checklist", section: "accessibility-localization", keywords: "alt text link text heading plain language" },
    { name: "Localization-Ready Copy", section: "accessibility-localization", keywords: "translation expansion strings localization i18n" },
    { name: "AI-Generated Content Standards", section: "genai-content", keywords: "AI GenAI content voice consistency prompt engineering review" }
  ]
},
{
  topic: "Video, Audio & Visual Content Strategy",
  url: "topics/video-audio-visual-strategy.html",
  tier: "Tier 3",
  discipline: "CS",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "multimedia video audio visual content strategy production" },
    { title: "Video strategy", id: "video-strategy", type: "practical", keywords: "video strategy framework types thumbnails" },
    { title: "Podcast and audio", id: "podcast-strategy", type: "practical", keywords: "podcast planning format cadence transcript distribution" },
    { title: "Visual content", id: "visual-content", type: "practical", keywords: "visual guidelines illustration photography diagrams screenshots" },
    { title: "Content repurposing", id: "repurposing", type: "practical", keywords: "repurposing workflow long-to-short text-to-video" },
    { title: "Production pipeline", id: "production", type: "practical", keywords: "production pipeline pre-production post-production batch" },
    { title: "Multimedia discoverability", id: "video-seo", type: "practical", keywords: "video SEO transcripts captions schema timestamps" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Figma YouTube Lenny podcast ecosystem" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "video for everything podfade sustainable" }
  ],
  methods: [
    { name: "Video Content Strategy Framework", section: "video-strategy", keywords: "video strategy types purpose funnel" },
    { name: "Thumbnail & Cover Art Guidelines", section: "video-strategy", keywords: "thumbnails cover art consistency legibility" },
    { name: "Podcast Planning Template", section: "podcast-strategy", keywords: "podcast format cadence structure distribution measurement" },
    { name: "Transcript-First Production Method", section: "podcast-strategy", keywords: "transcript searchability accessibility repurposing" },
    { name: "Visual Content Guidelines", section: "visual-content", keywords: "illustration photography diagrams screenshots asset management" },
    { name: "Content Repurposing Workflow", section: "repurposing", keywords: "repurposing long-to-short text-to-video quality" },
    { name: "Multimedia Production Pipeline", section: "production", keywords: "production pre-production post-production batch" },
    { name: "Video SEO Optimization", section: "video-seo", keywords: "video SEO titles transcripts schema chapters" }
  ]
},
{
  topic: "Visual Design",
  url: "topics/visual-design.html",
  tier: "Tier 1",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "visual design communication clarity credibility trust brand interface" },
    { title: "Visual hierarchy", id: "hierarchy", type: "theory", keywords: "hierarchy size weight color contrast position whitespace proximity grouping squint test F-pattern Z-pattern" },
    { title: "Color", id: "color", type: "practical", keywords: "color palette functional system accent semantic contrast WCAG accessibility grayscale" },
    { title: "Typography", id: "typography", type: "practical", keywords: "type scale modular ratio font selection pairing weights line height system fonts variable fonts" },
    { title: "Layout and spacing", id: "layout", type: "practical", keywords: "8px grid spacing 12-column grid responsive breakpoints content width readability" },
    { title: "Imagery and iconography", id: "imagery", type: "practical", keywords: "icons stroke weight consistency photography illustration stock" },
    { title: "Dark mode", id: "dark-mode", type: "practical", keywords: "dark mode dark theme elevation saturation contrast surface pure black" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "visual design review checklist spec template color type spacing grid" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Linear hierarchy restraint Stripe typography Apple whitespace case study" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "accent colors inconsistent spacing decoration vs communication" },
    { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "color theory HSL complementary analogous optical sizing vertical rhythm variable fonts Refactoring UI Bringhurst Albers" }
  ],
  methods: [
    { name: "Functional Color System", section: "color", keywords: "palette primary accent semantic surface background text secondary" },
    { name: "Modular Type Scale", section: "typography", keywords: "base size ratio minor third major third sizes line heights roles" },
    { name: "8px Grid System", section: "layout", keywords: "spacing element component section page margins padding" },
    { name: "Dark Mode Principles", section: "dark-mode", keywords: "elevation saturation contrast surface not invert" },
    { name: "Squint Test", section: "hierarchy", keywords: "blur hierarchy check primary secondary quick evaluation" }
  ]
},
{
  topic: "Visual Perception and Psychology",
  url: "topics/visual-perception.html",
  tier: "Tier 2",
  discipline: "UX",
  sections: [
    { title: "What & why", id: "what-and-why", type: "theory", keywords: "visual perception neuroscience brain interpret interface" },
    { title: "Pre-attentive attributes", id: "pre-attentive", type: "theory", keywords: "pre-attentive color size shape orientation pop-out instant 250ms" },
    { title: "Gestalt principles", id: "gestalt", type: "theory", keywords: "Gestalt proximity similarity closure continuity figure-ground common fate grouping" },
    { title: "Visual hierarchy & scanning", id: "scanning", type: "practical", keywords: "F-pattern Z-pattern hierarchy scanning squint test visual weight" },
    { title: "Color perception", id: "color-perception", type: "practical", keywords: "color meaning red green blue warning error success" },
    { title: "Typography perception", id: "typography-perception", type: "practical", keywords: "line length line height font size contrast alignment readability" },
    { title: "Templates & checklists", id: "templates", type: "practical", keywords: "visual hierarchy audit checklist" },
    { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "Apple Gestalt NYT New York Times hierarchy" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "over-emphasis inconsistent proximity color alone" },
    { title: "Deep-dive appendix", id: "deep-dive", type: "deep-dive", keywords: "Cleveland-McGill encoding Fitts law Weber law" }
  ],
  methods: [
    { name: "Visual Hierarchy Audit", section: "templates", keywords: "squint test hierarchy scanning prominence" },
    { name: "Gestalt Analysis", section: "gestalt", keywords: "proximity similarity closure grouping alignment" },
    { name: "Squint Test", section: "scanning", keywords: "blur hierarchy prominence visible" },
    { name: "5-Second Test", section: "scanning", keywords: "first impression recall hierarchy" }
  ]
},
{
    topic: "Workshop Facilitation & Design",
    url: "topics/workshop-facilitation.html",
    tier: "Tier 2",
  discipline: "UX",
    sections: [
      { title: "What it is & why it matters", id: "what-and-why", type: "theory", keywords: "workshop facilitation meetings vs workshops collaborative problem solving preparation ratio 43 hours" },
      { title: "Workshop structure: Open–Explore–Close", id: "workshop-structure", type: "theory", keywords: "open explore close divergent emergent convergent gamestorming constraints rules boundaries artifacts goals" },
      { title: "Facilitator role & mindset", id: "facilitator-role", type: "practical", keywords: "FACILITATE framework feedback active listening create space improvise group purpose avoid advice embrace conflict Kaner four goals" },
      { title: "Foundational activities", id: "toolbox-activities", type: "practical", keywords: "post-up brainwriting 3-12-3 brainstorm affinity diagramming landscape mapping wizard of oz do-redo-undo reverse it forced ranking impact effort matrix role playing dot voting $100 test NUF test" },
      { title: "Core facilitation techniques", id: "toolbox-techniques", type: "practical", keywords: "paraphrase create expansion encourage balance link intentional silence common ground summarize create space parking lot" },
      { title: "Handling dominating participants", id: "handling-dominators", type: "practical", keywords: "HIPPO eager enthusiast enlightened expert redirect balance silence domination" },
      { title: "Five types of UX workshops", id: "five-workshop-types", type: "practical", keywords: "discovery empathy design prioritization critique assumption smash missions mindframes methods crazy 8s persona hats workshop types" },
      { title: "Planning & designing workshops", id: "workshop-planning", type: "practical", keywords: "workshop design canvas goals questions processes agenda running order ROA ground rules group purpose group culture" },
      { title: "Conducting exercises", id: "conducting-exercises", type: "practical", keywords: "explain execute examine present reflect connect debrief facilitation model" },
      { title: "Virtual workshop facilitation", id: "virtual-facilitation", type: "practical", keywords: "virtual remote online breakout rooms engagement relationship communication technology 2 hour limit" },
      { title: "Post-workshop follow-up", id: "post-workshop", type: "practical", keywords: "follow-up evaluation soft SMART feedback self-evaluation output documentation artifact captures" },
      { title: "Real-world examples", id: "real-world-examples", type: "examples", keywords: "discovery workshop e-commerce workshop sprint persona hats critique B2B" },
      { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "activities before goals meeting not workshop skipping follow-up dominating participants" }
    ],
    methods: [
      { name: "Open–Explore–Close Model", section: "workshop-structure", keywords: "divergent emergent convergent three phases gamestorming" },
      { name: "FACILITATE Framework", section: "facilitator-role", keywords: "ten guidelines facilitator mindset feedback active listening create space improvise" },
      { name: "Post-up", section: "toolbox-activities", keywords: "silent generation sticky notes diverse perspectives divergent opening" },
      { name: "Brainwriting", section: "toolbox-activities", keywords: "6-3-5 written brainstorming build on ideas pass sheets collaborative" },
      { name: "Affinity Diagramming", section: "toolbox-activities", keywords: "clustering patterns themes sorting convergence" },
      { name: "Forced Ranking", section: "toolbox-activities", keywords: "dot voting $100 test NUF test prioritization convergent closing" },
      { name: "Impact/Effort Matrix", section: "toolbox-activities", keywords: "2x2 matrix trade-offs prioritization effort impact" },
      { name: "Workshop Design Canvas", section: "workshop-planning", keywords: "goals questions processes planning agenda design" },
      { name: "Explain–Execute–Examine", section: "conducting-exercises", keywords: "three-step facilitation model introduce execute debrief present reflect connect" },
      { name: "Assumption Smash", section: "five-workshop-types", keywords: "discovery workshop facts assumptions needs validating gaps" },
      { name: "Missions Mindframes Methods", section: "five-workshop-types", keywords: "empathy workshop user goals mental states features swim lanes" },
      { name: "Crazy 8s Sketching", section: "five-workshop-types", keywords: "design workshop rapid ideation 8 ideas 5 minutes storyboard" },
      { name: "Persona Hats", section: "five-workshop-types", keywords: "critique workshop cognitive walkthrough user perspective role playing" }
    ]
  },
{
  topic: "0-to-1 Product Creation",
  url: "topics/zero-to-one.html",
  tier: "Tier 3",
  discipline: "PM",
  sections: [
    { title: "What 0-to-1 is and why it's different", id: "what-and-why", type: "theory", keywords: "zero one startup new product creation PMF" },
    { title: "MVP strategy", id: "mvp", type: "practical", keywords: "MVP minimum viable product concierge fake door" },
    { title: "Finding product-market fit", id: "pmf", type: "practical", keywords: "PMF product-market fit Sean Ellis survey" },
    { title: "Early user acquisition", id: "early-acquisition", type: "practical", keywords: "early adopter first users community recruitment" },
    { title: "Real-world examples", id: "examples", type: "examples", keywords: "Dropbox Zapier MVP concierge" },
    { title: "Common pitfalls", id: "pitfalls", type: "practical", keywords: "build validate premature scaling solution love" }
  ],
  methods: [
    { name: "MVP Definition Canvas", section: "mvp", keywords: "MVP hypothesis assumption minimum test" },
    { name: "Concierge MVP", section: "mvp", keywords: "concierge manual deliver validate" },
    { name: "Fake Door Test", section: "mvp", keywords: "fake door demand measure click waitlist" },
    { name: "Product-Market Fit Survey", section: "pmf", keywords: "PMF survey Sean Ellis disappointed" },
    { name: "Pre-PMF Metrics", section: "pmf", keywords: "leading indicator word-of-mouth frequency" },
    { name: "Pivot vs Persevere Framework", section: "pmf", keywords: "pivot persevere learning velocity signal" },
    { name: "Early Adopter Recruitment", section: "early-acquisition", keywords: "early adopter community outreach beta" }
  ]
}
];

function levenshtein(a, b) {
  var matrix = [];
  for (var i = 0; i <= b.length; i++) matrix[i] = [i];
  for (var j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (var i = 1; i <= b.length; i++) {
    for (var j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}
