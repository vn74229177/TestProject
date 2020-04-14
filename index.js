var express = require('express')
var http = require('http')
var app = express()
var server = http.Server(app)

app.get('/',(req,res)=>{
    res.send("This's Homepage!")
})

server.listen(50000, ()=>{
    console.log('Server is running!')
})