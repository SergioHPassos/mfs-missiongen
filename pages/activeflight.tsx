import { Mission, Pilot } from '@prisma/client'
import { stat } from 'fs'
import React, { useContext } from 'react'

// components
import ActiveFlight from '../components/ActiveFlight'
import MissionItem from '../components/MissionItem'

// context provider
import { PilotContext } from '../context/PilotContext'

export default function activeflight() {
  const { state } = useContext(PilotContext)

  return (
    <>
      <div className="">
        <ActiveFlight
          mission={state.mission}
          updatePilot={async () => {
            const pilot: Pilot = {
              ...state.pilot,
              money: state.pilot.money + state.mission.reward,
              totalDistance: state.pilot.totalDistance + state.mission.distance,
              totalCargo:
                state.mission.type === 'Deliver'
                  ? state.pilot.totalCargo + state.mission.objectiveQuantity
                  : state.pilot.totalCargo,
              totalPassenger:
                state.mission.type === 'Drop off'
                  ? state.pilot.totalPassenger + state.mission.objectiveQuantity
                  : state.pilot.totalPassenger,
            }
            const updatedPilot: Pilot = await patchPilot(pilot)
            state.setPilot({ ...updatedPilot })
          }}
        />
      </div>
    </>
  )
}

const patchPilot = async (pilot: Pilot) => {
  const id: string = 'cl347rys00013ysutsmhnpzlr'
  const res = await fetch(`http://localhost:3000/api/pilot/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(pilot),
  })
  const data = await res.json()
  const updatedPilot: Pilot = JSON.parse(data)
  return updatedPilot
}
