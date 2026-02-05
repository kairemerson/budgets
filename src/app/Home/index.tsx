import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import React from 'react'
import { Button } from '@/components/Button'
import { styles } from './styles'
import { Input } from '@/components/Input'

import PlusIcon from "@/assets/icons/plus.svg"
import FilterIcon from "@/assets/icons/filter.svg"
import {Separator} from '@/components/Separator'
import BudgetCard from './BudgetCard'
import { Status } from '@/types/Status'

export function Home() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <View>
                <Text style={styles.title}>Orçamentos</Text>
                <Text style={styles.subtitle}>Você tem 1 item em rascunho</Text>
            </View>
            <Button label='Novo' icon={PlusIcon} width={98} height={48} onPress={() => navigation.navigate("create")}/>
        </View>
          <Separator variant='full' style={{top: 140}}/>
        <View style={styles.inputContainer}>
          <Input placeholder='Título ou cliente' showSearchIcon={true}/>
          <Button variant='secondary' icon={FilterIcon} onPress={()=> navigation.navigate("details")}/>
        </View>

        <BudgetCard price='R$ 22.300,00' title='Desenvolvimento de aplicativo de loja online' subtitle='Soluções Tecnologicas' status={Status.APPROVED}/>
        
    </SafeAreaView>
  )
}

