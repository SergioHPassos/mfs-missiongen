import React from 'react'
import { Pilot, Plane } from '../interfaces/UtilityInterfaces'
import ShopList from './ShopList'

export default function Shop(props: Props) {
  return (
    <>
      {/* title */}
      <p className="flex items-center justify-center pt-24 text-5xl font-light">
        Shop
      </p>

      {/* list planes */}
      <div className="flex flex-col pt-14">
        {/* render list planes */}
        {props.planes &&
          props.planes.map((plane) => {
            return (
              <>
                {/* aircraft name and cost */}
                <ShopList plane={plane} />
              </>
            )
          })}

        {/* buy plane button */}
        <div className="flex justify-center pt-8 text-center">
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
  pilots?: Pilot[]
}
