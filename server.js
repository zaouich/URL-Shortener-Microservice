const app = require("./app")
const mongoose = require("mongoose")
require("dotenv").config({path:"./config.env"})
const DB = process.env.DB
app.listen(3000,()=>{
    console.log("listning to the port 3000......")
    mongoose.connect(DB).then(()=>{
        console.log("connect to the db")
    })
})
