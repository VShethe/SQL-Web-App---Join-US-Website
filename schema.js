const {faker} = require('@faker-js/faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});

// Selecting Data

// var q = 'SELECT * FROM users ';

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//  	console.log(results[0].email);
// 	console.log(results[0].created_at.toString());
//  	console.log(results[1].email);
// 	console.log(results[1].created_at.toString());	
// });

// connection.end();


// var q = 'SELECT * FROM users ';

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//  	console.log(results.length);	
// });

// connection.end();


var q = 'SELECT COUNT(*) AS total FROM users ';

connection.query(q, function (error, results, fields) {
  if (error) throw error;
 	console.log(results[0].total);	
});

connection.end();