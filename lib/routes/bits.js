const {Router} = require("express")
const bitsController = require("../modules/bits/bits.controller")

const route = Router()

route.get("/bits", bitsController.getBits)

module.exports = route