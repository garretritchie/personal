/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  contactOptions,
  navItems,
} from "./site-content";

const textLinks = [
  { text: "Redstone Technology Solutions", href: "https://www.redstoneTS.com" },
  { text: "Redstone Technology", href: "https://www.redstoneTS.com" },
  { text: "Synergy Bahamas", href: "https://www.synergybahamas.com" },
  { text: "teaching", href: "https://www.synergybahamas.com" },
  { text: "Teaching", href: "https://www.synergybahamas.com" },
];

export function LinkedText({ text }: { text: string }) {
  const matches = textLinks
    .flatMap((link) => {
      const index = text.indexOf(link.text);
      return index >= 0 ? [{ ...link, index }] : [];
    })
    .sort((a, b) => a.index - b.index);

  if (!matches.length) {
    return <>{text}</>;
  }

  const parts = [];
  let cursor = 0;

  for (const match of matches) {
    if (match.index < cursor) {
      continue;
    }

    if (match.index > cursor) {
      parts.push(text.slice(cursor, match.index));
    }

    parts.push(
      <a
        className="inline-text-link"
        href={match.href}
        key={`${match.text}-${match.index}`}
        rel="noreferrer"
        target="_blank"
      >
        {match.text}
      </a>,
    );
    cursor = match.index + match.text.length;
  }

  if (cursor < text.length) {
    parts.push(text.slice(cursor));
  }

  return <>{parts}</>;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".section-shell, .page-hero, .project-card, .profile-card, .capability-card, .field-note, .principle-card, .contact-card, .case-study-panel",
      ),
    );
    revealItems.forEach((item) => item.classList.add("reveal"));
    document.documentElement.classList.add("motion-ready");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    function handleMenuKeys(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const menu = document.getElementById("mobile-menu");
      const focusable = [
        menuButtonRef.current,
        ...(menu
          ? Array.from(menu.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"))
          : []),
      ].filter(Boolean) as HTMLElement[];

      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    if (menuOpen) {
      window.addEventListener("keydown", handleMenuKeys);
    }

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleMenuKeys);
    };
  }, [menuOpen]);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-nav" aria-label="Site navigation">
      <Link className="brand" href="/" aria-label="Garret Ritchie home">
        <img src="/gr-logo.png" alt="" />
        <span>Garret Ritchie</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta" href="/contact">Contact</Link>
      <button
        ref={menuButtonRef}
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? "Close" : "Menu"}</span>
        <i aria-hidden="true" />
      </button>
      <nav
        id="mobile-menu"
        className="mobile-nav-panel"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        data-open={menuOpen}
      >
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="system-footer" id="footer-contact">
      <div className="footer-intro">
        <p className="section-kicker">Get in touch</p>
        <h2>Let&apos;s build something useful.</h2>
        <p>
          <LinkedText text="Reach me for Redstone Technology Solutions, collaboration, project feedback, professional networking, teaching, or practical automation ideas." />
        </p>
      </div>
      <div className="footer-contact-grid">
        {contactOptions.map((option) => (
          <section className="footer-contact-card" key={option.label} aria-label={option.label}>
            <span>{option.label}</span>
            <p><LinkedText text={option.description} /></p>
            {option.lines.map((line) => (
              <strong key={line}>
                <LinkedText text={line} />
              </strong>
            ))}
            <div>
              {option.actions.map((action) => (
                <a
                  href={action.href}
                  key={action.value}
                  aria-label={"detail" in action ? `${action.label}, ${action.detail}` : action.label}
                >
                  <span>{action.label}</span>
                  {"detail" in action ? <small>{action.detail}</small> : null}
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="footer-bottom">
        <span>Garret Ritchie</span>
        <a href="https://www.garretritchie.com">www.garretritchie.com</a>
        <Link href="/#top">Back to top</Link>
      </div>
    </footer>
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
          <p><LinkedText text={option.description} /></p>
          {option.lines.map((line) => (
            <strong key={line}>
              <LinkedText text={line} />
            </strong>
          ))}
          <div className="contact-actions">
            {option.actions.map((action) => (
              <div className="contact-action-row" key={action.value}>
                <a
                  href={action.href}
                  aria-label={"detail" in action ? `${action.label}, ${action.detail}` : action.label}
                >
                  {action.label}
                </a>
                {"detail" in action ? <span>{action.detail}</span> : null}
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
