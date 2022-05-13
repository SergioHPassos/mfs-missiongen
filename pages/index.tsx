import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// components
import ListMission from '../components/ListMission'
import Profile from '../components/Profile'

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

interface Pilot {
  id: string
  firstName: string
  lastName: string
  middleName: string
  age: number
  money: number
  totalDistance: number
  totalCargo: number
  totalPassenger: number
}
