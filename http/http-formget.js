const http = require('http')
const fs = require('fs')
const url = require('url')

renderHTML = (filename,req,res) => {
    fs.readFile(filename,(err,data) =>{
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
    })
}
http.createServer((req,res) => {
    let p_url = url.parse(req.url,true)
    console.log(p_url.pathname)
    console.log(p_url.query)

    if(req.url === '/') return renderHTML('./formget.html',req,res)

    if(p_url.pathname === '/getdata'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(`<h3>Your data</h3>`)
        res.write(`<p>Name: ${p_url.query.fname}</p>`)
        res.write(`<p>Last Name: ${p_url.query.lname}</p>`)
        return res.end()
    }

    console.log(req.url)
    res.writeHead(404,{'content-type':'text/html'})
    res.write(req.url)
    res.end()
}).listen(8080,() => console.log('Server start...'))