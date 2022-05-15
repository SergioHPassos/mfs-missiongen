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
