const express = require('express')
const router = express.Router()
const site_controller = require('../controllers/site_controller')

router.get('/', site_controller.index)

module.exports = router