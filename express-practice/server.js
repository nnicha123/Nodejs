const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send("Hello from express")
})
app.get('/user',(req,res) => {
    res.send("Hello from User Page")
})

app.listen(3000, () => console.log('Express server start...'))

// ---------------------Comparison -----//

const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    if(req.url === '/') return res.end('Hello from NodeJs HTTP')
    if(req.url === '/user') return res.end('Hello from userpage NodeJS HTTP')
})
server.listen(8080, () => console.log('HTTP server start 8080'))