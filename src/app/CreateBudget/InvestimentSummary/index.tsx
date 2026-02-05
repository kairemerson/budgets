import { Text, View } from 'react-native'
import { styles } from './styles'
import { DiscountInput } from '@/components/DiscountInput'
import { useState } from 'react'

export function InvestmentSummary() {
  const [discount, setDiscount] = useState('8')

  return (
    <>
      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <View style={styles.inline}>
          <Text style={styles.muted}>8 itens</Text>
          <Text style={styles.value}>R$ 3.847,50</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Desconto</Text>
        <View style={styles.inline}>
          <DiscountInput
            value={discount}
            onChange={setDiscount}
          />
          <Text style={styles.discountValue}>- R$ 200,00</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.totalLabel}>Valor total</Text>
        <Text style={styles.totalValue}>R$ 3.847,50</Text>
      </View>
    </>
  )
}
