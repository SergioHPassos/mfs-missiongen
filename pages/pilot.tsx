import React, { useState, useEffect, useContext } from 'react'
import type { InferGetStaticPropsType, NextPage } from 'next'

// context
import { PilotContext } from '../context/PilotContext'

// components
import Profile from '../components/Profile'

// interfaces
import type { Pilot } from '../interfaces/UtilityInterfaces'

const pilot = ({ pilots }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { state } = useContext(PilotContext)

  useEffect(() => {
    state.setPilot(pilots[0])
  }, [])

  return (
    <div className="">
      <Profile pilots={pilots} />
    </div>
  )
}

export async function getStaticProps() {
  const id: string = 'cl347rys00013ysutsmhnpzlr'
  const res = await fetch(`http:localhost:3000/api/pilot/${id}`)
  const pilots = await res.json()
  return {
    props: { pilots }, // will be passed to the page component as props
  }
}

export default pilot
