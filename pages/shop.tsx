import type { InferGetServerSidePropsType } from 'next'
import React from 'react'

//components
import Shop from '../components/Shop'

export default function shop({
  pilots,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

export async function getServerSideProps() {
  const id: string = 'cl347rys00013ysutsmhnpzlr'
  const res = await fetch(`http:localhost:3000/api/pilot/${id}`)
  const pilots = await res.json()
  return {
    props: { pilots }, // will be passed to the page component as props
  }
}
