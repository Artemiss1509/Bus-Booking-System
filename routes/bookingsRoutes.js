const express = require('express');
const routes = express.Router();
const bookingController = require('../controller/bookingController')

routes.post('/',bookingController.bookingPost)

module.exports = routes;