import { NextApiRequest, NextApiResponse } from 'next'

export default function getUserById(req: NextApiRequest, res: NextApiResponse) {
    res.json({ byId: req.query.id, message: "Hello world" })
}




export interface MyNextApiRequest extends NextApiRequest {
    query: {
        id: string
    }
}