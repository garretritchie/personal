import {
  LinkedText,
  SiteFooter,
  SiteHeader,
} from "../components";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero" aria-labelledby="contact-title">
        <p className="section-kicker">Contact</p>
        <h1 id="contact-title">Garret K. Ritchie</h1>
        <p>
          <LinkedText text="Reach me for Redstone Technology Solutions, collaboration, project feedback, professional networking, teaching, or practical automation ideas." />
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#footer-contact">
            View contact details
            <span aria-hidden="true">-&gt;</span>
          </a>
          <a
            className="secondary-action"
            href="https://bs.linkedin.com/in/garretritchie"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn /garretritchie
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
