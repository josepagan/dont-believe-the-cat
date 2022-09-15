import { NextApiRequest, NextApiResponse } from 'next'

export default function AddUser(req: NextApiRequest, res: NextApiResponse) {

    //add shit here...
    console.log(req)


    res.json({ byId: req.query.id, message: "getHomeByUserId here" })
}

