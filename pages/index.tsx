import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// components
import ListMission from '../components/ListMission'
import Profile from '../components/Profile'

// interfaces
import type { Pilot } from '../interfaces/UtilityInterfaces'

const Home: NextPage = () => {
  const [pilot, setPilot] = useState<Pilot[]>(null)

  useEffect(() => {
    getPilot(setPilot)
  }, [])

  return (
    <div className="">
      <Profile pilots={pilot} setPilot={setPilot} />
    </div>
  )
}

export default Home

// GET request for pilot
const getPilot = async (setPilot: Function) => {
  const id: string = 'cl347rys00013ysutsmhnpzlr'
  await fetch(`/api/pilot/${id}`)
    .then((res) => res.json())
    .then((pilots) => setPilot(pilots))
}
