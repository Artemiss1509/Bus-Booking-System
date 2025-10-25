const express = require('express');
const routes = express.Router();
const courseController = require('../controller/courseController')

routes.post('/add',courseController.courseAdd)
routes.get('/add',courseController.studenttoCourse)

module.exports = routes;