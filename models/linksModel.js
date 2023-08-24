const { default: mongoose, model } = require("mongoose");
const validator = require("validator")
const linkSchema = new mongoose.Schema({
    original_url :{
        type:String,
    },
    short_url:{
        type:Number,
    }

})
const Link = model("Link",linkSchema)
module.exports = Link