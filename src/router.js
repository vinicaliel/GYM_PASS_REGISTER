const express = require('express')

const gymPassController = require('./controllers/gymPassController')
const middlewere = require('./middleawear/middleawears')

const router = express.Router();

router.get('/users' , gymPassController.getAllUsers )

router.post('/users' , middlewere.validateBody , gymPassController.addUser )

router.delete('/users/:id' , gymPassController.deleteUser)

router.put('/users/:id' , middlewere.validateBody , gymPassController.updateUser)

module.exports = router