import { Text, View } from 'react-native'

import { ReactNode } from 'react'
import { SvgProps } from 'react-native-svg'
import { styles } from './styles'
import { theme } from '@/styles/theme'

export type CardSectionProps = {
  title: string
  icon?: React.FC<SvgProps>
  children: ReactNode
}

export function CardSection({ title, icon: Icon, children }: CardSectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {Icon && (
          <Icon
            width={18}
            height={18}
            fill={theme.colors.primary[500]}
          />
        )}

        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.content}>
        {children}
      </View>
    </View>
  )
}

