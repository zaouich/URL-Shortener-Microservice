const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors({
    origin: "*"
}))
const linkRouter = require("./routes/linkRoutes")
const errController = require("./controllers/errController")

app.use("/api/shortUrl",linkRouter)
app.use(errController)
module.exports = app 
