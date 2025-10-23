const express = require('express');
const routes = express.Router();
const userController = require('../controller/userController')

routes.post('/add',userController.userPost)
routes.put('/update/:id',userController.userPut)
routes.delete('/delete/:id',userController.userDelete)

module.exports = routes;