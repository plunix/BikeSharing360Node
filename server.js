var express = require('express');
var path = require('path');

// Constants
var PORT = 8000;

// App
var app = express();
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname,'public')));

var items = [
	"Sign In",
	"How it Work",
	"Intelligent App",
	"Cities",
	"Our clients"
];

app.get('/', function (req, res) {
    res.render('index',{items:items});
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
