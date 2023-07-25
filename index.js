const exporess = require("express")
const bitsRoute = require("./src/routes/bits")

const app = exporess() 
const PORT =  process.env.PORT 

app.use(bitsRoute)

app.listen(PORT, () => {
    console.log(`server started on port - ${PORT}`)
})