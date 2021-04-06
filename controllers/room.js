const { v4: uuidv4 } = require('uuid')

exports.room = (req, res, next) => {
  res.redirect(`/room/${uuidv4()}`)
}

exports.roomId = (req, res, next) => {
  res.render('room', { roomId: req.params.roomId })
}
