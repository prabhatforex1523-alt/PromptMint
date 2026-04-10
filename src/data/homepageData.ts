import type { ComponentType, SVGProps } from 'react'
import {
  BookOpenIcon,
  BriefcaseIcon,
  MegaphoneIcon,
  PlaySquareIcon,
} from '../components/icons'

type IconType = ComponentType<SVGProps<SVGSVGElement>>

export type NavLink = {
  href: string
  label: string
}

export type Category = {
  description: string
  eyebrow: string
  icon: IconType
  theme: 'business' | 'marketing' | 'youtube'
  title: string
}

export type HeroStat = {
  label: string
  value: string
}

export type AudienceProfile = {
  description: string
  icon: IconType
  title: string
  tone: 'amber' | 'emerald' | 'rose' | 'sky'
}

export type StoreFeature = {
  description: string
  step: string
  title: string
  tone: 'amber' | 'emerald' | 'rose' | 'sky'
}

export type BundleOffer = {
  badge: string
  benefits: string[]
  buyLink: string
  bundlePrice: string
  includedProducts: string[]
  originalPrice: string
  saveText: string
  summaryItems: string[]
  subtitle: string
  title: string
}

export type TrustPoint = {
  description: string
  tone: 'amber' | 'emerald' | 'rose' | 'sky' | 'violet'
  title: string
}

export type FaqItem = {
  answer: string
  question: string
}

export type FooterLink = {
  href?: string
  label: string
}

export type FooterSection = {
  links: FooterLink[]
  title: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Bundle', href: 'https://prabhatforex.gumroad.com/l/wkismb' },
  { label: 'FAQ', href: '#faq' },
]

export const heroStats: HeroStat[] = [
  {
    label: 'Across all paid packs',
    value: '100 prompts',
  },
  {
    label: 'Store model',
    value: 'One-time',
  },
  {
    label: 'Delivery',
    value: 'Instant access',
  },
]

export const heroTrustLine =
  'Built for creators and builders who use AI every day'

export const audiences: AudienceProfile[] = [
  {
    title: 'YouTube creators',
    description: 'For better hooks, titles, scripts, and content planning.',
    icon: PlaySquareIcon,
    tone: 'rose',
  },
  {
    title: 'Founders',
    description: 'For sharper planning, communication, and daily execution.',
    icon: BriefcaseIcon,
    tone: 'sky',
  },
  {
    title: 'Marketers',
    description: 'For launch copy, campaigns, and conversion-focused assets.',
    icon: MegaphoneIcon,
    tone: 'emerald',
  },
  {
    title: 'Students',
    description: 'For faster research, writing structure, and study support.',
    icon: BookOpenIcon,
    tone: 'amber',
  },
]

export const storeFeatures: StoreFeature[] = [
  {
    step: '01',
    title: 'Choose your workflow',
    description:
      'Pick the pack that matches the work you want to improve right now: YouTube growth, business productivity, or launch marketing.',
    tone: 'rose',
  },
  {
    step: '02',
    title: 'Download instantly',
    description:
      'Checkout once and get a clean downloadable prompt pack you can keep and reuse without any recurring subscription.',
    tone: 'emerald',
  },
  {
    step: '03',
    title: 'Run prompts in your AI tool',
    description:
      'Paste the prompts into ChatGPT or Gemini, swap in your context, and use them immediately in real workflows.',
    tone: 'sky',
  },
]

export const categories: Category[] = [
  {
    title: 'YouTube Growth',
    eyebrow: 'Creator pack',
    description: 'Prompt packs for titles, hooks, scripts, and content planning that help creators grow faster.',
    icon: PlaySquareIcon,
    theme: 'youtube',
  },
  {
    title: 'Business Productivity',
    eyebrow: 'Operator pack',
    description: 'Prompt packs for email writing, planning, decision-making, and clearer day-to-day execution.',
    icon: BriefcaseIcon,
    theme: 'business',
  },
  {
    title: 'Marketing Launch',
    eyebrow: 'Growth pack',
    description: 'Prompt packs for ad copy, launch campaigns, messaging, and stronger conversion assets.',
    icon: MegaphoneIcon,
    theme: 'marketing',
  },
]

export const bundleOffer: BundleOffer = {
  title: 'Ultimate AI Prompt Bundle',
  subtitle:
    'Get all 3 premium packs in one discounted bundle and cover content, productivity, and launch execution in a single purchase.',
  includedProducts: [
    'YouTube Growth Pack',
    'Business Productivity Pack',
    'Marketing Launch Pack',
  ],
  originalPrice: '$72',
  bundlePrice: '$39',
  saveText: 'Save $33',
  summaryItems: ['100 prompts total', '3 structured downloads', 'Built for repeat use'],
  badge: 'Best Value',
  benefits: [
    'One-time payment',
    'Instant download',
    'Works with ChatGPT & Gemini',
    'Beginner-friendly',
  ],
  buyLink: 'https://prabhatforex.gumroad.com/l/wkismb',
}

export const trustPoints: TrustPoint[] = [
  {
    title: 'One-time payment',
    description: 'Pay once and keep your pack.',
    tone: 'emerald',
  },
  {
    title: 'Instant download',
    description: 'Get access right after checkout.',
    tone: 'sky',
  },
  {
    title: 'Works with ChatGPT & Gemini',
    description: 'Built for the AI tools you already use.',
    tone: 'violet',
  },
  {
    title: 'Beginner-friendly',
    description: 'Clear structure, even if you are just starting.',
    tone: 'amber',
  },
  {
    title: 'Practical and ready to use',
    description: 'Made for real content, business, and launch work.',
    tone: 'rose',
  },
]

export const faqs: FaqItem[] = [
  {
    question: 'How do I use these prompt packs?',
    answer:
      'Open a pack, choose a prompt, replace the placeholders, and run it in ChatGPT or Gemini.',
  },
  {
    question: 'Do I need experience to use them?',
    answer:
      'No. They are beginner-friendly, but still useful for experienced creators, operators, and marketers.',
  },
  {
    question: 'Which AI tools do these work with?',
    answer:
      'They are built for ChatGPT and Gemini, and they also adapt well to similar AI tools.',
  },
  {
    question: 'Is this a one-time payment?',
    answer:
      'Yes. These are one-time digital purchases, not subscriptions.',
  },
  {
    question: 'How do I get access after purchase?',
    answer:
      'You get instant access to the download right after checkout.',
  },
  {
    question: 'Can I use these prompts for my business or content workflow?',
    answer:
      'Yes. They are built for real workflows across content, operations, planning, and launches.',
  },
]

export const footerSections: FooterSection[] = [
  {
    title: 'Products',
    links: [
      { label: 'YouTube Growth Pack', href: '#youtube-script-builder' },
      { label: 'Business Productivity Pack', href: '#business-strategy-planner' },
      { label: 'Marketing Launch Pack', href: '#marketing-launch-campaign' },
    ],
  },
  {
    title: 'Bundle',
    links: [
      {
        label: 'Ultimate AI Prompt Bundle',
        href: 'https://prabhatforex.gumroad.com/l/wkismb',
      },
    ],
  },
  {
    title: 'FAQ',
    links: [{ label: 'Common questions', href: '#faq' }],
  },
  {
    title: 'Contact',
    links: [{ label: 'support@promptmint.co', href: 'mailto:support@promptmint.co' }],
  },
  {
    title: 'Legal',
    links: [{ label: 'Terms' }, { label: 'Privacy' }],
  },
]
