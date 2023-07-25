const mysql = require('mysql2/promise')
const config = require('./config')

exports.execute = async (query, data) => {
    try {
        const connection = await mysql.createConnection(config)
        const [rows, fields] = await connection.execute(query, data && data)
        connection.end()
/*      console.log(rows) */
        return {rows, fields}
    }
    catch (e) {
     console.log(e)
    }
}



