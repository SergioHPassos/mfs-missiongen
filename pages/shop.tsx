import React from 'react'

//components
import Shop from '../components/Shop'

export default function shop() {
  return (
    <>
      <Shop
        planes={[
          { aircraft: 'Daher TBM 930', cost: '$4.1M' },
          { aircraft: 'Cessna 152', cost: '$95000' },
          { aircraft: 'Beechcraft Bonanza G36', cost: '$777000' },
          { aircraft: 'Cessna 208 B Grand Caravan EX', cost: '$1.9M' },
          { aircraft: 'Beechcraft King Air 350i', cost: '$7.4M' },
        ]}
      />
    </>
  )
}
