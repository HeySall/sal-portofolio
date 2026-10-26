export const digiroomReferralData = {
  hero: {
    image: '/assets/projects/digiroom-referral/dgr-hero.png',
    titleMain: 'From Customer Referrals to Meaningful Sales Conversations',
    titleAccent: '',
    description:
      'Designing an end-to-end referral experience that helps Digiroom users introduce prospective car buyers to Auto2000.',
    meta: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Scope', value: 'UX Flow & UI Design' },
      { label: 'Product', value: 'Auto2000 Digiroom' },
      { label: 'Status', value: 'In Development' },
    ],
  },

  businessContext: {
    label: 'Business Context',
    title: 'Connecting customer recommendations with structured lead capture',
    description:
      'The business objective is to encourage existing Digiroom users to engage other people who may be interested in purchasing a Toyota vehicle, either through Digiroom or directly at an Auto2000 dealer.',
    paragraphs: [
      'The referral form helps capture initial information so the sales team can follow up with potential buyers.',
      'These are <strong>intended business opportunities</strong>, not proven business outcomes:',
    ],
    opportunities: [
      'Encourage customer-to-customer referrals',
      'Create a digital entry point for prospective car buyers',
      'Capture structured information about purchase interest',
      'Support the handoff from referral submission to sales follow-up',
    ],
    flowImage: '/assets/projects/digiroom-referral/dgr-business-flow.png',
  },

  designChallenge: {
    label: 'Design Challenge',
    title: 'Making referrals easy and informative',
    quote:
      'How might we make it easy for existing Digiroom users to introduce potential car buyers to Auto2000, while capturing enough information to support meaningful sales follow-up?',
    description:
      'The experience connects two distinct journeys: the existing user needs a straightforward way to share a referral, and the recipient needs a clear path to express vehicle purchase interest and submit their information.',
  },

  experienceMapping: {
    label: 'Experience Mapping',
    title: 'Two users, one connected flow',
    description:
      'The referral experience serves two distinct user types with different goals, connected through a single referral link.',
    diagramImage: '/assets/projects/digiroom-referral/dgr-experience-map.png',
  },

  userJourneys: {
    label: 'USER JOURNEYS',
    title: 'Two journeys, one connection',
    description:
      'The referral experience connects existing Digiroom users with potential car buyers, leading to a submission that can be followed up by the Auto2000 team.',
    referrer: {
      user: 'Existing Digiroom User',
      accentColor: '#0d6e6e',
      steps: [
        {
          number: '01',
          title: 'Access referral feature',
          description: 'Open the account menu in Digiroom and access the Referral feature.',
        },
        {
          number: '02',
          title: 'View referral link',
          description: 'View the referral information and unique referral link.',
        },
        {
          number: '03',
          title: 'Share invitation',
          description: 'Copy the link or share it through WhatsApp.',
        },
        {
          number: '04',
          title: 'Recipient opens',
          description: 'The recipient opens the shared invitation.',
        },
      ],
    },
    recipient: {
      user: 'Referral Recipient',
      accentColor: '#2563eb',
      steps: [
        {
          number: '01',
          title: 'Open landing page',
          description: 'Open the referral landing page from the shared link.',
        },
        {
          number: '02',
          title: 'Complete form',
          description: 'Provide personal information and vehicle purchase interest.',
        },
        {
          number: '03',
          title: 'Verify phone number',
          description: 'Verify the phone number through WhatsApp OTP.',
        },
        {
          number: '04',
          title: 'Receive confirmation',
          description: 'Receive a submission confirmation.',
        },
        {
          number: '05',
          title: 'Eligible for follow-up',
          description: 'Become eligible for follow-up from the Auto2000 team.',
        },
      ],
    },
  },

  designApproach: {
    label: 'DESIGN APPROACH',
    title: 'From business goals to design solutions',
    description:
      'Each design decision addresses a specific business need, connecting referral sharing, lead information collection, and sales follow-up into one cohesive experience.',
    proposals: [
      {
        number: '01',
        title: 'Simplify referral sharing',
        businessNeed:
          'Make it easier for existing Digiroom users to introduce prospective buyers to Auto2000.',
        proposal: 'Provide a referral link with copy and WhatsApp sharing options.',
        rationale:
          'Allows users to share the invitation through familiar, readily available channels.',
        image: '/assets/projects/digiroom-referral/dgr-decision-1.png',
      },
      {
        number: '02',
        title: 'Structure lead information',
        businessNeed:
          'Capture initial personal information and vehicle purchase interest.',
        proposal:
          'Provide a structured referral form with relevant personal details, vehicle model, and preferred location.',
        rationale:
          'Organizes the information intended to support sales follow-up while keeping the form focused on the information being requested.',
        image: '/assets/projects/digiroom-referral/dgr-decision-2.png',
      },
      {
        number: '03',
        title: 'Add phone verification',
        businessNeed:
          'Include a phone verification step before form submission is completed.',
        proposal: 'Integrate WhatsApp OTP verification.',
        rationale:
          'Adds a verification step for the submitted phone number before the flow is completed.',
        image: '/assets/projects/digiroom-referral/dgr-decision-3.png',
      },
      {
        number: '04',
        title: 'Clarify submission status',
        businessNeed: 'Give recipients clear feedback after submitting the form.',
        proposal: 'Display a submission confirmation state.',
        rationale:
          'Confirms that the form submission has been completed and communicates the next step when supported by the actual product flow.',
        image: '/assets/projects/digiroom-referral/dgr-decision-4.png',
      },
    ],
  },

  visualShowcase: {
    label: 'The Final Experience',
    title: 'Screen sequence from referrer to recipient',
    mockups: [
      {
        label: 'Referrer: Access feature',
        description: 'Existing users access the referral feature from their account menu',
        image: '/assets/projects/digiroom-referral/dgr-showcase-1.png',
      },
      {
        label: 'Recipient: Landing page',
        description: 'Recipients open the referral link and see the landing page with form',
        image: '/assets/projects/digiroom-referral/dgr-showcase-2.png',
      },
      {
        label: 'Recipient: OTP verification',
        description: 'Phone number verification through WhatsApp OTP',
        image: '/assets/projects/digiroom-referral/dgr-showcase-3.png',
      },
      {
        label: 'Recipient: Confirmation',
        description: 'Success state confirming submission and setting follow-up expectations',
        image: '/assets/projects/digiroom-referral/dgr-showcase-4.png',
      },
    ],
  },

  reflection: {
    label: 'Status & Proposed Metrics',
    mockup: '/assets/projects/digiroom-referral/dgr-reflection.png',
    title: 'In Development',
    description:
      'This feature is currently in development. The following metrics are proposed evaluation criteria, not measured results:',
    proposedMetrics: [
      'Referral link share rate from existing users',
      'Form completion rate from recipients',
      'OTP verification success rate',
      'Sales follow-up conversion (requires sales team tracking)',
    ],
    designNote:
      'The design focused on making both journeys clear and setting honest expectations about the referral process and follow-up timeline.',
  },

  thankYou: {
    bgImage: '/assets/projects/digiroom-referral/dgr-thankyou-bg.png',
    title: 'Thank You For Reading!',
    subtitle: 'Interested in working together?',
    cta: 'GET IN TOUCH',
    ctaHref: 'mailto:adityafaisal65@gmail.com',
  },
}
