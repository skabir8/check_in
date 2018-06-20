var express = require('express');
var router = express.Router();

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/users.db');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS userdata (username TEXT, password TEXT, event_ids TEXT)");
    db.run("INSERT INTO userdata (username, password, event_ids) VALUES (?, ?, ?)", "bob", "123", "[1]");
    db.run("CREATE TABLE IF NOT EXISTS events (id INTEGER, name TEXT, locations TEXT, date TEXT, time TEXT, members TEXT, todo TEXT, checkedin TEXT, map_locations TEXT)");
    db.run("INSERT INTO events (id, name, locations, date, time, members, todo, checkedin, map_locations) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", 0, "BBQ", "[Hunter College, Central Park]", "[July 14, 2018]", "[16:43]", "[Shariar, Rakib]", "[Rakib - Coffe, Shariar - Music]", "[Shariar]", "[loc_1, loc_2]");
});

db.close();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
