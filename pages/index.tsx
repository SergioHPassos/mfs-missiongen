import React from 'react'
import type { InferGetStaticPropsType } from 'next'

//
import type { Mission } from '@prisma/client'

// components
import DisplayMission from '../components/DisplayMission'

const Home = ({ missions }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="">
      <DisplayMission missions={missions} />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const res = await fetch(`http:localhost:3000/api/generatemission/`)
  const missions: Mission[] = await res.json()

  return {
    props: {
      missions,
    },
  }
}
