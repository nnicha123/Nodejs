const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html',
        'CodeCamp': 'five'
    })
    res.write('This is the response message\n')
    res.write('from your local server')
    res.end('<H2> Good Bye </H2>')
}).listen(8080,() => console.log('Server Start...'))