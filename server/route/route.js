const Router = require('express').Router
const router = new Router()
const userController = require('../controllers/userController')
const {body} = require('express-validator')

router.post(
    '/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 20}),
    userController.registration
)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/refresh', userController.refresh)

module.exports = router