import React, { useCallback, useState } from 'react'
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { Status } from '@/types/Status'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import {Separator} from '@/components/Separator'
import BudgetCard from './BudgetCard'

import PlusIcon from "@/assets/icons/plus.svg"
import FilterIcon from "@/assets/icons/filter.svg"
import Filter2Icon from "@/assets/icons/filter2.svg"

import {budgetStorage, BudgetsStorage} from "@/storage/budgetsStorage"

import { useBottomSheet } from '@/contexts/BottomSheetContext'
import { Filters } from './Filters'
import { calcBudgetTotal } from '@/utils/calcBudgetTotal'
import { theme } from '@/styles/theme'
 
type OrderBy = "recent" | "oldest" | "higher" | "lower"

type FiltersState = {
  status: Status[]
  orderBy: OrderBy
}

export function Home() {
  const navigation = useNavigation()

  const [budgets, setBudgets] = useState<BudgetsStorage[]>([])
  console.log("HOME budgets: ", budgets);

  const {open, close} = useBottomSheet()

  const [filters, setFilters] = useState<FiltersState>({
  status: [],
  orderBy: "recent",
})

  
  async function fetchBudgets() {
    try {
      const response = await budgetStorage.get()
      
      setBudgets(response)
      
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível buscar os orçamentos!")
      
    }
  }

  function handleOpenFilters() {
    open({
      title: "Filtrar e ordenar",
      content: (
        <Filters value={filters} onApply={(newFilters) => {
          setFilters(newFilters)
          close()
        }}/>
      )
    })
  }

  const filteredBudgets = budgets
  .filter((budget) => {
    if (filters.status.length === 0) return true
    return filters.status.includes(budget.status)
  })
  .sort((a, b) => {
    const dateA = new Date(a.createdAt ?? a.updatedAt).getTime()
    const dateB = new Date(b.createdAt ?? b.updatedAt).getTime()

    switch (filters.orderBy) {
      case "recent":
        return dateB - dateA

      case "oldest":
        return dateA - dateB

      case "higher":
        return calcBudgetTotal(b) - calcBudgetTotal(a)

      case "lower":
        return calcBudgetTotal(a) - calcBudgetTotal(b)

      default:
        return 0
    }
  })


  useFocusEffect(
    useCallback(() => {
      fetchBudgets()
    }, [])
  )

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <View>
                <Text style={styles.title}>Orçamentos</Text>
                <Text style={styles.subtitle}>Você tem 1 item em rascunho</Text>
            </View>
            <Button label='Novo' icon={PlusIcon} width={98} height={48} onPress={() => navigation.navigate("budgetForm")}/>
        </View>
          <Separator variant='full' style={{top: 140}}/>

        <View style={styles.inputContainer}>
          <Filter2Icon fill={theme.colors.error.dark} color={theme.colors.error.dark}/>
          <Input placeholder='Título ou cliente' showSearchIcon={true}/>
          <Button variant={filters.status.length > 0 || filters.orderBy !== "recent" ? "primary" : "secondary"} icon={FilterIcon} onPress={handleOpenFilters}/>
        </View>
        


        <FlatList
          data={filteredBudgets}
          style={{marginTop: 16}}
          contentContainerStyle={{gap: 8}}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("details", {id: item.id})}>
              <BudgetCard budget={item}/>
            </TouchableOpacity>

          )}
          ListEmptyComponent={<Text style={styles.emptyText}>Nenhum orçamento cadastrado, adicione um orçamento</Text>}
        />
        
    </SafeAreaView>
  )
}

