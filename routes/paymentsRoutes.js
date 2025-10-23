const express = require('express');
const routes = express.Router();
const paymentController = require('../controller/paymentController')

routes.post('/',paymentController.paymentPost)

module.exports = routes;