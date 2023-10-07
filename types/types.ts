export interface ICourse {
  id: string
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
  image?: string
  // roles?: IRole[]
  // provider?: IProvider[]
  // decisionPoints?: IDecisionPoint[]
  // courseCategories?: ICourseCategory[]
  value?: number
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
  id: string
  title: string
}
export interface IDecisionPoint {
  id: number
  decisionPointName: string
  decisionPointDescription: string
}
export interface IError {
  error: string
}
// Types definitions for the admin
export interface ICourseForm {
  title: string
  shortDescription: string
  description: string
  level: string
  duration: string
  image: string
  courseCategoryId: string
  category: ICourseCategory
}
