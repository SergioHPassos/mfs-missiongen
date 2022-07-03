import React from 'react'

export default function Tag(props: Props) {
  return (
    <button className={`btn btn-xs ${getColorType(props?.type)} text-black`}>
      {props?.text}
    </button>
  )
}

interface Props {
  text?: string
  type?: string
}

const getColorType = (type: string | null) => {
  switch (type) {
    case 'departingAirport':
      return 'bg-emerald-300'
      break
    case 'arrivingAirport':
      return 'bg-indigo-400'
      break
    case 'distance':
      return 'bg-fuchsia-300'
      break
    case 'reward':
      return 'bg-yellow-300'
      break
    default:
      return ''
      break
  }
}
