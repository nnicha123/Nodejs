const url = require('url')
const address = 'http://localhost:8080/default.html?year=2017&month=february'
const parsedURL = url.parse(address,true)
console.log(parsedURL.host)
console.log(parsedURL.port)
console.log(parsedURL.pathname)
console.log(parsedURL.query)
console.log(parsedURL.query.month)