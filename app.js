//load Mongose Model
require('./schemas/user')

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./user/route')

mongoose.Promise = global.Promise;
//DB Server
mongoose.connect(process.env.EXAMPLE_DATABASE)
mongoose.connection.on('error', (err) => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`)
})

//Server
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))
app.use('/', routes)
console.log(process.env)
console.log('volume')
app.listen(process.env.PORT, () => { console.log('Hey there docker 1')})
