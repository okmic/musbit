const mysql = require("mysql2/promise")
const config = require("./config")

const execute = async (query, data = undefined) => {
    try {
        const con =  await mysql.createConnection(config)
    
        const {rows} = await con.execute(query, data)
    
        return rows
    } catch (e) {
        console.error(e)
        throw e
    }
}

mexports = execute