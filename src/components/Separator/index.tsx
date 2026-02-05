import { View, ViewStyle } from 'react-native'
import { styles } from './styles'

type SeparatorVariant = 'full' | 'card' | 'cardFull'

type Props = {
  variant?: SeparatorVariant
  style?: ViewStyle
}

export function Separator({ variant = 'card', style }: Props) {
  return (
    <View
      style={[
        styles.base,
        variant === 'full' && styles.full,
        variant === 'cardFull' && styles.cardFull,
        style,
      ]}
    />
  )
}
