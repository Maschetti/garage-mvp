import { Slot } from 'expo-router';
import 'react-native-reanimated';

import '@/src/styles/global.css';
import { View } from 'react-native';


export default function RootLayout() {
  

  return (
    <View className='flex-1 bg-slate-200'>
      <Slot />
    </View>
    
  )
}
