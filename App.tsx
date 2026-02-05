import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import {useFonts, Lato_400Regular, Lato_700Bold} from "@expo-google-fonts/lato"
import { Routes } from '@/routes';
import { BottomSheetProvider } from '@/contexts/BottomSheetContext';

export default function App() {
  const [fontsLoaded] = useFonts({Lato_400Regular, Lato_700Bold})

  if(!fontsLoaded) {
    return
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar style="auto" />
      <BottomSheetProvider>
        <Routes/>
      </BottomSheetProvider>
    </View>
  );
}


