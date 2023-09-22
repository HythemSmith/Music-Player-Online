const express = require('express')
const router = express.Router()
const track_controller = require('../controllers/track_controller')

router.get('/:slug', track_controller.show)
router.get('/', track_controller.index)

module.exports = router