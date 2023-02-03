var express = require('express');

var app= express();
var path = require('path');

app.use(express.static(path.join(__dirname,'public')));


app.get('/',function(req,res){

    var person = {fname:"garry"}

    res.send(person);
});

var server = app.listen(9000,function(req,res){

    var host = server.address().address
    var port = server.address().port

    console.log("ahe ithecgh");

});
