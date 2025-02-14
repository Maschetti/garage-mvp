type ParkSpotState = 'occupied' | 'free'

export interface ParkSpots {
  number: string
  spotNumber: number
  state: ParkSpotState
}

export const Ground: ParkSpots[] = [
  { number: "VWX-2233", spotNumber: 1, state: 'occupied' },
  { number: "", spotNumber: 2, state: 'free' },
  { number: "", spotNumber: 3, state: 'free' },
  { number: "", spotNumber: 4, state: 'free' },
];

export const SecondFloor: ParkSpots[] = [
  { number: "", spotNumber: 1, state: 'free' },
  { number: "", spotNumber: 2, state: 'free' },
  { number: "", spotNumber: 3, state: 'free' },
  { number: "", spotNumber: 4, state: 'free' },
  { number: "NOP-5567", spotNumber: 5, state: 'occupied' },
  { number: "", spotNumber: 6, state: 'free' },
  { number: "", spotNumber: 7, state: 'free' },
  { number: "", spotNumber: 8, state: 'free' },
  { number: "", spotNumber: 9, state: 'free' },
  { number: "", spotNumber: 10, state: 'free' },
  { number: "", spotNumber: 11, state: 'free' },
  { number: "", spotNumber: 12, state: 'free' },
  { number: "", spotNumber: 13, state: 'free' },
  { number: "", spotNumber: 14, state: 'free' },
  { number: "MNO-5566", spotNumber: 15, state: 'occupied' },
  { number: "", spotNumber: 16, state: 'free' },
  { number: "", spotNumber: 17, state: 'free' },
  { number: "", spotNumber: 18, state: 'free' },
  { number: "", spotNumber: 19, state: 'free' },
  { number: "", spotNumber: 20, state: 'free' },
  { number: "", spotNumber: 21, state: 'free' },
  { number: "", spotNumber: 22, state: 'free' },
  { number: "", spotNumber: 23, state: 'free' },
  { number: "", spotNumber: 24, state: 'free' },
  { number: "", spotNumber: 25, state: 'free' },
  { number: "", spotNumber: 26, state: 'free' },
  { number: "", spotNumber: 27, state: 'free' },
  { number: "", spotNumber: 28, state: 'free' },
  { number: "", spotNumber: 29, state: 'free' },
  { number: "", spotNumber: 30, state: 'free' },
];

export const ThirdFloor: ParkSpots[] = [
  { number: "", spotNumber: 1, state: 'free' },
  { number: "WXY-1123", spotNumber: 2, state: 'occupied' },
  { number: "", spotNumber: 3, state: 'free' },
  { number: "", spotNumber: 4, state: 'free' },
  { number: "", spotNumber: 5, state: 'free' },
  { number: "DEF-9101", spotNumber: 6, state: 'occupied' },
  { number: "", spotNumber: 7, state: 'free' },
  { number: "", spotNumber: 8, state: 'free' },
  { number: "", spotNumber: 9, state: 'free' },
  { number: "", spotNumber: 10, state: 'free' },
  { number: "", spotNumber: 11, state: 'free' },
  { number: "", spotNumber: 12, state: 'free' },
  { number: "", spotNumber: 13, state: 'free' },
  { number: "", spotNumber: 14, state: 'free' },
  { number: "", spotNumber: 15, state: 'free' },
  { number: "", spotNumber: 16, state: 'free' },
  { number: "", spotNumber: 17, state: 'free' },
  { number: "", spotNumber: 18, state: 'free' },
  { number: "", spotNumber: 19, state: 'free' },
  { number: "", spotNumber: 20, state: 'free' },
];

export const FourthFloor: ParkSpots[] = [
  { number: "", spotNumber: 1, state: 'free' },
  { number: "", spotNumber: 2, state: 'free' },
  { number: "", spotNumber: 3, state: 'free' },
  { number: "", spotNumber: 4, state: 'free' },
  { number: "", spotNumber: 5, state: 'free' },
  { number: "EFG-8899", spotNumber: 6, state: 'occupied' },
  { number: "", spotNumber: 7, state: 'free' },
];