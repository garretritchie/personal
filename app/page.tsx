/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ProjectSummaryCard,
  SiteFooter,
  SiteHeader,
} from "./components";
import { projects } from "./site-content";

const featuredProjects = projects.slice(0, 3);
const signalWords = ["Observe", "Question", "Learn", "Build", "Experience", "Improve"];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="availability-pill">
              <span aria-hidden="true" />
              Available for a new project
            </p>
            <p className="eyebrow">Curious mind / Practical builder / Day 1 of 1</p>
            <h1 id="hero-title">I build useful things with technology.</h1>
            <p className="hero-lede">
              I&apos;m Garret Ritchie. I help businesses leverage technology in the
              workplace, build AI-powered web apps, automate practical workflows,
              and share what I learn along the way.
            </p>
            <div className="hero-actions" aria-label="Page actions">
              <Link className="primary-action" href="/work">
                View workbench
                <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link className="secondary-action" href="/about">About Garret</Link>
            </div>
          </div>

          <figure className="portrait-panel">
            <img
              src="/garret-cutout-trim.png"
              alt="Illustrated portrait of Garret Ritchie"
              width="1294"
              height="941"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="signal-strip" aria-label="Personal lab signals">
        <div>
          {[...signalWords, ...signalWords].map((word, index) => (
            <span key={`${word}-${index}`}>{String((index % signalWords.length) + 1).padStart(2, "0")} {word}</span>
          ))}
        </div>
      </section>

      <section className="section-shell intro-section" aria-labelledby="home-about-title">
        <div className="section-lead">
          <p className="section-kicker">The thread</p>
          <h2 id="home-about-title">Curiosity leads to building.</h2>
        </div>
        <div className="intro-copy">
          <p>
            I design and build practical systems at the intersection of technology,
            business, artificial intelligence, and human experience.
          </p>
          <div className="thread-diagram" aria-hidden="true">
            <span>observe</span>
            <span>question</span>
            <span>build</span>
          </div>
          <div className="hero-actions">
            <Link className="secondary-action" href="/about">About Garret</Link>
            <Link className="secondary-action" href="/capabilities">Capabilities</Link>
          </div>
        </div>
      </section>

      <section className="section-shell home-work-section" aria-labelledby="home-work-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 id="home-work-title">A few things currently in motion.</h2>
          </div>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectSummaryCard project={project} index={index} key={project.slug} />
          ))}
        </div>
        <div className="section-action-row">
          <Link className="primary-action" href="/work">
            Open full workbench
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </section>

      <section className="section-shell quote-section" aria-labelledby="home-quote-title">
        <div className="quote-copy">
          <p className="section-kicker">04 / Field notes</p>
          <h2 id="home-quote-title">Experience teaches what theory cannot.</h2>
          <p>
            Build the thing, test it in the real world, notice the friction, then make
            the next version better.
          </p>
        </div>
        <figure className="quote-art">
          <img
            src="/twain-quote.png"
            alt="Mark Twain quote about learning by experience"
            width="1680"
            height="945"
            loading="lazy"
          />
        </figure>
      </section>

      <SiteFooter />
    </main>
  );
}
