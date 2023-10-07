import { z } from "zod"

const schema = z.object({
  title: z.string(),
  shortDescription: z.string(),
  description: z.string(),
  level: z.string(),
  duration: z.string(),
  providerName: z.string().optional(),
  providerDescription: z.string().optional(),
  providerUrl: z.string().optional(),
  rolesName: z.array(z.string()).optional(),
  rolesDescription: z.string().optional(),
  courseCategoryId: z.string().optional(),
  decisionPointId: z.string().optional(),
  rolesId: z.string().optional(),
  image: z.string(), // Assuming image is a File object
  roles: z.array(z.unknown()).optional(), // You can specify the actual type for IRole if you have it
  provider: z.array(z.unknown()).optional(), // You can specify the actual type for IProvider if you have it
  decisionPoints: z.array(z.unknown()).optional(), // You can specify the actual type for IDecisionPoint if you have it
  courseCategories: z.array(z.unknown()).optional(), // You can specify the actual type for ICourseCategory if you have it
})

export default schema
