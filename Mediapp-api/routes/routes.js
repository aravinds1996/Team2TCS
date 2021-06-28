let router = require('express').Router()
let userController = require('../controllers/userController')

router.get('/', (req,res)=>{
    res.send('API Works')
})

router.route('/auth/register').post(
    userController.register
)

router.route('/auth/sign_in').post(
    userController.sign_in
)

module.exports = router