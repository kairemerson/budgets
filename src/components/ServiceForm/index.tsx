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

    console.log("ServiceForm: ", service);
    

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
        <Controller
          control={control}
          name="price"
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={String(value)}
              placeholder="R$"
              onChangeText={(text) =>
                onChange(Number(text.replace(',', '.')) || 0)
              }
            />
          )}
        />

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

        {/* {Object.keys(errors).length > 0 && (
          <Text style={{ color: 'red' }}>
            {JSON.stringify(errors, null, 2)}
          </Text>
        )} */}
      {/* Footer */}
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
        />
        {/* <Button
          label="Salvarerro"
          icon={CheckIcon}
          onPress={handleSubmit(
            onSubmit,
            (errors) => {
              console.log("❌ ERROS DO FORM:", errors)
            }
          )}
        />
        <Button
          label="Salvaradd"
          icon={CheckIcon}
          onPress={()=>onSave({id: "123", title: "teste", description: "description", price: 1000, quantity: 1})}
        /> */}
        
      </View>
    </View>
  )
}


// import { View, Text, TextInput, Pressable, Alert } from 'react-native'
// import { styles } from './styles'
// import { Service } from '@/types/Service'
// import { Button } from '@/components/Button'
// import TrashIcon from '@/assets/icons/trash-2.svg'
// import MinusIcon from '@/assets/icons/minus.svg'
// import PlusIcon from '@/assets/icons/pluspurple.svg'
// import CheckIcon from '@/assets/icons/check-white.svg'
// import { Controller, useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { ServiceFormData, serviceSchema } from './service.schema'
// import { useBottomSheet } from '@/contexts/BottomSheetContext'


// type Props = {
//   initialData?: Service
//   onSave: (service: Service) => void
//   onDelete?: () => void
// }

// export function ServiceForm({ initialData, onSave, onDelete }: Props) {

//   const {close} = useBottomSheet()
  
//   const {control, handleSubmit, setValue, watch, formState: {errors}} = useForm<ServiceFormData>({
//     resolver: zodResolver(serviceSchema),
//     defaultValues: {
//       title: initialData?.title ?? '',
//       description: initialData?.description ?? '',
//       price: initialData?.price ?? 0,
//       quantity: initialData?.quantity ?? 1,
//     }
//   })

//   const quantity = watch("quantity")

//   function onSubmit(data: ServiceFormData) {
//     console.log("🎯 onSubmit EXECUTOU!");
//     console.log("📦 Dados validados:", data);
    
//     try {
//       console.log("🆔 Gerando ID com nanoid...");
//       const year = new Date().getFullYear()
//       const generatedId =  initialData?.id ?? `${Math.floor(Math.random() * 1000)}-${year}`
//       console.log("✅ ID gerado:", generatedId);
      
//       console.log("🔨 Montando objeto service...");
//       const service: Service = {
//         id: generatedId,
//         ...data
//       }
//       console.log("✅ Service montado:", service);
      
//       console.log("📤 Tipo de onSave:", typeof onSave);
//       console.log("📤 onSave é função?", typeof onSave === 'function');
      
//       console.log("📤 Chamando onSave com:", service);
//       onSave(service);
//       console.log("✅ onSave executou sem erro");
      
//       console.log("🚪 Chamando close()...");
//       close();
//       console.log("✅ close() executou");
      
//     } catch (error) {
//       console.error("❌ ERRO no onSubmit:", error);
//       console.error("❌ Stack:", error.stack);
//       Alert.alert("Erro", "Falha ao salvar serviço: " + error.message);
//     }
//   }

//   function handleSavePress() {
//     console.log("🔘 Botão SALVAR pressionado!");
//     console.log("📋 Valores atuais do form:", watch());
//     console.log("❌ Erros atuais:", errors);
    
//     handleSubmit(
//       onSubmit,
//       (validationErrors) => {
//         console.log("⚠️ VALIDAÇÃO FALHOU!");
//         console.log("📝 Erros de validação:", validationErrors);
        
