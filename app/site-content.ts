export type ProjectLifecycle =
  | "All"
  | "Building"
  | "Testing"
  | "Operating"
  | "Concept"
  | "Live";

export type Project = {
  slug: string;
  name: string;
  lifecycle: Exclude<ProjectLifecycle, "All">;
  status: string;
  type: string;
  href: string;
  linkLabel: string;
  tags: string[];
  problem: string;
  role: string;
  outcome: string;
  caseStudy: {
    context: string;
    problem: string;
    constraints: string;
    role: string;
    process: string;
    keyDecisions: string;
    architecture: string;
    outcome: string;
    lessons: string;
    currentStatus: string;
  };
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/contact", label: "Contact" },
];

export const workbenchFilters: ProjectLifecycle[] = [
  "All",
  "Building",
  "Testing",
  "Operating",
  "Concept",
  "Live",
];

// Retained for the future portfolio redesign; not currently rendered publicly.
export const projects: Project[] = [
  {
    slug: "redstone-msp",
    name: "Redstone MSP App",
    lifecycle: "Operating",
    status: "Operations platform",
    type: "Managed services",
    href: "https://msp2.rdstn.com",
    linkLabel: "Open app",
    tags: ["MSP", "Client ops", "Service workflows", "Automation"],
    problem:
      "Redstone needs a cleaner operational layer for service visibility, client activity, subscriptions, vendors, and internal execution.",
    role: "Product owner, systems architect, workflow designer, and implementation lead.",
    outcome:
      "A purpose-built operations workspace for standardizing daily MSP work and making service activity easier to manage.",
    caseStudy: {
      context:
        "Redstone Technology Solutions supports business clients that need dependable IT operations and fast follow-through.",
      problem:
        "Generic tools can scatter tickets, subscriptions, vendor records, and client notes across too many places.",
      constraints:
        "The system has to fit real service desk habits, protect sensitive client context, and be simple enough for repeated daily use.",
      role:
        "Garret defines the workflows, prioritizes the operational model, and guides the technical build.",
      process:
        "Map the MSP workflow, identify repeated friction, model client and vendor objects, then build the smallest useful control surface.",
      keyDecisions:
        "Keep service work close to client context, expose high-signal status first, and defer nice-to-have analytics until the workflow is reliable.",
      architecture:
        "Web application with client, service, subscription, vendor, and operations views shaped around day-to-day managed service workflows.",
      outcome:
        "A more focused platform for running and improving managed service operations.",
      lessons:
        "Operational software only works when it respects the way technicians actually move through a day.",
      currentStatus: "Operating and evolving with Redstone workflows.",
    },
  },
  {
    slug: "daytrading",
    name: "DayTrading App",
    lifecycle: "Testing",
    status: "Research build",
    type: "Trading automation",
    href: "#projects",
    linkLabel: "In Codex",
    tags: ["Research", "Risk checks", "Automation", "Decision support"],
    problem:
      "Trading ideas need disciplined testing and risk review before they become anything close to real-world action.",
    role: "Experiment designer and builder.",
    outcome:
      "A research environment for strategy testing, paper workflows, and clearer decision rules.",
    caseStudy: {
      context:
        "The project explores whether AI-assisted tooling can help make trading research more structured and less emotional.",
      problem:
        "Ideas are easy to over-trust without plain-English rules, risk thresholds, and repeatable evaluation.",
      constraints:
        "No fabricated returns, no implied financial advice, and no shortcut around careful testing.",
      role:
        "Garret frames the experiment, builds the workflow, and keeps the focus on disciplined evaluation.",
      process:
        "Translate a trading idea into rules, test assumptions, document results, and separate signal from excitement.",
      keyDecisions:
        "Prioritize paper-trading, explainability, and risk checks over live execution.",
      architecture:
        "Research web app with strategy notes, scenario checks, and evaluation views.",
      outcome:
        "A safer place to reason about trading ideas before committing real capital.",
      lessons:
        "The most useful automation often slows you down at the right moment.",
      currentStatus: "Testing and research.",
    },
  },
  {
    slug: "nychia",
    name: "Nychia",
    lifecycle: "Concept",
    status: "Concept venture",
    type: "Business model",
    href: "#projects",
    linkLabel: "In development",
    tags: ["Venture design", "Positioning", "Planning", "Financial model"],
    problem:
      "A promising service idea needs sharper positioning, realistic economics, and a launch path before it becomes a business.",
    role: "Founder, planner, and product strategist.",
    outcome:
      "A planning workspace that turns scattered thinking into a clearer venture model.",
    caseStudy: {
      context:
        "Nychia is a business concept being shaped through strategy, market thinking, and operating assumptions.",
      problem:
        "Early ideas can feel compelling before the customer, offer, and delivery model are clear.",
      constraints:
        "Assumptions need to be explicit, testable, and separated from confirmed facts.",
      role:
        "Garret develops the concept, pressure-tests the model, and defines the launch plan.",
      process:
        "Document the offer, customer, pricing logic, risks, and first tests required to validate demand.",
      keyDecisions:
        "Treat the venture as a set of experiments rather than a finished brand.",
      architecture:
        "Planning and research workspace with structured notes, market questions, and financial assumptions.",
      outcome:
        "A more disciplined concept with clearer questions to validate.",
      lessons:
        "A business plan is most useful when it shows what still needs to be proven.",
      currentStatus: "Concept validation.",
    },
  },
  {
    slug: "pebahamas",
    name: "pebahamas.org",
    lifecycle: "Live",
    status: "CMS build",
    type: "Public association site",
    href: "https://www.pebahamas.org",
    linkLabel: "Visit site",
    tags: ["CMS", "Public website", "Governance", "Publishing"],
    problem:
      "The Professional Engineers Board of The Bahamas needs a maintainable public web presence with administrative publishing workflows.",
    role: "Web platform builder and implementation partner.",
    outcome:
      "A public site and CMS foundation for board information, updates, forms, and ongoing content.",
    caseStudy: {
      context:
        "Professional associations need trustworthy public information and a manageable publishing process.",
      problem:
        "Static or difficult-to-maintain sites make updates slower and increase operational dependency.",
      constraints:
        "Information must be clear, professional, and easy for administrators to maintain.",
      role:
        "Garret supports the structure, implementation, and web delivery approach.",
      process:
        "Organize content needs, define publishable page types, and build a maintainable site structure.",
      keyDecisions:
        "Use a CMS model so routine updates do not require rebuilding the site manually.",
      architecture:
        "Public website with content management for pages, news, forms, and board information.",
      outcome:
        "A stronger public-facing platform for professional board communication.",
      lessons:
        "Administrative usability matters as much as front-end polish for institutional sites.",
      currentStatus: "Live CMS site.",
    },
  },
  {
    slug: "zion",
    name: "Project Zion 2.0",
    lifecycle: "Building",
    status: "MVP build",
    type: "Personal knowledge system",
    href: "#projects",
    linkLabel: "In Codex",
    tags: ["Knowledge base", "AI memory", "Documents", "Personal OS"],
    problem:
      "Personal knowledge, sensitive documents, project memory, and AI-assisted workflows need clearer structure and boundaries.",
    role: "System designer and builder.",
    outcome:
      "A second-generation personal operating system for organizing decisions, documents, and project context.",
    caseStudy: {
      context:
        "Project Zion 2.0 continues Garret's work on a private operating system for personal and professional knowledge.",
      problem:
        "Useful context is easy to lose when it lives across notebooks, chats, files, and memory.",
      constraints:
        "The system must respect sensitivity, sharing boundaries, and long-term maintainability.",
      role:
        "Garret defines the information architecture, workflows, and AI-assisted use cases.",
      process:
        "Inventory information types, separate private and shareable material, and build useful retrieval paths.",
      keyDecisions:
        "Make boundaries explicit before adding automation.",
      architecture:
        "Personal knowledge system with documents, relationship context, project memory, and AI workflows.",
      outcome:
        "A clearer foundation for remembering, deciding, and building across projects.",
      lessons:
        "AI is more useful when the human-designed information structure is already sane.",
      currentStatus: "MVP build.",
    },
  },
  {
    slug: "bits-bytes",
    name: "bitsbytescafe.com",
    lifecycle: "Live",
    status: "CMS build",
    type: "Cafe website",
    href: "https://bitsbytescafe.com",
    linkLabel: "Visit site",
    tags: ["CMS", "Restaurant", "Menu content", "Publishing"],
    problem:
      "Bits & Bytes Cafe needs a maintainable public site for menu content, imagery, updates, and a brand presence that can keep growing.",
    role: "Website builder and CMS implementer.",
    outcome:
      "A content-managed site that can grow beyond a static brochure.",
    caseStudy: {
      context:
        "Food and hospitality websites need to be visually useful, current, and simple to maintain.",
      problem:
        "Menu changes, photos, and updates should not become technical bottlenecks.",
      constraints:
        "The site needs to be easy to update and friendly for customers on phones.",
      role:
        "Garret builds the public site and publishing structure.",
      process:
        "Model the content, prioritize customer-facing pages, and create a maintainable update path.",
      keyDecisions:
        "Treat menu and update content as managed content rather than hard-coded page text.",
      architecture:
        "CMS-backed website for public pages, menus, media, and updates.",
      outcome:
        "A practical, maintainable cafe web presence.",
      lessons:
        "Small business sites succeed when owners can keep them fresh without friction.",
      currentStatus: "Live CMS site.",
    },
  },
  {
    slug: "synergy",
    name: "synergybahamas.com",
    lifecycle: "Building",
    status: "LMS + CMS",
    type: "Education platform",
    href: "https://synergybahamas.com",
    linkLabel: "Visit site",
    tags: ["LMS", "CMS", "Education", "Training operations"],
    problem:
      "Synergy Bahamas needs a future-facing platform that combines public content, course delivery, and learning operations.",
    role: "Platform strategist and builder.",
    outcome:
      "A combined LMS and CMS foundation for training programs, student engagement, and education operations.",
    caseStudy: {
      context:
        "Education platforms have to serve public discovery, enrolled learners, administrators, and instructors.",
      problem:
        "A simple website alone is not enough when courses, content, and learner engagement need to connect.",
      constraints:
        "The platform must stay maintainable while supporting both marketing and learning workflows.",
      role:
        "Garret shapes the technical approach and helps connect site content with learning capability.",
      process:
        "Define platform roles, content structures, course needs, and publishing operations.",
      keyDecisions:
        "Design the CMS and LMS as related capabilities rather than separate islands.",
      architecture:
        "Education website with content management and learning-management capabilities.",
      outcome:
        "A stronger digital platform for courses, training, and long-term education operations.",
      lessons:
        "Learning platforms need operational clarity before they need feature volume.",
      currentStatus: "Building.",
    },
  },
];

