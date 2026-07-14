import { ProjectWorkbench, SiteFooter, SiteHeader } from "../components";

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero" aria-labelledby="work-title">
        <p className="section-kicker">Work</p>
        <h1 id="work-title">Project workbench</h1>
        <p>
          A cleaner place for the full project directory: status, capability tags,
          problem statements, role, outcome notes, and case-study structure.
        </p>
      </section>
      <section className="section-shell workbench-section" aria-labelledby="projects-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">What I am building</p>
            <h2 id="projects-title">Current systems, products, and experiments</h2>
          </div>
          <p>
            Filter by lifecycle, select a build, and inspect the case-study structure
            behind each project without overcrowding the home page.
          </p>
        </div>
        <ProjectWorkbench />
      </section>
      <SiteFooter />
    </main>
  );
}
