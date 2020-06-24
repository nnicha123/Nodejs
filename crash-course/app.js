const { sayHello, sayName } = require('./userInfo');

const userInfo = require('./userInfo')
sayName()
sayHello()
console.log(`Filename ${__filename}`)
console.log(`Directory ${__dirname}`)