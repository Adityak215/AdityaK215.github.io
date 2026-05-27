import SectionHeading from "./SectionHeading";
import { Reveal } from "@/components/InteractiveBackground";
import { cardClass } from "./ui";

const strengths = [
  {
    title: "Backend-first engineering",
    text: "Clean REST APIs, auth flows, schema design, transactions, and systems that stay maintainable after launch.",
  },
  {
    title: "Flutter + product thinking",
    text: "Cross-platform UI, Firebase integration, push notifications, and practical mobile delivery with real users in mind.",
  },
  {
    title: "Execution under pressure",
    text: "Experience shipping in teams, handling event-driven load, and keeping delivery moving with code reviews and sprint discipline.",
  },
];

export default function AboutContent() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="A little more signal, less fluff."
          description="The short version: backend systems are the part I naturally enjoy most, and Flutter is where I like to make the output feel finished and presentable."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-4xl border border-white/10 bg-white/4 p-6 lg:col-span-2">
          <p className="text-base leading-8 text-white/70">
            I am a recent Computer Science graduate and my strongest work has come from
            building things that actually need to hold up in production:
            event systems, APIs with authentication, transaction-safe
            database operations, and mobile apps used by real people. I like
            engineering that is practical, measurable, and easy to explain.
          </p>
          <p className="mt-5 text-base leading-8 text-white/70">
            My recent work has touched Flutter, Node.js, Express, PostgreSQL,
            MongoDB, Firebase, and Git-based team workflows. I also care a
            lot about the way a product feels, which is why I wanted this
            portfolio to stay visually clean while still feeling a bit alive.
          </p>
        </div>

        <div className="space-y-4">
          {strengths.map((item) => (
            <div key={item.title} className={cardClass}>
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
