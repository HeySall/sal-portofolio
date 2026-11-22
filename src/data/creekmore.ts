export const creekmoreData = {
  hero: {
    title: 'Creekmore – Turning an agency homepage into a',
    titleHighlight: 'lead engine',
    titleEnd: 'for small businesses.',
    description:
      'A homepage redesign concept for Creekmore Marketing, a Kentucky digital agency that helps local businesses get more calls, leads and customers — while keeping a real person one tap away.',
    image: '/assets/projects/creekmore/hero-creek.png',
  },
  meta: {
    role: 'UI/UX Designer',
    scope: 'UX Direction, Visual Design, Design System, Responsive Web',
    industry: 'Digital Marketing Agency',
  },
  atAGlance: {
    title: 'At a glance',
    problem:
      "Busy owners couldn't tell, in a few seconds, what Creekmore does or whether they're the right fit - and neither could Creekmore's team.",
    approach:
      'A results-first story: promise, proof, process, then the call. Every section answers one question owners actually ask.',
    output:
      'Desktop and mobile homepage, a Figma design system, and a new visual language grounded in trust and results.',
  },
  challenge: {
    title: 'The Challenge',
    heading:
      "Small business owners don't shop for marketing. They shop for more customers.",
    body: [
      "Creekmore's audience is plumbers, salons, restaurants, and contractors - busy owners who rarely think about marketing until they realize revenue is flat or the phone has stopped ringing.",
      'The old homepage looked professional, but it spoke the language of agencies, not the language of owners. By the time a visitor understood what Creekmore offered, they had already left.',
    ],
    quote:
      '"Make it feel human, prove it works, and make calling us the easiest next step." - Project brief',
    principles: [
      {
        number: '01',
        title: 'Human',
        description:
          'Feel like a local team you can call, not a faceless corporate agency.',
      },
      {
        number: '02',
        title: 'Outcome-led',
        description:
          "Show what each service gets an owner, not what it's called or how it's structured.",
      },
      {
        number: '03',
        title: 'Proof-first',
        description:
          'Let real results and real clients do the persuading, not just claims.',
      },
      {
        number: '04',
        title: 'Conversion-focused',
        description:
          'Keep a real phone number one glance, or one tap, away at every scroll depth.',
      },
    ],
  },
  designDirection: {
    title: 'Design Direction',
    heading: 'From agency brochure to a results-first story.',
    body: 'Instead of a list of services, I treated the page like a sales conversation with a busy owner. Every section answers one question they\'d actually ask, in this order:',
    flow: ['Promise', 'Proof', 'Process', 'The call'],
    designPrinciples: [
      {
        title: 'One accent per section',
        description: 'Navy carries the page. Bright blue on white and ice, cyan on navy, so the eye always lands on one thing.',
      },
      {
        title: 'Bold voice, calm layout',
        description: 'Big ExtraBold headlines carry the brand\'s personality, cards and generous spacing keep it easy to scan.',
      },
      {
        title: "Show, don't list",
        description: 'Abstract services became small product-style illustrations owners recognise from their own world.',
      },
    ],
    palette: [
      { name: 'Navy', hex: '#0F233B', role: 'Foundation · text · inverse surfaces', large: true },
      { name: 'Cyan', hex: '#2FD7F7', role: 'Accent on navy · primary CTA', accent: true },
      { name: 'Bright Blue', hex: '#087CF0', role: 'Accent on white & ice' },
      { name: 'Ice', hex: '#EAF4FF', role: 'Soft surfaces' },
      { name: 'Slate', hex: '#3A4D66', role: 'Secondary text' },
    ],
    accentRule: 'Bright blue on white and ice, cyan on navy. Never cyan text on white; never bright blue for small body text.',
    componentImages: [
      '/assets/projects/creekmore/dir-1.png',
      '/assets/projects/creekmore/dir-2.png',
      '/assets/projects/creekmore/dir-3.png',
      '/assets/projects/creekmore/dir-4.png',
    ],
  },
  // Placeholder sections for images that will be added later
  buildingTheStory: {
    title: 'Building the Story',
    heading: 'From first scroll to first call.',
    body: 'Six sections, each with one job: earn attention, prove the claim, build trust, then make it effortless to reach a real person.',
    cards: [
      {
        badge: '01 / 06',
        tag: 'Hook',
        title: 'Obsessed with getting you MORE',
        description: 'A full-bleed team video and the MORE wordmark make the promise before anything else.',
        image: '/assets/projects/creekmore/story-1.png',
      },
      {
        badge: '02 / 06',
        tag: 'Services',
        title: 'Digital marketing is our jam',
        description: 'Each service shown as the outcome an owner actually gets.',
        image: '/assets/projects/creekmore/story-2.png',
      },      {
        badge: '03 / 06',
        tag: 'Proof of Work',
        title: 'Work that makes the phone ring',
        description: 'Real client sites, scrolling live, grouped by industry.',
        image: '/assets/projects/creekmore/story-3.png',
      },
      {
        badge: '04 / 06',
        tag: 'Clarity',
        title: 'More clarity, less guesswork',
        description: 'CreekSmart answers "what is my money doing?" in plain English.',
        image: '/assets/projects/creekmore/story-4.png',
      },
      {
        badge: '05 / 06',
        tag: 'Trust',
        title: 'Real results = happy clients',
        description: 'The $0→$1M story, reviews and the real team.',
        image: '/assets/projects/creekmore/story-5.png',
      },
      {
        badge: '06 / 06',
        tag: 'Take Action',
        title: "Ready for MORE? Let's talk",
        description: 'A big tappable number, three clear steps and a short form.',
        image: '/assets/projects/creekmore/story-6.png',
      },
    ],
  },
  whyItLooks: {
    title: 'The Design Decisions',
    heading: 'Why each section looks the way it does.',
    body: 'Every scroll position and layout choice has a reason. Here\'s what the problem was, and what the solution needed to do.',
    items: [
      {
        tag: 'Services',
        tagColor: 'teal',
        title: 'Show the outcome, not the service name.',
        problem: 'Owners search "get more customers", not "SEO optimization". A list of service names creates distance.',
        solution: [
          'Rename every service to what it gets the owner',
          'An icon and CTA on each card keeps the next step clear',
          'A "how it works" strip sets honest expectations',
        ],
        image: '/assets/projects/creekmore/why-1.png',
        imageLeft: true,
      },
      {
        tag: 'Proof of Work',
        tagColor: 'teal',
        title: 'Real sites instead of thumbnails.',
        problem: 'A grid of logos proves nothing. Owners want to see work for businesses like theirs.',
        solution: [
          'Filterable real client sites displayed fully',
          'An "40+ websites" count adds credibility',
          'One clear CTA: "See the full portfolio"',
        ],
        image: '/assets/projects/creekmore/why-2.png',
        imageLeft: false,
      },
      {
        tag: 'Creeksmart',
        tagColor: 'teal',
        title: 'Turn reporting into a reason to choose them.',
        problem: 'Most owners have no idea where their leads come from. That uncertainty is a churn risk.',
        solution: [
          'Show the dashboard as a differentiator',
          'Real metrics, simple and formatted',
          'Position it: "your own marketing faculty"',
        ],
        image: '/assets/projects/creekmore/why-3.png',
        imageLeft: true,
      },
      {
        tag: 'Results',
        tagColor: 'teal',
        title: 'Proof before persuasion.',
        problem: 'Claims without evidence don\'t move busy owners. A testimonials section needs a money story.',
        solution: [
          'One featured transformation, fully told',
          'Headshots and full names raise authenticity',
          'Star ratings and review count back it up',
        ],
        image: '/assets/projects/creekmore/why-4.png',
        imageLeft: false,
      },
      {
        tag: 'Hook',
        tagColor: 'teal',
        title: "We're obsessed with getting you MORE.",
        problem: 'The original hero was agency-speak. Owners needed to feel seen in the first line.',
        solution: [
          'MORE wordmark as the visual anchor',
          'Real photos of the actual team',
          'Primary CTA above the fold, always visible',
        ],
        image: '/assets/projects/creekmore/why-5.png',
        imageLeft: true,
      },
      {
        tag: 'Take Action',
        tagColor: 'teal',
        title: 'Make the next step feel small.',
        problem: 'A generic contact form is a commitment. Busy owners need a lower-friction first step.',
        solution: [
          'Phone number as the hero element',
          'Support options that reduce the ask',
          'Short form, three questions max',
        ],
        image: '/assets/projects/creekmore/why-6.png',
        imageLeft: false,
      },
    ],
  },
  designSystem: {
    title: 'Design System',
    heading: 'Creek: one system behind every screen.',
    body: 'I built the Figma file as a real library, variables first and components second. It paid off late: switching to a single type family and rounding every size to an even number took minutes, not hours.',
    stats: [
      { value: '32', label: 'text styles, all even sizes' },
      { value: '101', label: 'typography variables' },
      { value: '20+', label: 'components with variants' },
      { value: '2', label: 'breakpoints, designed separately' },
    ],
    colorTokens: [
      { name: 'bg/page', value: '#FFFFFF', label: 'White · #FFFFFF', light: true },
      { name: 'bg/subtle', value: '#EAF4FF', label: 'Ice · #EAF4FF', light: true },
      { name: 'bg/inverse', value: '#0F233B', label: 'Navy · #0F233B', dark: true },
      { name: 'text/primary', value: '#0F233B', label: 'Navy · #0F233B', dark: true },
      { name: 'text/secondary', value: '#3A4D66', label: 'Slate · #3A4D66', dark: true },
      { name: 'accent/on-light', value: '#087CF0', label: 'Bright Blue · #087CF0', dark: true },
      { name: 'accent/on-dark', value: '#2FD7F7', label: 'Cyan · #2FD7F7', light: true },
      { name: 'action/primary', value: '#2FD7F7', label: 'Cyan · #2FD7F7', light: true },
    ],
    typeScale: [
      { name: 'Display', spec: '96 / 96 · ExtraBold', preview: 'Obsessed', size: '2.2rem' },
      { name: 'Heading H1', spec: '56 / 58 · ExtraBold', preview: 'Digital marketing', size: '1.4rem' },
      { name: 'Heading H3', spec: '32 / 38 · ExtraBold', preview: '(859) 309–5987', size: '1.1rem' },
      { name: 'Label', spec: '16 / 22 · Bold', preview: 'See the full portfolio', size: '0.9rem' },
      { name: 'Body', spec: '16 / 26 · Regular', preview: 'You call, we answer.', size: '0.85rem' },
      { name: 'Eyebrow', spec: '12 / 16 · 10% · Bold', preview: 'OUR WORK', size: '0.75rem' },
    ],
  },
  sections: {
    beforeAfter: {
      title: 'Before & After',
      images: {
        before: '/assets/projects/creekmore/before.png',
        after: '/assets/projects/creekmore/after.png',
      },
    },
    components: {
      title: 'Component System',
      description:
        'A modular design system built for consistency and speed. Every component follows the same principles: clear hierarchy, generous spacing, and outcomes over features.',
      images: [
        '/assets/projects/creekmore/components-1.png',
        '/assets/projects/creekmore/components-2.png',
        '/assets/projects/creekmore/components-3.png',
      ],
    },
    responsive: {
      title: 'Responsive Design',
      description:
        'Mobile-first approach ensuring the story stays clear and the CTA stays within thumb reach, no matter the screen size.',
      images: [
        '/assets/projects/creekmore/mobile-1.png',
        '/assets/projects/creekmore/mobile-2.png',
      ],
    },
  },
  finalExperience: {
    title: 'The Final Experience',
    heading: 'The Full Landing Page Experience',
    body: 'The complete desktop page as designed in Figma, from the hero to the footer.',
    images: [
      '/assets/projects/creekmore/final-left.png',
      '/assets/projects/creekmore/final-right.png',
    ],
  },
  mobileExperience: {
    title: 'Mobile Experience',
    heading: 'Rebuilt for the thumb, not shrunk.',
    body: 'Most owners meet Creekmore on their phone, between jobs. Every section got its own mobile component: the call button moves into the header, services become an accordion with the preview inline, projects stack, and every CreekSmart step stays open.',
    screens: [
      { number: '01', title: 'Hero', desc: 'Call button lives in the header', image: '/assets/projects/creekmore/mobile-1.png' },
      { number: '02', title: 'Services', desc: 'Accordion, preview opens inline', image: '/assets/projects/creekmore/mobile-2.png' },
      { number: '03', title: 'Our Work', desc: 'Projects stack, no side-scroll', image: '/assets/projects/creekmore/mobile-3.png' },
      { number: '04', title: 'CreekSmart', desc: 'Every step open, bot underneath', image: '/assets/projects/creekmore/mobile-4.png' },
      { number: '05', title: 'Why Creekmore', desc: 'Photos, then one calm card', image: '/assets/projects/creekmore/mobile-5.png' },
    ],
  },
  reflection: {
    title: 'Reflection',
    heading: "What I'd take into the next project.",
    items: [
      {
        number: '01',
        title: 'Design for the action',
        desc: 'For service businesses the CTA is the product. The phone number appears in the header, the CreekSmart story and the contact block.',
      },
      {
        number: '02',
        title: 'Show, then tell',
        desc: 'Small product-style illustrations explained four services faster than any paragraph could.',
      },
      {
        number: '03',
        title: 'Systems buy speed',
        desc: 'Variables and components first made late, site-wide changes safe and fast, on both breakpoints.',
      },
    ],
    disclaimer: 'This is a self-initiated concept created for a public 99designs contest. It was not selected and is not affiliated with or endorsed by Creekmore Marketing. Brand assets, team photography, client logos, testimonials and dashboard data belong to Creekmore Marketing and are shown for portfolio purposes only. The post-contest refinement was produced with AI-assisted prototyping and Figma tooling under my design direction.',
  },
}
