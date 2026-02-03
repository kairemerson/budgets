import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Status } from '@/types/Status'
import {TAgStatus} from '@/components/TagStatus'

type BudgetCard = {
  title: string
  subtitle: string
  status: Status
  price: string
}

export default function BudgetCard({price, subtitle, status, title}: BudgetCard) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text  style={styles.title}>{title}</Text>
        <Text  style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.priceContainer}>
        <TAgStatus status={status}/>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  )
}

