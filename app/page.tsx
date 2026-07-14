/* eslint-disable @next/next/no-img-element */
"use client";

import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import {
  capabilityGroups,
  contactOptions,
  fieldNotes,
  learningNow,
  navItems,
  profileHighlights,
  projects,
  workbenchFilters,
  type ProjectLifecycle,
} from "./site-content";

const sections = navItems.map((item) => item.href.replace("#", ""));

function isExternal(href: string) {
  return href.startsWith("https://");
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("profile");
  const [activeFilter, setActiveFilter] = useState<ProjectLifecycle>("All");
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(projects[0].slug);
  const [copiedValue, setCopiedValue] = useState("");
  const [localTime, setLocalTime] = useState("");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.lifecycle === activeFilter);
  }, [activeFilter]);

  const selectedProject =
    projects.find((project) => project.slug === selectedProjectSlug) ?? projects[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-34% 0px -54% 0px", threshold: [0.18, 0.3, 0.5] },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => {
      setLocalTime(
        new Intl.DateTimeFormat("en-BS", {
          timeZone: "America/Nassau",
          hour: "numeric",
          minute: "2-digit",
        }).format(new Date()),
      );
    };

    update();
    const interval = window.setInterval(update, 30000);
    return () => window.clearInterval(interval);
  }, []);

  async function copyValue(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(value);
      window.setTimeout(() => setCopiedValue(""), 1800);
    } catch {
      setCopiedValue("");
    }
  }

  function handleFilter(filter: ProjectLifecycle) {
    setActiveFilter(filter);
    const firstMatch =
      filter === "All"
        ? projects[0]
        : projects.find((project) => project.lifecycle === filter);

    if (firstMatch) {
      setSelectedProjectSlug(firstMatch.slug);
    }
  }

  return (
    <main id="top">
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="lazyOnload"
        type="text/javascript"
      />

      <header className="site-nav" aria-label="Site navigation">
        <a className="brand" href="#top" aria-label="Garret Ritchie home">
          <img src="/gr-logo.png" alt="" />
          <span>Garret Ritchie</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                href={item.href}
                key={item.href}
                aria-current={activeSection === id ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <a className="nav-cta" href="#contact">Contact</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="availability-pill">
              <span aria-hidden="true" />
              Available for a new project
            </p>
            <p className="eyebrow">Personal lab / AI experiments / useful systems</p>
            <h1 id="hero-title">I&apos;m Garret. Building small useful things.</h1>
            <p className="hero-lede">
              I am collecting my AI-powered web apps, business idea tests, and practical
              automation projects here so colleagues, friends, and collaborators can see
              what I am working on.
            </p>
            <div className="hero-actions" aria-label="Page actions">
              <a className="primary-action" href="#projects">
                View workbench
                <span aria-hidden="true">-&gt;</span>
              </a>
              <a className="secondary-action" href="#quote">Read the lesson</a>
            </div>
            <dl className="hero-metrics" aria-label="Current site metadata">
              <div>
                <dt>Builds listed</dt>
                <dd>{projects.length}</dd>
              </div>
              <div>
                <dt>Years leading</dt>
                <dd>20+</dd>
              </div>
              <div>
                <dt>Mode</dt>
                <dd>Keep learning</dd>
              </div>
            </dl>
          </div>

          <figure className="portrait-panel">
            <img
              src="/garret-cutout-trim.png"
              alt="Illustrated portrait of Garret Ritchie"
              width="1294"
              height="941"
              fetchPriority="high"
            />
            <figcaption>
              <strong>Current focus</strong>
              <span>AI tools, business experiments, and practical automation.</span>
            </figcaption>
          </figure>

          <aside className="hero-rail" aria-label="Current focus and status">
            <article>
              <span className="rail-label">Current focus</span>
              <p>AI tools, business experiments, and learning by building.</p>
              <a href="#projects">See current work</a>
            </article>
            <article>
              <span className="rail-label">Roles and experience</span>
              <ul>
                <li>IT Engineer</li>
                <li>Technology Leader</li>
                <li>Instructor and Teacher</li>
              </ul>
              <a href="#profile">View full profile</a>
            </article>
            <article>
              <span className="rail-label">System status</span>
              <dl className="status-meter">
                <div>
                  <dt>Curiosity</dt>
                  <dd><span style={{ width: "100%" }} />100%</dd>
                </div>
                <div>
                  <dt>Builder mode</dt>
                  <dd><span style={{ width: "92%" }} />On</dd>
                </div>
                <div>
                  <dt>Coffee level</dt>
                  <dd><span style={{ width: "84%" }} />High</dd>
                </div>
              </dl>
            </article>
          </aside>
        </div>
      </section>

      <section className="signal-strip" aria-label="Personal lab signals">
        <span>Managed IT</span>
        <span>AI-powered apps</span>
        <span>CMS and LMS builds</span>
        <span>Business experiments</span>
        <span>Teaching by doing</span>
      </section>

      <section className="section-shell intro-section" id="profile" aria-labelledby="profile-title">
        <div className="section-lead">
          <p className="section-kicker">Who I am</p>
          <h2 id="profile-title">An IT engineer, technology leader, and teacher at heart.</h2>
        </div>
        <div className="intro-copy">
          <p>
            My professional background sits at the intersection of practical IT, business
            operations, and education. I like solving real problems, explaining technical
            ideas clearly, and building systems that help people work better.
          </p>
          <div className="profile-highlights">
            {profileHighlights.map((item) => (
              <article className="profile-card" key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell workbench-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">What I am building</p>
            <h2 id="projects-title">Dynamic project workbench</h2>
          </div>
          <p>
            Filter by lifecycle, select a build, and inspect the case-study structure
            behind each project without leaving the page.
          </p>
        </div>

        <div className="filter-bar" aria-label="Project lifecycle filters">
          {workbenchFilters.map((filter) => (
            <button
              className={activeFilter === filter ? "active" : ""}
              key={filter}
              type="button"
              onClick={() => handleFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="workbench-layout">
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <button
                className={selectedProject.slug === project.slug ? "project-card selected" : "project-card"}
                key={project.slug}
                type="button"
                onClick={() => setSelectedProjectSlug(project.slug)}
                aria-pressed={selectedProject.slug === project.slug}
              >
                <span className="project-status">{project.status}</span>
                <h3>{project.name}</h3>
                <div className="project-card-meta" aria-label={`${project.name} metadata`}>
                  <span>{project.lifecycle}</span>
                  <span>{project.type}</span>
                </div>
                <p>{project.problem}</p>
                <div className="project-card-tags" aria-label={`${project.name} capability tags`}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="project-role">{project.role}</span>
              </button>
            ))}
          </div>

          <aside className="case-study-panel" aria-live="polite" aria-labelledby="case-study-title">
            <div className="case-study-topline">
              <span>{selectedProject.lifecycle}</span>
              <a
                href={selectedProject.href}
                target={isExternal(selectedProject.href) ? "_blank" : undefined}
                rel={isExternal(selectedProject.href) ? "noreferrer" : undefined}
              >
                {selectedProject.linkLabel}
              </a>
            </div>
            <h3 id="case-study-title">{selectedProject.name}</h3>
            <div className="tag-list">
              {selectedProject.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <dl className="case-study-grid">
              <div>
                <dt>Context</dt>
                <dd>{selectedProject.caseStudy.context}</dd>
              </div>
              <div>
                <dt>Problem</dt>
                <dd>{selectedProject.caseStudy.problem}</dd>
              </div>
              <div>
                <dt>Constraints</dt>
                <dd>{selectedProject.caseStudy.constraints}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{selectedProject.caseStudy.role}</dd>
              </div>
              <div>
                <dt>Process</dt>
                <dd>{selectedProject.caseStudy.process}</dd>
              </div>
              <div>
                <dt>Key decisions</dt>
                <dd>{selectedProject.caseStudy.keyDecisions}</dd>
              </div>
              <div>
                <dt>Architecture / interface</dt>
                <dd>{selectedProject.caseStudy.architecture}</dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>{selectedProject.caseStudy.outcome}</dd>
              </div>
              <div>
                <dt>Lessons learned</dt>
                <dd>{selectedProject.caseStudy.lessons}</dd>
              </div>
              <div>
                <dt>Current status</dt>
                <dd>{selectedProject.caseStudy.currentStatus}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section-shell thinking-section" id="thinking" aria-labelledby="thinking-title">
        <div className="section-lead">
          <p className="section-kicker">How I think</p>
          <h2 id="thinking-title">Practical systems first. Polish after the workflow is true.</h2>
        </div>
        <div className="field-note-grid">
          {fieldNotes.map((note, index) => (
            <article className="field-note" key={note}>
              <span>Note {String(index + 1).padStart(2, "0")}</span>
              <p>{note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell experience-section" id="experience" aria-labelledby="experience-title">
        <div>
          <p className="section-kicker">What I have done</p>
          <h2 id="experience-title">Built across classrooms, server rooms, client sites, and business operations.</h2>
        </div>
        <blockquote>
          <p>&quot;This is the person that will deliver results, not excuses.&quot;</p>
          <cite>Professional reference from Garret&apos;s resume</cite>
        </blockquote>
      </section>

      <section className="section-shell capability-section" id="capabilities" aria-labelledby="capabilities-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">What I know</p>
            <h2 id="capabilities-title">Capability matrix</h2>
          </div>
          <p>
            A more scannable version of the resume: domains, credentials, and applied
            strengths grouped by how they show up in real projects.
          </p>
        </div>
        <div className="capability-grid">
          {capabilityGroups.map((group) => (
            <details className="capability-card" key={group.domain} open>
              <summary>{group.domain}</summary>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section-shell learning-section" id="learning" aria-labelledby="learning-title">
        <div>
          <p className="section-kicker">What I am learning</p>
          <h2 id="learning-title">The current edge of the lab.</h2>
        </div>
        <ul>
          {learningNow.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell quote-section" id="quote" aria-labelledby="quote-title">
        <div className="quote-copy">
          <p className="section-kicker">Why experience matters</p>
          <h2 id="quote-title">Experience teaches what theory cannot.</h2>
          <p>
            This Mark Twain line fits the way I like to build: test the idea, feel the
            friction, learn what the spreadsheet could not tell you, then make the next
            version better.
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

      <section className="section-shell contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-heading">
          <p className="section-kicker">How to contact me</p>
          <h2 id="contact-title">Garret K. Ritchie</h2>
          <p>
            Pick the right lane for the conversation. Each contact method has a direct
            link and a copy action for quick sharing.
          </p>
        </div>

        <div className="contact-grid">
          {contactOptions.map((option) => (
            <article className="contact-card" key={option.label}>
              <span>{option.label}</span>
              <p>{option.description}</p>
              {option.lines.map((line) => (
                <strong key={line}>{line}</strong>
              ))}
              <div className="contact-actions">
                {option.actions.map((action) => (
                  <div className="contact-action-row" key={action.value}>
                    <a href={action.href}>{action.label}</a>
                    <button type="button" onClick={() => copyValue(action.value)}>
                      {copiedValue === action.value ? "Copied" : "Copy"}
                    </button>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="linkedin-panel">
          <h3>Professional networking</h3>
          <p>Connect with me professionally and see more of my background.</p>
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="garretritchie"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://bs.linkedin.com/in/garretritchie?trk=profile-badge"
            >
              View Garret Ritchie on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="system-footer">
        <div>
          <span>Garret Ritchie</span>
          <a href="https://www.garretritchie.com">www.garretritchie.com</a>
        </div>
        <div>
          <span>Nassau time {localTime || "--:--"}</span>
          <span>Version 11 candidate</span>
          <span>Vinext / React / Sites</span>
          <a href="#top">Return to top</a>
        </div>
      </footer>
    </main>
  );
}
