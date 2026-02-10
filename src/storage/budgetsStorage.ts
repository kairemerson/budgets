import { Service } from "@/types/Service"
import { Status } from "@/types/Status"
import AsyncStorage from "@react-native-async-storage/async-storage"


const BUDGETS_STORAGE_KEY = "@budgets:budgets"

export type BudgetsStorage = {
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

async function get(): Promise<BudgetsStorage[]> {
    try {
        const storage = await AsyncStorage.getItem(BUDGETS_STORAGE_KEY)
        if (!storage) return []
        
        return storage ? JSON.parse(storage) : []
    } catch (error) {
        throw new Error("GET_BUDGETS: " + error)
    }

}

async function save(budget: BudgetsStorage): Promise<BudgetsStorage> {
  
  try {
    const storage = await get()

    const index = storage.findIndex(item => item.id === budget.id)

    let updatedBudgets: BudgetsStorage[]

    if (index >= 0) {
      // update
      updatedBudgets = [...storage]
      updatedBudgets[index] = {
        ...budget,
        updatedAt: new Date().toISOString(),
      }
    } else {
      // create
      updatedBudgets = [
        ...storage,
        {
          ...budget,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ]
    }

    await AsyncStorage.setItem(
      BUDGETS_STORAGE_KEY,
      JSON.stringify(updatedBudgets)
    )

    return budget
  } catch (error) {
    throw new Error("SAVE_BUDGETS: " + String(error))
  }
}

async function getById(id: string): Promise<BudgetsStorage | undefined> {
  const storage = await get()
  return storage.find(item => item.id === id)
}

async function remove(id: string): Promise<boolean> {
  try {
    const storage = await get()
    const filtered = storage.filter(item => item.id !== id)

    if (filtered.length === storage.length) {
      return false
    }

    await AsyncStorage.setItem(
      BUDGETS_STORAGE_KEY,
      JSON.stringify(filtered)
    )

    return true
    
  } catch (error) {
    throw new Error('REMOVE_BUDGET: ' + String(error))
  }
}

export const budgetStorage = {
    get,
    save,
    getById,
    remove
}