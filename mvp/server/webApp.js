var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('../db/App.js');
var Promise = require('bluebird');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));


app.get('/itemdb', function(req, res) {
	database.Items.find()
	.exec()
	.then( (data) =>{
		console.log('data');
		res.status(200).send(data);
	})		
});

app.post('/itemdb', function(req, res) {
	console.log('req.body', req.body);
	database.memo(req.body, function() {res.status(200).send('save completed!')});
})


	var port = 8080;

	app.listen(port, function() {
		console.log('ayy connected to port');
	});