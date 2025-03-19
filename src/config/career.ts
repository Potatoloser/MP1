// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}

export const careerList: Array<CareerItemType> = [
  {
    company: 'Cargill International Trading',
    title: 'Quantitative Analyst',
    logo: 'bank',
    start: '2022',
    end: 'Present'
  }
]
