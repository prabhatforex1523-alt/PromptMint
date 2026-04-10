import type { ReactNode } from 'react'

type ButtonLinkProps = {
  children: ReactNode
  className?: string
  href: string
  rel?: string
  target?: '_blank' | '_self'
  variant?: 'primary' | 'secondary'
}

function ButtonLink({
  children,
  className = '',
  href,
  rel,
  target = '_self',
  variant = 'primary',
}: ButtonLinkProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200'
  const variantClasses =
    variant === 'primary'
      ? 'bg-green-500 text-white shadow-[var(--shadow-button)] hover:-translate-y-0.5 hover:bg-green-600'
      : 'border border-slate-300 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-green-200 hover:text-green-700'

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`.trim()}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  )
}

export default ButtonLink
