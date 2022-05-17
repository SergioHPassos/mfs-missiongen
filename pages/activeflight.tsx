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
          updatePilot={() => {
            const pilot = {
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

            state.setPilot(pilot)

            // state.setMission(null)

            patchPilot(state.pilot)
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
  console.log(res)
}
