import { View, Text, TextInput, Pressable } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'
import { Service } from '@/types/Service'
import { Button } from '@/components/Button'
import TrashIcon from '@/assets/icons/trash-2.svg'
import MinusIcon from '@/assets/icons/minus.svg'
import PlusIcon from '@/assets/icons/pluspurple.svg'
import CheckIcon from '@/assets/icons/check-white.svg'
import { Separator } from '../Separator'

type Props = {
  initialData?: Service
  onSave: (service: Service) => void
  onDelete?: () => void
}

export function ServiceForm({ initialData, onSave, onDelete }: Props) {
  const [title, setTitle] = useState(initialData?.title ?? '')
  const [description, setDescription] = useState(
    initialData?.description ?? ''
  )
  const [price, setPrice] = useState(
    initialData?.price?.toString() ?? ''
  )
  const [quantity, setQuantity] = useState(initialData?.quantity ?? 1)

  function handleSave() {
    console.log("salvou");
    
  }

  return (
    <View style={styles.container}>
      {/* Title */}
      <TextInput
        style={styles.input}
        placeholder="Nome do serviço"
        value={title}
        onChangeText={setTitle}
      />

      {/* Description */}
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Price + Quantity */}
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.priceInput]}
          placeholder="R$ 0,00"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <View style={styles.quantity}>
          <Pressable
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <MinusIcon width={20} />
          </Pressable>

          <Text style={styles.quantityText}>{quantity}</Text>

          <Pressable onPress={() => setQuantity(quantity + 1)}>
            <PlusIcon width={20} />
          </Pressable>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        {onDelete && (
          <Pressable style={styles.deleteButton} onPress={onDelete}>
            <TrashIcon width={20} />
          </Pressable>
        )}

        <Button label="Salvar" onPress={handleSave} icon={CheckIcon} />
      </View>
    </View>
  )
}
