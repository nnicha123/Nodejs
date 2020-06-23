const express = require('express')
const app = express()
app.get('/get',(req,res) => {
    res.send('GET request to get page')
})
app.post('/post', (req, res) => {
    res.send('POST request to homepage')
})
app.put('/out', function (req, res) {
    res.send('PUT request to homepage')
})
app.listen(5555, () => console.log('Using Post'))