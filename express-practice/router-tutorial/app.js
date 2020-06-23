const express = require('express')
const app = express()

const userRoute = require('./userRoute')
app.use('/user',userRoute)
app.listen(3000, () => console.log('server start...'))