export type ProjectSection =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'text'; title: string; body: string }
  | { type: 'two-col'; left: string; right: string }

export interface Project {
  id: string
  title: string
  subtitle: string
  tags: string[]
  status: 'live' | 'coming-soon'
  thumbnail: string
  overview?: string
  role?: string
  duration?: string
  year?: string
  sections?: ProjectSection[]
}

export const projects: Project[] = [
  {
    id: 'digiroom-auto2000',
    title: 'Credit Simulation — Digiroom Auto2000',
    subtitle: 'Credit Simulation Enhancement',
    tags: ['Automotive', 'App Design'],
    status: 'live',
    thumbnail: '/assets/projects/digiroom.png',
    overview:
      'Redesigning the credit simulation flow for Digiroom Auto2000 to help users quickly calculate and compare installment options with confidence.',
    role: 'UI/UX Designer',
    duration: '3 months',
    year: '2024',
    sections: [],
  },
  {
    id: 'capital-desk',
    title: 'Capital Desk',
    subtitle: 'Finance Dashboard – Advance Approval',
    tags: ['Finance', 'Dashboard', 'Web Design'],
    status: 'live',
    thumbnail: '/assets/projects/capital-desk.png',
    overview:
      'Designing a finance dashboard that streamlines the advance claim and approval process for enterprise teams.',
    role: 'UI/UX Designer',
    duration: '2 months',
    year: '2024',
    sections: [],
  },
  {
    id: 'lolly-job',
    title: 'Lolly Job',
    subtitle: 'Job Platform AI Generated',
    tags: ['Job Platform', 'AI Platform', 'App Design'],
    status: 'live',
    thumbnail: '/assets/projects/lolly-job.png',
    overview: '',
    role: 'UI/UX Designer',
    duration: '',
    year: '2025',
    sections: [],
  },
  {
    id: 'aurelia',
    title: 'Aurelia',
    subtitle: 'Digital experience for modern luxury living.',
    tags: ['Web Design', 'Landing Page'],
    status: 'live',
    thumbnail: '/assets/projects/aurelia.png',
    overview: '',
    role: 'UI/UX Designer',
    duration: '',
    year: '2025',
    sections: [],
  },
  {
    id: 'nusa-niaga',
    title: 'Nusa Niaga',
    subtitle: 'UMKM Landing Page',
    tags: ['E-Commerce', 'Web Design', 'Landing Page'],
    status: 'coming-soon',
    thumbnail: '/assets/projects/nusa-niaga.png',
    overview: '',
    role: 'UI/UX Designer',
    duration: '',
    year: '2025',
    sections: [],
  },
  // ── Dummy projects — ganti thumbnail & info nanti ──
  {
    id: 'heypico',
    title: 'HeyPico',
    subtitle: 'AI Automatic Appointment With Voice',
    tags: ['AI', 'App Design'],
    status: 'coming-soon',
    thumbnail: '/assets/projects/pico.png',
    overview: '',
    role: 'UI/UX Designer',
    duration: '',
    year: '2025',
    sections: [],
  },
  {
    id: 'sahamku',
    title: 'Sahamku',
    subtitle: 'Signal Call Feature to Distribute or Broadcasting Upcoming Stock',
    tags: ['Finance', 'App Design'],
    status: 'coming-soon',
    thumbnail: '/assets/projects/signal.png',
    overview: '',
    role: 'UI/UX Designer',
    duration: '',
    year: '2025',
    sections: [],
  },
  {
    id: 'absenku',
    title: 'Absenku',
    subtitle: 'Employee attendance and work or leave monitoring application',
    tags: ['Dashboard', 'App Design'],
    status: 'coming-soon',
    thumbnail: '/assets/projects/absen.png',
    overview: '',
    role: 'UI/UX Designer',
    duration: '',
    year: '2025',
    sections: [],
  },
]
