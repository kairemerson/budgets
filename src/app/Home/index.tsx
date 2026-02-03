import { Text, View } from 'react-native'
import React from 'react'
import { Button } from '@/components/Button'
import { styles } from './styles'
import { Input } from '@/components/Input'

export function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button label='Teste'/>
      <Input placeholder='Título ou cliente'/>
    </View>
  )
}

