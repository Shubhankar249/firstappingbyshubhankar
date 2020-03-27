const http=require('http')
const express=require('express')
const app=express()
const socketIO=require('socket.io')

const server=http.createServer(app)
const io=socketIO(server)

const server_port = process.env.PORT || 6111

io.on('connection', (socket)=> {
    socket.on('play', (data)=> io.emit('play', data))
})

app.use('/public', express.static('./front'))

app.get('/', (req, res) => res.send("Hello World Backend."))
server.listen(server_port)