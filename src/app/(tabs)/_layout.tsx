import { Tabs } from 'expo-router';
import { Home, MapIcon } from 'lucide-react-native';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home size={28} color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Mapa',
          tabBarIcon: ({ color }) => <MapIcon size={28} color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen name="car/[number]" options={{ href: null, headerShown: false }} />
    </Tabs>
  );
}
