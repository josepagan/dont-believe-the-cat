import { NextApiRequest, NextApiResponse } from 'next'

export default function newUser(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body)

    res.json({ query: req.body, message: "newUser" })
}

