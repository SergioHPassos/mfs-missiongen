import type { Mission } from '@prisma/client'
import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { RadioGroup } from '@headlessui/react'

// dependencies
import { v4 as uuidv4 } from 'uuid'

// context
import { PilotContext } from '../context/PilotContext'

// components
import Title from './Title'
import Modal from './Modal'

export default function DisplayMission(props: Props) {
  const [selected, setSelected] = useState<Mission>(null)
  const [modalMissionData, setModalMissionData] = useState<Mission>(null)
  const { state } = useContext(PilotContext)

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
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
          <Title title="Missions" />
          <RadioGroup value={selected} onChange={setSelected} className="pb-4">
            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="space-y-2 px-4">
              {props.missions.map((mission) => {
                return (
                  <RadioGroup.Option
                    key={uuidv4()}
                    value={mission}
                    className={({ active, checked }) =>
                      `${
                        active
                          ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                          : ''
                      }
                  ${checked ? 'bg-base-200 bg-opacity-75' : 'bg-base-100'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow focus:outline-none`
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <RadioGroup.Label
                                as="p"
                                className={`font-medium  ${
                                  checked ? 'text-base-content' : ''
                                }`}
                              >
                                {mission.title}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className={`inline ${
                                  checked ? 'text-sky-100' : 'text-gray-500'
                                }`}
                              >
                                <span>
                                  <button className="btn btn-primary btn-xs">
                                    {mission?.departingAirport}
                                  </button>{' '}
                                  /{' '}
                                  <button className="btn btn-secondary btn-xs">
                                    {mission.arrivingAirport}
                                  </button>
                                </span>{' '}
                                <span aria-hidden="true">&middot;</span>{' '}
                                <span>
                                  <button className="btn btn-xs text-white">
                                    {mission?.distance && mission?.distance} NM
                                  </button>{' '}
                                  /{' '}
                                  <button className="btn btn-warning btn-xs">
                                    ${' '}
                                    {mission?.reward &&
                                      mission?.reward
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                  </button>
                                </span>
                              </RadioGroup.Description>
                            </div>
                          </div>
                          {checked && (
                            <div
                              className="shrink-0 text-white"
                              onClick={() => state.setMission({ ...mission })}
                            >
                              <CheckIcon
                                openModal={openModal}
                                mission={mission}
                                setModalMissionData={setModalMissionData}
                              />
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                )
              })}
            </div>
          </RadioGroup>
        </div>
      </div>
    </>
  )
}

function CheckIcon(props: {
  mission?: Mission
  openModal?: Function
  setModalMissionData?: Function
}) {
  return (
    <button
      type="button"
      onClick={() => {
        props.setModalMissionData({ ...props.mission })
        props.openModal()
      }}
      className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Details
    </button>
  )
}

interface Props {
  missions?: Mission[]
}
