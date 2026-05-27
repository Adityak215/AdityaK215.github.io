import SectionHeading from "./SectionHeading";
import { Reveal } from "@/components/InteractiveBackground";
import { cardClass } from "./ui";

const achievements = [
  "NCC C certificate (Alpha grade) — Under Officer",
  "Led a squad of 30+ cadets in field training and drill exercises",
  "Major contributor to ACM app and backend development (50+ commits)",
  "2nd Place, Expanse 2.0 Hackathon 2023",
];

export default function EducationContent() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Education & highlights"
          title="The background that keeps everything grounded."
          description="Academic and leadership experience without clutter."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-4xl border border-white/10 bg-white/4 p-6 lg:col-span-2">
          <h3 className="text-xl font-semibold text-white">Jaypee University of Information Technology, Solan</h3>
          <p className="mt-1 text-sm text-white/55">B.Tech in Computer Science and Engineering • Aug 2022 — July 2026</p>
          <p className="mt-4 text-sm leading-7 text-white/68">
            CGPA: 8.12 (current). Coursework includes Operating Systems,
            Database Management Systems, Object-Oriented Programming, and
            Cloud Computing.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Schooling</p>
              <p className="mt-2 text-sm leading-7 text-white/68">DAV Centenary Public School, Haridwar</p>
              <p className="text-sm leading-7 text-white/68">XII: 85% • X: 90%</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Focus</p>
              <p className="mt-2 text-sm leading-7 text-white/68">Data structures, APIs, database design, and cross-platform app delivery.</p>
            </div>
          </div>
        </div>

        <div className={cardClass}>
          <h3 className="text-xl font-semibold text-white">Achievements</h3>
          <ul className="mt-5 space-y-4">
            {achievements.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-white/68">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
