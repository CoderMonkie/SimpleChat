var http = require('http')
var fs =  require('fs')
var socket = require('socket.io')

const port = process.env.port || 5012

// サーバ
var server = http.createServer(function(req, res){


    var html = fs.readFileSync('./index.html')

    res.end(html)

}).listen(port)
console.log(`Visit: http://localhost:${port} to access.`)

var io = socket(server)

io.on('connection', function (socket) {

    console.log('Socket-Server: connected')
    // console.log(socket)

    socket.on('message', function (mes) {
        console.log(mes)
        io.emit('message', mes)
    })

    socket.on('error',function () {
        console.log('socket: error')
    })
})


