export const digiroomData = {
  hero: {
    image: '/assets/projects/digiroom/digiroom-hero.png',
    backLabel: 'Digiroom Apps "Simulasi Kredit" Feature',
    title: 'Digiroom Apps "Simulasi Kredit" Feature',
    description:
      'A real project focused on improving the Credit Simulation feature in Digiroom by Auto2000 to ensure it stays up to date, delivers a better user experience, and drives measurable business impact',
    tags: ['Automotive', 'Mobile app', 'Website'],
  },

  meta: {
    product: 'Auto2000 Mobile Application',
    role: 'UI/UX Designer — Visual Design, User Flows, Rapid Prototyping',
    company: 'PT Astra International — Auto2000 Toyota',
    timeline: 'May 2025 - June 2025',
    tools: 'Figma, Notion, Jira',
    team: 'Business Analyst, Project Manager, Developers.',
    videoLabel: 'Check Here',
    videoUrl: '#',
    playstore: '#',
    appstore: '#',
  },

  projectBackground: {
    title: 'Project Background',
    paragraphs: [
      'Auto2000 is Toyota\'s official service platform in Indonesia, offering a fully digital ecosystem for purchasing and maintaining vehicles.',
      'One of its key features, the Digiroom <strong>Credit Simulation</strong>, helps users estimate monthly payments based on their financial preferences. However, the existing calculator relied on outdated leasing rates and limited input fields, leading to inaccurate results and confusion for users. This project was initiated to rebuild the simulation experience with accurate data, clearer logic, and a more user-friendly flow.',
    ],
    theProblem: {
      title: 'The Problem',
      body: 'The existing calculator was still using outdated leasing data from 2020, making results inaccurate. Input options were limited and did <strong>not include flexible DP (%), customizable tenors by type of car, admin fees, installment, or insurance components.</strong> Users often misunderstood the total cost, reducing trust and lowering conversion rates during the purchase process.',
    },
    theGoals: {
      title: 'The Goals & Business Objective',
      body: 'The project focused on delivering a more accurate and user-friendly credit simulation aligned with current leasing standards. The goal was to <strong>simplify the flow, reduce cognitive load, and ensure transparency while laying the groundwork for features like credit simulation, installment calculation, down payment arrangements.</strong> Users needed a faster way to compare scenarios without re-entering data and clearer guidance for financial terms, while the business required trustworthy, reliable simulations to strengthen credibility and improve conversion.',
    },
  },

  problemDefinition: {
    title: 'Problem Definition',
    image: '/assets/projects/digiroom/digiroom-problem.png',
    paragraphs: [
      'Auto2000 is Toyota\'s official automotive service platform in Indonesia, operated by PT Astra International Tbk. As one of the largest Toyota dealer networks in the country, Auto2000 provides a complete end-to-end ecosystem that supports customers throughout their vehicle ownership journey.',
      'Within this ecosystem, Digiroom offers a <strong>"Credit Simulation"</strong> calculator that helps users estimate monthly payments based on their budget and preferred financing options. However, the existing experience had <strong>two major challenges</strong>:',
    ],
    bullets: [
      'Leasing rates were outdated and no longer accurate',
      'The input fields were not detailed enough, making it difficult for users to generate precise and reliable calculations.',
    ],
    footer: 'These issues created friction in the decision-making process and reduced user confidence during the purchasing journey.',
  },

  research: {
    title: 'Research & Analysis',
    userInsight: {
      title: 'User Insight',
      bullets: [
        'Users wanted to easily test multiple credit scenarios (DP %, tenor, model, variant) without re-entering data.',
        'Many users felt confused due to unclear terms, rigid inputs, and inconsistent monthly payment results.',
        'Analytics indicated high drop-off rates on the simulation step, signaling low clarity and trust in the results.',
      ],
    },
    businessInsight: {
      title: 'Business Insight',
      bullets: [
        'The simulation logic no longer aligned with current leasing standards, resulting in inaccuracies that impacted sales credibility.',
        'Internal teams highlighted the need for clearer cost breakdowns and more transparent rule communication.',
        'A scalable simulation flow was required to support future integrations: checkout, trade-in, promotions, and pre-approval.',
      ],
    },
    quote: 'Good design isn\'t just beautiful it clarifies complexity and drives better outcomes for users and the business',
  },

  benchmarking: {
    title: 'Benchmarking',
    logo: '/assets/projects/digiroom/digiroom-seva-logo.png',
    intro: 'For benchmarking, SEVA by Astra International was used as the primary reference due to its standardized calculation logic and real-time data integration, because :',
    bullets: [
      'SEVA uses standardized, up-to-date formulas adopted by major leasing institutions, ensuring calculation accuracy.',
      'Its simulation flow exposes core UX patterns structured breakdowns, progressive inputs, scenario flexibility that Digiroom lacked.',
      'As an internal Astra product, it offers high contextual relevance and ensures alignment across business units.',
    ],
  },

  heuristic: {
    title: 'Defining The First Step',
    subtitle: 'Doing the Heuristic Evaluation for "Simulasi Kredit"',
    subtitleDesc: 'This evaluation conducted on the Product Detail Page from Digiroom by Auto2000. This result use to ensure the design match by user needs and goals business.',
    mockupImage: '/assets/projects/digiroom/digiroom-heuristic.png',
    cards: [
      {
        icon: '✦',
        title: 'Flexibility and Efficiency of Use',
        body: 'The simulation is limited to a single vehicle variant and cannot be changed, even though each model and color may have different pricing.',
      },
      {
        icon: '✦',
        title: 'User Control and Freedom',
        body: 'Users were limited to preset DP percentages and fixed tenors, with no option to input custom amounts or add details like insurance, admin fees, or dealer promos.\n\nThere was also no reset or undo function, making it difficult to quickly adjust inputs after submission.',
      },
      {
        icon: '✦',
        title: 'Flexibility and Efficiency of Use',
        body: "The UI provides a small disclaimer about price changes and interest rates, but there's no clear indicator showing whether the rates used are up to date or refreshed automatically.",
      },
      {
        icon: '✦',
        title: 'Visibility of System Status',
        body: 'The system provided no clear feedback or status after running the simulation, leaving users unsure about the outcome of their inputs or which installment option best matched their profile',
      },
    ],
    summary: 'The system lacked transparency on rate updates, offered limited vehicle and input options, and provided no clear recommendations or error validation. The solution was to introduce rate indicators, detailed breakdowns, richer input options, and actionable results with automatic validations creating a more accurate and reliable simulation experience.',
    flowTitle: 'Define Informatics Architecture for Simulasi Kredit',
    flowDesc: 'This user flow, starting from the PDP New Car in Digiroom by Auto2000, is designed to provide a clear hierarchy, intuitive navigation, and seamless alignment with both user needs and business goals.',
    flowImage: '/assets/projects/digiroom/digiroom-flow.png',
  },

  solution: {
    title: "Let's jump into the Solution...",
    heroImage: '/assets/projects/digiroom/digiroom-solution-hero.png',
    intro: 'These insights informed a set of design solutions aimed at enhancing flexibility, improving accuracy, and giving users greater control over their credit simulations.',
    items: [
      {
        label: 'Flexibility and Efficiency of Use',
        mockup: '/assets/projects/digiroom/digiroom-solution-1.png',
        description: "In the new design, a 'Select Variant' form was added to select a specific OTR price, along with custom and color checkboxes to give users more flexibility in simulating their choice.",
        align: 'right',
      },
      {
        label: 'User Control and Freedom',
        mockup: '/assets/projects/digiroom/digiroom-solution-2.png',
        description: 'A new Manual Input section was added to the Down Payment selection, allowing users to enter their own preferred DP amount. This gives users greater flexibility and freedom when exploring credit simulation options for their desired car.',
        align: 'left',
      },
      {
        label: 'New Control and Freedom',
        mockup: '/assets/projects/digiroom/digiroom-solution-3.png',
        description: 'An Insurance Payment section was also added, giving users more freedom to choose their preferred insurance to be alongside their installment plan. A Monthly Income field is included to personalize the credit simulation, ensuring the results align with the user\'s financial capability.',
        align: 'right',
      },
    ],
  },

  otherDetails: {
    title: 'And this for the other details ........',
    indicatorTitle: 'Information Indicator Status Credit',
    indicatorImage: '/assets/projects/digiroom/digiroom-indicator.png',
    indicatorDesc: [
      "The installment recommendation in the credit simulation serves as an informational guide not a restriction.",
      "Labels like 'Mudah', 'Agak Sulit', or 'Sulit' simply indicate the feasibility of the installment based on the user's income ratio and age.",
      "Users can still choose any tenor or monthly installment they prefer, even if the system marks it as 'Sulit'.",
      'This feature is designed to help users make more informed decisions by understanding their financial capacity before proceeding with the purchase.',
    ],
    helperTitle: 'Helper information is included to make it easier for users to understand their requirements',
    helperImage: '/assets/projects/digiroom/digiroom-helper.png',
    helperDesc: "Additional details are provided to help users better understand each step. The location selection includes clear helper text as shown in the design, while other key terms such as 'DP', 'Pembayaran Cicilan Pertama', and 'Pilihan Paket Cicilan' are explained through bottom sheets. These explanations aim to give users clearer guidance, helping them understand what each option means and what actions they need to take",
  },

  impact: {
    title: 'Estimated Impact (Based on UX Heuristics)',
    logo: '/assets/projects/digiroom/digiroom-logo.png',
    intro: 'Because this redesign was completed without access to real product analytics or formal usability testing, the projected impact is estimated using UX heuristic evaluation, industry benchmarks, and patterns from similar financial simulation tools.',
    body: 'Based on these methods, the redesigned credit simulation flow is expected to:',
    bullets: [
      'Reduce user input errors through clearer field hierarchy and helper information.',
      'Increase simulation completion rates by simplifying the decision-making steps and minimizing cognitive load.',
      'Improve user confidence by adding transparent rate details and structured output breakdowns.',
      'Enhance overall usability through more consistent interaction patterns, improved readability, and clearer feedback during simulation.',
    ],
  },
}
