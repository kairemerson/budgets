import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BackIcon from '@/assets/icons/backButton.svg'
import { styles } from './styles'
import { Separator } from '@/components/Separator'
import { TAgStatus } from '@/components/TagStatus'
import { Status } from '@/types/Status'

type Props = {
  title: string
  status: Status
}

export function Header({ title, status }: Props) {
  const navigation = useNavigation()

  return (
    <View style={styles.wrapper}>
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon width={24} />
                </TouchableOpacity>

                <Text style={styles.title} numberOfLines={1}>
                {title}
                </Text>
            </View>

            {/* Direita */}
            <TAgStatus status={status}/>
        </View>

      
    </View>
  )
}
