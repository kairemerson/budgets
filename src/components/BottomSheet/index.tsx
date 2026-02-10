import { View, Text, Pressable, Animated, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { ReactNode, useEffect, useRef } from 'react'
import { styles } from './styles'
import CloseIcon from '@/assets/icons/close.svg'
import { Separator } from '../Separator'

type Props = {
  title?: string
  children: ReactNode
  onClose: () => void
}

export function BottomSheet({ title, children, onClose }: Props) {
  const translateY = useRef(new Animated.Value(300)).current

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <View style={styles.wrapper}>
      {/* Overlay */}
      <Pressable style={styles.overlay} onPress={onClose} />

      {/* Sheet */}
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateY }] },
        ]}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
          style={{ flexShrink: 1 }}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>

            <Pressable onPress={onClose}>
              <CloseIcon width={20} height={20} />
            </Pressable>
          </View>

          {/* Content */}
          <ScrollView
            style={styles.content}
            keyboardShouldPersistTaps="handled"
          >
            {children}
          </ScrollView>
          <Separator variant='full' style={{bottom: 98}}/>
        </KeyboardAvoidingView>
      </Animated.View>
    </View>
  )
}
