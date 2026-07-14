import {
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
          Contact details now live in the footer so they are available from every
          page without a separate directory view.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#footer-contact">
            View contact details
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
