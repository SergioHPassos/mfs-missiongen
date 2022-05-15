import type { Mission } from '@prisma/client'
import React from 'react'

// dependencies
import { v4 as uuidv4 } from 'uuid'

// components
import Title from './Title'
import MissionItem from './MissionItem'

export default function DisplayMission(props: Props) {
  return (
    <>
      {true && (
        <>
          <div className="fixed inset-0 left-1/2 top-1/2 z-50 h-[13%] w-[30%] -translate-x-1/2 -translate-y-1/2 bg-zinc-200">
            <p>Select Flight?</p>
            <div className="">
              <button>Accept</button>
              <button></button>
            </div>
          </div>
        </>
      )}
      <Title title="Missions" />
      <div className="flex flex-col pt-14">
        {props.missions.map((mission) => {
          return <MissionItem mission={mission} key={uuidv4()} />
        })}
      </div>
    </>
  )
}

interface Props {
  missions?: Mission[]
}
