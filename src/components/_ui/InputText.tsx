import { Text, TextInput, View } from "react-native";

type InputTextProps = {
  title: string
  palceHolder?: string
  value?: string
  changeValue: React.Dispatch<React.SetStateAction<string>>
}

export default function InputText({
  title,
  palceHolder,
  value,
  changeValue,
}: InputTextProps) {
  return (
    <View className="flex flex-col gap-1">
      <Text>{title}:</Text>
      <TextInput
        placeholder={palceHolder}
        value={value}
        onChangeText={changeValue}
        className="
          border
          rounded-sm
          border-gray-300
          placeholder-gray-400
          text-black
          w-full
          uppercase
          p-1
          text-md
        "
        keyboardType="visible-password"
      />
    </View>
  )
}