import React from 'react'

export default function Title(props: Props) {
  return (
    <p className="flex items-center justify-center pt-24 text-5xl">
      {props.title}
    </p>
  )
}

interface Props {
  title: string
}
