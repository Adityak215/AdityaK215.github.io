"use client";

import Image from "next/image";

import {
  FloatingNavbar,
  MagneticButton,
  Reveal,
  ParallaxSection,
} from "@/components/InteractiveBackground";

const stats = [
  { value: "200+", label: "active users supported" },
  { value: "500+", label: "API requests at peak events" },
  { value: "10", label: "developers led across projects" },
  { value: "99%", label: "uptime on deployed apps" },
];

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
    items: [
      "Flutter",
      "Firebase Auth",
      "FCM",
      "Firestore",
      "Cross-platform delivery",
    ],
  },
  {
    title: "Tools & practices",
    items: [
      "Git",
      "Postman",
      "Chrome DevTools",
      "Agile",
      "API docs",
      "ADB",
    ],
  },
];

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

const projects = [
  {
    name: "Slacky API",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    period: "Nov 2024 — Jan 2026",
    summary:
      "A backend system for workspaces, projects, and tickets with strong relational design and auditability.",
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
    summary:
      "An event registration and payment platform built for ACM-JUIT with role-based access control.",
    bullets: [
      "Developed 20+ REST endpoints for registration, users, and payments.",
      "Structured 6 MongoDB collections for read-heavy event browsing.",
      "Added middleware for validation, auth, and error handling.",
      "Deployed to Render with 99% uptime and 50+ concurrent users during windows.",
    ],
  },
];

const achievements = [
  "NCC C certificate (Alpha grade) — Under Officer",
  "Led a squad of 30+ cadets in field training and drill exercises",
  "Major contributor to ACM app and backend development (50+ commits)",
  "2nd Place, Expanse 2.0 Hackathon 2023",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-7 text-white/65">
        {description}
      </p>
    </div>
  );
}

const cardClass =
  "rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]";

