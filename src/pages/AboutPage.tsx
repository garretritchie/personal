import { LinkedText, SiteFooter, SiteHeader } from "../components";
import { fieldNotes, profileHighlights } from "../site-content";

const dayOneCards = [
  {
    title: "Learn from yesterday",
    body: "The past has already happened. It can teach, but it cannot be edited.",
  },
  {
    title: "Prepare for tomorrow",
    body: "The future can guide decisions, but it has not arrived yet.",
  },
  {
    title: "Live today deliberately",
    body: "Today is where attention, choice, action, experience, and change are actually available.",
  },
];

const attentionNotes = [
  "Life becomes more interesting when you stop moving through it automatically.",
  "Adventure is not always somewhere else. Sometimes it begins with an unfamiliar question, a different route, or a closer look at an ordinary moment.",
  "Life is full of details most people move too quickly to notice. I try not to.",
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero" aria-labelledby="about-title">
        <p className="section-kicker">About</p>
        <h1 id="about-title">Notice. Question. Build. Live.</h1>
        <p>
          Garret Ritchie is a technology entrepreneur, systems builder, consultant,
          and educator with more than two decades of experience helping organisations
          solve practical business problems through technology.
        </p>
      </section>

      <section className="section-shell intro-section" aria-labelledby="identity-title">
        <div className="section-lead">
          <p className="section-kicker">Identity</p>
          <h2 id="identity-title">A systems thinker with a practical bias.</h2>
        </div>
        <div className="intro-copy">
          <p>
            My work spans managed IT services, cybersecurity, infrastructure,
            artificial intelligence, software development, product design, automation,
            business operations, professional education, and user experience.
          </p>
          <p>
            I do not see those as separate disciplines. I am interested in how systems,
            people, technology, and ideas interact, and how they can be redesigned to
            work better together.
          </p>
          <div className="profile-highlights">
            {profileHighlights.map((item) => (
              <article className="profile-card" key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p><LinkedText text={item.detail} /></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell thinking-section" aria-labelledby="curiosity-title">
        <div className="section-lead">
          <p className="section-kicker">Curiosity</p>
          <h2 id="curiosity-title">I am rarely interested only in what something does.</h2>
        </div>
        <div className="field-note-grid">
          {fieldNotes.map((note, index) => (
            <article className="field-note" key={note}>
              <span>Question {String(index + 1).padStart(2, "0")}</span>
              <p>{note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell day-one-section" aria-labelledby="day-one-title">
        <div>
          <p className="section-kicker">Day 1 of 1</p>
          <h2 id="day-one-title">The only day I can actually influence is this one.</h2>
        </div>
        <div className="principle-grid">
          {dayOneCards.map((card) => (
            <article className="principle-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell human-section" aria-labelledby="human-title">
        <div>
          <p className="section-kicker">Human-centred systems</p>
          <h2 id="human-title">Before someone is a user record, they are a person.</h2>
        </div>
        <p>
          Technology and processes become less effective when they reduce people to
          tickets, metrics, roles, or transactions. Good systems should create clarity
          and accountability without losing empathy, dignity, or context.
        </p>
      </section>

      <section className="section-shell learning-section" aria-labelledby="attention-title">
        <div>
          <p className="section-kicker">Pay attention</p>
          <h2 id="attention-title">Curiosity turns ordinary life into exploration.</h2>
        </div>
        <ul>
          {attentionNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
      <SiteFooter />
    </main>
  );
}
