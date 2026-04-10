export type PromptCategory = 'YouTube' | 'Business' | 'Marketing'

export type Prompt = {
  bestFor?: string
  buyLink: string
  category: PromptCategory
  content: string
  description: string
  highlights?: string[]
  id: string
  price: string
  promptCount?: number
  subtitle?: string
  title: string
}

const paymentLink = 'https://gumroad.com'

export const prompts: Prompt[] = [
  {
    id: 'youtube-hook-generator',
    title: 'YouTube Hook Generator',
    description: 'Create stronger video openings that grab attention in the first few seconds.',
    buyLink: paymentLink,
    category: 'YouTube',
    price: 'Free',
    content:
      'You are a YouTube strategist.\n\nCreate 10 opening hooks for a video about [TOPIC].\n\nRules:\n- Make each hook short and punchy.\n- Use curiosity, surprise, or a strong benefit.\n- Keep the tone natural and creator-friendly.\n- End each hook with a smooth transition into the main video.',
  },
  {
    id: 'youtube-script-builder',
    title: 'YouTube Growth Pack',
    subtitle: 'Titles, hooks, scripts, and growth ideas',
    description: 'Create stronger videos faster with prompts built for better packaging, retention, and consistent growth.',
    bestFor:
      'Creators who want better titles, hooks, Shorts ideas, and long-form video scripts without starting from scratch.',
    highlights: ['Viral titles and hooks', 'Long-form script systems', 'Shorts and growth angles'],
    promptCount: 50,
    buyLink: 'https://prabhatforex.gumroad.com/l/vciej',
    category: 'YouTube',
    price: '$19',
    content:
      'You are an expert YouTube scriptwriter.\n\nWrite a long-form YouTube script about [TOPIC] for [AUDIENCE].\n\nInclude:\n- A compelling intro hook\n- A short overview of what viewers will learn\n- 5 main talking points with transitions\n- Simple examples or stories\n- A closing summary and call to action\n\nKeep the script conversational and easy to read aloud.',
  },
  {
    id: 'business-meeting-summary',
    title: 'Executive Meeting Summary Prompt',
    description: 'Convert messy notes into a concise update with decisions, risks, and next steps.',
    buyLink: paymentLink,
    category: 'Business',
    price: 'Free',
    content:
      'You are an executive assistant.\n\nTurn the following meeting notes into a clean business summary.\n\nFormat the response with:\n- Key decisions\n- Action items with owners\n- Deadlines\n- Risks or blockers\n- Suggested next steps\n\nMake it concise, professional, and easy to scan.',
  },
  {
    id: 'business-strategy-planner',
    title: 'Business Productivity Pack',
    subtitle: 'Emails, planning, productivity, and decisions',
    description: 'Move faster at work with prompts for clearer communication, sharper planning, and better business decisions.',
    bestFor:
      'Founders, operators, and small teams who need clearer emails, planning support, and better day-to-day decision-making.',
    highlights: ['Sharper email writing', 'Planning and execution', 'Decision support prompts'],
    promptCount: 25,
    buyLink: 'https://prabhatforex.gumroad.com/l/ewcak',
    category: 'Business',
    price: '$24',
    content:
      'You are a strategy consultant.\n\nCreate a quarterly planning document for [BUSINESS TYPE] focused on [GOAL].\n\nInclude:\n- Top 3 priorities\n- Success metrics\n- Major risks\n- Key initiatives for each priority\n- A 30-60-90 day execution outline\n\nKeep the plan practical and leadership-ready.',
  },
  {
    id: 'marketing-launch-campaign',
    title: 'Marketing Launch Pack',
    subtitle: 'Ads, launch copy, campaigns, and conversion',
    description: 'Launch products with more confidence using prompts for messaging, paid creative, landing pages, and campaigns.',
    bestFor:
      'Marketers and founders building launch campaigns, conversion messaging, ads, and stronger landing page copy.',
    highlights: ['Ad copy and angles', 'Landing page messaging', 'Launch campaign systems'],
    promptCount: 25,
    buyLink: 'https://prabhatforex.gumroad.com/l/rvrbzq',
    category: 'Marketing',
    price: '$29',
    content:
      'You are a senior product marketer.\n\nBuild a product launch campaign for [PRODUCT] aimed at [TARGET AUDIENCE].\n\nInclude:\n- Core positioning message\n- 3 campaign angles\n- Launch email ideas\n- Social post ideas\n- Landing page headline options\n- A 2-week content calendar\n\nKeep the tone clear, persuasive, and modern.',
  },
  {
    id: 'marketing-email-funnel',
    title: 'Email Funnel Copywriter',
    description: 'Generate a simple email sequence that nurtures leads and moves them toward purchase.',
    buyLink: paymentLink,
    category: 'Marketing',
    price: '$21',
    content:
      'You are an email marketing expert.\n\nWrite a 5-email funnel for [PRODUCT OR SERVICE] targeting [AUDIENCE].\n\nFor each email include:\n- Subject line\n- Opening hook\n- Main message\n- Call to action\n\nMake the sequence feel helpful, persuasive, and easy to adapt.',
  },
]
