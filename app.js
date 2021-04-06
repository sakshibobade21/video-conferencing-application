const express = require('express')
const app = express()

const roomRoute = require('./routes/room')

app.set('view engine', 'ejs')

app.use('/room', roomRoute)

app.listen(3000, () => console.log('Server is up and running'))
