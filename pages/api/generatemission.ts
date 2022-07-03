// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { request } from 'http'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../prisma/prismaInstance'

const objectives: string[] = ['of cargo', 'passengers']
const types: string[] = ['Deliver', 'Drop off']
const objectiveQuantity: Quantity = {
  deliver: new Array(50).fill(0).map((e) => Math.random() * 150),
  dropOff: new Array(50).fill(0).map((e) => Math.ceil(Math.random() * 20)),
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'GET') {
    const airports: Airport[] = await prisma.airport.findMany({
      take: 100,
      select: {
        id: true,
        ident: true,
        latitude_deg: true,
        longitude_deg: true,
      },
    })

    const missions: Mission[] = await GenerateMission(airports, 5, 30)

    res.status(200).json(missions)
  } else if (req.method === 'POST') {
    const { minDistance, maxDistance } = JSON.parse(req.body)

    const airportCount = await prisma.airport.count()
    const skip = Math.floor(Math.random() * airportCount)

    const airports: Airport[] = await prisma.airport.findMany({
      take: 100,
      skip: skip,
      select: {
        id: true,
        ident: true,
        latitude_deg: true,
        longitude_deg: true,
      },
    })

    let missions: Mission[] = await GenerateMission(
      airports,
      minDistance,
      maxDistance
    )

    let k: number = 5
    while (k > 0) {
      if (missions.length < 2) {
        k--
        missions = await GenerateMission(airports, minDistance, maxDistance)
      } else {
        break
      }
    }

    let newMissions: Mission[] = []
    for (var i = 0; i < 12; i++) {
      newMissions.push(missions[Math.floor(Math.random() * missions.length)])
    }

    res.status(200).json(newMissions)
  }
}

// calculates the distance between two longitudinal points
// return result in NM
async function distance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const p: number = 0.017453292519943295 // Math.PI / 180
  const c: Function = Math.cos
  const a: number =
    0.5 -
    c((lat2 - lat1) * p) / 2 +
    (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2

  return parseFloat(((12742 * Math.asin(Math.sqrt(a))) / 1.852).toFixed(2)) // 2 * R; R = 6371 km
}

async function GenerateMission(
  airports: Airport[],
  minDistance: number,
  maxDistance: number
) {
  // grab airports between range
  let data: Airport[] = []
  for (let i = 0; i < airports.length; i++) {
    for (let j = i + 1; j < airports.length; j++) {
      // get distance between airports
      const dis: number = await distance(
        airports.at(i)?.latitude_deg || 0,
        airports.at(i)?.longitude_deg || 0,
        airports.at(j)?.latitude_deg || 0,
        airports.at(j)?.longitude_deg || 0
      )

      if (dis < maxDistance && dis > minDistance) {
        const departing: Airport = airports.at(i) || {
          id: '',
          ident: '',
          latitude_deg: 0.0,
          longitude_deg: 0.0,
        }
        departing.distance = dis

        const arriving: Airport = airports.at(j) || {
          id: '',
          ident: '',
          latitude_deg: 0.0,
          longitude_deg: 0.0,
        }
        arriving.distance = dis

        // add both airports
        data.push(
          departing || {
            id: '',
            ident: '',
            latitude_deg: 0.0,
            longitude_deg: 0.0,
          }
        )

        data.push(
          arriving || {
            id: '',
            ident: '',
            latitude_deg: 0.0,
            longitude_deg: 0.0,
          }
        )
      }
    }
  }

  // generate mission with airports
  const missions: Mission[] = []
  for (var i = 0; i < data.length; i += 2) {
    const _departing: Airport = data[i]
    const _arriving: Airport = data[i + 1]
    // generate mission details
    const x: number = Math.floor(Math.random() * 2)
    const y: number = Math.floor(
      Math.random() * objectiveQuantity.deliver.length - 1
    )
    const _objective: string = objectives[x]
    const _type: string = types[x]
    const _quantity: number =
      objectiveQuantity[_type === 'deliver' ? 'deliver' : 'dropOff'][y]
    //  generate reward
    const _reward: number = Math.floor(
      Math.random() * (_arriving.distance || 1) * 1000
    )

    // set title
    const _title: string = `${_type} ${
      _objective === 'of cargo' ? _quantity + 'lb' : _quantity
    } ${_objective} to ${_arriving.ident}`

    const mission: Mission = {
      title: _title,
      departingAirport: _departing.ident,
      arrivingAirport: _arriving.ident,
      distance: _arriving.distance,
      objective: _objective,
      type: _type,
      objectiveQuantity: _quantity,
      reward: _reward,
      // airports: [_departing, _arriving],
    }

    missions.push(mission)
  }

  return missions
}

interface Airport {
  id?: string
  ident?: string
  latitude_deg?: number
  longitude_deg?: number
  distance?: number
}

interface Mission {
  title?: string
  departingAirport?: string
  arrivingAirport?: string
  distance?: number
  objective?: string
  type?: string
  objectiveQuantity?: number
  reward?: number
  airports?: Airport[]
}

interface Quantity {
  deliver: number[]
  dropOff: number[]
}
