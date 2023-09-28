var express = require('express')
var path = require("path")
var app = express()



app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("public"))

app.get("/", function(req,res){
res.sendFile(path.resolve(__dirname + "/index.html"))
})







app.listen(5000, function(){
    console.log("server is live at... http://localhost:5000/")
})