var express = require ('express');

var app = express();


app.set('view engine', 'ejs');

//Routes

//Home
app.get('/', function(req, res) {
	// body...
	res.render('home',{
		title: "Starmovie"
	});
	//res.send("<h2>This is a server response on the home page</h2>");
});

app.get('/starmovie/:number?',function(req,res) {
	// body...
	var number = req.params.number;
	res.send("This is page of movie " + number);
});

//notFound
app.get('*', function(req, res) {
	// body...
	res.send("This is not the page that you are looking for");
});


app.listen(3000, function(){
	console.log("The application is running on localhost:3000");
});

