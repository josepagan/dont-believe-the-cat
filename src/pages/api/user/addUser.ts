import { NextApiRequest, NextApiResponse } from 'next'
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

// INSERT INTO table_name (column1, column2, column3,etc)
// VALUES (value1, value2, value3, etc);

export async function getAllUsersDB(){
    const db = await sqlite.open({filename: './mydb.sqlite', driver: sqlite3.Database})
    const users = await db.all('SELECT * FROM User')
    return users
}

export default async function addUser(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(500).json({ message: "Sorry we only accept POST requests"})
    } else
    // const users = await getAllUsersDB()

    res.status(200).json({message:"OMG", body: req.body})
}
