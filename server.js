var exp = require('express');
var app = exp();
var path = require('path');

app.use(exp.static(path.join(__dirname,'public')));

var server = app.listen(9000,function(req,res){

    var host = server.address().address
    var port = server.address().port

    console.log("ahe ithecgh");

});

app.get("/",function(req,res){

        res.send({fname:"Gaurav Deshpande"});
});
