import { NextApiRequest, NextApiResponse } from 'next'

export default function getHomeByUserId(req: NextApiRequest, res: NextApiResponse) {
    res.json({ byId: req.query.id, message: "getHomeByUserId here" })
}



