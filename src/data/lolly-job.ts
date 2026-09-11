export const lollyJobData = {
  hero: {
    image: '/assets/projects/lolly-job/lolly-hero.png',
    titleMain: 'Lolly Job AI',
    titleAccent: 'Job Platform Based On AI',
    description:
      'Redesigning the experience for job seekers and employers to make matching, discovery, and hiring more relevant and easier to navigate.',
    meta: [
      { label: 'My Role', value: 'Product Designer' },
      { label: 'Timeline', value: '1 Month' },
      { label: 'Scope', value: 'Research, Hifi Design, Prototyping' },
    ],
  },

  productContext: {
    label: 'Product Context',
    title: 'One platform. Two different goals.',
    logo: '/assets/projects/lolly-job/lolly-logo.png',
    connectorText: 'Matching both sides through skills, experience, and job requirements.',
    jobSeeker: {
      title: 'Job Seeker',
      quote: '"Help me find opportunities that actually fit me?"',
      features: [
        { icon: '🔍', title: 'Discovery', desc: 'Discover relevant jobs based on your profile and preferences.' },
        { icon: '✦', title: 'AI Match', desc: 'See how well your profile matches each opportunity.' },
        { icon: '◎', title: 'Understand Fit', desc: 'Understand your strengths and gaps before applying.' },
        { icon: '➤', title: 'Easy Apply', desc: 'Apply quickly to the opportunities that fit you best.' },
      ],
    },
    employer: {
      title: 'Employer',
      quote: '"Help me find candidate that actually fit with my requirement?"',
      features: [
        { icon: '▦', title: 'Job Post', desc: 'Create and publish job opportunities with clear requirements.' },
        { icon: '🔍', title: 'Discovery', desc: 'Discover relevant candidates based on your job requirements.' },
        { icon: '✦', title: 'AI Match', desc: 'Understand how well each candidate fits the role.' },
        { icon: '◎', title: 'Shortlist or Hired', desc: 'Shortlist the strongest candidates and move them forward.' },
      ],
    },
  },

  challenge: {
    label: 'The Challenge',
    title: 'How do we know if a job or candidate is actually the right fit?',
    desc: 'Job seekers and employers often have plenty of options, but limited context to understand which <strong>opportunities or candidates are truly relevant and why.</strong>',
    cards: [
      {
        icon: '🔍',
        label: 'Discovery',
        title: 'Too many options, not enough relevance.',
        desc: 'Job seekers spend time browsing jobs, while employers face the same challenge when searching through candidates.',
      },
      {
        icon: '▦',
        label: 'Understanding the Match',
        title: "A match score alone doesn't explain the fit.",
        desc: 'Users need to understand what makes a job or candidate relevant, beyond simply seeing a percentage.',
      },
      {
        icon: '◎',
        label: 'Building Trust in AI',
        title: 'AI should support decisions, not replace them.',
        desc: 'Recommendations need clear reasoning so users can understand the match and make their own decisions.',
      },
    ],
  },

  jobSeekerRole: {
    label: 'Job Seeker Role',
    title: 'One Matching Principle. Two Distinct Experiences.',
    desc: 'Built job seeker role around a shared decision journey, tailored to each user\'s needs.',
    features: [
      {
        label: 'Discovery Page',
        icon: '🔍',
        align: 'right',
        mockup: '/assets/projects/lolly-job/lolly-discovery.png',
        paragraphs: [
          'LollyJob reimagines job discovery through a <strong>swipe-based experience,</strong> making exploration <strong>feel faster and more intuitive.</strong>',
          'Behind the scenes, <strong>AI analyzes each user\'s profile to surface relevant opportunities</strong>, shifting the experience from searching through jobs to discovering the right ones.',
        ],
      },
      {
        label: 'AI Match Page',
        icon: '✦',
        align: 'left',
        mockup: '/assets/projects/lolly-job/lolly-ai-match.png',
        paragraphs: [
          'This Feature make user understand how fit they are in the job.',
          'Users can see <strong>how their profile aligns with the role and understand</strong> why it may be a good fit, helping them move from mass applying to making more intentional applications.',
        ],
      },
      {
        label: 'Understand The Fitness Job',
        icon: '◎',
        align: 'right',
        mockup: '/assets/projects/lolly-job/lolly-fitness.png',
        paragraphs: [
          'This Feature make user understand how fit they are in the job.',
          'Users can see <strong>how their profile aligns with the role and understand</strong> why it may be a good fit, helping them move from mass applying to making more intentional applications.',
        ],
      },
      {
        label: 'Easy to Apply',
        icon: '➤',
        align: 'left',
        mockup: '/assets/projects/lolly-job/lolly-apply.png',
        paragraphs: [
          'From waiting to taking action.',
          'Instead of <strong>passively waiting for recruiter updates,</strong> job seekers can proactively reach out through WhatsApp.',
          '<strong>Controlled outreach limits help keep conversations relevant</strong> while preventing misuse.',
        ],
      },
    ],
  },

  aiMatchDeepDive: {
    label: 'AI Match Deep Dive',
    title: 'A Match Score Is Only Valuable When Users Understand Why.',
    desc: 'The score provides a quick signal, while the breakdown gives users the context they need to make a more informed decision.',
    mockup: '/assets/projects/lolly-job/lolly-ai-deep.png',
    annotations: {
      left: [
        { label: 'Keahlian', desc: 'Your skills align well with this role' },
        { label: 'Pengalaman', desc: 'Your background is highly relevant.' },
      ],
      right: [
        { label: 'Kualifikasi', desc: 'Most of the requirements are a good match' },
        { label: 'Potensi Kesenjangan', desc: 'Some areas to improve for an even better fit. And this insight suits you because of your profile' },
      ],
    },
  },

  employerRole: {
    label: 'Employer Role',
    title: 'The Same Intelligence. A Different Decision.',
    desc: 'AI Match helps recruiters prioritize relevant candidates, understand their fit, and make more informed decisions with less manual screening.',
    mockup: '/assets/projects/lolly-job/lolly-employerd.png',
    features: [
      {
        icon: '◎',
        label: 'Candidate Discovery',
        desc: 'Explore applicants effortlessly through a swipe-based experience, with AI automatically prioritizing candidates based on their match with the role.',
      },
      {
        icon: '✦',
        label: 'AI Match',
        desc: 'The same AI Match intelligence works on the employer side, helping recruiters identify, understand, and prioritize the most relevant candidates for each role.',
      },
      {
        icon: '▦',
        label: 'Take Action',
        desc: 'By prioritizing candidates based on role fit, AI Match reduces screening effort and helps employers focus their time on the most relevant talent.',
      },
    ],
  },

  businessImpact: {
    label: 'Business Impact',
    title: 'Turning AI Value Into a Sustainable Business Model',
    desc: 'Premium insights are introduced when users can clearly see their value, making monetization feel like part of the experience rather than a disconnected paywall.',
    cards: [
      {
        icon: '▦',
        label: 'Locked Insight',
        title: 'Unlock Advanced AI Features',
        desc: 'Advanced AI insights are unlocked only when users need deeper analysis.',
      },
      {
        icon: '◇',
        label: 'Use Point',
        title: 'Use Points When More Insight Is Needed',
        desc: 'Provide flexible access to premium features without interrupting the core experience.',
      },
      {
        icon: '✦',
        label: 'AI Insight',
        title: 'Get Deeper, Actionable Insights',
        desc: 'Unlocked insights provide deeper context to support better decisions.',
      },
    ],
  },

  reflection: {
    label: 'Reflection',
    mockup: '/assets/projects/lolly-job/lolly-hero.png',
    quote: '" AI is only valuable when users Understand what it means for their decission "',
    desc: "Designing LollyJob reinforced that great AI experiences aren't defined by recommendations alone, but by how clearly users can understand them, act on them, and gain value from them.",
  },

  thankYou: {
    bgImage: '/assets/projects/lolly-job/lolly-thankyou-bg.png',
    title: 'Thank You For Reading So Far!',
    subtitle: 'Ready for Your Next Favourite Collaboration?',
    cta: 'GET IN TOUCH NOW!',
    ctaHref: 'mailto:adityafaisal65@gmail.com',
  },
}
