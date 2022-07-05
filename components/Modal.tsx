import { Mission } from '@prisma/client'
import React, { Fragment, useContext } from 'react'
import Link from 'next/link'

//
import { Dialog, Transition } from '@headlessui/react'

// context
import { PilotContext } from '../context/PilotContext'
import Tag from './Tag'

export default function Modal(props: Props) {
  const { state } = useContext(PilotContext)

  return (
    <>
      <Transition appear show={props?.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => props.closeModal()}
        >
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-base-100 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6"
                  >
                    {state.mission?.title}
                  </Dialog.Title>
                  <div className="mt-2 flex justify-between">
                    <p className="text-sm ">
                      <Tag
                        text={props?.mission?.departingAirport}
                        type="departingAirport"
                      />{' '}
                      /{' '}
                      <Tag
                        text={props?.mission?.arrivingAirport}
                        type="arrivingAirport"
                      />
                    </p>
                    <p className="text-sm">
                      <Tag
                        text={`$ ${
                          props?.mission?.reward &&
                          props?.mission?.reward
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        }`}
                        type="reward"
                      />
                    </p>
                  </div>

                  <div className="mt-4 flex justify-center space-x-[46%]">
                    <Link href="/activeflight" passHref={true}>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-base-300 px-4 py-2 text-sm font-medium hover:bg-base-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => {
                          state.setActiveMission({ ...state.mission })
                          props.closeModal()
                        }}
                      >
                        Accept
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-base-300 px-4 py-2 text-sm font-medium hover:bg-base-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => props.closeModal()}
                    >
                      Decline
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

interface Props {
  mission?: Mission
  closeModal?: Function
  isOpen: boolean
}
