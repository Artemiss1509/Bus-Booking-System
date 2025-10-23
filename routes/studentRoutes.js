const express = require('express');
const routes = express.Router();
const studentController = require('../controller/studentController')

routes.post('/',studentController.studentPost)
routes.put('/:id',studentController.studentPut)
routes.delete('/:id',studentController.studentDelete)
routes.get('/',studentController.studentGet)
routes.get('/:id',studentController.studentGetId)


module.exports = routes;