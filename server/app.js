require('dotenv').config({silent: true});
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


//route variables
var users = require('../server/routes/users');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve back static files
app.use(express.static(path.join(__dirname, '../public')));

//app.use(passport.initialize());
//app.use(passport.session());
// Routes
app.use('/users', users);


app.post('/data/:number', function (req, res) {
      res.send(req.params.number);
    });

// Handle index file separately
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
  });

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
      console.log('Listening on port: ', app.get('port'));
    });
