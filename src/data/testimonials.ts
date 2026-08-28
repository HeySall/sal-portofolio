export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  photo: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'niko-prianto',
    name: 'Niko Prianto',
    role: 'Sr. UI/UX Designer',
    company: 'Juice Box',
    photo: '/assets/testimonials/niko.jpg',
    quote:
      "Adit's visual design skills are outstanding—attention to detail, whitespace, and subtle patterns bring his work close to pixel-perfect. Beyond design, he's a natural team mediator who bridges perspectives smoothly and makes collaboration easier. With all his strengths, the only thing left is for him to speak up more often",
  },
  {
    id: 'david-isser',
    name: 'David Isser',
    role: 'UI/UX Designer',
    company: 'Bank BRI',
    photo: '/assets/testimonials/david.jpg',
    quote:
      'Adit is a fun and friendly teammate with a solid grasp of both UI and UX. He brings structured insights to brainstorming, communicates clearly with both team and clients, and always backs his design decisions with strong reasoning. On top of that, his visual design is consistently on point!',
  },
  {
    id: 'wilson-taslim',
    name: 'Wilson Taslim',
    role: 'Business Process Improvement Manager',
    company: 'PT Central Mega Kencana',
    photo: '/assets/testimonials/wilson.jpg',
    quote:
      'As a UI/UX designer, he quickly understands given requirements, provides strong and critical analysis, and contributes additional ideas related to the project',
  },
]
