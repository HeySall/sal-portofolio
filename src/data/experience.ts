export interface ExperienceItem {
  id: string
  period: string
  role: string
  description: string
  location: string
  locationType: 'Remote' | 'On-Site' | 'Hybrid'
}

export const experiences: ExperienceItem[] = [
  {
    id: 'freelance-2026',
    period: '2026 — Now',
    role: 'Freelance UI/UX Designer',
    description:
      'Collaborating with startups and businesses across fintech, lifestyle, recruitment, and digital products',
    location: 'Indonesia',
    locationType: 'Remote',
  },
  {
    id: 'uiux-2024',
    period: '2024 — Now',
    role: 'UI/UX Designer',
    description: 'Enterprise & Automotive Digital Platforms',
    location: 'North Jakarta',
    locationType: 'On-Site',
  },
  {
    id: 'uiux-2022',
    period: '2022 — 2024',
    role: 'UI/UX Designer',
    description: 'Blockchain & fintech-related platforms',
    location: 'Semarang',
    locationType: 'On-Site',
  },
  {
    id: 'product-2022',
    period: '2022 — 2022',
    role: 'Product Designer',
    description: 'Gardening service & digital product ecosystem',
    location: 'Jakarta',
    locationType: 'Remote',
  },
]
