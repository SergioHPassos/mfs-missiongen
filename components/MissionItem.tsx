import React, { useState, useContext } from 'react'

import { RadioGroup } from '@headlessui/react'
import { Mission } from '@prisma/client'

// dependencies
import { v4 as uuidv4 } from 'uuid'

// context
import { PilotContext } from '../context/PilotContext'
import Tag from './Tag'

export default function MissionItem(props: Props) {
  const { state } = useContext(PilotContext)

  return (
    <>
      {props?.mission && (
        <RadioGroup.Option
          key={uuidv4()}
          value={props?.mission}
          className={({ active, checked }) =>
            `${
              active
                ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                : ''
            }
                  ${checked ? 'bg-primary bg-opacity-75' : 'bg-base-100'}
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
                      className={`font-medium  ${checked ? 'text-white' : ''}`}
                    >
                      {props?.mission.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className={`inline ${
                        checked ? 'text-sky-100' : 'text-gray-500'
                      }`}
                    >
                      <span>
                        <Tag
                          text={props?.mission?.departingAirport}
                          type="departingAirport"
                        />{' '}
                        /{' '}
                        <Tag
                          text={props?.mission?.arrivingAirport}
                          type="arrivingAirport"
                        />
                      </span>{' '}
                      <span aria-hidden="true">&middot;</span>{' '}
                      <span>
                        <Tag
                          text={`${
                            props?.mission?.distance && props?.mission?.distance
                          } NM`}
                          type="distance"
                        />{' '}
                        /{' '}
                        <Tag
                          text={`$ ${
                            props?.mission?.reward &&
                            props?.mission?.reward
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                          }`}
                          type="reward"
                        />
                      </span>
                    </RadioGroup.Description>
                  </div>
                </div>
                {checked && (
                  <div
                    className="shrink-0 text-white"
                    onClick={() => state.setMission({ ...props?.mission })}
                  >
                    <CheckIcon
                      openModal={props?.openModal}
                      mission={props?.mission}
                      setModalMissionData={props?.setModalMissionData}
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </RadioGroup.Option>
      )}
    </>
  )
}

interface Props {
  mission?: Mission
  openModal?: Function
  setModalMissionData?: Function
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
      className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-base-300 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Details
    </button>
  )
}
