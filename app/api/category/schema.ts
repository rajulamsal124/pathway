import { z } from "zod"

const schema = z.object({
  title: z.string().min(3).max(255),
  type: z.enum(["decision", "question"]),
  description: z.string().min(3).max(255),
})

export default schema
