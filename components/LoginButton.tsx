import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function LoginButton() {
  const { data: session } = useSession()

  const baseButton = (text: string, OnClick: Function) => {
    return (
      <button className="" onClick={() => OnClick()}>
        {text}
      </button>
    )
  }

  return (
    <>{session ? baseButton('logout', signOut) : baseButton('login', signIn)}</>
  )
}
