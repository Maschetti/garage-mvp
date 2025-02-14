import '@/src/styles/global.css';

// export default function RootLayout() {
//   return (
//     <View className='bg-slate-50 flex-1'>
//       <Slot />
//     </View>
//   )
// }

import { Stack } from 'expo-router/stack';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
