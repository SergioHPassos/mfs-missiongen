import React, { useState } from 'react'

// dependencies
import { v4 as uuidv4 } from 'uuid'

// interfaces
import { Plane } from '../interfaces/UtilityInterfaces'

export default function ShopList(props: Props) {
  const [bgColor, setBgColor] = useState<string>('bg-white')

  const toggleBgColor = () => {
    if (bgColor === 'bg-white') {
      setBgColor('bg-yellow-200')
    } else {
      setBgColor('bg-white')
    }
  }

  return (
    <div
      className={`flex justify-between ${bgColor} py-6 px-3`}
      key={uuidv4()}
      onClick={() => {
        toggleBgColor()
      }}
    >
      {/* aircraft name */}
      <div className="flex flex-col">
        <p>{props.plane.aircraft}</p>
      </div>

      {/* cost */}
      <div className="flex flex-col">
        <p>{props.plane.cost}</p>
      </div>
    </div>
  )
}

interface Props {
  plane: Plane
}
