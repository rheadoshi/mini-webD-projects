const mongoose = require('mongoose')

const URLSchema = new mongoose.Schema({
    shortID : {
        type: String,
        required: true,
        unique: true
    },
    redirectID: {
        type:String,
        required: true
    },
    visitHistory : [{timeStamp: {type:Number}}],
    },
    {timestamps:true}
)

const url = mongoose.model("url", URLSchema)

module.exports = url