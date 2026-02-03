import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/app/Home';

import {useFonts, Lato_400Regular, Lato_700Bold} from "@expo-google-fonts/lato"

export default function App() {
  const [fontsLoaded] = useFonts({Lato_400Regular, Lato_700Bold})

  if(!fontsLoaded) {
    return
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar style="auto" />
      <Home/>
    </View>
  );
}


