import { View, Text } from 'react-native'
import { styles } from './styles'
import CreditIcon from '@/assets/icons/credit-card.svg'
import { theme } from '@/styles/theme'

type Props = {
  subtotal: number
  discountPct?: number
  discountValue?: number
  total: number
}

export function InvestmentSummaryDetails({
  subtotal,
  discountPct,
  discountValue,
  total,
}: Props) {
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
          <Text style={styles.value}>{formatCurrency(subtotal)}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.inline}>
            <Text style={styles.label}>Desconto</Text>

            {discountPct && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{discountPct}% off</Text>
              </View>
            )}
          </View>

          <Text style={styles.discountValue}>
            {discountValue
              ? `- ${formatCurrency(discountValue)}`
              : '-'}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.totalLabel}>Investimento total</Text>
          <Text style={styles.totalValue}>{formatCurrency(total)}</Text>
        </View>
      </View>
    </View>
  )
}

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
