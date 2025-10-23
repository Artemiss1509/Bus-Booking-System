const express = require('express');
const routes = express.Router();
const busController = require('../controller/busController')

routes.post('/',busController.busPost)
routes.get('/available/:seats',busController.busGet)

module.exports = routes;