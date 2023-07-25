const bitsService = require("./bits.service")
const {responseToClient} = require("../../others/response_to_client")
const BitDto = require("../../dto/bit.dto")

class BitsController {

    async getBits(req, res, next) {
        try {
            const response = await bitsService.getBits()

            return responseToClient(200, {items: response}, res)
        } catch (e) {
            return next(
                res.status(400).json({msg: "error"})
            )
        }
    }

    async createBit(req, res, next) {
        try {
            const payload = new BitDto(req.body)

            

        } catch (e) {
            next(e)
        }
    }
}

module.exports = new BitsController()