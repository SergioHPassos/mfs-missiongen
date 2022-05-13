import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/prismaInstance'

interface Pilot {
  id: string
  firstName: string
  lastName: string
  middleName: string
  age: number
  money: number
  totalDistance: number
  totalCargo: number
  totalPassenger: number
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query
    const _id: string = id.toString()

    const pilot: Pilot[] = await prisma.pilot.findMany({
      where: {
        id: _id,
      },
    })
    res.status(200).json(pilot)
  }
}
