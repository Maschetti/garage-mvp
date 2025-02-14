import { ReactNode } from "react"
import { Button, Modal as ModalReact, Text, View } from "react-native"

type ModalProps = {
  onConfirm: () => void
  onClose: () => void
  isVisible: boolean
  title: string
  children: ReactNode
}

export default function Modal({
  onConfirm,
  onClose,
  isVisible,
  title,
  children
}: ModalProps) {
  return(
    <ModalReact visible={isVisible} transparent animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/70">
        <View className="bg-white p-6 rounded-lg w-80 shadow-lg">
          <View className=" w-full flex justify-center items-center">
            <Text className="text-xl">{title}</Text>
          </View>


          {children}

          <View className="mt-4 flex-row justify-between">
            <Button title="Cancelar" onPress={onClose} color="#FF5C5C" />
            <Button title="Confirmar" onPress={onConfirm} />
          </View>

        </View>
      </View>
    </ModalReact>
  )
}