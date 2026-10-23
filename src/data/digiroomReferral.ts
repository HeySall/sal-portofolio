export const digiroomReferralData = {
  hero: {
    image: '/assets/projects/digiroom-referral/dgr-hero.png',
    titleMain: 'Turning Customer Recommendations',
    titleAccent: 'into Actionable Sales Leads',
    description:
      'Designing an end-to-end referral experience that connects existing Digiroom users with prospective car buyers and helps Auto2000 capture information for sales follow-up.',
    meta: [
      { label: 'Product', value: 'Auto2000 Digiroom' },
      { label: 'Role', value: 'Product Designer' },
      { label: 'Scope', value: 'UX Flow & UI Design' },
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

  referrerJourney: {
    label: 'Referrer Journey',
    title: 'Existing Digiroom User',
    steps: [
      {
        number: '01',
        title: 'Access referral feature',
        description: 'Open the account menu in Digiroom and access the Referral feature',
      },
      {
        number: '02',
        title: 'View referral link',
        description: 'View the referral information and unique referral link',
      },
      {
        number: '03',
        title: 'Share invitation',
        description: 'Copy the link or share it through WhatsApp',
      },
      {
        number: '04',
        title: 'Recipient opens',
        description: 'The recipient opens the shared invitation',
      },
    ],
  },

  recipientJourney: {
    label: 'Recipient Journey',
    title: 'Referral Recipient',
    steps: [
      {
        number: '01',
        title: 'Open landing page',
        description: 'Open the referral landing page from the shared link',
      },
      {
        number: '02',
        title: 'Complete form',
        description: 'Provide personal information and vehicle purchase interest',
      },
      {
        number: '03',
        title: 'Verify phone number',
        description: 'Verify the phone number through WhatsApp OTP',
      },
      {
        number: '04',
        title: 'Receive confirmation',
        description: 'Receive a submission confirmation',
      },
      {
        number: '05',
        title: 'Eligible for follow-up',
        description: 'Become eligible for follow-up from the Auto2000 team',
      },
    ],
  },

  keyDecisions: {
    label: 'Key Design Decisions',
    title: 'Four critical decisions that shaped the experience',
    decisions: [
      {
        number: '01',
        title: 'Referral link and WhatsApp sharing',
        rationale:
          'The sharing flow needed to make it convenient for existing users to introduce potential buyers while ensuring recipients understand where the referral link leads.',
        tradeoff:
          'Making sharing easy through WhatsApp means the recipient journey starts outside the app, requiring clear landing page messaging to establish context and trust.',
        image: '/assets/projects/digiroom-referral/dgr-decision-1.png',
      },
      {
        number: '02',
        title: 'Structured referral form',
        rationale:
          'The form captures initial information about the recipient and their vehicle interest to support sales follow-up. Fields include: name, phone number, car model, province, city, and purchase branch.',
        tradeoff:
          'Collecting useful information for the sales team needs to be balanced with keeping form completion manageable for recipients who may be exploring their interest.',
        image: '/assets/projects/digiroom-referral/dgr-decision-2.png',
      },
      {
        number: '03',
        title: 'WhatsApp OTP verification',
        rationale:
          'Phone verification through WhatsApp OTP helps confirm contact information in the submission flow. The design provides clear instructions, input feedback, and error handling.',
        tradeoff:
          'Adding a verification step increases friction in the flow, but helps ensure the submitted contact information can be used for follow-up.',
        image: '/assets/projects/digiroom-referral/dgr-decision-3.png',
        note: 'OTP verification does not guarantee all submissions are from genuinely interested buyers.',
      },
      {
        number: '04',
        title: 'Submission confirmation',
        rationale:
          'The success state communicates that the recipient has completed the referral form and sets appropriate expectations for what happens next.',
        tradeoff:
          'The confirmation needs to close the user\'s immediate task while being honest about the timeline and nature of the follow-up process.',
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
