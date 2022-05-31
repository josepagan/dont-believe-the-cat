import { NextApiRequest, NextApiResponse } from 'next'

export default function getAllUsers(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(500).json({ message: "Sorry we only accept get requests"})
    }
    res.json({ hello: "world", method: req.method })
}