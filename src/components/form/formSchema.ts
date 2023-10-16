import * as z from "zod";

const formSchema = z.object({
    storeName: z.string().min(2).max(50),
  })

export default formSchema;