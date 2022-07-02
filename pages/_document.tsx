import { Html, Head, Main, NextScript } from 'next/document'
import { useContext } from 'react'

// context provider
import { PilotContext } from '../context/PilotContext'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
