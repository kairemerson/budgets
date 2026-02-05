import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'

type Props = {
  value: string
  onChange: (value: string) => void
}

export function DiscountInput({ value, onChange }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        keyboardType="numeric"
        placeholder="0"
        style={styles.input}
      />

      <Text style={styles.suffix}>%</Text>
    </View>
  )
}
