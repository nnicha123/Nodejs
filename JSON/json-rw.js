const fs = require('fs')
let data,jsobj,users

data = fs.readFileSync('./sample.json')
console.log(data)
console.log(data.toString())
jsobj = JSON.parse(data)
// console.log(jsobj)
// let userId = jsobj.users.map(el => el.userId)
// console.log(userId)
// let userFullname = jsobj.users.map(el => el.firstName + ' ' + el.lastName)
// console.log(userFullname)

users = jsobj.users
console.log(users)
users.map(num => num.phoneNumber = num.userId.toString().repeat(7))
console.log(users)

newData = JSON.stringify(jsobj)
fs.writeFileSync('./output.json',newData)
console.log(newData)