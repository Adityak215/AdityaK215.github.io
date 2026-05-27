import SectionHeading from "./SectionHeading";
import { Reveal } from "@/components/InteractiveBackground";
import { cardClass } from "./ui";

const projects = [
  {
    name: "Slacky API",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    period: "Nov 2024 — Jan 2026",
    summary: "A backend system for workspaces, projects, and tickets with strong relational design and auditability.",
    bullets: [
      "Designed an 8-table normalized schema following 3NF.",
      "Built JWT auth with refresh token rotation for 12+ endpoints.",
      "Used PostgreSQL transactions for multi-table consistency.",
      "Tracked 100% of ticket status changes with immutable history logs.",
    ],
  },
  {
    name: "Omnia",
    stack: ["Flutter", "Node.js", "Express", "MongoDB"],
    period: "Jun 2024 — Aug 2024",
    summary: "An event registration and payment platform built for ACM-JUIT with role-based access control.",
    bullets: [
      "Developed 20+ REST endpoints for registration, users, and payments.",
      "Structured 6 MongoDB collections for read-heavy event browsing.",
      "Added middleware for validation, auth, and error handling.",
      "Deployed to Render with 99% uptime and 50+ concurrent users during windows.",
    ],
  },
];

export default function ProjectsContent() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="The work I would put front and center."
          description="These projects carry the strongest story: backend structure, real users, and deployment discipline."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className={cardClass}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-1 text-sm text-white/50">{project.period}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/65">{item}</span>
                ))}
              </div>
            </div>

            <p className="mt-5 text-base leading-8 text-white/68">{project.summary}</p>

            <ul className="mt-5 space-y-3">
              {project.bullets.map((bullet) => (
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
