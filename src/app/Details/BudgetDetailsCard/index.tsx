import { View, Text } from 'react-native'
import { styles } from './styles'
import { Budget } from '@/types/Budget'
import ShopIcon from '@/assets/icons/shop.svg'
import { theme } from '@/styles/theme'

type Props = {
  budget: Budget
}

export function BudgetDetailsCard({ budget }: Props) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconBox}>
          <ShopIcon width={18} height={18} fill={theme.colors.primary[600]} />
        </View>

        <Text style={styles.title} numberOfLines={2}>
          {budget.title}
        </Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.label}>Cliente</Text>
        <Text style={styles.value}>{budget.client}</Text>

        <View style={styles.dates}>
          <View>
            <Text style={styles.label}>Criado em</Text>
            <Text style={styles.value}>
              {formatDate(budget.createdAt)}
            </Text>
          </View>

          <View>
            <Text style={styles.label}>Atualizado em</Text>
            <Text style={styles.value}>
              {formatDate(budget.updatedAt)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('pt-BR')
}
