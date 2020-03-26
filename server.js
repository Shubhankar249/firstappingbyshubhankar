const express=require('express')
const app=express()

app.use('/public', express.static('./front'))

app.get('/', (req, res) => res.send("Hello World Backend."))
app.listen(6111)