var express = require('express');
var router = express.Router();
var fs = require('fs');

var sqlite3 = require('sqlite3').verbose();



router.get('/', function(req, res, next) {
  var id = parseInt(req.query['id']);
  var name = "'" + req.query['name'] + "'";
  var invites = "'" + JSON.stringify(req.query['invites'].split(',')).toString() + "'";
  //var invites = "['Yo','Chill','Nah']";
  var db = new sqlite3.Database('data/users.db');
  var query = "INSERT INTO events (id, name, members, locations, date, time, todo, checkedin, map_locations) VALUES (" + id + "," + name + "," + invites+ ", '[]','[]','[]','[]','[]','[]')";

  db.all(query, function (err, rows) {
    if(err){
        console.log(err);
    }
  });
  db.close();

  //res.json(data);


});

module.exports = router;
