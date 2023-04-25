const {faker} = require('@faker-js/faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});


// var q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@gmail.com")';
 
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// connection.end();


// var person = {email: 'Jenny467@gmail.com'};

// connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// connection.end();

//  IMPORTANT:
// var person = {email: faker.internet.email()};

// connection.query('INSERT INTO users SET ?', person, function(err, result) {
//    if (err) throw err;
//    console.log(result);
//  });

//  connection.end();

// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
 
// connection.query('INSERT INTO users SET ?', person, function(err, result) {
//    if (err) throw err;
//    console.log(result);

// connection.end();

var person = {
	email: faker.internet.email(),
	created_at: faker.date.past().toString()
};


connection.query('INSERT INTO users SET ?', person, function(err, result) {
   if (err) throw err;
   console.log(result);
 });


connection.end();