import { ProjectWorkbench, SiteFooter, SiteHeader } from "../components";

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero" aria-labelledby="work-title">
        <p className="section-kicker">Work</p>
        <h1 id="work-title">Project portfolio</h1>
        <p>
          A curated look at the platforms, websites, experiments, and business
          systems I am building or improving.
        </p>
      </section>
      <section className="section-shell workbench-section" aria-labelledby="projects-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">What I am building</p>
            <h2 id="projects-title">Current systems, products, and experiments</h2>
          </div>
          <p>
            Browse by lifecycle, choose a project, and see the practical problem,
            role, decisions, and current status behind the work.
          </p>
        </div>
        <ProjectWorkbench />
      </section>
      <SiteFooter />
    </main>
  );
}
