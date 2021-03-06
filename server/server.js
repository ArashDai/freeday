var express = require('express');
var app = express();
var pg = require('pg-hstore');
var connect = require('./db/connection');
var bodyParser = require('body-parser');
var request = require('request');
var config = require('./config/config.js');
var router = require('./router');//sequelize must be loaded before router
var User = require('./db/models/user');
var passport = require('passport');
var session = require('express-session');

var authCtrl = require('./auth/auth.js');
var eventCtrl =  require('./controllers/event.controller');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// require('./router')(passport);

app.use(session({resave: false,
  saveUnititialized: false,
  secret: "config.secret.shh" }));
app.use(passport.initialize());
app.use(passport.session());


app.use(require('./routes/events.routes'));
app.use(passport.initialize());
app.use(express.static('client'));//should serve index.html page.
require('./db/passport');
require('./db/db');
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
// just a comment
// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });

// make renderMap module
//app.get('/map', renderMap);

app.get('/map', function(req, res) {
  request.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=' + config.googleMapApi.key, 
    function(err, response, body) {
      res.send(body);
  });
});

app.get('/event', function(req, res) {
  request.get('https://www.eventbriteapi.com/v3/events/search/?q=popular=true&location.latitude=34.0500&location.longitude=118.2500&location.within=2mi&token=' + config.eventBriteApi.token,
    function(err, response, body) {
      console.log(body);
      res.json(JSON.parse(body));
    });
});




app.get('/meetup', function(req, res) {
  var pos;
  request.post('/mylocation', function(req, res) {
   pos = req.body;
   res.sendStatus(200);
  });
  if (pos !== undefined) {
  request.get('https://api.meetup.com/2/open_events?sign=true&photo-host=public&lat=' + pos.lat + '&lon=' + pos.lon + '&page=20&key=' + config.meetupApi.key,
    function(err, response, body) {

      if (!response.headers['content-type']) {
        res.set('Content-Type', 'application/json');
      } else {
        res.set('Content-Type', response.headers['content-type']);
      }
      
      res.send(body);
    });
  }
});

app.listen(3000);


