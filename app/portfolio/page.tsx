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
        <div className="portfolio-hero-layout">
          <div>
            <p className="section-kicker">Portfolio</p>
            <h1 id="portfolio-title">Selected work across business systems, AI, and web platforms.</h1>
          </div>
          <div className="portfolio-hero-note">
            <p>
              A curated view of projects where strategy, software, automation,
              operations, and user experience come together to solve practical
              business problems.
            </p>
            <div className="portfolio-stats" aria-label="Portfolio summary">
              <span>{projectCount} selected projects</span>
              <span>{portfolioSections.length} work areas</span>
              <span>Business-first technology</span>
            </div>
          </div>
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
          className={`section-shell portfolio-section${section.featured ? " portfolio-section-featured" : ""}`}
          id={`portfolio-${sectionIndex + 1}`}
          key={section.title}
          aria-labelledby={`portfolio-heading-${sectionIndex + 1}`}
        >
          <div className="section-heading">
            <div>
              <p className="section-kicker">
                {section.featured ? "Highlighted projects" : String(sectionIndex + 1).padStart(2, "0")}
              </p>
              <h2 id={`portfolio-heading-${sectionIndex + 1}`}>{section.title}</h2>
            </div>
            <p>
              {section.introduction ??
                `${section.projects.length} selected ${section.projects.length === 1 ? "project" : "projects"} in this area.`}
            </p>
          </div>

          <div className="portfolio-card-grid">
            {section.projects.map((project, projectIndex) => (
              <article className="portfolio-card" key={project.name}>
                <div className="portfolio-card-topline">
                  <span>{String(projectIndex + 1).padStart(2, "0")}</span>
                  <span>{section.featured ? "Featured" : section.title}</span>
                </div>
                <div className="portfolio-card-copy">
                  <h3>{project.name}</h3>
                  <p className="portfolio-summary"><LinkedText text={project.summary} /></p>
                  {project.detail ? <p><LinkedText text={project.detail} /></p> : null}
                </div>
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
