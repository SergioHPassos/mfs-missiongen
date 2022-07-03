import type { Mission } from '@prisma/client'
import React, { useState, useContext } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Popover } from '@headlessui/react'

// dependencies
import { v4 as uuidv4 } from 'uuid'

// context
import { PilotContext } from '../context/PilotContext'

// components
import Title from './Title'
import Modal from './Modal'
import PopoverInfo from './PopoverInfo'
import MissionItem from './MissionItem'

export default function DisplayMission(props: Props) {
  const [selected, setSelected] = useState<Mission>(null)
  const [modalMissionData, setModalMissionData] = useState<Mission>(null)
  const { state } = useContext(PilotContext)

  const [_minDistance, set_MinDistance] = useState<number>(20)
  const [_maxDistance, set_MaxDistance] = useState<number>(30)

  const [missions, setMissions] = useState<Mission[]>(null)

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const fetchFilteredMissions = async () => {
    await fetch(`http://localhost:3000/api/generatemission/`, {
      method: 'POST',
      body: JSON.stringify({
        minDistance: _minDistance,
        maxDistance: _maxDistance,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMissions([...data])
        console.log(data)
      })
  }

  return (
    <>
      <Modal
        mission={modalMissionData}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <div className="md:px-4">
        <div className="bg-base-300 shadow-xl md:rounded-lg">
          <div className="flex items-center">
            <div className="flex w-full items-center justify-between">
              <Title title="Missions" />
              <div className="flex flex-row items-center space-x-4 pr-4">
                <PopoverInfo
                  buttonText="filter"
                  minDistance={_minDistance}
                  setMinDistance={set_MinDistance}
                  maxDistance={_maxDistance}
                  setMaxDistance={set_MaxDistance}
                />
                <button
                  className="btn btn-primary"
                  onClick={fetchFilteredMissions}
                >
                  search
                </button>
              </div>
            </div>
          </div>
          <RadioGroup value={selected} onChange={setSelected} className="pb-4">
            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="space-y-2 px-4">
              {missions &&
                missions.map((mission) => {
                  return (
                    <MissionItem
                      mission={mission}
                      openModal={openModal}
                      setModalMissionData={setModalMissionData}
                    />
                  )
                })}
            </div>
          </RadioGroup>
        </div>
      </div>
    </>
  )
}

interface Props {
  missions?: Mission[]
}
