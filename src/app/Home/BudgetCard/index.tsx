import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Status } from '@/types/Status'
import {TAgStatus} from '@/components/TagStatus'
import { Budget } from '@/types/Budget'
import { formatCurrency } from '@/utils/formattCurrency'
import { calcBudgetTotal } from '@/utils/calcBudgetTotal'

type BudgetCard = {
  budget: Budget
}

export default function BudgetCard({budget}: BudgetCard) {

  const {title, client, status, services} = budget

  const totalPrice = calcBudgetTotal(budget)

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text  style={styles.title}>{title}</Text>
        <Text  style={styles.subtitle}>{client}</Text>
      </View>
      <View style={styles.priceContainer}>
        <TAgStatus status={status}/>
        <Text style={styles.price}>{formatCurrency(totalPrice / 100)}</Text>
      </View>
    </View>
  )
}

