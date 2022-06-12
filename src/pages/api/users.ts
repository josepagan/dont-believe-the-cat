import { NextApiRequest, NextApiResponse } from 'next'
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');


export async function getAllUsersDB(){
    const db = await sqlite.open({filename: './mydb.sqlite', driver: sqlite3.Database})
    const users = await db.all('SELECT * FROM User')
    return users
}

export default async function getAllUsers(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(500).json({ message: "Sorry we only accept get requests"})
    }
    const users = await getAllUsersDB()

    res.json(users)
}
