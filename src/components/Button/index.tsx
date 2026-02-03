import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { SvgProps } from 'react-native-svg'
import { styles } from './styles'

type ButtonVariant = "primary" | "secondary"

type Props = TouchableOpacityProps & {
    label?: string
    variant?: ButtonVariant
    icon?: React.FC<SvgProps>
    width?: number
    height?: number 
}

export function Button({label = "", variant = "primary", icon: Icon, width, height, ...rest}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.container, styles[variant],{width: width, height: height}]} {...rest}>
        {Icon && (
          <Icon width={24}/>
        )}
        {label && (
          <Text style={[styles.text, styles[variant === "primary" ? "textPrimary" : "textSecondary"]]}>{label}</Text>

        )}
    </TouchableOpacity>
  )
}