export default function Page() {
  return (
    <main className="relative overflow-hidden animate-in fade-in duration-700">

      <FloatingNavbar />

      {/* =========================================================
          HEADER
      ========================================================= */}

      {/* <header className="sticky top-0 z-30 border-b border-white/5 bg-[#0b0f19]/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

          <a
            href="#home"
            className="group inline-flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition group-hover:border-white/20 group-hover:bg-white/10">
              AK
            </span>

            <span>
              <span className="block text-sm font-semibold text-white">
                Aditya Kumar
              </span>

              <span className="block text-xs text-white/45">
                Software Development Engineer
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {["About", "Skills", "Experience", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-white/60 transition hover:text-white hover:scale-105"
                >
                  {item}
                </a>
              ),
            )}
          </nav>
        </div>
      </header> */}

      {/* =========================================================
          HERO
      ========================================================= */}

      <ParallaxSection>
        <section
          id="home"
          className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28"
        >
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

            <div>

              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.2em] text-white/70 uppercase">
                Backend • Mobile • Product
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Building reliable systems that feel fast, sharp, and human.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                I am Aditya Kumar, a software developer focused on backend
                engineering, Flutter apps, and product-ready experiences.
                My work centers on clean APIs, solid data design, and
                interfaces that feel polished enough to ship.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <MagneticButton
                  href="#projects"
                  className="
                    bg-white
                    text-black
                    hover:bg-white/90
                  "
                >
                  View work
                </MagneticButton>

                <MagneticButton
                  href="#contact"
                  className="
                    border
                    border-white/10
                    bg-white/5
                    text-white
                    hover:border-white/20
                    hover:bg-white/10
                  "
                >
                  Contact me
                </MagneticButton>

              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Node.js",
                  "Express",
                  "Flutter",
                  "PostgreSQL",
                  "MongoDB",
                  "JWT",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* PROFILE CARD */}

            <aside className={cardClass}>
              <div className="flex flex-col items-center text-center">

                <div className="relative h-44 w-44 overflow-hidden rounded-full border border-white/10 shadow-2xl shadow-black/30">

                  <Image
                    src="/aditya.jpeg"
                    alt="Aditya Kumar"
                    fill
                    priority
                    className="object-cover"
                  />

                </div>

                <p className="mt-5 text-sm font-medium tracking-[0.3em] text-white/45 uppercase">
                  Software engineer
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Backend depth, Mobile polish
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">
                  CSE Graduate shipping production work in APIs,
                  databases, and Flutter applications.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">

                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="text-2xl font-semibold text-white">
                      {stat.value}
                    </div>

                    <div className="mt-1 text-xs leading-5 text-white/50">
                      {stat.label}
                    </div>
                  </div>
                ))}

              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                  Current focus
                </p>

                <p className="mt-2 text-sm leading-7 text-white/65">
                  Production-ready APIs, maintainable database design,
                  and mobile interfaces that behave well under
                  real-world usage.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </ParallaxSection>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <ParallaxSection>
        <section
          id="about"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >

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
                <div
                  key={item.title}
                  className={cardClass}
                >
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/60">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* =========================================================
          SKILLS
      ========================================================= */}

      <ParallaxSection>
        <section
          id="skills"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >

          <Reveal>
            <SectionHeading
              eyebrow="Skills"
              title="A stack built for APIs, mobile, and delivery."
              description="This is the toolkit I would actually highlight in an interview or on a recruiter-facing portfolio."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {skills.map((group) => (
              <div
                key={group.title}
                className={cardClass}
              >
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-3">

                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/65"
                    >
                      {item}
                    </span>
                  ))}

                </div>
              </div>
            ))}

          </div>
        </section>
      </ParallaxSection>

      {/* =========================================================
          EXPERIENCE
      ========================================================= */}

      <ParallaxSection>
        <section
          id="experience"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >

          <Reveal>
            <SectionHeading
              eyebrow="Experience"
              title="Work that shows scope, not just titles."
              description="These are the most important engineering chapters from your CV, turned into portfolio-ready cards."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            {experiences.map((job) => (
              <article
                key={job.role + job.company}
                className={cardClass}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {job.role}
                    </h3>

                    <p className="mt-1 text-sm text-white/60">
                      {job.company}
                    </p>
                  </div>

                  <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium tracking-[0.2em] text-white/55 uppercase">
                    {job.period}
                  </div>
                </div>

                <p className="mt-4 text-sm font-medium text-white/45 uppercase tracking-[0.2em]">
                  {job.location}
                </p>

                <ul className="mt-5 space-y-3">

                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-7 text-white/68"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />

                      <span>{bullet}</span>
                    </li>
                  ))}

                </ul>
              </article>
            ))}

          </div>
        </section>
      </ParallaxSection>

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <ParallaxSection>
        <section
          id="projects"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >

          <Reveal>
            <SectionHeading
              eyebrow="Projects"
              title="The work I would put front and center."
              description="These projects carry the strongest story: backend structure, real users, and deployment discipline."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            {projects.map((project) => (
              <article
                key={project.name}
                className={cardClass}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">

                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {project.name}
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      {project.period}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">

                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/65"
                      >
                        {item}
                      </span>
                    ))}

                  </div>
                </div>

                <p className="mt-5 text-base leading-8 text-white/68">
                  {project.summary}
                </p>

                <ul className="mt-5 space-y-3">

                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-7 text-white/68"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />

                      <span>{bullet}</span>
                    </li>
                  ))}

                </ul>
              </article>
            ))}

          </div>
        </section>
      </ParallaxSection>

      {/* =========================================================
          EDUCATION
      ========================================================= */}

      <ParallaxSection>
        <section
          id="education"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >

          <Reveal>
            <SectionHeading
              eyebrow="Education & highlights"
              title="The background that keeps everything grounded."
              description="Academic and leadership experience without clutter."
            />
          </Reveal>


        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-4xl border border-white/10 bg-white/4 p-6 lg:col-span-2">
            <h3 className="text-xl font-semibold text-white">
              Jaypee University of Information Technology, Solan
            </h3>
            <p className="mt-1 text-sm text-white/55">
              B.Tech in Computer Science and Engineering • Aug 2022 — July 2026
            </p>
            <p className="mt-4 text-sm leading-7 text-white/68">
              CGPA: 8.12 (current). Coursework includes Operating Systems,
              Database Management Systems, Object-Oriented Programming, and
              Cloud Computing.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                  Schooling
                </p>
                <p className="mt-2 text-sm leading-7 text-white/68">
                  DAV Centenary Public School, Haridwar
                </p>
                <p className="text-sm leading-7 text-white/68">
                  XII: 85% • X: 90%
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                  Focus
                </p>
                <p className="mt-2 text-sm leading-7 text-white/68">
                  Data structures, APIs, database design, and cross-platform app
                  delivery.
                </p>
              </div>
            </div>
          </div>

            <div className={cardClass}>

              <h3 className="text-xl font-semibold text-white">
                Achievements
              </h3>

              <ul className="mt-5 space-y-4">

                {achievements.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-white/68"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />

                    <span>{item}</span>
                  </li>
                ))}

              </ul>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <ParallaxSection>
        <section
          id="contact"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >

          <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 shadow-2xl shadow-black/20 sm:p-10">

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
                  Contact
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Open to backend, full-stack, and mobile roles.
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-8 text-white/68">
                  The best way to reach me is by email or LinkedIn. I am usually
                happiest in roles where I can work on APIs, product logic, and
                delivery with a team that cares about details.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <MagneticButton
                    href="mailto:adityakumar.9c@gmail.com"
                    className="bg-white text-black hover:bg-white/90"
                  >
                    Email me
                  </MagneticButton>

                  <MagneticButton
                    href="https://linkedin.com/in/aditya-kumar-a215k"
                    className="border border-white/10 bg-white/5 text-white"
                  >
                    LinkedIn
                  </MagneticButton>

                  <MagneticButton
                    href="https://github.com/AdityaK215"
                    className="border border-white/10 bg-white/5 text-white"
                  >
                    GitHub
                  </MagneticButton>

                </div>
              </div>

              <div className="grid gap-4 rounded-4xl border border-white/10 bg-black/20 p-6">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                    Email
                  </p>

                  <p className="mt-2 text-base text-white/80">
                    adityakumar.9c@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                    Phone
                  </p>

                  <p className="mt-2 text-base text-white/80">
                    +91 7895085968
                  </p>
                </div>

              </div>
            </div>
          </div>

          <footer className="mt-8 pb-6 text-center text-sm text-white/40">
            Designed & developed by Aditya Kumar.
          </footer>

        </section>
      </ParallaxSection>
    </main>
  );
}