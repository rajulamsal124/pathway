export interface Course {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  level: string;
  duration: string;
  providerName: string;
  providerUrl: string;
  providerDescription: string;
  rolesName: string;
  rolesDescription: string;
  courseCategoryID: number;
  decisionPointId: number;
  decisionPoint: string;
  imgae?: string;
}

export interface Error {
  message: string;
}
