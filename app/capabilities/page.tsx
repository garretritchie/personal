import { SiteFooter, SiteHeader } from "../components";
import { capabilityGroups, learningNow } from "../site-content";

export default function CapabilitiesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero" aria-labelledby="capabilities-title">
        <p className="section-kicker">Capabilities</p>
        <h1 id="capabilities-title">Practical systems across technology, business, AI, and experience.</h1>
        <p>
          The practical strengths I bring to business technology, operations,
          automation, education, and digital product work.
        </p>
      </section>

      <section className="section-shell capability-section" aria-labelledby="matrix-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">What I know</p>
            <h2 id="matrix-title">Capability matrix</h2>
          </div>
          <p>
            I move between strategy, architecture, implementation, design, operations,
            communication, training, and continuous improvement.
          </p>
        </div>
        <div className="capability-grid">
          {capabilityGroups.map((group) => (
            <details className="capability-card" key={group.domain} open>
              <summary>{group.domain}</summary>
              {"summary" in group ? <p>{group.summary}</p> : null}
              <div className="tag-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section-shell learning-section" aria-labelledby="now-title">
        <div>
          <p className="section-kicker">Now</p>
          <h2 id="now-title">The current edge of the lab.</h2>
        </div>
        <ul>
          {learningNow.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <SiteFooter />
    </main>
  );
}
