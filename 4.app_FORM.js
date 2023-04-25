var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser  = require("body-parser");


// configuration lines:
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));  

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
		 res.render("home",{count: count});
	 });
});
 
// app.post("/register", function(req,res){
//     //a POST route!
// 	console.log("POST REQUEST SENT TO /REGISTER email is " + req.body.email);
// 	// console.log(req.body); This will just show the email
// }); 

app.post("/register", function(req,res){
	var person = {
		email: req.body.email
	};
	
	connection.query('INSERT INTO users SET ?', person, function(err, result) {
  if (err) throw err;
	//res.send("THANK YOU FOR JOINING THE WAITING LIST")
	res.redirect("/");
	console.log(result);	
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