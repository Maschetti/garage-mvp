import FloorMap from "@/src/components/FloorMap";
import { FourthFloor, Ground, SecondFloor, ThirdFloor } from "@/src/constants/ParkSports";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View } from "react-native";

export default function Map() {
  const [selectedFloor, setSelectedFloor] = useState("ground");

  return (
    <View className="flex-1">
      <Picker
        selectedValue={selectedFloor}
        onValueChange={(itemValue) => setSelectedFloor(itemValue)}
        className="w-40 bg-slate-300 self-center mb-2"
      >
        <Picker.Item label="Térreo" value="ground" />
        <Picker.Item label="2º Andar" value="second" />
        <Picker.Item label="3º Andar" value="third" />
        <Picker.Item label="4º Andar" value="fourth" />
      </Picker>

      <View className="flex-1 h-full w-full">


        
        {selectedFloor === 'ground' && <FloorMap floor={Ground} cols={3} rows={3}/>}
        {selectedFloor === 'second' && <FloorMap floor={SecondFloor} cols={5} rows={13}/>}
        {selectedFloor === 'third' && <FloorMap floor={ThirdFloor} cols={4} rows={12}/>}
        {selectedFloor === 'fourth' && <FloorMap floor={FourthFloor} cols={6} rows={4}/>}
      </View>
    </View>
  )
}