//         const errorMessages = Object.entries(validationErrors)
//           .map(([field, error]) => `${field}: ${error?.message}`)
//           .join('\n');
        
//         Alert.alert(
//           'Preencha os campos obrigatórios',
//           errorMessages
//         );
//       }
//     )();
//   }

//   return (
//     <View style={styles.container}>
//       {/* Title */}
//       <Controller
//         control={control}
//         name="title"
//         render={({ field: { value, onChange } }) => (
//           <>
//             <TextInput
//               style={styles.input}
//               placeholder="Nome do serviço"
//               value={value}
//               onChangeText={(text) => {
//                 console.log("📝 Title alterado:", text);
//                 onChange(text);
//               }}
//             />
//             {errors.title && (
//               <Text style={{ color: 'red', fontSize: 12, marginTop: -8 }}>
//                 {errors.title.message}
//               </Text>
//             )}
//           </>
//         )}
//       />

//       {/* Description */}
//       <Controller
//         control={control}
//         name="description"
//         render={({ field: { value, onChange } }) => (
//           <TextInput
//             style={[styles.input, styles.textarea]}
//             placeholder="Descrição"
//             value={value}
//             onChangeText={(text) => {
//               console.log("📝 Description alterada:", text);
//               onChange(text);
//             }}
//             multiline
//           />
//         )}
//       />

//       {/* Price + Quantity */}
//       <View style={styles.row}>
//         <Controller
//           control={control}
//           name="price"
//           render={({ field: { value, onChange } }) => (
//             <View style={{ flex: 1 }}>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Preço (R$)"
//                 keyboardType="numeric"
//                 value={value > 0 ? String(value) : ''}
//                 onChangeText={(text) => {
//                   const cleanText = text.replace(/[^0-9.,]/g, '');
//                   const numericValue = Number(cleanText.replace(',', '.'));
//                   if (!isNaN(numericValue)) {
//                     console.log("💰 Preço alterado:", numericValue);
//                     onChange(numericValue);
//                   }
//                 }}
//               />
//               {errors.price && (
//                 <Text style={{ color: 'red', fontSize: 12, marginTop: 4 }}>
//                   {errors.price.message}
//                 </Text>
//               )}
//             </View>
//           )}
//         />

//         <View style={styles.quantity}>
//           <Pressable
//             onPress={() => {
//               const newQty = Math.max(1, quantity - 1);
//               console.log("➖ Quantidade diminuída:", newQty);
//               setValue('quantity', newQty);
//             }}
//           >
//             <MinusIcon width={20} />
//           </Pressable>

//           <Text style={styles.quantityText}>{quantity}</Text>

//           <Pressable
//             onPress={() => {
//               const newQty = quantity + 1;
//               console.log("➕ Quantidade aumentada:", newQty);
//               setValue('quantity', newQty);
//             }}
//           >
//             <PlusIcon width={20} />
//           </Pressable>
//         </View>
//       </View>

//       {/* Painel de Debug */}
//       <View style={{ 
//         backgroundColor: '#f0f0f0', 
//         padding: 12, 
//         borderRadius: 8,
//         marginTop: 8 
//       }}>
//         <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>Debug Info:</Text>
//         <Text style={{ fontSize: 11 }}>Title: {watch('title') || '(vazio)'}</Text>
//         <Text style={{ fontSize: 11 }}>Price: {watch('price')}</Text>
//         <Text style={{ fontSize: 11 }}>Quantity: {watch('quantity')}</Text>
//         {Object.keys(errors).length > 0 && (
//           <Text style={{ color: 'red', fontSize: 11, marginTop: 4 }}>
//             Erros: {JSON.stringify(errors, null, 2)}
//           </Text>
//         )}
//       </View>

//       {/* Footer */}
//       <View style={styles.footer}>
//         {onDelete && (
//           <Pressable style={styles.deleteButton} onPress={onDelete}>
//             <TrashIcon width={20} />
//           </Pressable>
//         )}

//         <Button
//           label="Salvar"
//           icon={CheckIcon}
//           onPress={handleSavePress}
//         />
//       </View>
//     </View>
//   )
// }
