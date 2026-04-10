import type { SVGProps } from 'react'

export function PlaySquareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="3" />
      <path d="M10 9.2v5.6l4.8-2.8L10 9.2Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M8 6.5V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" />
      <rect x="3.5" y="6.5" width="17" height="12" rx="3" />
      <path d="M3.5 12h17" />
    </svg>
  )
}

export function MegaphoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 12h3l8-4v8l-8-4H4Z" />
      <path d="M7 12v5a1.5 1.5 0 0 0 3 0v-3" />
      <path d="M17.5 9.5a3.5 3.5 0 0 1 0 5" />
    </svg>
  )
}

export function BookOpenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H12v16H7.5A2.5 2.5 0 0 0 5 21V5.5Z" />
      <path d="M19 5.5A2.5 2.5 0 0 0 16.5 3H12v16h4.5A2.5 2.5 0 0 1 19 21V5.5Z" />
    </svg>
  )
}

export function PenToolIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 3.5 7 8.5l5 5 5-5-5-5Z" />
      <path d="m9.5 11 1.5 7h2l1.5-7" />
      <path d="M7 20h10" />
    </svg>
  )
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="m5 12 4 4 10-10" />
    </svg>
  )
}
