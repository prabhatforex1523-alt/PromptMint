type FaqItemProps = {
  answer: string
  question: string
}

function FaqItem({ answer, question }: FaqItemProps) {
  return (
    <details className="group rounded-[1.5rem] border border-slate-200 bg-linear-to-br from-slate-50 via-white to-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-green-200 hover:shadow-[var(--shadow-card)]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-950">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600">FAQ</p>
          <span className="mt-2 block">{question}</span>
        </div>
        <span className="rounded-full bg-green-50 px-3 py-1 text-xl text-green-600 transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-4 pr-8 text-sm leading-7 text-slate-600">{answer}</p>
    </details>
  )
}

export default FaqItem
