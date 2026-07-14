import Script from "next/script";
import {
  ContactCards,
  LinkedinPanel,
  SiteFooter,
  SiteHeader,
} from "../components";

export default function ContactPage() {
  return (
    <main>
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="lazyOnload"
        type="text/javascript"
      />
      <SiteHeader />
      <section className="page-hero" aria-labelledby="contact-title">
        <p className="section-kicker">Contact</p>
        <h1 id="contact-title">Garret K. Ritchie</h1>
        <p>
          Reach me for Redstone Technology Solutions, collaboration, project feedback,
          professional networking, technical instruction, or practical automation ideas.
        </p>
      </section>
      <section className="section-shell contact-section" aria-label="Contact options">
        <ContactCards />
        <LinkedinPanel />
      </section>
      <SiteFooter />
    </main>
  );
}
