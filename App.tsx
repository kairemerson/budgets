import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/app/Home';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar style="auto" />
      <Home/>
    </View>
  );
}


