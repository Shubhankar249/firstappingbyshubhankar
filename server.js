const express=require('express')
const app=express()

const server_port = process.env.PORT || 6111
app.use('/public', express.static('./front'))

app.get('/', (req, res) => res.send("Hello World Backend."))
app.listen(server_port)