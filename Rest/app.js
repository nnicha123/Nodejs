const express = require('express')
const app = express()

// ROUTES
app.get('/',(req,res) => res.send('We are on Home'))
app.get('/posts',(req,res) => res.send('We are on POSTS'))
app.listen(3000,() => console.log('Listening on port 3000...'))