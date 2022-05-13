export interface Plane {}

export interface Mission {}

export interface Pilot {
  id: string
  firstName: string
  lastName: string
  middleName: string
  age: number
  money: number
  totalDistance: number
  totalCargo: number
  totalPassenger: number

  planes: Plane[]
  missions: Mission[]
}
