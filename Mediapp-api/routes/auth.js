let router = require('express').Router()
let userController = require('../controllers/userController')

router.route('/register').post(
    userController.register
)

router.route('/sign_in').post(
    userController.sign_in
)

module.exports = router