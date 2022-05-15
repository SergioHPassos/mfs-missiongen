import { Pilot } from '@prisma/client'
import { createContext } from 'react'

export const PilotContext = createContext<State | null>(null)

interface State {
  state: {
    pilot: Pilot
    setPilot: Function
  }
}
