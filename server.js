var exp = require('express');
var app = exp();
var path = require('path');

app.use(exp.static(path.join(__dirname,'public')));


var server = app.listen(9000,function(){

    console.log("server created");

});

app.get("/",function(req,res){

        res.send({fname:"Gaurav Deshpande"});
});
