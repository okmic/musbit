const exporess = require("express")
const bitsRoute = require("./lib/routes/bits")

const app = exporess() 
const PORT = process.env.PORT || 5000

app.use(bitsRoute)

app.listen(PORT, async () => {
    console.log(`server started on port - ${PORT}`)
})