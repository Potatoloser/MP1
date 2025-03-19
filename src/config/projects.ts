// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'Honorable Mention - Mathematical Contest in Modeling',
    description: 'Awarded for outstanding performance in mathematical modeling.',
    date: '2019',
    location: 'USA',
  },
  {
    name: 'People’s Scholarship',
    description: 'Recognized for academic excellence at Harbin Institute of Technology.',
    date: '2017',
    location: 'Harbin, China',
  },
  {
    name: 'Top 5% - HIT Annual Project Competition',
    description: 'Achieved a top ranking in the university-wide project competition.',
    date: '2017',
    location: 'Harbin, China',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Option Pricing with Deep Learning',
    description: 'Developed 3D tensor-based deep learning models to predict option prices.',
    link: { href: 'arxiv.org/abs/2106.02916', label: 'Research Paper' },
    tags: ['Deep Learning', 'Finance', 'Option Pricing', 'Quantitative Research']
  },
  {
    name: 'Quant Research - Bank PD Prediction',
    description: 'Applied machine learning models to assess the default probability of banks.',
    link: { href: 'github.com/Potatoloser/QF-603', label: 'Project Overview' },
    tags: ['Machine Learning', 'Finance', 'Risk Analysis']
  },
  {
    name: 'Trading Strategy - News Sentiment Analysis',
    description: 'Utilized ChatGPT for news-driven trading signals.',
    link: { href: '', label: 'Strategy Insights' },
    tags: ['Algorithmic Trading', 'Natural Language Processing', 'Financial Markets']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'First Aid Certification & Training',
    description:
      'Certified first aider of the Red Cross Society (2019-2022). Organized and conducted over 10 first-aid training sessions for HIT students.',
    date: '2019-2022',
    location: 'Harbin, China',
  },
  {
    name: 'Loving Heart Society Founder',
    description:
      'Founded HIT Loving Heart Society in 2018, supporting the education of over 1000 children through mentorship and resource distribution.',
    date: '2018-Present',
    location: 'China',
  },

  {
    name: 'National Model United Nations - Group Leader',
    description:
      'Led a team in the NMUN conference, engaging in diplomatic debates and policy discussions.',
    date: '2019-04',
    location: 'China',
  },
]
