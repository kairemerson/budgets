import { BudgetsStorage } from "@/storage/budgetsStorage"

export function calcBudgetTotal(budget: BudgetsStorage) {
  const subtotal = budget.services.reduce(
    (sum, service) => sum + service.price * service.quantity,
    0
  )

  const discount = budget.discountPct ?? 0

  return subtotal - subtotal * (discount / 100)


}
