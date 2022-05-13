import React from 'react'
import type { Pilot } from '../interfaces/UtilityInterfaces'

export default function Profile(props: Props) {
  return (
    <>
      <p className="flex items-center justify-center pt-14 text-5xl font-light">
        Pilot
      </p>
      <div className="flex items-center justify-between space-y-2 pl-4 pr-8 pt-20">
        {props.pilots &&
          props.pilots.map((pilot) => {
            return (
              <>
                <div className="flex flex-col space-y-4 font-semibold">
                  <p>Pilot:</p>
                  <p>Age:</p>
                  <p>Money:</p>
                  <p>Distance Traveled:</p>
                  <p>Total Cargo:</p>
                  <p>Total Passenger:</p>
                  <p>Missions Completed:</p>
                  <p>Planes Owned:</p>
                </div>
                <div className="flex flex-col space-y-4 font-semibold">
                  <p>{`${pilot.firstName} ${pilot.middleName[0]}. ${pilot.lastName}`}</p>
                  <p>{`${pilot.age}`}</p>
                  <p>{`$${pilot.money}`}</p>
                  <p>{`${pilot.totalDistance}`}</p>
                  <p>{`${pilot.totalCargo}`}</p>
                  <p>{`${pilot.totalPassenger}`}</p>
                  <p>{`${pilot.missions.length}`}</p>
                  <p>{`${pilot.planes.length}`}</p>
                </div>
              </>
            )
          })}
      </div>
    </>
  )
}

interface Props {
  pilots?: Pilot[]
  setPilot?: Function
}
