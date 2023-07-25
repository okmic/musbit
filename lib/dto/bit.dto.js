class BitDto {
    id
    title
    fileName
    price

    constructor(payload) {
        this.id = payload.id
        this.title = payload.title
        this.fileName = payload.fileNmae
        this.price = payload.price
    }

}

module.exports = BitDto