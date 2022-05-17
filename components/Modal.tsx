import React, { useContext } from 'react'
import Link from 'next/link'
import type { Mission } from '@prisma/client'

// context provider
import { PilotContext } from '../context/PilotContext'

export default function Modal(props: Props) {
  const { state } = useContext(PilotContext)

  const rejectHandler = () => {
    props.setIsPopup(!props.isPopup)
    props.setBgColor('bg-white')
  }

  return (
    <>
      <div className="fixed inset-0 left-1/2 top-1/2 z-50 h-[13%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded bg-slate-300">
        <div className="flex justify-center pt-3">
          <p>Select Flight?</p>
        </div>
        <div className="flex justify-between px-2 py-2">
          <Link href="/activeflight">
            <button
              className="h-6 w-20 rounded bg-emerald-400"
              onClick={() => {
                state.setMission(props.mission)
              }}
            >
              Accept
            </button>
          </Link>
          <button
            className="h-6 w-20 rounded bg-rose-400"
            onClick={() => rejectHandler()}
          >
            Reject
          </button>
        </div>
      </div>
    </>
  )
}

interface Props {
  setIsPopup?: Function
  isPopup?: boolean
  setBgColor?: Function
  mission?: Mission
}
