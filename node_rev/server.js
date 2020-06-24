const http = require('http')
onRequest = (req,res) => {
    res.writeHead(200,{'content-type':'text/html'})
    res.end('<h1> Hello there </h1>')
}
http.createServer(onRequest).listen(8000, () => console.log('Listening...'))