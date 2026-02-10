import { z } from 'zod'

export const serviceSchema = z.object({
  title: z.string().min(1, "Informe o nome do serviço"),
  description: z.string().optional(),
  price: z.number().min(0.01, "Informe um valor válido"),
  quantity: z.number().min(1, "Quantidade mínima é 1"),
})

export type ServiceFormInput = z.input<typeof serviceSchema>
export type ServiceFormData  = z.output<typeof serviceSchema>