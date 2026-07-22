import { LinkedText, SiteFooter, SiteHeader } from "../components";
import { portfolioSections } from "../site-content";

const projectCount = portfolioSections.reduce(
  (total, section) => total + section.projects.length,
  0,
);

export default function PortfolioPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero portfolio-hero" aria-labelledby="portfolio-title">
        <p className="section-kicker">Portfolio</p>
        <h1 id="portfolio-title">Selected projects across AI, web, operations, and digital platforms.</h1>
        <p>
          A collection of AI-assisted applications, websites, digital platforms,
          business systems, and technology initiatives. These projects reflect work
          across product strategy, UI/UX design, software development, automation,
          digital transformation, infrastructure, and business operations.
        </p>
        <div className="portfolio-stats" aria-label="Portfolio summary">
          <span>{projectCount} selected projects</span>
          <span>{portfolioSections.length} work areas</span>
          <span>AI-assisted delivery</span>
        </div>
      </section>

      <section className="section-shell portfolio-index" aria-label="Portfolio sections">
        {portfolioSections.map((section, index) => (
          <a href={`#portfolio-${index + 1}`} key={section.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {section.title}
          </a>
        ))}
      </section>

      {portfolioSections.map((section, sectionIndex) => (
        <section
          className="section-shell portfolio-section"
          id={`portfolio-${sectionIndex + 1}`}
          key={section.title}
          aria-labelledby={`portfolio-heading-${sectionIndex + 1}`}
        >
          <div className="section-heading">
            <div>
              <p className="section-kicker">{String(sectionIndex + 1).padStart(2, "0")}</p>
              <h2 id={`portfolio-heading-${sectionIndex + 1}`}>{section.title}</h2>
            </div>
            <p>
              {section.projects.length} selected {section.projects.length === 1 ? "project" : "projects"} in this area.
            </p>
          </div>

          <div className="portfolio-card-grid">
            {section.projects.map((project, projectIndex) => (
              <article className="portfolio-card" key={project.name}>
                <div className="portfolio-card-topline">
                  <span>{String(projectIndex + 1).padStart(2, "0")}</span>
                  <span>{section.title}</span>
                </div>
                <h3>{project.name}</h3>
                <p><LinkedText text={project.summary} /></p>
                {project.detail ? <p><LinkedText text={project.detail} /></p> : null}
                <div className="portfolio-tags" aria-label={`${project.name} key areas`}>
                  {project.keyAreas.map((area) => (
                    <span key={area}>{area}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <SiteFooter />
    </main>
  );
}
