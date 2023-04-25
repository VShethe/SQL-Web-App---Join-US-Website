const {faker} = require('@faker-js/faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});

// connection.query('SELECT CURDATE()', function(error, results, feild){
// 	if (error) throw error;
// 	console.log(results);
// });

// connection.end();

// connection.query('SELECT 1 + 5 AS answer', function(error, results, feild){
// 	if (error) throw error;
// 	console.log(results[0].answer);
// });

// connection.end();


// var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';

// connection.query(q, function(error, results, feild){
// 	if (error) throw error;
// 	console.log(results);
// });

// connection.end();


var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';

connection.query(q, function(error, results, feild){
	if (error) throw error;
	console.log(results[0].time);
	console.log(results[0].date.toString());
	console.log(results[0].now.toString());
});

connection.end();
