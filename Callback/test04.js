const fs = require('fs')
let count = 0;
let count1 = 0;
// Asynchronous (Non-blocking)
for (let i = 0; i < 20; i++) {
    
    fs.readFile('codecamp.txt', 'utf8', (err, data) => {
        count++
      console.log(data,count);
    });
  
    fs.readFile('codecamp1.txt', 'utf8', (err, data) => {
        count1++
      console.log(data,count1);
    });
  }
  