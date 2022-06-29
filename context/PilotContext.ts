import { Pilot, Mission, Plane } from '@prisma/client'
import { createContext } from 'react'

export const PilotContext = createContext<State | null>(null)

interface State {
  state: {
    pilot: Pilot
    setPilot: Function
    mission: Mission
    activeMission: Mission
    setActiveMission: Function
    setMission: Function
    accountBalance: number
    setAccountBalance: Function
  }
}
