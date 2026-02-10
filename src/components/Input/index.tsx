import { Text, TextInput, TextInputProps, View } from 'react-native'
import { styles } from './styles'
import SearchIcon from "@/assets/icons/search.svg"
import { theme } from '@/styles/theme'

type Props = TextInputProps & {
  showSearchIcon?: boolean
  fullWidth?: boolean
  error?: string
}

export function Input({showSearchIcon = false, fullWidth = false, error, ...rest}: Props) {
  return (
    <>
      <View style={[styles.container, fullWidth && styles.fullWidth]}>
        {showSearchIcon && (
          <SearchIcon width={24} height={24} fill={theme.colors.gray[600]}/>

        )}
          <TextInput style={styles.input} placeholderTextColor={theme.colors.gray[500]} {...rest}/>
          
      </View>
      {error && (
        <Text style={styles.errorMessage}>{error}</Text>
      )}
    </>
  )
}


