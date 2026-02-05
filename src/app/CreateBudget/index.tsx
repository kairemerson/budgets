import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from "@/assets/icons/backButton.svg"
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import { Status } from '@/types/Status'

import ShopIcon from "@/assets/icons/shop.svg"
import TagIcon from "@/assets/icons/tag.svg"
import NoteIcon from "@/assets/icons/note-with-text.svg"
import PlusIcon from '@/assets/icons/pluspurple.svg'
import CreditCardIcon from '@/assets/icons/credit-card.svg'
import CheckIcon from '@/assets/icons/check-white.svg'

import {Separator} from '@/components/Separator'
import { CardSection } from './CardSection'
import { Input } from '@/components/Input'
import { StatusSelector } from './StatusSelector'
import { Service } from '@/types/Service'
import { ServiceList } from './ServiceList.tsx'
import { Button } from '@/components/Button'
import { InvestmentSummary } from './InvestimentSummary'

const services: Service[] = [
  {
    id: '1',
    title: 'Design de interfaces',
    description: 'Criação de wireframes e protótipos',
    price: 3847.5,
    quantity: 1,
  },
  {
    id: '2',
    title: 'Implantação e suporte',
    description: 'Publicação nas lojas de aplicativos',
    price: 3847.5,
    quantity: 1,
  },
]

export default function CreateBudget() {
    const navigation = useNavigation()

    const [status, setStatus] = useState<Status>(Status.DRAFT)

    function handleStatusChange(newStatus: Status) {
        setStatus(newStatus)
    }

    
  return (
    <SafeAreaView style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Separator variant='full' style={{top: 42}}/>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <BackButton width={24} />
                        </TouchableOpacity>
                        <Text style={styles.textHeader}>Orçamento</Text>
                    </View>

                    <CardSection title='Informações gerais' icon={ShopIcon}>
                        <Input placeholder='Título' fullWidth />
                        <Input placeholder='Cliente' fullWidth/>
                    </CardSection>

                    <CardSection title='Status' icon={TagIcon}>
                        <StatusSelector value={status} onChange={handleStatusChange}/>
                    </CardSection>

                    <CardSection title='Serviços inclusos' icon={NoteIcon}>
                        <ServiceList
                            data={services}
                            onEditItem={(id) => console.log('Editar serviço', id)}
                        />
                        <Button label='Adicionar serviço' variant='secondary' icon={PlusIcon}/>
                    </CardSection>

                    <CardSection title="Investimento" icon={CreditCardIcon}>
                        <InvestmentSummary />
                    </CardSection>


                    <View style={styles.buttonActions}>
                        <Button label='Cancelar' variant='secondary'/>
                        <Button label='Salvar' icon={CheckIcon}/>
                    </View>

                <Separator variant='full' style={{bottom: 84}}/>

            </View>
        </ScrollView>
    </SafeAreaView>

  )
}

