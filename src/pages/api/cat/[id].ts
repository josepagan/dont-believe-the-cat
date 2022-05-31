import { NextApiRequest, NextApiResponse } from 'next'

export default function getCatById(req: NextApiRequest, res: NextApiResponse) {
    res.json({ byId: req.query.id, message: "Here is the cat details and timeline" })
}

