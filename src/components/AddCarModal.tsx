import { Cars } from "@/src/constants/Cars";
import { router } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import InputText from "./_ui/InputText";
import Modal from "./_ui/Modal";

type AddCarModalProps = {
  isModalVisible: boolean;
  closeModal: () => void;
};

export default function AddCarModal({ isModalVisible, closeModal }: AddCarModalProps) {
  const [owner, setOwner] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");

  const handleAddCar = () => {
    const existingCar = Cars.find(car => car.number === carNumber);
  
    if (existingCar) {
      router.push({
        pathname: "/car/[number]",
        params: { number: carNumber },
      });
    } else {
      console.log({ owner, carNumber, model, color });
      closeModal();
    }
  };

  return (
    <Modal isVisible={isModalVisible} title="Cadastrar carro novo"
      onClose={closeModal}
      onConfirm={handleAddCar}  
    >
          
          <View className="flex flex-col gap-2">

            <InputText
              title="Placa"
              palceHolder="Placa do carro"
              value={carNumber}
              changeValue={setCarNumber}
            />

            <InputText
              title="Proprietário"
              palceHolder="Proprietário do carro"
              value={owner}
              changeValue={setOwner}
            />

            <InputText
              title="Modelo"
              palceHolder="Modelo do carro"
              value={model}
              changeValue={setModel}
            />
            
            <InputText
              title="Cor"
              palceHolder="Cor do carro"
              value={color}
              changeValue={setColor}
            />
          </View>
          
    </Modal>
  );
}