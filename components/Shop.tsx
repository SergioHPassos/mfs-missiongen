import React, { useState, useEffect, useContext } from 'react'

// interfaces
import { Pilot, Plane } from '../interfaces/UtilityInterfaces'

// context provider
import { PilotContext } from '../context/PilotContext'

// components
import ShopList from './ShopList'
import Title from './Title'

// dependencies
import { v4 as uuidv4 } from 'uuid'
import shop from '../pages/shop'

export default function Shop(props: Props) {
  const { state } = useContext(PilotContext)

  const [totalShoppingCartCost, setTotalShoppingCartCost] = useState<number>(0)
  const [shoppingItemSettings, setShoppingItemSettings] =
    useState<ShoppingItemSetting[]>(null)
  const [totalPrice, setTotalPrice] = useState<number>(0)

  useEffect(() => {
    shoppingItemSettingGenerator(props.planes, setShoppingItemSettings)
  }, [])

  useEffect(() => {}, [])

  //
  const dispatch = (
    action: boolean,
    _shoppingItemSetting: ShoppingItemSetting
  ) => {
    // only one active at a time
    resetIsActiveState(shoppingItemSettings, setShoppingItemSettings, action)

    const newData: ShoppingItemSetting = {
      ..._shoppingItemSetting,
      bgColor: action ? 'bg-yellow-200' : 'bg-white',
      isActive: action ? true : false,
    }
    let newItems: ShoppingItemSetting[] = shoppingItemSettings

    newItems[newItems.findIndex((e) => e.aircraft === newData.aircraft)] =
      newData

    setShoppingItemSettings([...newItems])

    setTotalPrice(
      newData.bgColor === 'bg-yellow-200'
        ? totalPrice + newData.cost
        : totalPrice - newData.cost
    )
  }

  return (
    <>
      <div className="md:px-4">
        <div className="rounded-lg bg-base-300 shadow-xl">
          {/* title */}
          <Title title="Planes" key={uuidv4()} />

          {/* card */}
          <div className="flex flex-col items-start justify-center space-y-4 px-4 md:flex-row md:flex-wrap md:space-y-2 md:space-x-2">
            {props.planes.map((plane) => {
              return (
                <>
                  <div className="card w-full bg-base-100 shadow-xl md:w-1/3">
                    <figure>
                      <img
                        src="https://www.daher.com/app/uploads/2020/08/FlightSim_Hero-Asset_Still-1-1920x1080.jpg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-semibold md:text-[0.75rem]">
                          {plane.aircraft}
                        </p>
                        <button
                          type="button"
                          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

interface Props {
  planes?: Plane[]
  pilots?: Pilot[]
}

interface ShoppingItemSetting {
  aircraft: string
  bgColor: 'bg-white' | 'bg-yellow-200'
  isActive: boolean
  cost: number
}

const shoppingItemSettingGenerator = (
  planes: Plane[],
  setShoppingItemSettings: Function
) => {
  const data: ShoppingItemSetting[] = []
  planes.forEach((plane) => {
    data.push({
      aircraft: plane.aircraft,
      bgColor: 'bg-white',
      isActive: false,
      cost: plane.cost,
    })
  })

  setShoppingItemSettings([...data])
}

// flip last object change
const resetIsActiveState = (
  e: ShoppingItemSetting[],
  setShoppingItemSettings: Function,
  action: boolean
) => {
  if (action) {
    // find item
    const tmpItem: ShoppingItemSetting = e.find((e) => e.isActive === true)

    let newItems: ShoppingItemSetting[] = e

    newItems[newItems.findIndex((e) => e.isActive === true)] = {
      aircraft: tmpItem && tmpItem.aircraft,
      bgColor: 'bg-white',
      isActive: false,
      cost: tmpItem && tmpItem.cost,
    }

    // set new list
    setShoppingItemSettings([...newItems])
  }
}

const patchPilot = async (pilot: Pilot) => {
  const id: string = 'cl347rys00013ysutsmhnpzlr'
  const res = await fetch(`http://localhost:3000/api/pilot/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(pilot),
  })
  const data = await res.json()
  const updatedPilot: Pilot = JSON.parse(data)
  console.log(updatedPilot)
  return updatedPilot
}
