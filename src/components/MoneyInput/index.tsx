import { StyleProp, TextStyle } from 'react-native'
import { Control, Controller } from 'react-hook-form'
import { MaskedTextInput } from 'react-native-mask-text'

type MoneyInputProps = {
  control: Control<any>
  name: string
  placeholder?: string
  style?: StyleProp<TextStyle>
}

export function MoneyInput({
  control,
  name,
  placeholder = 'Preço',
  style,
}: MoneyInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <MaskedTextInput
          type="currency"
          options={{
            prefix: 'R$ ',
            decimalSeparator: ',',
            groupSeparator: '.',
            precision: 2,
          }}
          value={String(value ?? 0)} // 👈 SEM dividir
          onChangeText={(_, rawValue) => {
            onChange(Number(rawValue) || 0) // centavos
          }}
          keyboardType="numeric"
          placeholder={placeholder}
          style={style}
        />
      )}
    />
  )
}
