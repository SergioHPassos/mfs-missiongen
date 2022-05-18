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
      {/* title */}
      <Title title="Shop" key={uuidv4()} />

      {/* list planes */}
      <div className="flex flex-col pt-14">
        {/* render list planes */}
        {props.planes &&
          props.planes.map((plane) => {
            return (
              <ShopList
                plane={plane}
                shoppingItemSetting={
                  shoppingItemSettings &&
                  shoppingItemSettings.find(
                    (e) => e.aircraft === plane.aircraft
                  )
                }
                dispatch={dispatch}
                key={uuidv4()}
              />
            )
          })}

        {/* buy plane button */}
        <div className="flex justify-center pt-8 pb-8 text-center">
          <button
            className={
              shoppingItemSettings &&
              shoppingItemSettings.find((e) => e.isActive === true)
                ? 'text-md h-10 w-36 rounded-sm bg-yellow-500 text-yellow-100'
                : 'h-10 w-24 rounded-sm bg-yellow-500 text-xl text-yellow-100'
            }
            onClick={async () => {
              if (
                totalPrice > 0 &&
                (state.pilot ? state.pilot.money : 0) >= totalPrice
              ) {
                const pilot: Pilot = {
                  ...state.pilot,
                  money:
                    state.pilot.money -
                    (shoppingItemSettings
                      ? shoppingItemSettings.find((e) => e.isActive === true)
                          .cost
                      : 0),
                  totalDistance: state.pilot.totalDistance,
                  totalCargo: state.pilot.totalCargo,
                  totalPassenger: state.pilot.totalPassenger,
                }

                const updatedPilot: Pilot = await patchPilot(pilot)
                state.setPilot({ ...updatedPilot })
              }
            }}
          >
            {shoppingItemSettings &&
            shoppingItemSettings.find((e) => e.isActive === true)
              ? `Buy ($${
                  shoppingItemSettings.find((e) => e.isActive === true).cost
                })`
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
