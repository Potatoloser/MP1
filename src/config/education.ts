
// education 
// education 
export type EducationItemType = {
  school: string
  major: string
  image?: string
  logo: string
  start: string
  end: string
}

export const educationList: Array<EducationItemType> = [
  {
    school: 'Singapore Management University',
    major: 'MSc in Quantitative Finance',
    logo: 'college',
    start: '2021',
    end: '2022'
  },
  {
    school: 'Harbin Institute of Technology',
    major: 'BSc in Statistics',
    logo: 'college',
    start: '2017',
    end: '2021'
  }
]