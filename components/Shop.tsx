import React, { useState } from 'react'
import { Pilot, Plane } from '../interfaces/UtilityInterfaces'
import ShopList from './ShopList'

export default function Shop(props: Props) {
  const [totalShoppingCartCost, setTotalShoppingCartCost] = useState<number>(0)

  const buyPlane = async () => {
    // check pilot account balance
    // update pilot account balance
  }

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
                <ShopList
                  plane={plane}
                  totalShoppingCartCost={totalShoppingCartCost}
                  setTotalShoppingCartCost={setTotalShoppingCartCost}
                />
              </>
            )
          })}

        {/* buy plane button */}
        <div className="flex justify-center pt-8 text-center">
          <button
            className={
              totalShoppingCartCost > 0
                ? 'text-md h-10 w-36 rounded-sm bg-yellow-500 text-yellow-100'
                : 'h-10 w-24 rounded-sm bg-yellow-500 text-xl text-yellow-100'
            }
            onClick={() => {}}
          >
            {totalShoppingCartCost > 0
              ? `Buy ($${totalShoppingCartCost})`
              : 'Buy'}
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
