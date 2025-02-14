import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View } from "react-native";
import { FourthFloor, Ground, SecondFloor, ThirdFloor } from "../constants/ParkSports";
import Modal from "./_ui/Modal";

interface ParkModalProps {
  isModalVisible: boolean;
  onClose: () => void;
  onConfirm: (floor: string, spot: string) => void;
}

export default function ParkModal({ isModalVisible, onClose, onConfirm }: ParkModalProps) {
  const [selectedFloor, setSelectedFloor] = useState("Térreo");
  const [selectedSpot, setSelectedSpot] = useState('0');

  return (
    <Modal
      isVisible={isModalVisible}
      onClose={onClose}
      onConfirm={() => onConfirm(selectedFloor, selectedSpot)}
      title="Estacione o Carro"
    >
      <View className="flex flex-col gap-2">
        <Picker
          selectedValue={selectedFloor}
          onValueChange={(itemValue) => setSelectedFloor(itemValue)}
          style={{
            backgroundColor: '#f0f0f0',
          }}
        >
          <Picker.Item label="Térreo" value="ground" />
          <Picker.Item label="2º Andar" value="second" />
          <Picker.Item label="3º Andar" value="third" />
          <Picker.Item label="4º Andar" value="fourth" />
        </Picker>

        <Picker
          selectedValue={selectedSpot}
          onValueChange={(itemValue) => setSelectedSpot(itemValue)}
          style={{
            backgroundColor: '#f0f0f0',
          }}
        >
          {selectedFloor === 'ground' && 
            Ground.filter(spot => spot.state == 'free').map((spot) => (
              <Picker.Item
                key={selectedFloor + spot.spotNumber}
                label={String(spot.spotNumber)}
                value={spot.spotNumber} />
            ))
          }
          {selectedFloor === 'second' && 
            SecondFloor.filter(spot => spot.state == 'free').map((spot) => (
              <Picker.Item
                key={selectedFloor + spot.spotNumber}
                label={String(spot.spotNumber)}
                value={spot.spotNumber} />
            ))
          }
          {selectedFloor === 'third' && 
            ThirdFloor.filter(spot => spot.state == 'free').map((spot) => (
              <Picker.Item
                key={selectedFloor + spot.spotNumber}
                label={String(spot.spotNumber)}
                value={spot.spotNumber} />
            ))
          }
          {selectedFloor === 'fourth' && 
            FourthFloor.filter(spot => spot.state == 'free').map((spot) => (
              <Picker.Item
                key={selectedFloor + spot.spotNumber}
                label={String(spot.spotNumber)}
                value={spot.spotNumber} />
            ))
          }
        </Picker>
      </View>
    </Modal>
  );
}
