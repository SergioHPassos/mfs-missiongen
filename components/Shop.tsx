import React, { useState } from 'react'

// interfaces
import { Pilot, Plane } from '../interfaces/UtilityInterfaces'

// components
import ShopList from './ShopList'
import Title from './Title'

// dependencies
import { v4 as uuidv4 } from 'uuid'

export default function Shop(props: Props) {
  const [totalShoppingCartCost, setTotalShoppingCartCost] = useState<number>(0)
  const [planes, setPlanes] = useState<Plane[]>([])

  return (
    <>
      {/* title */}
      <Title title="Shop" key={uuidv4()} />
      <p onClick={() => console.log(planes)}>asdasdasdasd</p>

      {/* list planes */}
      <div className="flex flex-col pt-14">
        {/* render list planes */}
        {props.planes &&
          props.planes.map((plane) => {
            return (
              <ShopList
                plane={plane}
                setPlanes={setPlanes}
                planes={planes}
                key={uuidv4()}
              />
            )
          })}

        {/* buy plane button */}
        <div className="flex justify-center pt-8 pb-8 text-center">
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
