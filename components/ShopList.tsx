import React, { useState } from 'react'

// dependencies
import { v4 as uuidv4 } from 'uuid'

// interfaces
import { Plane } from '../interfaces/UtilityInterfaces'

export default function ShopList(props: Props) {
  const [isActive, setIsActive] = useState<boolean>(false)

  const toggleIsActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div
      className={`flex justify-between ${
        props.shoppingItemSetting && props.shoppingItemSetting.bgColor
      } py-6 px-3`}
      key={uuidv4()}
      onClick={() => {
        if (!props.shoppingItemSetting.isActive) {
          props.dispatch(true, props.shoppingItemSetting)
        } else {
          props.dispatch(false, props.shoppingItemSetting)
        }
      }}
    >
      {/* aircraft name */}
      <div className="flex flex-col">
        <p>{props.plane.aircraft}</p>
      </div>

      {/* cost */}
      <div className="flex flex-col">
        <p>{moneyString(props.plane.cost)}</p>
      </div>
    </div>
  )
}

interface Props {
  plane: Plane
  shoppingItemSetting: ShoppingItemSetting
  dispatch: Function
}

interface ShoppingItemSetting {
  aircraft: string
  bgColor: 'bg-white' | 'bg-yellow-200'
  isActive: boolean
}

const moneyString = (cost: number) => {
  const costString: string = cost.toString()
  const costShortHand: string = costString.substring(0, 3)

  switch (costString.length) {
    case 4:
      // $x.xxK
      return `$${costShortHand[0]}.${costShortHand.substring(1)}K`
      break
    case 5:
      // $xx.xK
      return `$${costShortHand.substring(0, 2)}.${costShortHand[2]}K`
      break
    case 6:
      // $xxxK
      return `$${costShortHand}K`
      break
    case 7:
      // $x.xxM
      return `$${costShortHand[0]}.${costShortHand.substring(1)}M`
      break
    case 8:
      // $xx.xM
      return `$${costShortHand.substring(0, 2)}.${costShortHand[2]}M`
      break
    case 9:
      // $xxxM
      return `$${costShortHand}M`
      break
  }
}
