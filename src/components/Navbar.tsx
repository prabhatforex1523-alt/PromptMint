import ButtonLink from './ButtonLink'

type NavLink = {
  href: string
  label: string
}

type NavbarProps = {
  bundleLink: string
  links: NavLink[]
}

function Navbar({ bundleLink, links }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex flex-col">
          <span className="text-xl font-semibold tracking-tight text-slate-950">
            PromptMint
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            One-time prompt packs
          </span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="transition hover:text-green-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ButtonLink
          href={bundleLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get the Bundle
        </ButtonLink>
      </div>
    </header>
  )
}

export default Navbar
