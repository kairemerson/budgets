import { View, Text, TextInput, Pressable } from 'react-native'
import { styles } from './styles'
import { Service } from '@/types/Service'
import { Button } from '@/components/Button'
import TrashIcon from '@/assets/icons/trash-2.svg'
import MinusIcon from '@/assets/icons/minus.svg'
import PlusIcon from '@/assets/icons/pluspurple.svg'
import CheckIcon from '@/assets/icons/check-white.svg'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ServiceFormData, ServiceFormInput, serviceSchema } from './service.schema'
import { useBottomSheet } from '@/contexts/BottomSheetContext'
import { MoneyInput } from '../MoneyInput'


type Props = {
  initialData?: Service
  onSave: (service: Service) => void
  onDelete?: () => void
}

export function ServiceForm({ initialData, onSave, onDelete }: Props) {

  const {close} = useBottomSheet()
  
  const {control, handleSubmit, setValue, watch, formState: {errors, isSubmitting}} = useForm<ServiceFormData>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      title: initialData?.title ?? '',
      description: initialData?.description ?? '',
      price: initialData?.price ?? 0,
      quantity: initialData?.quantity ?? 1,
    }
  })

  const quantity = watch("quantity")

  const year = new Date().getFullYear()
  const generatedId =  initialData?.id ?? `${Math.floor(Math.random() * 1000)}-${year}`

  function onSubmit(data: ServiceFormData) {
    const service: Service = {
      id: generatedId,
      ...data
    }

    onSave(service)
    close()
  }

  return (
    <View style={styles.container}>
      {/* Title */}
      <Controller
        control={control}
        name="title"
        render={({ field: { value, onChange } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nome do serviço"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {/* {errors.title && <Text>{errors.title.message}</Text>} */}

      {/* Description */}
      <Controller
        control={control}
        name="description"
        render={({ field: { value, onChange } }) => (
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Descrição"
            value={value}
            onChangeText={onChange}
            multiline
          />
        )}
      />

      {/* Price + Quantity */}
      <View style={styles.row}>
        <MoneyInput control={control} name='price' style={styles.input} placeholder='Preço'/>

        <View style={styles.quantity}>
          <Pressable
            onPress={() =>
              setValue('quantity', Math.max(1, quantity - 1))
            }
          >
            <MinusIcon width={20} />
          </Pressable>

          <Text style={styles.quantityText}>{quantity}</Text>

          <Pressable
            onPress={() => setValue('quantity', quantity + 1)}
          >
            <PlusIcon width={20} />
          </Pressable>
        </View>
      </View>

      <View style={styles.footer}>
        {onDelete && (
          <Pressable style={styles.deleteButton} onPress={onDelete}>
            <TrashIcon width={20} />
          </Pressable>
        )}


        <Button
          label="Salvar"
          icon={CheckIcon}
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          width={100}
        />
        
      </View>
    </View>
  )
}
