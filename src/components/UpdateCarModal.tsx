import { Cars } from "@/src/constants/Cars";
import { useState } from "react";
import { View } from "react-native";
import InputText from "./_ui/InputText";
import Modal from "./_ui/Modal";

type UpdateCarModalProps = {
  isModalVisible: boolean
  onClose: () => void
  number: string
}

export default function UpdateCarModal({
  isModalVisible,
  onClose,
  number
}: UpdateCarModalProps) {
  const car = Cars.find(car => car.number === number)

  if(car === undefined) {
    return <View></View>
  }

  const [localNumber, setLocalNumber] = useState(number);
  const [localOwner, setLocalOwner] = useState(car.owner)
  const [localColor, setLocalColor] = useState(car.color)
  const [localModel, setLocalModel] = useState(car.model)

  return (
    <Modal
      title="Atualize os dados do Carro"
      isVisible={isModalVisible}
      onClose={onClose}
      onConfirm={() => {}}
    >
          
      <View className="flex flex-col gap-2">

        <InputText
          title="Placa"
          value={localNumber}
          changeValue={setLocalNumber}
        />

        <InputText
          title="Proprietário"
          value={localOwner}
          changeValue={setLocalOwner}
        />

        <InputText
          title="Modelo"
          value={localModel}
          changeValue={setLocalModel}
        />
        
        <InputText
          title="Cor"
          value={localColor}
          changeValue={setLocalColor}
        />
      </View>
    </Modal>
  )
}