const { v4: uuidv4 } = require('uuid')
const io = require('../socket').getIO()

exports.room = (req, res, next) => {
  res.redirect(`/room/${uuidv4()}`)
}

exports.roomId = (req, res, next) => {
  res.render('room', { roomId: req.params.roomId })
}

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).emit('user-connected', userId)
    socket.on('message', message => {
      io.to(roomId).emit('createMessage', message)
    })
    socket.on('disconnect', () => {
      socket.to(roomId).emit('user-disconnected', userId)
    })
  })
})
