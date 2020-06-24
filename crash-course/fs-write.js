const fs = require('fs')

fs.writeFile('message.txt','Hello there node', (err) => {
    if(err) throw err;
    console.log('file has been written')
})

console.log('hello')