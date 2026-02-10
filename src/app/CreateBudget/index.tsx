import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { BudgetFormData, budgetSchema } from './budget.schema'

import { styles } from './styles'
import { Status } from '@/types/Status'

import BackButton from "@/assets/icons/backButton.svg"
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
import { useBottomSheet } from '@/contexts/BottomSheetContext'
import { ServiceForm } from '@/components/ServiceForm'
import { BudgetsStorage, budgetStorage } from '@/storage/budgetsStorage'
import { zodResolver } from '@hookform/resolvers/zod'

export type BudgetForm = {
  title: string
  client: string
  services: Service[]
  discountPct?: number
  status: Status
}

type RouteParams = {
    id?: string
}

export default function CreateBudget() {
    const navigation = useNavigation()

    const route = useRoute()
    const {id} = route.params as RouteParams ?? {}

    const {open} = useBottomSheet()

    const {control, handleSubmit, setValue, getValues, formState: {errors, isSubmitting}} = useForm<BudgetFormData>({
        resolver: zodResolver(budgetSchema),
        defaultValues: {
            title: "",
            client: "",
            status: Status.DRAFT,
            services: [],
            discountPct: 0
        }
    })

    const services = useWatch({
        control,
        name: "services"
    })

    async function onSubmit(data: BudgetFormData) {

        if (data.services.length === 0) {
            Alert.alert(
                "Atenção",
                "Adicione pelo menos um serviço ao orçamento"
            )
            return
        }

        const year = new Date().getFullYear()
        const generatedId = `${Math.floor(Math.random() * 10000)}-${year}`

        let createdAt = new Date().toISOString()

        if (id) {
            const existingBudget = await budgetStorage.getById(id)
            createdAt = existingBudget?.createdAt ?? createdAt
        }
        
        const budgetToSave: BudgetsStorage = {
            id: id ?? generatedId,
            ...data,
            createdAt,
            updatedAt: new Date().toISOString(),
        }

        await budgetStorage.save(budgetToSave)
        Alert.alert("Sucesso", `Orçamento ${id ? "Atualizado com sucesso!" : "Criado com sucesso"}`)
        navigation.navigate("home")
    }

    // ✅ CORREÇÃO: Extrair a função onSave para fora do JSX
    const handleSaveService = useCallback((service: Service) => {
        console.log("🎯 handleSaveService chamado com:", service);
        
        const currentServices = getValues("services")
        console.log("📋 Serviços atuais:", currentServices);
        
        const updatedServices = [...currentServices, service]
        console.log("📋 Serviços atualizados:", updatedServices);
        
        setValue("services", updatedServices, {
            shouldDirty: true,
            shouldValidate: true,
        })
        
        console.log("✅ setValue executado");
        console.log("📊 Serviços no form agora:", getValues("services"));
        
    }, [getValues, setValue])

    function handleAddService() {
        
        open({
            title: "Serviço",
            content: (
                <ServiceForm
                    onSave={handleSaveService}
                />
            ),
        })
    }

    useEffect(() => {
        if(!id) return

        async function loadBudget() {
            const budget = await budgetStorage.getById(id!)

            if(!budget) {
                Alert.alert("Erro", "Orçamento não encontrado!")
                navigation.goBack()
                return
            }

            setValue("title", budget.title)
            setValue('client', budget.client)
            setValue('status', budget.status)
            setValue('services', budget.services)
            setValue('discountPct', budget.discountPct)
        }

        loadBudget()
    }, [id])

  return (
    <SafeAreaView style={{flex: 1}} edges={["top"]}>
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

                        <Controller 
                            control={control}
                            name='title'
                            render={({field: {onChange, value}}) => (
                                <Input 
                                    placeholder='Título' 
                                    fullWidth 
                                    value={value} 
                                    onChangeText={onChange}
                                    error={errors.title?.message}
                                />
                            )}
                        />

                        <Controller 
                            control={control}
                            name='client'
                            render={({field: {onChange, value}}) => (
                                <Input 
                                    placeholder='Cliente' 
                                    fullWidth 
                                    value={value} 
                                    onChangeText={onChange}
                                    error={errors.client?.message}
                                />
                            )}
                        />

                    </CardSection>

                    <CardSection title='Status' icon={TagIcon}>
                        <Controller
                            control={control}
                            name='status'
                            render={({field: {value, onChange}}) => (
                                <StatusSelector value={value} onChange={onChange}/>

                            )}
                        />
                    </CardSection>

                    <CardSection title='Serviços inclusos' icon={NoteIcon}>
                        <ServiceList
                            data={services ?? []}
                            onEditItem={(id) => console.log('Editar serviço', id)}
                        />
                        <Button
                            label="Adicionar serviço"
                            variant="secondary"
                            icon={PlusIcon}
                            onPress={handleAddService}
                        />

                    </CardSection>

                    <CardSection title="Investimento" icon={CreditCardIcon}>
                        <Controller
                            control={control}
                            name='discountPct'
                            render={({field: {value, onChange}}) => (
                                <InvestmentSummary services={services} discountPct={value ?? 0} onChangeDiscount={onChange}/>

                            )}
                        />
                    </CardSection>


                    <View style={styles.buttonActions}>
                        <Button height={48} width={95} label='Cancelar' variant='secondary'/>
                        <Button
                            label="Salvar"
                            icon={CheckIcon}
                            disabled={isSubmitting}
                            height={48}
                            width={102}
                            onPress={handleSubmit(
                                onSubmit,
                                (formErrors) => {
                                if (formErrors.services) {
                                    Alert.alert(
                                    "Serviços obrigatórios",
                                    formErrors.services.message as string
                                    )
                                }
                                }
                            )}
                        />
                        
                    </View>

                <Separator variant='full' style={{bottom: 96}}/>

            </View>
        </ScrollView>
    </SafeAreaView>

  )
}

