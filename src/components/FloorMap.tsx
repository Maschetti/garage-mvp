import { View } from "react-native";
import { ParkSpots } from "../constants/ParkSports";
import Spot from "./Spot";

type FloorMapProps = {
  cols: number;
  rows: number;
  floor: ParkSpots[];
};

export default function FloorMap({
  cols,
  rows,
  floor
}: FloorMapProps) {

  const getSpot = (rowIndex: number, colIndex: number) => {
    return floor.find(spot => spot.y === rowIndex && spot.x === colIndex);
  };

  return (
    <View className="flex-1">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <View key={rowIndex} className="flex-1 flex-row">
          {Array.from({ length: cols }).map((_, colIndex) => {
            const spot = getSpot(rowIndex, colIndex);
            return (
              <Spot
                key={`${rowIndex}-${colIndex}`}
                number={spot?.spotNumber}
                state={spot?.state}
                isEmpty={!spot}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
}