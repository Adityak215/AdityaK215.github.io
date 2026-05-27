import { MagneticButton } from "@/components/InteractiveBackground";

export default function ContactContent() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 shadow-2xl shadow-black/20 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/40">Contact</p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Open to backend, full-stack, and mobile roles.</h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/68">
              The best way to reach me is by email or LinkedIn. I am usually
            happiest in roles where I can work on APIs, product logic, and
            delivery with a team that cares about details.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton href="mailto:adityakumar.9c@gmail.com" className="bg-white text-black hover:bg-white/90">Email me</MagneticButton>
              <MagneticButton href="https://linkedin.com/in/aditya-kumar-a215k" className="border border-white/10 bg-white/5 text-white">LinkedIn</MagneticButton>
              <MagneticButton href="https://github.com/AdityaK215" className="border border-white/10 bg-white/5 text-white">GitHub</MagneticButton>
            </div>
          </div>

          <div className="grid gap-4 rounded-4xl border border-white/10 bg-black/20 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Email</p>
              <p className="mt-2 text-base text-white/80">adityakumar.9c@gmail.com</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Phone</p>
              <p className="mt-2 text-base text-white/80">+91 7895085968</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-8 pb-6 text-center text-sm text-white/40">Designed & developed by Aditya Kumar.</footer>
    </section>
  );
}
