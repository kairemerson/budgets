import { z } from "zod"
import { Status } from "@/types/Status"
import { serviceSchema } from "@/components/ServiceForm/service.schema"


const serviceWithIdSchema = serviceSchema.extend({
  id: z.string(),
})

export const budgetSchema = z.object({
    title: z.string().min(1, "Título obrigatório"),
    client: z.string().min(1, "Cliente obrigatório"),
    status: z.nativeEnum(Status),
    services: z.array(serviceWithIdSchema).min(1, "Adicione ao menos um serviço"),
    discountPct: z.number().min(0).max(100).optional()
})

export type BudgetFormData = z.infer<typeof budgetSchema>
