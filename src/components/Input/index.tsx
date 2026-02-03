import { TextInput, TextInputProps, View } from 'react-native'
import { styles } from './styles'
import SearchIcon from "@/assets/icons/search.svg"
import { theme } from '@/styles/theme'


export function Input({...rest}: TextInputProps) {
  return (
    <View style={styles.container}>
        <SearchIcon width={24} fill={theme.colors.gray[600]}/>
        <TextInput  {...rest}/>
        
    </View>
  )
}
