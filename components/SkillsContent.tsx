import SectionHeading from "./SectionHeading";
import { Reveal } from "@/components/InteractiveBackground";
import { cardClass } from "./ui";

const skills = [
  {
    title: "Languages",
    items: ["Java", "JavaScript (ES6+)", "Dart", "Python", "SQL", "C++"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "Middleware",
      "Transaction design",
    ],
  },
  {
    title: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Schema design",
      "Query optimization",
      "Audit trails",
    ],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Firebase Auth", "FCM", "Firestore", "Cross-platform delivery"],
  },
  {
    title: "Tools & practices",
    items: ["Git", "Postman", "Chrome DevTools", "Agile", "API docs", "ADB"],
  },
];

export default function SkillsContent() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="A stack built for APIs, mobile, and delivery."
          description="This is the toolkit I would actually highlight in an interview or on a recruiter-facing portfolio."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title} className={cardClass}>
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>

            <div className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/65">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
