var express=require('express');
var app=express();

app.use(express.static(__dirname + '/public'));

app.get('/',function(req, res){
  res.render('index.html');
});


app.listen(3000,function(res,res){   
	console.log('Server Corriendo en puerto ' + 3500);
