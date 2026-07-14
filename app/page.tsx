const projects = [
  {
    name: "AI Idea Lab",
    status: "Exploring",
    description:
      "Small experiments, prompts, and prototype apps for testing passive-income and side-hustle ideas.",
    href: "#projects",
  },
  {
    name: "Business Builder Toolkit",
    status: "In progress",
    description:
      "Practical calculators, checklists, and workflow helpers for turning rough ideas into something usable.",
    href: "#projects",
  },
  {
    name: "Automation Notebook",
    status: "Private beta",
    description:
      "A collection of personal automations and AI workflows that save time or remove repetitive work.",
    href: "#projects",
  },
  {
    name: "Family & Friends Portal",
    status: "Open",
    description:
      "A simple place to share what I am building, what I am learning, and what is ready to try.",
    href: "mailto:hello@garretritchie.com",
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
            <a className="project-card" href={project.href} key={project.name}>
              <span className="project-status">{project.status}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span className="project-link">Open</span>
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
