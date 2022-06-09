import { NextApiRequest, NextApiResponse } from 'next'
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');



export default async function getAllUsers(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(500).json({ message: "Sorry we only accept get requests"})
    }
    const db = await sqlite.open({filename: './mydb.sqlite', driver: sqlite3.Database})
    const users = await db.all('SELECT * FROM User')


    res.json(users)
}