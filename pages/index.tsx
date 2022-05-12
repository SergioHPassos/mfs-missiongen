import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// components
import ListMission from '../components/ListMission'

const Home: NextPage = () => {
  return (
    <div className="">
      <ListMission />
    </div>
  )
}

export default Home
