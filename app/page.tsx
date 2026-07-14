import Script from "next/script";

const projects = [
  {
    name: "Redstone MSP App",
    status: "Operations platform",
    type: "Managed services",
    description:
      "A managed-service-provider workspace for Redstone Technology. The app is designed around service workflows, client operations, ticket visibility, subscriptions, vendor tracking, and the kind of internal systems an MSP needs to run cleaner day to day.",
    href: "https://msp2.rdstn.com",
    linkLabel: "Open app",
  },
  {
    name: "DayTrading App",
    status: "Research build",
    type: "Trading automation",
    description:
      "A trading research and automation project focused on strategy testing, plain-English trading logic, risk checks, paper-trading workflows, and disciplined evaluation before any real-world deployment.",
    href: "#projects",
    linkLabel: "In Codex",
  },
  {
    name: "Nychia",
    status: "Concept venture",
    type: "Business model",
    description:
      "A venture concept and planning workspace for turning a service idea into a sharper business model. It includes strategy work, market thinking, financial modeling, launch planning, and positioning research.",
    href: "#projects",
    linkLabel: "In development",
  },
  {
    name: "pebahamas.org",
    status: "CMS build",
    type: "Public association site",
    description:
      "A modernized web presence for the Professional Engineers Board of The Bahamas, with a content management layer for news, pages, registered engineer information, forms, and administrative publishing workflows.",
    href: "https://www.pebahamas.org",
    linkLabel: "Visit site",
  },
  {
    name: "Project Zion 2.0",
    status: "MVP build",
    type: "Personal knowledge system",
    description:
      "A second-generation personal operating system for organizing sensitive knowledge, decisions, documents, relationship context, project memory, and AI-assisted workflows with clearer boundaries around what can be shared.",
    href: "#projects",
    linkLabel: "In Codex",
  },
  {
    name: "bitsbytescafe.com",
    status: "CMS build",
    type: "Cafe website",
    description:
      "A cafe website and content system for Bits & Bytes Cafe, built around menu content, public pages, images, updates, and a maintainable publishing workflow that can grow beyond a static brochure site.",
    href: "https://bitsbytescafe.com",
    linkLabel: "Visit site",
  },
  {
    name: "synergybahamas.com",
    status: "LMS + CMS",
    type: "Education platform",
    description:
      "A future-facing Synergy Bahamas platform combining a public website, content management, and learning-management capabilities for courses, training programs, student engagement, and long-term education operations.",
    href: "https://synergybahamas.com",
    linkLabel: "Visit site",
  },
];

const profileHighlights = [
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

const expertise = [
  "Managed IT services",
  "Network services",
  "Routing and switching",
  "Virtualization",
  "Cybersecurity",
  "Web development",
  "Technical instruction",
  "Business management",
];

const credentials = [
  "Microsoft Certified Trainer",
  "CompTIA Certified Trainer",
  "Certified Information Systems Security Officer",
  "Certified Ethical Hacker",
  "Certified Penetration Testing Engineer",
  "Microsoft MCSE / MCSA",
  "CompTIA A+ / Network+",
  "Cisco CCENT",
];

const interests = [
  "AI-powered web apps",
  "Business experiments",
  "Practical automation",
  "Side-hustle research",
  "Tools that teach by doing",
];

export default function Home() {
  return (
    <main>
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="lazyOnload"
        type="text/javascript"
      />

      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Garret Ritchie home">
            <img src="/gr-logo.png" alt="" />
            <span>Garret Ritchie</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#profile">Profile</a>
            <a href="#projects">Projects</a>
            <a href="#quote">Quote</a>
            <a href="mailto:hello@garretritchie.com">Contact</a>
          </nav>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Personal portal / AI experiments / side projects</p>
            <h1 id="hero-title">Building small useful things, one hard lesson at a time.</h1>
            <p className="hero-lede">
              I am collecting my AI-powered web apps, business idea tests, and practical
              automation projects here so family, friends, and collaborators can see what
              I am working on.
            </p>
            <div className="hero-actions" aria-label="Page actions">
              <a className="primary-action" href="#projects">View the project directory</a>
              <a className="secondary-action" href="mailto:hello@garretritchie.com">
                Send an idea
              </a>
            </div>
          </div>

          <figure className="portrait-panel">
            <img src="/garret-portrait.png" alt="Garret Ritchie seated at a laptop" />
            <figcaption>
              <strong>Current focus</strong>
              <span>AI tools, business experiments, and learning by building.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="interest-band" aria-label="Interests">
        {interests.map((interest) => (
          <span key={interest}>{interest}</span>
        ))}
      </section>

      <section className="intro-section" aria-labelledby="intro-title">
        <div>
          <p className="section-kicker">Why this exists</p>
          <h2 id="intro-title">A home base for the ideas that escape the notebook.</h2>
        </div>
        <p>
          Some projects will be polished. Some will be rough. The point is to keep
          experimenting, learning in public with a small trusted circle, and turning the
          best ideas into tools people can actually use.
        </p>
      </section>

      <section className="profile-section" id="profile" aria-labelledby="profile-title">
        <div className="profile-intro">
          <p className="section-kicker">Profile</p>
          <h2 id="profile-title">IT engineer, technology leader, and teacher at heart.</h2>
          <p>
            My professional background sits at the intersection of practical IT,
            business operations, and education. I like solving real problems, explaining
            technical ideas clearly, and building systems that help people work better.
          </p>
        </div>

        <div className="profile-highlights">
          {profileHighlights.map((item) => (
            <article className="profile-card" key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="profile-details" aria-label="Professional details">
          <div>
            <h3>Core expertise</h3>
            <div className="tag-list">
              {expertise.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div>
            <h3>Selected credentials</h3>
            <div className="tag-list">
              {credentials.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="linkedin-panel">
            <h3>LinkedIn</h3>
            <p>Connect with me professionally and see more of my background.</p>
            <div
              className="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="medium"
              data-theme="dark"
              data-type="VERTICAL"
              data-vanity="garretritchie"
              data-version="v1"
            >
              <a
                className="badge-base__link LI-simple-link"
                href="https://bs.linkedin.com/in/garretritchie?trk=profile-badge"
              >
                View Garret Ritchie on LinkedIn
              </a>
            </div>
          </div>
        </div>

        <blockquote>
          <p>
            "This is the person that will deliver results, not excuses."
          </p>
          <cite>Professional reference from Garret's resume</cite>
        </blockquote>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="section-kicker">Directory</p>
          <h2 id="projects-title">Things I am working on</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              className="project-card"
              href={project.href}
              key={project.name}
              target={project.href.startsWith("https://") ? "_blank" : undefined}
              rel={project.href.startsWith("https://") ? "noreferrer" : undefined}
            >
              <span className="project-status">{project.status}</span>
              <h3>{project.name}</h3>
              <span className="project-type">{project.type}</span>
              <p>{project.description}</p>
              <span className="project-link">{project.linkLabel}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="quote-section" id="quote" aria-labelledby="quote-title">
        <div className="quote-copy">
          <p className="section-kicker">A useful reminder</p>
          <h2 id="quote-title">Experience teaches what theory cannot.</h2>
          <p>
            This Mark Twain line fits the way I like to build: test the idea, feel the
            friction, learn what the spreadsheet could not tell you, then make the next
            version better.
          </p>
        </div>
        <img src="/twain-quote.png" alt="Mark Twain quote about learning by experience" />
      </section>

      <footer>
        <span>Garret Ritchie</span>
        <a href="https://www.garretritchie.com">www.garretritchie.com</a>
      </footer>
    </main>
  );
}
