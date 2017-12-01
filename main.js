var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
app.use(express.static(path.join(__dirname, 'public')));



// app.get('/', function(req, res) {
	// console.log("file io");
    // res.sendFile(path.join(__dirname + '/index.html'));
// });

app.get('/london', function (req, res) {
	 console.log("Working");
 res.send('Die Hard');
 })
 
 app.get('/londonhtml', function (req, res) {
	 console.log("Working");
 res.send('Naked Gun');
 })
 
 app.get('/thrillhtml', function (req, res) {
	 console.log("Working");
 res.send('Fight Club');
 })
 

 
 app.get('/londonfile', function(req, res) {
	console.log("london file");
    res.sendFile(path.join(__dirname + '/london.html'));
});

app.get('/term2', function(req, res) {
	console.log("term2");
    res.sendFile(path.join(__dirname + '/term2.html'));
});

app.get('/diehard', function(req, res) {
	console.log("diehard");
    res.sendFile(path.join(__dirname + '/diehard.html'));
});

app.get('/predator', function(req, res) {
	console.log("predator");
    res.sendFile(path.join(__dirname + '/predator.html'));
});

app.get('/dark', function(req, res) {
	console.log("dark");
    res.sendFile(path.join(__dirname + '/dark.html'));
});
 
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/londonfile', function (req, res) {
	console.log("post method");
	console.log(req.body.firstname);
   res.send('Welcome to my Data Rep Project Work');
})
app.delete('/londonfile', function (req, res) {
  res.redirect('/');
})


app.listen(8080);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
