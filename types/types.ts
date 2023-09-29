export interface ICourse {
  id: number
  title: string
  shortDescription: string
  description: string
  level: string
  duration: string
  providerName: string
  providerDescription: string
  providerUrl: string
  rolesName: string[]
  rolesDescription: string
  image: Buffer
}
