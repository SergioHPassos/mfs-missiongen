import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Plane } from '../interfaces/UtilityInterfaces'

export default function Shop(props: Props) {
  return (
    <>
      {/* title */}
      <p className="flex items-center justify-center pt-24 text-5xl font-light">
        Shop
      </p>

      {/* list planes */}
      <div className="flex flex-col space-y-8 pt-24">
        {/* render list planes */}
        {props.planes &&
          props.planes.map((plane) => {
            return (
              <div className="flex justify-between pl-2 pr-8" key={uuidv4()}>
                {/* aircraft name */}
                <div className="flex flex-col">
                  <p>{plane.aircraft}</p>
                </div>

                {/* cost */}
                <div className="flex flex-col">
                  <p>{plane.cost}</p>
                </div>
              </div>
            )
          })}

        {/* buy plane button */}
        <div className="flex justify-center p-4 text-center">
          <button className="h-10 w-24 rounded-sm bg-yellow-500 text-xl text-yellow-100">
            Buy
          </button>
        </div>
      </div>
    </>
  )
}

interface Props {
  planes?: Plane[]
}
