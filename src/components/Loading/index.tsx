import { View, ActivityIndicator } from 'react-native'
import { theme } from '@/styles/theme'

type Props = {
  variant?: "primary" | "secondary"
  fullWidth?: boolean
}

export function Loading({variant = "primary", fullWidth = false}: Props) {
  return (
    <View
      style={{
        flex: fullWidth ? 1 : undefined,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator
        size={fullWidth ? "large" : "small"}
        color={variant === "primary" ? theme.colors.primary[600] : theme.colors.white}
      />
    </View>
  )
}
