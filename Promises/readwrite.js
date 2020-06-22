var fs = require('fs')
function readMessage(){
    return new Promise((fulfill,reject) => {
        fs.readFile('message.txt','utf8',(err,res) => {
            if(err) reject(err);
            else fulfill(res)
        });
    });
}
function writeMessage(dat){
    return new Promise((fulfill,reject) => {
        fs.writeFile('out.txt',dat,(err,res) => {
            if(err) reject(err);
            else fulfill(res)
        });
    });
}
readMessage().then(data => writeMessage(data)).then(() => console.log('success'))