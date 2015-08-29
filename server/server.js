var express = require('express');
var app = express();
var pg = require('pg-hstore');
var connect = require('./db/connection.js');
var router = require('./router.js');
// requires below I have added for jsonwebtokens -arash


app.use(router);

if (connect.sync()){ //checks for connection to DB
  console.log('Connected to DB.');
}
else {
  console.log("UNABLE TO CONNECT TO DB");
}

app.listen(3000);