export const profileHighlights = [
  {
    label: "20+ years",
    title: "Information technology",
    detail:
      "Hands-on leadership across managed services, systems administration, networking, security, and user support.",
  },
  {
    label: "Director",
    title: "Technology leadership",
    detail:
      "Guiding technical operations, client solutions, project delivery, and team execution through Redstone Technology.",
  },
  {
    label: "Instructor",
    title: "Technical training",
    detail:
      "Long-running work as a lead technical trainer, certified instructor, and mentor for students and professionals.",
  },
];

export const capabilityGroups = [
  {
    domain: "Infrastructure & Systems",
    items: ["Managed IT services", "Network services", "Routing and switching", "Virtualization"],
  },
  {
    domain: "Managed Services",
    items: ["Client operations", "Vendor coordination", "Service workflows", "Support discipline"],
  },
  {
    domain: "AI & Automation",
    items: ["AI-powered web apps", "Practical automation", "Workflow design", "Decision support"],
  },
  {
    domain: "Product Design",
    items: ["CMS architecture", "LMS planning", "Business experiments", "User-centered systems"],
  },
  {
    domain: "Security & Credentials",
    items: [
      "Certified Information Systems Security Officer",
      "Certified Ethical Hacker",
      "Certified Penetration Testing Engineer",
      "Microsoft MCSE / MCSA",
      "CompTIA A+ / Network+",
      "Cisco CCENT",
    ],
  },
  {
    domain: "Teaching & Enablement",
    items: ["Microsoft Certified Trainer", "CompTIA Certified Trainer", "Technical instruction", "Mentorship"],
  },
];

