const router = require('express').Router()
const controller = require('../controllers/index')
const dashboard = require("./dashboard")

router.get('/', controller.home)

router.use(controller.notFound)
router.use(controller.exception)
router.use('/dashoard', dashboard)

module.exports = router