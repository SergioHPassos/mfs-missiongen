import React from 'react'

export default function Title(props: Props) {
  return (
    <p className="flex items-center justify-start py-4 pt-4 pl-4 text-5xl">
      {props.title}
    </p>
  )
}

interface Props {
  title: string
}
