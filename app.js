const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./route')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', routes)



app.listen(3000, () => { console.log('Hey there')})
