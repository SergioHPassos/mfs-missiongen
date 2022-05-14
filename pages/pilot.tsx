import React, { useState, useEffect } from 'react'
import type { InferGetServerSidePropsType, NextPage } from 'next'

// components
import Profile from '../components/Profile'

// interfaces
import type { Pilot } from '../interfaces/UtilityInterfaces'

const pilot = ({
  pilots,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="">
      <Profile pilots={pilots} />
    </div>
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

export default pilot
