export default function SectionHeading({
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

      <p className="mt-4 text-base leading-7 text-white/65">{description}</p>
    </div>
  );
}
