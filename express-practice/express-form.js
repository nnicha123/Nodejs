const express = require('express')
const app = express()
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
users = data.users

app.get('/search', (req, res) => {
    let formHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    </head>
    <body>
    <form action="/dosearch" method="GET">
        <label for="firstname">First Name</label>
        <input type="text" name="firstname" placeholder="First Name">
        <input type="submit">
    </form>
    </body>
    </html>
    `
    res.send(formHTML)
})

app.get('/dosearch',(req,res)=>{
    res.send(users.filter(x=> x.firstName.includes(req.query.firstname)))
})

app.listen(3000, () => console.log('Server Start...'))