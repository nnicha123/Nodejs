const express = require('express')
const app = express()

app.get('/user/first',(req,res) => res.send('first on user'))
app.get('/user/second',(req,res) => res.send('second on user'))
app.listen(3000,() => console.log('Server starting...'))