const mongoose = require('mongoose')
const BASEURL = 'mongodb://127.0.0.1:27017/'
async function connect(db){
    return mongoose.connect(`${BASEURL}${db}`)
}

module.exports = connect