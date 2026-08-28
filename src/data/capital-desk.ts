export const capitalDeskData = {
  hero: {
    image: '/assets/projects/capital-desk/cd-hero-mockup.png',
    titleMain: 'Capital Desk Dashboard',
    titleAccent: 'Finance Advance Request',
    description:
      'Capital Desk is an internal financial operations platform designed to streamline company funding requests and approval workflows. It enables employees to submit operational expenses with supporting documentation, while providing approvers with a structured way to review, validate, and manage requests efficiently.',
    meta: [
      { label: 'My Role', value: 'UI/UX Designer' },
      { label: 'Timeline', value: '2 Weeks' },
      { label: 'Scope', value: 'Research, Hifi Design, Prototyping' },
    ],
  },

  sidebar: {
    product: 'Capital Desk Dashboard',
    role: 'UI/UX Designer — Visual Design, Rapid Prototyping',
    company: 'Enterprise Client (Name Withheld)',
    timeline: '2 Weeks',
    tools: 'Figma, Miro',
  },

  projectBackground: {
    title: 'Project Background',
    body: '<strong>Capital Desk</strong> is an internal finance platform designed to simplify how employees request and manage operational funding from submission and documentation to review and approval creating a more structured, transparent, and efficient financial workflow.',
  },

  theProblem: {
    title: 'The Problem',
    paragraphs: [
      'Although Capital Desk already had an existing platform, it <strong>no longer met the needs of its users.</strong> The <strong>interface felt outdated, navigation was not intuitive,</strong> and key processes such as submitting financing requests and reviewing approvals required unnecessary effort from both employees and company administrators.',
      'As a result, the platform created friction in daily operations and reduced efficiency. Capital Desk needed a full redesign and rebranding to modernize the interface, simplify workflows, and improve usability for both employees and administrators.',
    ],
  },

  disclaimer: {
    title: 'Disclaimer',
    body: 'This is a white label project. All brand elements and sensitive details have been anonymized for confidentiality purposes.',
  },

  theGoals: {
    title: 'The Goals & Business Objective',
    body: 'Create a modern, user friendly, and transparent dashboard that clearly documents and streamlines the entire request and approval process.',
  },

  overview: {
    title: 'Overview',
    image: '/assets/projects/capital-desk/cd-overview.png',
    paragraphs: [
      'I led <strong>independent research and structured problem discovery</strong> to address core usability issues and define mandatory platform features. Given limited time and resources, I introduced a <strong>clear, lightweight design process that aligned design decisions</strong> with development capacity improving developer efficiency and giving stakeholders clearer visibility into upcoming sprints.',
      'I prioritized short, <strong>focused user research and collaborated directly with users</strong> to uncover major pain points and validate solutions. One of the main challenges <strong>was maintaining consistency across the platform</strong>, which I addressed by <strong>creating a design system and visual foundation</strong>.',
      'As a result, workflows became more streamlined, usability improved, and the platform became easier to scale and maintain.',
    ],
  },

  research: {
    title: 'Research & Analysis',
    applicationFlow: {
      subtitle: 'Application Flow',
      description:
        'This workflow illustrates the core process from request submission to approval. Data management is structured around three key roles:',
      roles: ['Requester', 'Manager (Reviewer)', 'Approver.'],
      footnote:
        '* Due to the project being a white label implementation, only the general parts of the workflow are shown. Certain flows, logic, and system details have been intentionally omitted to maintain confidential',
      image: '/assets/projects/capital-desk/cd-flow.png',
      clickable: true,
    },
  },

  keyChallenges: {
    title: 'Key Challenges Identified',
    description:
      'Based on workflow analysis and early user input, several challenges were identified that impacted usability, clarity, and user confidence throughout the request-to-approval process.',
    functional: {
      title: 'Functional Challenge',
      items: [
        {
          title: 'Limited visibility of AI scanning results',
          desc: 'After AI document detection was completed, the system did not clearly communicate what data had been scanned, matched, or required manual input. This reduced transparency and made validation difficult for both requesters and reviewers.',
        },
        {
          title: 'Inefficient information structure in activity input',
          desc: 'The activity section relied heavily on white space with low information density, making it harder to review multiple entries efficiently and increasing unnecessary scrolling.',
        },
        {
          title: 'Unclear financing structure and data breakdown',
          desc: 'Financing information lacked clear hierarchy and explanation, making it difficult for users to understand cost details and for approvers to assess requests quickly.',
        },
      ],
    },
    experiential: {
      title: 'Experiential Challenges',
      items: [
        {
          title: 'Low trust in AI-assisted workflows',
          desc: 'Because AI outcomes were not explicitly surfaced, users were unsure whether the system had processed their documents correctly, reducing confidence in automated assistance.',
        },
        {
          title: 'High cognitive load during form completion',
          desc: 'Users were required to interpret scattered information and unclear priorities, increasing mental effort during request submission.',
        },
        {
          title: 'Weak sense of progress and control',
          desc: 'The absence of clear feedback and status indicators made the experience feel fragmented rather than guided, especially for first-time users.',
        },
      ],
    },
  },

  solutions: {
    title: 'The Solutions',
    description:
      'It is significant to see the starting point of this application. Before the pre-design phase, the application had numerous capabilities, as shown in the images below. The redesign aimed to streamline these capabilities and increase their discoverability, with significant additions to simplify user flows and core functionality.',
    heroImage: '/assets/projects/capital-desk/cd-solution-hero.png',
    baseline: {
      title: 'The Baseline',
      description:
        'It is significant to see the starting point of this application. Before the pre design phase, the application had numerous capabilities, as shown in the images below. The redesign aimed to streamline these capabilities and increase their discoverability, with significant additions to simplify user flows and core functionality.',
      images: [
        '/assets/projects/capital-desk/cd-baseline-1.png',
        '/assets/projects/capital-desk/cd-baseline-2.png',
        '/assets/projects/capital-desk/cd-baseline-3.png',
        '/assets/projects/capital-desk/cd-baseline-4.png',
        '/assets/projects/capital-desk/cd-baseline-5.png',
        '/assets/projects/capital-desk/cd-baseline-6.png',
        '/assets/projects/capital-desk/cd-baseline-7.png',
      ],
    },
  },

  transparency: {
    title: 'Transparency + Convenience & Security = Consistency',
    description:
      'By increasing transparency and simplifying secure data input, the solution established consistency between requesters and stewards. Clear requirements and validation reduced incorrect uploads and ensured that submitted requests were complete and review-ready from the start.',
    sections: [
      {
        title: 'The Dashboard',
        images: [
          '/assets/projects/capital-desk/cd-transparency-1.png',
          '/assets/projects/capital-desk/cd-transparency-2.png',
        ],
        desc: 'The dashboard was redesigned using a table based layout to <strong>support high volume approval workflows</strong>. Compared to cards, tables <strong>provide higher information density, faster scanning, and enable administrators to review and act on multiple requests more efficiently.</strong>',
      },
      {
        title: 'Form Request Expenses',
        images: [
          '/assets/projects/capital-desk/cd-transparency-3.png',
          '/assets/projects/capital-desk/cd-transparency-4.png',
        ],
        desc: 'The expense request form was redesigned to make the <strong>advance request process more intuitive, especially for first time users.</strong> The new structure simplifies inputs, clarifies requirements, and <strong>reduces errors, ensuring requests are complete and review ready.</strong>',
      },
      {
        title: 'AI Upload & Generate Document Settlement',
        images: [
          '/assets/projects/capital-desk/cd-transparency-5.png',
          '/assets/projects/capital-desk/cd-transparency-6.png',
          '/assets/projects/capital-desk/cd-transparency-7.png',
        ],
        desc: 'This screen is part of the <strong>Advance Request workflow,</strong> where users <strong>submit request details document or proposal</strong> based on their specific needs. Users are <strong>guided to complete the required form fields and upload supporting documents</strong> according to the selected request type.\n\nUploaded documents are processed using <strong>AI powered document scanning,</strong> which <strong>extracts key information and automatically pre fills relevant form fields.</strong> This approach <strong>reduces manual input, improves efficiency, and minimizes submission errors.</strong>\n\nBecause the accuracy of the request depends on the <strong>consistency between the entered data and the uploaded documents,</strong> this screen includes document based validation. The validation helps ensure that the information provided by users <strong>matches the submitted supporting documents</strong> before the request can proceed.',
        wide: true,
      },
    ],
    aiValidation: {
      title: 'AI-Generated Form Validation Logic',
      image: '/assets/projects/capital-desk/cd-ai-validation.png',
      points: [
        'The AI-generated form has a "recommend-to-approve" score for each review cycle.',
        'Score over > 80%: The form is clearly aligned with the form that has a high confidence on all forms to identify the best form for the latest data.',
        'Score result between 50%-80%: Form integrity is assessed. The form logic is not achievable, but contains a minimum of several of orders for elements that need to be manually re-read.',
        'Score under < 50%: AI assignment terminated. The system raises a red alert and the list is requested to complete the form manually.',
      ],
    },
    approvalProcess: {
      title: 'Approval Process',
      images: [
        '/assets/projects/capital-desk/cd-approval-1.png',
        '/assets/projects/capital-desk/cd-approval-2.png',
        '/assets/projects/capital-desk/cd-approval-3.png',
        '/assets/projects/capital-desk/cd-approval-4.png',
      ],
      roles: ['Requester', 'Manager Approval', 'Approver'],
      notes: [
        'The approval mechanism allows the Approver (as Approver), who was not the last to approve in rejection to only respond to suggestions requested by a line to temporarily hold requests when approvers cannot proceed due to company constraints. This ensures requests are closed on tasks without taking longer.',
        'The approval mechanism is designed to give approvers complete visibility of all submissions, enabling approvers to confidently make supporting documents before making a decision.',
      ],
    },
  },

  impact: {
    title: 'Impact & Key Learnings',
    description: 'Here are some of the design principles gained from working on this project.',
    quality: {
      title: 'Quality & Impact',
      bullets: [
        'Improved consistency and clarity through a robust design system.',
        'Faster approval workflow creation by standardizing roles, states, and interactions.',
        'Better approval workflow creation system in higher information density and improved document preview.',
        'Too good transparency and user confidence, the design hierarchy focuses on reducing information through skills and capabilities.',
        'Maintained and maintained behavioral workflow merge too for technical value of the same design specs.',
      ],
    },
    identity: {
      title: 'Identity & Execution',
      bullets: [
        'AI first: Validations must clearly communicate system confidence at different levels to build trust.',
        'Interaction: Clean, predictable efficiency and clarity over visual richness.',
        'True consistency will only align the logic feedback, and your ideas to real UI components.',
      ],
    },
  },

  finalSummary: {
    title: 'Final Summary',
    paragraphs: [
      'This project showcases my approach to redesigning a complex internal financial platform by prioritizing usability, transparency, and operational efficiency. Within tight constraints and a white label context, I focused on streamlining end to end workflows, clarifying role based decision making, and implementing explainable AI assisted interactions.',
      'The design emphasizes clarity, consistency, and scalability over visual expression, enabling reliable handling of high volume requests and approvals while improving both user experience and internal operations.',
    ],
  },

  thankYou: {
    bgImage: '/assets/projects/capital-desk/cd-thankyou-bg.png',
    title: 'Thank You For Reading So Far!',
    subtitle: 'Ready for Your Next Favourite Collaboration?',
    cta: 'GET IN TOUCH NOW!',
    ctaHref: 'mailto:adityafaisal65@gmail.com',
  },
}
