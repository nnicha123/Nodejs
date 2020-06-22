const fs = require('fs');
// Callback Hell
fs.readFile('start.txt', 'utf8', (err, data) => {
    console.log(data)
    fs.readFile(`${data}`, 'utf8', (err, data) => {
        console.log(data)
        fs.readFile(`${data}`, 'utf8', (err, data) => {
            console.log(data)
            fs.readFile(`${data}`, 'utf8', (err, data) => {
                console.log(data);
            })
        })
    })
})