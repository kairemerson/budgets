import { Status } from './Status'
import { Service } from './Service'

export interface Budget {
  id: string
  client: string
  title: string
  services: Service[]

  /** desconto em percentual (ex: 8 = 8%) */
  discountPct?: number

  status: Status

  createdAt: string
  updatedAt: string 
}
