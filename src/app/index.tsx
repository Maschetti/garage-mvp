import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <View className="flex-1 p-2">
      <TouchableOpacity
        className="bg-green-600 p-4 rounded-lg items-center"
        onPress={() => setIsModalOpen(true)}
      >
        <Text className="text-white text-lg font-bold">Check-in de Veículo</Text>
      </TouchableOpacity>
    </View>
  )
}