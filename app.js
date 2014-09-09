var express=require('express');
var app=express();

app.use(express.static(__dirname + '/public'));

app.get('/',function(req, res){
  res.render('index.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port,function(res,res){   
	console.log('Server Corriendo en puerto ' + port)
});
