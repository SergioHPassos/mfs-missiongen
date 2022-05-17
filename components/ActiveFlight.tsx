import React from 'react'
import type { Mission } from '@prisma/client'

// components
import Title from './Title'

export default function ActiveFlight(props: Props) {
  return (
    <>
      {/* title */}
      <Title title="Active Flight" />

      {/* flight data */}
      {props.mission ? (
        <>
          <div className="flex justify-between px-2 pt-10">
            {/* left side */}
            <div className="flex flex-col space-y-2">
              <p>Objective:</p>
              <p>Departing Airport:</p>
              <p>Arriving Airport:</p>
              <p>Total Distance:</p>
              <p>Payout:</p>
            </div>

            {/* right side */}
            <div className="flex flex-col space-y-2">
              <p>{`${props.mission.type} ${
                props.mission.objective === 'of cargo'
                  ? props.mission.objectiveQuantity + 'lb'
                  : props.mission.objectiveQuantity
              } ${props.mission.objective}`}</p>
              <p>{props.mission.departingAirport}</p>
              <p>{props.mission.arrivingAirport}</p>
              <p>{`${props.mission.distance}NM`}</p>
              <p>{`$${props.mission.reward}`}</p>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <button
              className="h-8 w-24 rounded bg-emerald-400"
              onClick={() => props.updatePilot()}
            >
              Complete?
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center pt-10">
          <p>Woops no active flight...</p>
        </div>
      )}
    </>
  )
}

interface Props {
  mission?: Mission
  updatePilot?: Function
}
