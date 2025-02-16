type ParkSpotState = 'occupied' | 'free'

export interface ParkSpots {
  number: string
  spotNumber: number
  state: ParkSpotState
  x?: number
  y?: number
}

export const Ground: ParkSpots[] = [
  { number: "VWX-2233", spotNumber: 1, state: 'occupied', x: 0, y: 0 },
  { number: "", spotNumber: 2, state: 'free', x: 1, y: 0 },
  { number: "", spotNumber: 3, state: 'free', x: 2, y: 1 },
  { number: "", spotNumber: 4, state: 'free', x: 2, y: 2 },
  // Add more spots as needed
];

export const SecondFloor: ParkSpots[] = [
  { number: "", spotNumber: 1, state: 'free', x: 0, y: 0 },
  { number: "", spotNumber: 2, state: 'free', x: 0, y: 1  },
  { number: "", spotNumber: 3, state: 'free', x: 0, y: 2  },
  { number: "", spotNumber: 4, state: 'free', x: 0, y: 3 },
  { number: "NOP-5567", spotNumber: 5, state: 'occupied', x: 0, y: 4  },
  { number: "", spotNumber: 6, state: 'free', x: 0, y: 5  },
  { number: "", spotNumber: 7, state: 'free', x: 0, y: 6  },
  { number: "", spotNumber: 8, state: 'free', x: 0, y: 7  },
  { number: "", spotNumber: 9, state: 'free', x: 0, y: 8 },
  { number: "", spotNumber: 10, state: 'free', x: 0, y: 9 },
  { number: "", spotNumber: 11, state: 'free', x: 0, y: 10 },
  { number: "", spotNumber: 12, state: 'free', x: 0, y: 11 },
  { number: "", spotNumber: 13, state: 'free', x: 0, y: 12 },
  { number: "", spotNumber: 14, state: 'free', x: 4, y: 0 },
  { number: "MNO-5566", spotNumber: 15, state: 'occupied', x: 4, y: 1 },
  { number: "", spotNumber: 16, state: 'free', x: 4, y: 2 },
  { number: "", spotNumber: 17, state: 'free', x: 4, y: 3 },
  { number: "", spotNumber: 18, state: 'free', x: 4, y: 4 },
  { number: "", spotNumber: 19, state: 'free', x: 3, y: 5 },
  { number: "", spotNumber: 20, state: 'free', x: 3, y: 6 },
  { number: "", spotNumber: 21, state: 'free', x: 3, y: 7 },
];

export const ThirdFloor: ParkSpots[] = [
  { number: "", spotNumber: 1, state: 'free', x: 0, y: 0 },
  { number: "WXY-1123", spotNumber: 2, state: 'occupied', x: 0, y: 1 },
  { number: "", spotNumber: 3, state: 'free', x: 0, y: 2 },
  { number: "", spotNumber: 4, state: 'free', x: 0, y: 3 },
  { number: "", spotNumber: 5, state: 'free', x: 0, y: 4 },
  { number: "DEF-9101", spotNumber: 6, state: 'occupied', x: 0, y: 5 },
  { number: "", spotNumber: 7, state: 'free', x: 0, y: 6 },
  { number: "", spotNumber: 8, state: 'free', x: 0, y: 7 },
  { number: "", spotNumber: 9, state: 'free', x: 0, y: 8},
  { number: "", spotNumber: 10, state: 'free', x: 0, y: 9 },
  { number: "", spotNumber: 11, state: 'free', x: 0, y: 10 },
  { number: "", spotNumber: 12, state: 'free', x: 0, y: 11 },
  { number: "", spotNumber: 13, state: 'free', x: 3, y: 0 },
  { number: "", spotNumber: 14, state: 'free', x: 3, y: 1 },
  { number: "", spotNumber: 15, state: 'free', x: 3, y: 2 },
  { number: "", spotNumber: 16, state: 'free', x: 3, y: 3 },
  { number: "", spotNumber: 17, state: 'free', x: 3, y: 4 },
  { number: "", spotNumber: 18, state: 'free', x: 2, y: 5 },
  { number: "", spotNumber: 19, state: 'free', x: 2, y: 6 },
  { number: "", spotNumber: 20, state: 'free', x: 2, y: 7 },
];

export const FourthFloor: ParkSpots[] = [
  { number: "", spotNumber: 1, state: 'free', x: 0, y: 0 },
  { number: "", spotNumber: 2, state: 'free', x: 1, y: 0 },
  { number: "", spotNumber: 3, state: 'free', x: 2, y: 0 },
  { number: "", spotNumber: 4, state: 'free', x: 3, y: 0 },
  { number: "", spotNumber: 5, state: 'free', x: 2, y: 1 },
  { number: "EFG-8899", spotNumber: 6, state: 'occupied', x: 4, y: 3 },
  { number: "", spotNumber: 7, state: 'free', x: 5, y: 3 },
];