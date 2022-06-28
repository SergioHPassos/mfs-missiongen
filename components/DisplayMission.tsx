import type { Mission } from '@prisma/client'
import React, { useState } from 'react'

// dependencies
import { v4 as uuidv4 } from 'uuid'

// components
import Title from './Title'
import MissionItem from './MissionItem'
import Modal from './Modal'

export default function DisplayMission(props: Props) {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <>
      <div className="md:p-4">
        <div className="bg-base-300 shadow-xl md:rounded-lg">
          <Title title="Missions" />
          <div className="flex flex-col pt-14">
            {props.missions.map((mission) => {
              return <MissionItem mission={mission} key={uuidv4()} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

interface Props {
  missions?: Mission[]
}
