type SectionHeadingProps = {
  description: string
  eyebrow: string
  title: string
}

function SectionHeading({
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-600">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
    </div>
  )
}

export default SectionHeading
