import { Service } from "@/types/Service";

export function calcServicesTotal(services: Service[]) {
  return services.reduce(
    (total, service) => total + service.price * service.quantity,
    0
  )
}