export const fieldNotes = [
  "Build the smallest version that exposes the real problem.",
  "Automation should make judgment easier, not disappear it.",
  "A tool earns trust when the messy operational details are visible.",
  "If a workflow feels hard to explain, the interface is probably hiding confusion.",
  "Experience teaches where theory leaves out the cost of friction.",
];

export const learningNow = [
  "Turning small AI experiments into reliable products",
  "Better ways to test business ideas before over-investing",
  "Personal knowledge systems with clearer privacy boundaries",
  "Automation patterns that help nontechnical teams move faster",
];

export const contactOptions = [
  {
    label: "Business / Redstone",
    description: "Managed services, technology leadership, client operations, and business IT conversations.",
    lines: ["Redstone Technology Solutions", "Nassau, Bahamas"],
    actions: [
      { label: "242-601-6014", value: "242-601-6014", href: "tel:+12426016014" },
      { label: "gritchie@redstoneTS.com", value: "gritchie@redstoneTS.com", href: "mailto:gritchie@redstoneTS.com" },
    ],
  },
  {
    label: "Collaboration / Networking",
    description:
      "AI apps, business ideas, project feedback, professional networking, speaking, teaching, and practical automation.",
    lines: [],
    actions: [
      { label: "242-535-7735", value: "242-535-7735", href: "tel:+12425357735", detail: "Nassau, Bahamas" },
      { label: "226-973-3425", value: "226-973-3425", href: "tel:+12269733425", detail: "Ontario, Canada" },
      { label: "garretritchie@gmail.com", value: "garretritchie@gmail.com", href: "mailto:garretritchie@gmail.com" },
      { label: "LinkedIn /garretritchie", value: "https://bs.linkedin.com/in/garretritchie", href: "https://bs.linkedin.com/in/garretritchie" },
    ],
  },
];
