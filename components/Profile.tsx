import React from 'react'

// dependencies
import { v4 as uuidv4 } from 'uuid'

// interfaces
import type { Pilot } from '../interfaces/UtilityInterfaces'

// components
import Title from './Title'

export default function Profile(props: Props) {
  return (
    <>
      <Title title="Pilot" />
      {props.pilots &&
        props.pilots.map((pilot) => {
          return (
            <div
              className="flex items-center justify-between px-3 pt-14"
              key={uuidv4()}
            >
              <div className="flex flex-col space-y-4">
                <p>Pilot:</p>
                <p>Age:</p>
                <p>Money:</p>
                <p>Distance Traveled:</p>
                <p>Total Cargo:</p>
                <p>Total Passenger:</p>
                <p>Missions Completed:</p>
                <p>Planes Owned:</p>
              </div>
              <div className="flex flex-col space-y-4">
                <p>{`${pilot.firstName} ${pilot.middleName[0]}. ${pilot.lastName}`}</p>
                <p>{`${pilot.age}`}</p>
                <p>{`$${pilot.money}`}</p>
                <p>{`${pilot.totalDistance}`}</p>
                <p>{`${pilot.totalCargo}lb`}</p>
                <p>{`${pilot.totalPassenger}`}</p>
                <p>{`${pilot.missions.length}`}</p>
                <p>{`${pilot.planes.length}`}</p>
              </div>
            </div>
          )
        })}
    </>
  )
}

interface Props {
  pilots?: Pilot[]
}
