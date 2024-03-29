import React, { useContext, useState, Fragment } from 'react'
import type { Mission } from '@prisma/client'

// components
import Title from './Title'
import Modal from './Modal'

// context
import { PilotContext } from '../context/PilotContext'

// dependencies
import { v4 as uuidv4 } from 'uuid'
import { RadioGroup } from '@headlessui/react'
import { Dialog, Transition } from '@headlessui/react'

export default function ActiveFlight(props: Props) {
  const { state } = useContext(PilotContext)
  const [selected, setSelected] = useState<Mission>(null)

  const [modalMissionData, setModalMissionData] = useState<Mission>(null)

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
      {/* modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-base-300 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6"
                  >
                    Are you sure
                  </Dialog.Title>
                  <div className="mt-2 flex justify-between">
                    <p className="text-sm ">Have you completed the flight?</p>
                  </div>

                  <div className="mt-4 flex justify-center space-x-[46%]">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-base-100 px-4 py-2 text-sm font-medium hover:bg-base-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        state.setActiveMission(null)
                        closeModal()
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-base-100 px-4 py-2 text-sm font-medium hover:bg-base-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => closeModal()}
                    >
                      No
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="md:px-4">
        <div className="bg-base-300 shadow-xl">
          {/* title */}
          <Title title="Active Mission" />

          {state.activeMission && (
            <div className="">
              <RadioGroup
                value={selected}
                onChange={setSelected}
                className="pb-4"
              >
                <RadioGroup.Label className="sr-only">
                  Server size
                </RadioGroup.Label>
                <div className="space-y-2 px-4">
                  {[state.activeMission].map((mission) => {
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
                                    className={`font-medium  ${
                                      checked ? 'text-white' : ''
                                    }`}
                                  >
                                    {mission?.title}
                                  </RadioGroup.Label>
                                  <RadioGroup.Description
                                    as="span"
                                    className={`inline ${
                                      checked ? 'text-sky-100' : 'text-gray-500'
                                    }`}
                                  >
                                    <span>
                                      <button className="btn btn-primary btn-xs">
                                        {state.mission?.departingAirport}
                                      </button>{' '}
                                      /{' '}
                                      <button className="btn btn-secondary btn-xs">
                                        {mission.arrivingAirport}
                                      </button>
                                    </span>{' '}
                                    <span aria-hidden="true">&middot;</span>{' '}
                                    <span>
                                      <button className="btn btn-xs bg-base-300">
                                        {state.mission?.distance &&
                                          state.mission?.distance}{' '}
                                        NM
                                      </button>{' '}
                                      /{' '}
                                      <button className="btn btn-warning btn-xs">
                                        ${' '}
                                        {state.mission?.reward &&
                                          state.mission?.reward
                                            .toString()
                                            .replace(
                                              /\B(?=(\d{3})+(?!\d))/g,
                                              ','
                                            )}
                                      </button>
                                    </span>
                                  </RadioGroup.Description>
                                </div>
                              </div>
                              {checked && (
                                <div
                                  className="shrink-0 text-white"
                                  onClick={() =>
                                    state.setMission({ ...mission })
                                  }
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
          )}
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
      Done
    </button>
  )
}

interface Props {
  mission?: Mission
  updatePilot?: Function
}
