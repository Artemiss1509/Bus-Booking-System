const express = require('express');
const routes = express.Router();
const userController = require('../controller/userController')

routes.post('/',userController.userPost)
routes.put('/update/:id',userController.userPut)
routes.delete('/delete/:id',userController.userDelete)
routes.get('/',userController.userGet)
routes.get('/:id/bookings',userController.userGetId) 

module.exports = routes;