
# SQL: Web App - Join US Website





## Table of Content


**1. SQL: Web App - Join US Website**
 - 
## Project Description

**Web App - Join US Website**


**1. Add to your app.js file:**

    var express = require('express');
 
    var app = express();
    
**2. Adding Multiple Routes:**

    app.get("/", function(req, res){
    res.send("HELLO FROM OUR WEB APP!");
    });
    
    app.listen(8080, function () {
    console.log('App listening on port 8080!');
    });
![1](https://user-images.githubusercontent.com/128286364/234290047-b7b17f9e-7ba7-4eb9-a6e9-baa1a723e72d.png)

![2](https://user-images.githubusercontent.com/128286364/234290069-6b1c5edb-1c53-4c8b-b21b-95697dca42a7.png)
  
  app.get("/joke", function(req, res){
    var joke = "<strong>What do you call a dog that does magic tricks?</strong> <em>A labracadabrador.</em>";
    res.send(joke);
  });

![3](https://user-images.githubusercontent.com/128286364/234290110-276c200a-5fe0-4405-b3f2-cfec8776397f.png)

  app.get("/random_num", function(req, res){
    var num = Math.floor((Math.random() * 10) + 1);
    res.send("Your lucky number is " + num);
   });
![4](https://user-images.githubusercontent.com/128286364/234291416-d0b86ec5-966f-4d61-8607-1cc3fffe8e1f.png)



**3. Adding Multiple Routes:**

    var express = require('express');
    var mysql = require('mysql');
    var app = express();

    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'join_us'
    });

	

**4. Adding EJS Templates:**

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
            res.render("home",{data: count});
        });
    });
![5](https://user-images.githubusercontent.com/128286364/234290247-50979128-b715-424c-a4ad-1fe66b547136.png)

**5. Connecting The FORM to website**

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

    app.post("/register", function(req,res){
        var person = {
            email: req.body.email
        };
        
        connection.query('INSERT INTO users SET ?', person, function(err, result) {
    if (err) throw err;
        res.send("THANK YOU FOR JOINING THE WAITING LIST")
        res.redirect("/");
        console.log(result);	
        });
    });

    app.listen(3000, function () {
        console.log('App listening on port 3000!');
    });
![9](https://user-images.githubusercontent.com/128286364/234291920-68463a37-667e-44d4-acc2-ba972537591f.png)
![10](https://user-images.githubusercontent.com/128286364/234291963-2845c186-2353-4d54-945e-1f6297e1f624.png)

**6. Join Us web page**

url: https://mysql-pcobi.run-ap-south1.goorm.app/
![11](https://user-images.githubusercontent.com/128286364/234292056-d9c67c9a-862d-4358-8f88-98bbdd1eb801.png)
![12](https://user-images.githubusercontent.com/128286364/234292078-90034881-7f91-4cdd-a8b5-47840561f306.png)


## Installation

To run the program

**1. Express Node.js**

url: https://expressjs.com/

```bash
npm install express
```

**2. Faker**

url: https://github.com/rivy/js.faker

```bash
    Node.js
    var faker = require('faker');

    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties
```
**3.  EJS**

```bash
npm install --save ejs
```

