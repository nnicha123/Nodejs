const fs = require('fs')
let count = 0;
let count1 = 0;
// Synchronous (blocking)
for (let i = 0; i < 20; i++) {
    
    const d1 = fs.readFileSync('./codecamp.txt','utf8')
    console.log(d1)
    const d2 = fs.readFileSync('./codecamp1.txt','utf8')
    console.log(d2)
  }
  