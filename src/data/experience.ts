export interface ExperienceItem {
  id: string
  company: string
  period: string
  role: string
  description: string
  location: string
  locationType: 'Remote' | 'On-Site' | 'Hybrid'
}

export const experiences: ExperienceItem[] = [
  {
    id: 'freelance-2026',
    company: 'Freelance Designer',
    period: '2026 — Now',
    role: 'Freelancer UI/UX Designer',
    description: 'Collaborating with startups and businesses across fintech, lifestyle, recruitment, and digital products',
    location: 'Remote',
    locationType: 'Remote',
  },
  {
    id: 'uiux-2024',
    company: 'PT Astra International',
    period: '2024 — Now',
    role: 'UI/UX Designer',
    description: 'Enterprise & Automotive Digital Platforms',
    location: 'North Jakarta',
    locationType: 'On-Site',
  },
  {
    id: 'uiux-2022',
    company: 'Nusatech Development',
    period: '2022 — 2024',
    role: 'UI/UX Designer',
    description: 'Blockchain & fintech-related platforms',
    location: 'Semarang',
    locationType: 'On-Site',
  },
  {
    id: 'product-2022',
    company: 'Oke Garden',
    period: '2022 — 2024',
    role: 'Product Designer',
    description: 'Gardening service & digital product ecosystem',
    location: 'Jakarta',
    locationType: 'Remote',
  },
]
