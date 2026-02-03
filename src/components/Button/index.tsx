import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

type ButtonVariant = "primary" | "secondary"

type Props = TouchableOpacityProps & {
    label: string
    variant?: ButtonVariant
}

export function Button({label, variant = "primary", ...rest}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.container, styles[variant]]} {...rest}>
        <Text style={[styles.text, styles[variant === "primary" ? "textPrimary" : "textSecondary"]]}>{label}</Text>
    </TouchableOpacity>
  )
}

