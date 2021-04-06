const express = require('express')
const router = express.Router()

const roomController = require('../controllers/room')

router.get('/', roomController.room)

router.get('/:roomId', roomController.roomId)

module.exports = router
