import { View, Text } from 'react-native'
import { styles } from './styles'
import CreditIcon from '@/assets/icons/credit-card.svg'
import { theme } from '@/styles/theme'
import { formatCurrency } from '@/utils/formattCurrency'
import { Budget } from '@/types/Budget'
import { useMemo } from 'react'

type Props = {
  budget: Budget
}

export function InvestmentSummaryDetails({budget}: Props) {

  const discountPct = budget.discountPct ?? 0

  const { subtotal, discountValue, total } = useMemo(() => {

  const subtotal = budget.services.reduce(
    (total, service) => total + service.price * service.quantity,
    0
  )

  const discountPct = budget.discountPct ?? 0
  const discountValue = subtotal * (discountPct / 100)
  const total = subtotal - discountValue

  return {
    subtotal,
    discountValue,
    total
  }
}, [budget.services, budget.discountPct])

  return (
    <View style={styles.container}>
      {/* Left icon */}
      <View style={styles.iconBox}>
        <CreditIcon width={18} height={18} fill={theme.colors.primary[600]} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>{formatCurrency(subtotal / 100)}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.inline}>
            <Text style={styles.label}>Desconto</Text>

            {discountPct > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{discountPct}% off</Text>
              </View>

            )}
            
          </View>

          <Text style={styles.discountValue}>
            {discountValue
              ? `- ${formatCurrency(discountValue / 100)}`
              : '-'}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.totalLabel}>Investimento total</Text>
          <Text style={styles.totalValue}>{formatCurrency(total / 100)}</Text>
        </View>
      </View>
    </View>
  )
}

