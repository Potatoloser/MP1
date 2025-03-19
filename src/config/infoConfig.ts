export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Zhou Shen'
export const headline = 'Quantitative Analyst at Cargill International Trading'
export const introduction =
  "Hi, I'm Zhou Shen. I have a background in Quantitative Finance and Statistics, with experience in quantitative research, trading strategies, and financial modeling. I currently work as a Quantitative Analyst at Cargill International Trading."
export const email = 'zhoushen1999@outlook.com'
export const githubUsername = 'Potatoloser'

// about page
export const aboutMeHeadline = 'Who Am I?'
export const aboutParagraphs = [
  "I'm Zhou Shen, a Quantitative Analyst specializing in developing trading strategies and financial modeling. I earned my Master's degree in Quantitative Finance from Singapore Management University and my Bachelor's degree in Statistics from Harbin Institute of Technology.",
  'My work involves data-driven decision-making, building automated trading workflows, and leveraging AI for market analysis. I have experience with Python, R, MATLAB, and various financial databases.',
  "This website serves as my personal space to share insights about quantitative finance, algorithmic trading, and programming.",
]

// blog
export const blogHeadLine = "Thoughts on Finance, Trading, and AI."
export const blogIntro =
  "I write about quantitative finance, algorithmic trading, machine learning, and related topics."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/Potatoloser',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/statistics-student-zhoushen/',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'python',
  'r',
  'cplusplus',
  'mysql',
  'sqlite',
  'matlab',
  'tableau',
  'git',
  'github',
  'visualstudiocode',
  'CDP'
]
