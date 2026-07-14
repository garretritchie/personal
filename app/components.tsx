/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  contactOptions,
  navItems,
  projects,
  workbenchFilters,
  type ProjectLifecycle,
  type Project,
} from "./site-content";

function isExternal(href: string) {
  return href.startsWith("https://");
}

export function SiteHeader() {
  return (
    <header className="site-nav" aria-label="Site navigation">
      <Link className="brand" href="/" aria-label="Garret Ritchie home">
        <img src="/gr-logo.png" alt="" />
        <span>Garret Ritchie</span>
      </Link>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta" href="/contact">Contact</Link>
    </header>
  );
}

export function SiteFooter() {
  const [localTime, setLocalTime] = useState("");

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

  return (
    <footer className="system-footer">
      <div>
        <span>Garret Ritchie</span>
        <a href="https://www.garretritchie.com">www.garretritchie.com</a>
      </div>
      <div>
        <span>Nassau time {localTime || "--:--"}</span>
        <span>Day 1 of 1</span>
        <span>Vinext / React / Sites</span>
        <Link href="/">Return home</Link>
      </div>
    </footer>
  );
}

export function ProjectSummaryCard({ project }: { project: Project }) {
  return (
    <Link
      className="project-card"
      href="/work"
      aria-label={`View ${project.name} in the project workbench`}
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
    </Link>
  );
}

export function ProjectWorkbench() {
  const [activeFilter, setActiveFilter] = useState<ProjectLifecycle>("All");
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(projects[0].slug);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.lifecycle === activeFilter);
  }, [activeFilter]);

  const selectedProject =
    projects.find((project) => project.slug === selectedProjectSlug) ?? projects[0];

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
    <>
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
    </>
  );
}

export function ContactCards() {
  const [copiedValue, setCopiedValue] = useState("");

  async function copyValue(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(value);
      window.setTimeout(() => setCopiedValue(""), 1800);
    } catch {
      setCopiedValue("");
    }
  }

  return (
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
  );
}

export function LinkedinPanel() {
  return (
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
  );
}
