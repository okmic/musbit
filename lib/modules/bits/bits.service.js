const {execute} = require("../../db/db")

class BitsService {
    async getBits() {
        try {
            const response =  await execute(
                `select * from bits`
            )

            return response
        } catch {
            //apierror
            throw e
        }
    }


    async createBit(payload) {
        try {
            //need uuid
            const fileName  = ""

           await execute(
                `insert into bits (fileName, price) values (?, ?)`, [payload.fileNa]
            )

        } catch (e) {
            throw e
        }
    }
}

module.exports = new BitsService()