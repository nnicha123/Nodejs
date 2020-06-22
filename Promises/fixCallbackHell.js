const fs = require('fs');
// Callback Hell
// fs.readFile('start.txt', 'utf8', (err, data) => {
//     console.log(data)
//     fs.readFile(`${data}`, 'utf8', (err, data) => {
//         console.log(data)
//         fs.readFile(`${data}`, 'utf8', (err, data) => {
//             console.log(data)
//             fs.readFile(`${data}`, 'utf8', (err, data) => {
//                 console.log(data);
//             })
//         })
//     })
// })

chainPromise = (filename) => {
    return new Promise((resolve, reject) => {
        if(filename == 'f02.txt') reject('Error from f02') //try error
        fs.readFile(filename, 'utf8', (err, data) => {
            console.log(`${data}`) 
            resolve(data)
        })
    })
}
chainPromise('./start.txt')
.then(data => chainPromise(`${data}`))
.then(data => chainPromise(`${data}`))
.then(data => chainPromise(`${data}`))
.catch(err => console.log('Error: ',err)) //try catch error
