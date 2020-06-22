const fs = require('fs');

const getFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => resolve(data))
    })
}
(async () => {
    try{
        let data = await getFile('./start.txt')
        console.log(`${data}`)
        data = await getFile(data)
        console.log(`${data}`)
        data = await getFile(data)
        console.log(`${data}`)
        data = await getFile(data)
        console.log(`${data}`)

    }
    catch(err){
        console.log(err)
    }

})() //IIFE เรียกใช้เลย

// getFilename();

// getFile('./start.txt')
// .then(data => getFile(`${data}`))
// .then(data => getFile(`${data}`))
// .then(data => getFile(`${data}`))
