var express = require('express');
var router = express.Router();

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/users.db');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS userdata (username TEXT, password TEXT, event_ids TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS events (id INTEGER, name TEXT, locations TEXT, date TEXT, time TEXT, members TEXT, todo TEXT, checkedin TEXT, map_locations TEXT)");
});

db.close();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
