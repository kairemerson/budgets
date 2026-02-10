import { BudgetsStorage } from "@/storage/budgetsStorage"

export function calcBudgetTotal(budget: BudgetsStorage) {
  const servicesTotal = budget.services.reduce((sum, service) => {
    return sum + service.price * service.quantity
  }, 0)

  const discount = budget.discountPct
    ? servicesTotal * (budget.discountPct / 100)
    : 0

  return servicesTotal - discount
}