import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import EditIcon from '@/assets/icons/edit-pen.svg'

type Props = {
  service: {
    title: string
    description: string
    price: number
    quantity: number
  }
  onEdit?: () => void
}

export function ServiceItem({ service, onEdit }: Props) {
  
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text numberOfLines={1} style={styles.title}>{service.title}</Text>
        <Text style={styles.description}>{service.description}</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.price}>
          R$ {service.price?.toFixed(2).replace('.', ',')}
        </Text>
        <Text style={styles.quantity}>Qt: {service.quantity}</Text>
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
