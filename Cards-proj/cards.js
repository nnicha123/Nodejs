const express = require('express')
const app = express()
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./cards.json'))
let userArr = data.users
const cardInside = (i) => {
    return `<div key=${userArr[i-1].userId}>
        <img style="width:100%;height:300px" src=${userArr[i-1].imageSrc} />
        <p style="font-weight:bold;font-size:20px">Full name : ${userArr[i-1].firstName} ${userArr[i-1].lastName}</p>
        <p style="font-size:20px">${userArr[i-1].emailAddress}</p>
    </div>`
}
const singleCard = (i) => {
    return `
    <div style="margin:30px 10px;width:300px;height:400px;padding:20px;box-shadow: 0 1px 5px rgba(0,0,0,0.3)">
        ${cardInside(i)}
    </div>`
}
app.get('/', (req, res) => {
    let homePage = `
    <h1>Welcome Home!</h1>
    `
    res.send(homePage)
})

app.get('/search',(req,res) => {
    let searchItem =  `<form action="/dosearch" method="GET">
        <label for="firstname">First Name</label>
        <input type="text" name="firstname" placeholder="First Name">
        <input type="submit">
    </form>`
    res.send(searchItem)
})

app.get('/dosearch',(req,res) => {
    let currentUser = userArr.filter(x=> x.firstName.includes(req.query.firstname))
    let cardItems = 
    `<div style="margin:30px auto;width:500px;height:400px;padding:20px;box-shadow: 0 1px 5px rgba(0,0,0,0.3)">
            ${cardInside(currentUser[0].userId)}
    </div>
  `
    res.send(cardItems)
})

app.get('/all',(req,res) => {
    let cardItems = `<div style="display:flex;justify-content:center">
    ${singleCard(1)}
    ${singleCard(2)}
    ${singleCard(3)}
    </div>`
        res.send(cardItems)
})
for (let i = 0; i < 4; i++) {
    app.get(`/${i}`, (req, res) => {
        let cardItems = 
        `<div style="margin:30px auto;width:500px;height:400px;padding:20px;box-shadow: 0 1px 5px rgba(0,0,0,0.3)">
                ${cardInside(i)}
        </div>
      `
        res.send(cardItems)
    })
}
app.listen(8000, () => console.log('Listening...'))