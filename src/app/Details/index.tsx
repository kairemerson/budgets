import { FlatList, ScrollView, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Status } from '@/types/Status'
import { Service } from '@/types/Service'

import { Header } from './Header'
import { BudgetDetailsCard } from './BudgetDetailsCard'
import { CardSection } from '../CreateBudget/CardSection'
import { ServiceItem } from '../CreateBudget/ServiceItem'
import { Button } from '@/components/Button'
import { InvestmentSummaryDetails } from './InvestmentSummaryDetails'

import NoteIcon from "@/assets/icons/note-with-text.svg"
import CopyIcon from "@/assets/icons/copy.svg"
import EditIcon from "@/assets/icons/edit-pen.svg"
import TrashIcon from "@/assets/icons/trash-2.svg"
import ShareIcon from "@/assets/icons/share.svg"
import { Separator } from '@/components/Separator'

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

export default function Details() {
  return (
    <SafeAreaView >
        <ScrollView>
            <View style={{paddingHorizontal: 20, gap: 20}}>
                <Separator variant="full" style={{top: 52}}/>
                <Header title='Orçamento#123' status={Status.SENT}/>
                <BudgetDetailsCard
                    budget={{
                        id: '1',
                        title: 'Desenvolvimento de aplicativo de loja online',
                        client: 'Soluções Tecnológicas Beta',
                        services: [],
                        status: Status.SENT,
                        createdAt: '2024-08-22',
                        updatedAt: '2024-08-25',
                    }}
                />

                <CardSection title='Serviços inclusos' icon={NoteIcon}>
                    <FlatList
                        data={services}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <ServiceItem service={item}/>
                        )}
                        scrollEnabled={false}
                    />
                </CardSection>
                
                <InvestmentSummaryDetails subtotal={4050} discountPct={5} discountValue={200} total={3847.5}/>
                <Separator variant='full' style={{bottom: 70}}/>
                <View style={styles.actionsContainer}>
                    <View style={styles.buttonsContainer}>
                        <Button icon={TrashIcon} variant='secondary'/>
                        <Button icon={CopyIcon} variant='secondary'/>
                        <Button icon={EditIcon} variant='secondary'/>
                    </View>
                    <Button label='Compartilhar' icon={ShareIcon}/>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

