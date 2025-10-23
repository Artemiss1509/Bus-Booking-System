const express = require('express');
const routes = express.Router();
const busController = require('../controller/busController')

routes.post('/',busController.busPost)

module.exports = routes;