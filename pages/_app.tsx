import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { Pilot, Mission } from '@prisma/client'
import { ThemeProvider } from 'next-themes'

// components
import Header from '../components/Header'

// context
import { PilotContext } from '../context/PilotContext'

function MyApp({ Component, pageProps }: AppProps) {
  // pilot profile hook
  const [pilot, setPilot] = useState<Pilot | null>(null)
  const [mission, setMission] = useState<Mission | null>(null)
  const [activeMission, setActiveMission] = useState<Mission | null>(null)
  const [accountBalance, setAccountBalance] = useState<number | null>(0)

  useEffect(() => {
    if (pilot) {
      setAccountBalance(pilot.money)
    }
  }, [pilot])

  return (
    <div>
      <ThemeProvider>
        <PilotContext.Provider
          value={{
            state: {
              pilot: pilot,
              setPilot: setPilot,
              mission: mission,
              setMission: setMission,
              activeMission: activeMission,
              setActiveMission: setActiveMission,
              accountBalance: accountBalance,
              setAccountBalance: setAccountBalance,
            },
          }}
        >
          <Header />
          <Component {...pageProps} />
        </PilotContext.Provider>
      </ThemeProvider>
    </div>
  )
}

export default MyApp
