import { Pressable, View } from 'react-native'
import { styles } from './styles'

type Props = {
  checked: boolean
  onPress: () => void
  tag: React.ReactNode
}

export function StatusOption({ checked, onPress, tag }: Props) {
    
  return (
    <Pressable style={styles.option} onPress={onPress}>
      <View style={[styles.radio, checked && styles.radioChecked]}>
        {checked && <View style={styles.radioDot} />}
      </View>

      {tag}
    </Pressable>
  )
}
