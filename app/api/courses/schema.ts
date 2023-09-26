import { z } from "zod"

const schema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(3).max(255),
})

export default schema
