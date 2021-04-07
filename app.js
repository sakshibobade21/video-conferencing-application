const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

const roomRoute = require('./routes/room')

app.set('view engine', 'ejs')

app.use('/room', roomRoute)

app.listen(3000, () => console.log('Server is up and running'))
