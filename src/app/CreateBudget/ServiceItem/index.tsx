import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import EditIcon from '@/assets/icons/edit-pen.svg'
import { formatCurrency } from '@/utils/formattCurrency'

type Props = {
    id: string
    title: string
    description?: string
    price: number
    quantity: number
    onEdit?: () => void
}

export function ServiceItem({ id, description, price, quantity, title, onEdit }: Props) {
  
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.price}>
          {formatCurrency(price / 100)}
        </Text>
        <Text style={styles.quantity}>Qt: {quantity}</Text>
      </View>
      {
        onEdit && (
        <TouchableOpacity onPress={onEdit} style={styles.editButton}>
          <EditIcon width={18} />
        </TouchableOpacity>
        )
      }
    </View>
  )
}
