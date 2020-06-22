const fs = require('fs')
const data = fs.readFile('./readme.txt',(err,data) => {
    if(err) {console.log('Error..');return;}
    console.log(data.toString())
    console.log('Done...')
})
console.log('Reading File...')