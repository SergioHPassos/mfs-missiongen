import React, { useState, useEffect } from 'react'
import type { InferGetStaticPropsType, NextPage } from 'next'

// components
import Profile from '../components/Profile'

// interfaces
import type { Pilot } from '../interfaces/UtilityInterfaces'

const pilot = ({ pilots }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
