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
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/contact", label: "Contact" },
];

export type PortfolioProject = {
  name: string;
  summary: string;
  detail?: string;
  keyAreas: string[];
};

export type PortfolioSection = {
  title: string;
  introduction?: string;
  projects: PortfolioProject[];
};

export const portfolioSections: PortfolioSection[] = [
  {
    title: "Applications and Digital Platforms",
    projects: [
      {
        name: "Zion AI Assistant Platform",
        summary:
          "A personal and business AI assistant designed to bring together voice interaction, specialist agents, reminders, dashboards, private context management, and integrations with everyday business tools.",
        detail:
          "The platform is being developed as a central command interface for planning, communication, research, decision-making, task management, and business operations.",
        keyAreas: ["AI agents", "Voice interaction", "Workflow automation", "Privacy controls", "Model routing", "Dashboards"],
      },
      {
        name: "Momentum Youth Support and Development App",
        summary:
          "A mobile-first application designed to help teenagers build confidence, develop positive habits, track personal progress, and organise important areas of their lives.",
        detail:
          "Momentum combines goals, activities, journalling, achievements, emotional-wellness support, educational planning, document organisation, and appropriate parental visibility.",
        keyAreas: ["Youth development", "Mobile UX", "Progress tracking", "Journalling", "Wellness support", "Family collaboration"],
      },
      {
        name: "AI DayTrader Platform",
        summary:
          "An AI-assisted paper-trading platform built to test automated day-trading strategies in a controlled environment.",
        detail:
          "The system combines market scanning, strategy testing, catalyst analysis, guarded execution, exit monitoring, risk controls, trade journalling, and performance reporting.",
        keyAreas: ["Algorithmic trading", "AI decision support", "Strategy testing", "Market analysis", "Risk management", "Reporting"],
      },
      {
        name: "NYCHIA Platform",
        summary:
          "A unified marketplace and digital business platform built around premium access, memberships, recurring services, vendor participation, and customer experience.",
        detail:
          "The platform brings together the public website, member journeys, vendor management, customer administration, recurring service delivery, reporting, and internal business operations.",
        keyAreas: ["Marketplace design", "Memberships", "Vendor management", "Customer experience", "Recurring services", "Operations"],
      },
      {
        name: "OwaSo Fresh Supply Platform",
        summary:
          "A digital agricultural marketplace designed to connect Bahamian farmers and produce suppliers with business buyers.",
        detail:
          "The platform supports procurement, product availability, ordering, fulfilment, delivery coordination, invoicing, and reporting.",
        keyAreas: ["Agricultural technology", "Digital marketplaces", "Supply-chain workflows", "Ordering", "Fulfilment", "Invoicing"],
      },
      {
        name: "ChangePilot Construction Management App",
        summary:
          "A construction workflow application designed to simplify the documentation and approval of field changes.",
        detail:
          "ChangePilot supports change orders, field notes, approvals, handovers, checklists, pricing, supporting photographs, and client-ready reports.",
        keyAreas: ["Construction technology", "Field documentation", "Approvals", "Change orders", "Reporting", "Mobile workflows"],
      },
      {
        name: "Business Renewal and Compliance Tracker",
        summary:
          "A business application concept designed to monitor recurring obligations such as licences, contracts, insurance, subscriptions, certifications, and compliance deadlines.",
        detail:
          "The system is intended to reduce missed renewals by centralising due dates, supporting documents, responsibilities, alerts, and status tracking.",
        keyAreas: ["Compliance management", "Renewal tracking", "Document organisation", "Reminders", "Accountability", "Risk reduction"],
      },
      {
        name: "Digital Legacy and Storytelling Platform",
        summary:
          "A digital platform concept for preserving family stories, personal histories, photographs, recordings, milestones, and important memories.",
        detail:
          "The goal is to provide a structured way for individuals and families to document their experiences and pass them on to future generations.",
        keyAreas: ["Digital storytelling", "Family history", "Media preservation", "Structured content", "Legacy planning", "User experience"],
      },
    ],
  },
  {
    title: "Websites and Web Applications",
    projects: [
      {
        name: "ShutterUP Website and Quotation App",
        summary:
          "A customer-facing website and quotation application for ShutterUP Glass & Aluminum.",
        detail:
          "The experience presents products and services clearly while helping customers submit detailed quotation requests with product preferences, measurements, installation details, and project requirements.",
        keyAreas: ["Web design", "Lead generation", "Quotation workflows", "Customer experience", "Responsive UX", "Business automation"],
      },
      {
        name: "Professional Engineers Board Website",
        summary:
          "A redesigned public website for a professional and regulatory organisation.",
        detail:
          "The project focused on improving information architecture, navigation, content clarity, accessibility, visual presentation, and overall usability.",
        keyAreas: ["Website redesign", "Information architecture", "Accessibility", "Content strategy", "Responsive design", "Public-service UX"],
      },
      {
        name: "Max Conch Bar Website",
        summary:
          "A website and digital-marketing experience for a Bahamian food business.",
        detail:
          "The site showcases the menu, location, brand personality, customer experience, and social-media content while presenting the business in a more engaging way.",
        keyAreas: ["Hospitality web design", "Menu presentation", "Local branding", "Social integration", "Mobile UX", "Customer engagement"],
      },
      {
        name: "Bahamian Cafe Website Redesign",
        summary:
          "A website redesign concept for a local breakfast and lunch cafe.",
        detail:
          "The design emphasises convenience, parking, location, affordability, freshness, healthier choices, and the cafe's connection to the surrounding business community.",
        keyAreas: ["Restaurant UX", "Visual storytelling", "Local positioning", "Social integration", "Responsive design", "Conversion content"],
      },
      {
        name: "Bits and Bytes Website",
        summary:
          "An AI-assisted website and digital-brand project for the Bits and Bytes business.",
        detail:
          "The project combined content development, visual direction, page structure, responsive design, and brand presentation to create a clearer online presence.",
        keyAreas: ["Website strategy", "Content development", "Visual identity", "Responsive design", "Digital branding"],
      },
    ],
  },
  {
    title: "Business Platforms and Digital Transformation",
    projects: [
      {
        name: "Redstone Managed IT Services Platform and Digital Transformation Programme",
        summary:
          "A comprehensive digital transformation initiative for Redstone Technology Solutions.",
        detail:
          "The programme combines a custom managed-services platform with improvements across service delivery, client management, operations, reporting, pricing, technical documentation, infrastructure, security, and digital presence.",
        keyAreas: ["MSP software", "Service operations", "Business intelligence", "Client management", "Cybersecurity", "Digital transformation"],
      },
      {
        name: "Synergy Bahamas Digital Training and Business Platform",
        summary:
          "A consolidated digital platform supporting Synergy Bahamas across training delivery, student administration, corporate sales, marketing, reporting, and business operations.",
        detail:
          "The project combines a public website, learning management system, course catalogue, student records, assessments, training materials, course schedules, analytics, executive workflows, and reporting.",
        keyAreas: ["Education technology", "Learning management", "Student administration", "Curriculum development", "Corporate training", "Reporting"],
      },
    ],
  },
  {
    title: "AI Development and Automation Systems",
    projects: [
      {
        name: "Codex, Bolt, GitHub and Supabase Development Workflow",
        summary:
          "A coordinated AI-assisted development workflow using multiple tools across the software lifecycle.",
        detail:
          "Codex supports code development, refactoring, testing, and review. Bolt supports rapid application development and publishing. GitHub provides source control, while Supabase supports databases, authentication, content management, and application data.",
        keyAreas: ["AI-assisted development", "Version control", "Database architecture", "Application deployment", "Tool orchestration", "Software delivery"],
      },
      {
        name: "AI Prompt Engineering and Software Quality System",
        summary:
          "A reusable framework for directing AI development tools through complex technical and design tasks.",
        detail:
          "The system includes structured prompts for codebase audits, visual inspections, UI/UX refinement, mobile responsiveness, CMS testing, database migrations, bug detection, regression testing, refactoring, and production-readiness reviews.",
        keyAreas: ["Prompt engineering", "Quality assurance", "Code review", "UX review", "Testing", "Development governance"],
      },
      {
        name: "Website Deployment and Domain Automation Workflow",
        summary:
          "A repeatable production workflow for moving AI-assisted web projects from development into live deployment.",
        detail:
          "The process connects source-code management, deployment platforms, environment variables, DNS configuration, custom domains, build validation, and post-deployment testing.",
        keyAreas: ["GitHub", "Netlify", "Deployment automation", "DNS", "Custom domains", "Production validation"],
      },
      {
        name: "AI-Generated Visual Asset System",
        summary:
          "A creative workflow for producing custom visual assets for websites, applications, campaigns, and digital brands.",
        detail:
          "The system has been used to create hero graphics, abstract portraits, branded backgrounds, transparent interface elements, quote imagery, promotional visuals, and other digital assets.",
        keyAreas: ["Generative design", "Website imagery", "Visual identity", "Campaign creative", "Interface graphics", "Brand consistency"],
      },
      {
        name: "Business Document and Data Automation System",
        summary:
          "A structured workflow for extracting, cleaning, validating, classifying, and organising business information.",
        detail:
          "The system supports converting statements into spreadsheets, categorising contact databases, standardising course schedules, preparing catalogue data, and transforming unstructured documents into usable records.",
        keyAreas: ["Document processing", "Data extraction", "Classification", "Spreadsheet automation", "Data quality", "Business administration"],
      },
    ],
  },
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
