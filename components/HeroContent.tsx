"use client";

import Image from "next/image";
import { MagneticButton } from "@/components/InteractiveBackground";
import { cardClass } from "./ui";

const stats = [
  { value: "200+", label: "active users supported" },
  { value: "500+", label: "API requests at peak events" },
  { value: "10", label: "developers led across projects" },
  { value: "99%", label: "uptime on deployed apps" },
];

export default function HeroContent() {
  return (
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
            Aditya Kumar
          </h1>
          <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-5xl">
            Software Development Engineer
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
            I am a software developer focused on backend
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

                <MagneticButton
                    href="/AdityaKumar_CV.pdf"
                    className="
                      border
                      border-white/10
                      bg-black/20
                      text-white
                      hover:border-white/20
                      hover:bg-white/10
                    "
                  >
                    Download Resume
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

        <aside className={cardClass}>
          <div className="flex flex-col items-center text-center">
            <div className="relative h-44 w-44 overflow-hidden rounded-full border border-white/10 shadow-2xl shadow-black/30">
              <Image src="/aditya.jpeg" alt="Aditya Kumar" fill priority className="object-cover" />
            </div>

            <p className="mt-5 text-sm font-medium tracking-[0.3em] text-white/45 uppercase">
              "Out to build something real."
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-white">Backend depth, Mobile polish</h2>

            <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">
              CSE Graduate shipping production work in APIs,
              databases, and Flutter applications.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-xs leading-5 text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Current focus</p>

            <p className="mt-2 text-sm leading-7 text-white/65">
              Production-ready APIs, maintainable database design,
              and mobile interfaces that behave well under
              real-world usage.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
