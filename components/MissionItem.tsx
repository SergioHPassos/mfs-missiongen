import { Mission } from '@prisma/client'
import React, { useState } from 'react'

// dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// components
import Modal from './Modal'

export default function MissionItem(props: Props) {
  const [bgColor, setBgColor] = useState<string>('bg-base-300')
  const [isPopup, setIsPopup] = useState<boolean>(false)

  const toggleBgColor = () => {
    if (bgColor === 'bg-base-300') {
      setBgColor('bg-base-100')
      setIsPopup(true)
    } else {
      setIsPopup(false)
      setBgColor('bg-base-300')
    }
  }

  return (
    <>
      {isPopup && (
        <Modal
          setIsPopup={setIsPopup}
          isPopup={isPopup}
          setBgColor={setBgColor}
          mission={props.mission}
        />
      )}
      <div
        className={`flex justify-between px-3 ${bgColor}`}
        onClick={() => {
          toggleBgColor()
        }}
      >
        {/* left side */}
        <div className="flex py-4">
          <div className="flex flex-col space-y-2">
            {/* objective data */}
            <div className="flex flex-row items-center">
              <p>{`${props.mission.type} ${
                props.mission.objective === 'of cargo'
                  ? props.mission.objectiveQuantity + 'lb'
                  : props.mission.objectiveQuantity
              } ${props.mission.objective} to ${
                props.mission.arrivingAirport
              }`}</p>
            </div>

            {/* transit/ data */}
            <div className="flex flex-row items-center space-x-2">
              <p>{props.mission.departingAirport}</p>
              <FontAwesomeIcon icon={faArrowRight} />
              <p>{props.mission.arrivingAirport}</p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex py-4">
          {/* reward */}
          <div className="flex flex-col space-y-2">
            <div className="">
              <p>{`$${props.mission.reward}`}</p>
            </div>

            {/* distance */}
            <div className="flex">
              <p>{`${props.mission.distance}NM`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

interface Props {
  mission?: Mission
}
