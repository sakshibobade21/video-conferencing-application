const express = require('express')
const app = express()

const roomRoute = require('./routes/room')

app.get('/', roomRoute)

app.listen(3000, () => console.log('Server is up and running'))
