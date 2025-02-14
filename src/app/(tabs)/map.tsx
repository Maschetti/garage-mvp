import { FourthFloor, Ground, SecondFloor, ThirdFloor } from "@/src/constants/ParkSports";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Map() {
  const [selectedFloor, setSelectedFloor] = useState("ground");

  return (
    <View>
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

      <View className="flex flex-col gap-2 flex-wrap max-h-96 w-full items-center">
        {
          selectedFloor === 'ground' &&
          Ground.map((spot) => (
            <View
              className="size-4"
              key={selectedFloor + spot.spotNumber}
              style={{ backgroundColor: spot.state === 'free' ? 'green' : 'red' }}
            >
              <Text>{spot.spotNumber}</Text>
            </View>
          ))
        }
        {
          selectedFloor === 'second' &&
          SecondFloor.map((spot) => (
            <View
              className="size-4"
              key={selectedFloor + spot.spotNumber}
              style={{ backgroundColor: spot.state === 'free' ? 'green' : 'red' }}
            >
              <Text>{spot.spotNumber}</Text>
            </View>
          ))
        }
        {
          selectedFloor === 'third' &&
          ThirdFloor.map((spot) => (
            <View
              className="size-4"
              key={selectedFloor + spot.spotNumber}
              style={{ backgroundColor: spot.state === 'free' ? 'green' : 'red' }}
            >
              <Text>{spot.spotNumber}</Text>
            </View>
          ))
        }
        {
          selectedFloor === 'fourth' &&
          FourthFloor.map((spot) => (
            <View
              className="size-4"
              key={selectedFloor + spot.spotNumber}
              style={{ backgroundColor: spot.state === 'free' ? 'green' : 'red' }}
            >
              <Text>{spot.spotNumber}</Text>
            </View>
          ))
        }
      </View>
    </View>
  )
}