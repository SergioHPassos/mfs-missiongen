import { randomUUID } from 'crypto'
import { InferGetStaticPropsType } from 'next'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

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

        {/* but plane button */}
        <div className="flex justify-center">
          <button className="w-14 rounded-sm bg-zinc-200 text-center">
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

interface Plane {
  aircraft: string
  cost: string
}
