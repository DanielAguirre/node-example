const express = require('express');
const userController = require('./controller')
const urls = express.Router()

urls.param(':id', userController.paramsID)

urls.get('/user/:id', userController.findOne)

urls.route('/user')
    .all(userController.authParams)
    .get(userController.getUser)
    .post(userController.createUser)

module.exports = urls