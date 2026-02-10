import { Text, View } from 'react-native'
import { styles } from './styles'
import { DiscountInput } from '@/components/DiscountInput'
import { useMemo, useState } from 'react'
import { Service } from '@/types/Service'
import { formatCurrency } from '@/utils/formattCurrency'
import { Input } from '@/components/Input'

type Props = {
  services: Service[]
  discountPct: number
  onChangeDiscount: (value: number) => void
}

export function InvestmentSummary({services, discountPct, onChangeDiscount}: Props) {
  
    const { subtotal, discountValue, total } = useMemo(() => {
  
    const subtotal = services.reduce(
      (total, service) => total + service.price * service.quantity,
      0
    )
  
    const discountValue = subtotal * (discountPct / 100)
    const total = subtotal - discountValue
  
    return {
      subtotal,
      discountValue,
      total
    }
  }, [services, discountPct])

  return (
    <>
      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <View style={styles.inline}>
          <Text style={styles.muted}>{services.length} itens</Text>
          <Text style={styles.value}>{formatCurrency(subtotal)}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Desconto</Text>
        <View style={styles.inline}>
          <DiscountInput
            value={discountPct}
            onChange={onChangeDiscount}
          />
          <Text style={styles.discountValue}>- {formatCurrency(discountValue)}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.totalLabel}>Valor total</Text>
        <Text style={styles.totalValue}>{formatCurrency(total)}</Text>
      </View>
    </>
  )
}
