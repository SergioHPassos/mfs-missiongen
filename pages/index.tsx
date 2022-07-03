import React from 'react'
import type { InferGetStaticPropsType } from 'next'

//
import type { Mission } from '@prisma/client'

// components
import DisplayMission from '../components/DisplayMission'

const Home = () => {
  return (
    <div className="">
      <DisplayMission />
    </div>
  )
}

export default Home
