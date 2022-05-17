import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Pilot, Mission } from '@prisma/client'

// components
import Header from '../components/Header'

// context
import { PilotContext } from '../context/PilotContext'

function MyApp({ Component, pageProps }: AppProps) {
  // pilot profile hook
  const [pilot, setPilot] = useState<Pilot | null>(null)
  const [mission, setMission] = useState<Mission | null>(null)

  return (
    <>
      <PilotContext.Provider
        value={{
          state: {
            pilot: pilot,
            setPilot: setPilot,
            mission: mission,
            setMission: setMission,
          },
        }}
      >
        <Header />
        <Component {...pageProps} />
      </PilotContext.Provider>
    </>
  )
}

export default MyApp
