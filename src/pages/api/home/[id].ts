import { NextApiRequest, NextApiResponse } from 'next'

export default function getUserById(req: NextApiRequest, res: NextApiResponse) {
    res.json({ byId: req.query.id, message: "Here is the home details by id" })
}

