const sqlite = require('sqlite');

async function setup() {

//needs to install sqlite3 and add it as driver of squlite as explained at... 
// https://stackoverflow.com/questions/63823970/sqlite-filename-cannot-be-null-undefined

    const db = await sqlite.open('./mydb.sqlite')
    // await db.migrate({force:'last'})
    // const users = await db.all('SELECT * FROM User')
    // console.log('ALL PEOPLE', JSON.stringify(users, null, 2))
}
setup()