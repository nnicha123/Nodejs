const fs = require('fs')
let data, obj, usersLastnameCheck

data = fs.readFileSync('./output.json');
console.log(data.toString())
obj = JSON.parse(data)
console.log(obj)
usersLastnameCheck = obj.users;
usersLastnameCheck.filter(el => el.lastName = el.lastName == 'mac' ? 'apple' : el.lastName)
console.log(obj)