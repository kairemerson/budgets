import { Alert, FlatList, ScrollView, Share, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
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
import { StackRoutesList } from '@/routes/StackRoutes'
import { budgetStorage } from '@/storage/budgetsStorage'
import { Budget } from '@/types/Budget'
import { Loading } from '@/components/Loading'
import { calcBudgetTotal } from '@/utils/calcBudgetTotal'
import { calcServicesTotal } from '@/utils/calcServicesTotal'
import { formatCurrency } from '@/utils/formattCurrency'

type DetailsParams = RouteProp<StackRoutesList, "details">

export default function Details() {

    const [budget, setBudget] = useState<Budget>()

    const navigation = useNavigation()
    const {params} = useRoute<DetailsParams>() 
    const {id} = params    

    async function fetchDetails() {
        const budgetData = await budgetStorage.getById(id)

        if(!budgetData) {
            Alert.alert('Erro', 'Orçamento não encontrado')
            return
        }

        setBudget(budgetData)

    }  

    function remove() {
        Alert.alert("Excluir Cotação", "Tem certeza que deseja excluir esta cotação?", [
            {
                text: "Cancelar",
                style: "cancel"
            },
            {
                text: "Excluir",
                onPress: () => handleRemove(),
                
            }
        ], {cancelable: true})
    }
    
    async function handleRemove() {
        const removed = await budgetStorage.remove(id)

        if(!removed) {
            Alert.alert("Erro", "Não foi possível remover orçamento!")
        }

        Alert.alert("Sucesso", "Orçamento removido com sucesso!")
        navigation.goBack()
    }

    async function handleDuplicate() {

        if(!budget) return

        const {id, createdAt, updatedAt, ...rest} = budget

        const year = new Date().getFullYear()
        const newId = `${Math.floor(Math.random() * 10000)}-${year}`

        const duplicatedBudget = {
            ...rest,
            id: newId,
            status: Status.DRAFT,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }


        await budgetStorage.save(duplicatedBudget)
        Alert.alert("Sucesso", "Orçamento duplicado com sucesso!")
        navigation.goBack()
    }

    async function handleShare() {
        if (!budget) return

        const servicesText = budget.services
            .map(
            (service) =>
                `• ${service.title} (x${service.quantity}) - ${formatCurrency(service.price / 100)}`
            )
            .join("\n")

const message = `
📄  Orçamento #${budget.id}

Cliente: ${budget.client}
Status: ${budget.status}

Serviços:
${servicesText}

Subtotal: ${formatCurrency(calcServicesTotal(budget.services) / 100)}

Desconto: ${budget.discountPct}%

Total: ${formatCurrency(calcBudgetTotal(budget) / 100)}
`

            try {
                await Share.share({
                    title: "Orçamento",
                    message,
                })
            } catch (error) {
                Alert.alert("Erro", "Não foi possível compartilhar o orçamento")
            }
    }


    
    useEffect(() => {
        fetchDetails()
    }, [id])

    if (!budget) {
        return (
            <Loading fullWidth/>
        )
    }    

  return (
    <SafeAreaView >
        <ScrollView>
            <View style={{paddingHorizontal: 20, gap: 20}}>
                <Separator variant="full" style={{top: 52}}/>
                <Header title={`Orçamento#${id}`} status={budget.status}/>
                <BudgetDetailsCard
                    budget={budget}
                />

                <CardSection title='Serviços inclusos' icon={NoteIcon}>
                    <FlatList
                        data={budget?.services ?? []}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <ServiceItem {...item}/>
                        )}
                        scrollEnabled={false}
                    />
                </CardSection>
                
                <InvestmentSummaryDetails budget={budget}/>

                <Separator variant='full' style={{bottom: 70}}/>
                <View style={styles.actionsContainer}>
                    <View style={styles.buttonsContainer}>
                        <Button icon={TrashIcon} width={48} variant='secondary' onPress={remove}/>
                        <Button icon={CopyIcon} width={48} variant='secondary' onPress={handleDuplicate}/>
                        <Button icon={EditIcon} width={48} variant='secondary' onPress={() => navigation.navigate("budgetForm", {id})}/>
                    </View>
                    <Button label='Compartilhar' icon={ShareIcon} onPress={handleShare}/>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

