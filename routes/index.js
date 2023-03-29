const express = require('express')
const router = express.Router()
const userController = require('../controller/users')
const indexController = require('../controller/index')

// Routes
router.get('/', indexController.getIndex)
router.post('/register', userController.postRegisterUser)

module.exports = router