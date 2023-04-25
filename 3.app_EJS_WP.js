var express = require('express');
var mysql = require('mysql');
var app = express();

app.set("view engine", "ejs");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});

	
app.get("/", function(req, res){
	var q = "SELECT COUNT(*) AS count FROM users";
	 connection.query(q, function (error, results) {
 	if (error) throw error;
		 var count = results[0].count;
 // res.send("We have " + count + " users in our database");
		 res.render("home",{data: count});
	 });
});
 
app.get("/joke", function(req, res){
 var joke = "<strong>What do you call a dog that does magic tricks?</strong> <em>A labracadabrador.</em>";
 res.send(joke);
});

app.get("/random_num", function(req, res){
 var num = Math.floor((Math.random() * 10) + 1);
 res.send("Your lucky number is " + num);
});

app.listen(3000, function () {
 console.log('App listening on port 3000!');
});