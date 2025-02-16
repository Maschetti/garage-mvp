import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

type SpotProps = {
  number?: number;
  state?: string;
  isEmpty?: boolean;
};

export default function Spot({
  number,
  state,
  isEmpty = false
}: SpotProps) {

  function changeState() {
    localState === 'free' ? setLocalState('occupied') : setLocalState('free');
  }

  const [localState, setLocalState] = useState(state);
  return (
    <TouchableOpacity
    onPress={changeState}
      className={`
        flex-1
        justify-center
        items-center
        ${isEmpty ? 'bg-transparent' : (localState === 'free' ? 'bg-green-700' : 'bg-red-700')}
        border
      `}
    >
      {!isEmpty && <Text>{number}</Text>}
    </TouchableOpacity>
  );
}