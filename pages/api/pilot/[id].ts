import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/prismaInstance'
import type { Pilot } from '@prisma/client'
// import type { Pilot } from '../../../interfaces/UtilityInterfaces'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query
    const _id: string = id.toString()

    const pilot: Pilot[] = await prisma.pilot.findMany({
      where: {
        id: _id,
      },
      include: {
        missions: true,
        planes: true,
      },
    })
    res.status(200).json(pilot)
  } else if (req.method === 'PATCH') {
    const { id, money, totalDistance, totalCargo, totalPassenger } = req.body

    const pilot: Pilot = await prisma.pilot.update({
      where: {
        id: id,
      },
      data: {
        money: money,
        totalDistance: totalDistance,
        totalCargo: totalCargo,
        totalPassenger: totalPassenger,
      },
    })

    res.json(pilot)
  }
}
