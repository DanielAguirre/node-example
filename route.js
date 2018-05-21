const express = require('express');
const controller = require('./controller')
const urls = express.Router()

urls.route('/:id')
    .param(':id',controller.paramsID)
    .all(controller.authParams)
    .get(controller.getParams)
    .post(controller.postParams)

module.exports = urls