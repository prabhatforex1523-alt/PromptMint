type FooterLink = {
  href?: string
  label: string
}

type FooterSection = {
  links: FooterLink[]
  title: string
}

type FooterProps = {
  sections: FooterSection[]
}

function Footer({ sections }: FooterProps) {
  return (
    <footer id="footer" className="border-t border-slate-200 bg-white/90">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.9fr]">
          <div>
            <p className="text-xl font-semibold tracking-tight text-slate-950">PromptMint</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
              Premium one-time AI prompt packs for YouTube, business, and marketing
              workflows.
            </p>

            <div className="mt-5 rounded-[1.5rem] border border-green-100 bg-green-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
                Need help before buying?
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Questions about the packs, bundle, or workflow fit can be sent to
                support@promptmint.co.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {sections.map((section) => (
              <div key={section.title}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {section.title}
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                  {section.links.map((link) =>
                    link.href ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="transition hover:text-green-600"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span key={link.label}>{link.label}</span>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 PromptMint. All rights reserved.</p>
          <p>Digital prompt packs. One-time purchase. Instant download.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
