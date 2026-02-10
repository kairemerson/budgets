import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'

type Props = {
  value: number
  onChange: (value: number) => void
}

export function DiscountInput({ value, onChange }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        value={String(value)}
         onChangeText={(text) => {
          const numericValue = Number(text.replace(',', '.'))
          onChange(isNaN(numericValue) ? 0 : numericValue)
        }}
        keyboardType="numeric"
        placeholder="0"
        style={styles.input}
      />

      <Text style={styles.suffix}>%</Text>
    </View>
  )
}
