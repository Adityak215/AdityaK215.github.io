import SectionHeading from "./SectionHeading";
import { Reveal } from "@/components/InteractiveBackground";
import { cardClass } from "./ui";

const experiences = [
  {
    role: "Flutter Developer",
    company: "Jiffy by Harricane",
    period: "Feb 2025 — May 2025",
    location: "Android | iOS | Web",
    bullets: [
      "Engineered a cross-platform app serving 200+ active users across Android, iOS, and Web.",
      "Integrated Firebase Auth, Cloud Messaging, and Firestore for real-time updates.",
      "Reduced initial app load time by 40% with lazy loading and widget caching.",
      "Built push notifications for foreground, background, and terminated states.",
      "Expanded platform reach by 20% through Flutter web parity.",
    ],
  },
  {
    role: "Webmaster",
    company: "ACM-JUIT",
    period: "Aug 2024 — July 2025",
    location: "Leadership + backend",
    bullets: [
      "Architected a RESTful backend with Node.js and Express.js handling 500+ API requests at peak events.",
      "Led a 10-person development team across 5 production projects using Agile sprint methodology.",
      "Migrated auth from Firebase to JWT to reduce external dependencies.",
      "Delivered 2 technical workshops on API design and backend architecture.",
      "Improved delivery time by 25% through structured sprint planning and code review.",
    ],
  },
];

export default function ExperienceContent() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Work that shows scope, not just titles."
          description="These are the most important engineering chapters from your CV, turned into portfolio-ready cards."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {experiences.map((job) => (
          <article key={job.role + job.company} className={cardClass}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                <p className="mt-1 text-sm text-white/60">{job.company}</p>
              </div>

              <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium tracking-[0.2em] text-white/55 uppercase">{job.period}</div>
            </div>

            <p className="mt-4 text-sm font-medium text-white/45 uppercase tracking-[0.2em]">{job.location}</p>

            <ul className="mt-5 space-y-3">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-7 text-white/68">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
