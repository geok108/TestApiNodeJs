var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Match = require('./api/models/MatchModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:adminTestApi1234!@cluster0.mnv29.mongodb.net/TestApi?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/MatchRoutes'); //importing route
routes(app); //register the route

app.listen(port);


console.log('TestApi RESTful API server started on: ' + port);
