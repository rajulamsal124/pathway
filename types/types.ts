export interface ICourse {
  title: string
  shortDescription: string
  description: string
  level: string
  duration: string
  providerName?: string
  providerDescription?: string
  providerUrl?: string
  rolesName?: string[]
  rolesDescription?: string
  courseCategoryId?: string
  decisionPointId?: string
  rolesId?: string
  image: Buffer
  roles?: IRole[]
  provider?: IProvider[]
  decisionPoints?: IDecisionPoint[]
  courseCategories?: ICourseCategory[]
}
export interface ICourseResponse {
  courses?: ICourse[]
}
export interface IRole {
  id: number
  rolesName: string
  rolesDescription: string
}
export interface IProvider {
  id: number
  providerName: string
  providerDescription: string
  providerUrl: string
}
export interface ICourseCategory {
  id: number
  categoryName: string
  categoryDescription: string
  type: string
}
export interface IDecisionPoint {
  id: number
  decisionPointName: string
  decisionPointDescription: string
}
export interface IError {
  error: string
}
