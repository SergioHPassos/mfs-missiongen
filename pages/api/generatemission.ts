// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../prisma/prismaInstance'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'GET') {
    const airports = async () => {
      const res = await prisma.airport.findMany({ take: 10 })
      console.log(res)
    }

    res.status(200).json(res)
  }
}
