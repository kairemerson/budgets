import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { SvgProps } from 'react-native-svg'
import { styles } from './styles'
import { theme } from '@/styles/theme'
import { Loading } from '../Loading'

type ButtonVariant = "primary" | "secondary"

type Props = TouchableOpacityProps & {
    label?: string
    variant?: ButtonVariant
    icon?: React.FC<SvgProps>
    width?: number
    height?: number 
}

export function Button({label = "", variant = "primary", icon: Icon, width, height, onPress, ...rest}: Props) {
  const {disabled} = {...rest}
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.container, styles[variant],{width: width, height: height}]} onPress={onPress} {...rest}>
        
        {disabled ? (
          <Loading variant={variant === "primary" ? "secondary" : "primary"}/>
        ) : (
          <>
            {Icon && (
              <Icon  width={24} height={24} color={variant === "primary" ? theme.colors.white : theme.colors.primary[600]}/>
            )}
            {label && (
              <Text style={[styles.text, styles[variant === "primary" ? "textPrimary" : "textSecondary"]]}>{label}</Text>
            )}
          </>

        )}
    </TouchableOpacity>
  )
}


