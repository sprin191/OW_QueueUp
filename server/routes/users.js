var express = require('express');
var router = express.Router();
var owjs = require('overwatch-js');

router.get('/', function (req, res) {
  //var userInfo = owjs.getAll('psn', 'na', 'SimplyIntoMordor').then((data) => console.dir(data, {depth : 2, colors : true}) );
  var userInfo = owjs.search('SimplyIntoMordor').then((data) => console.dir(data, {depth : 2, colors : true}) );
  console.log(userInfo);
    res.send(userInfo);
});

module.exports = router;
