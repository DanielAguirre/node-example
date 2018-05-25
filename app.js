//load Mongose Model
require('./schemas/user')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./user/route')

mongoose.Promise = global.Promise;
//DB Server
if(process.env.NODE_ENV != 'unit'){
    mongoose.connect(process.env.EXAMPLE_DATABASE)
    mongoose.connection.on('error', (err) => {
        console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`)
    })
}


//Server
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))
app.use('/', routes)

if (!module.parent) {
    app.listen(process.env.PORT, () => { console.log('Hey there docker 1')})
} else {
    module.exports = app;
}
