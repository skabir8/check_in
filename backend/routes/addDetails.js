var express = require('express');
var router = express.Router();
var fs = require('fs');



router.get('/', function(req, res, next) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('data/users.db');
  var id = parseInt(req.query['id']);
  var dates = "'" + JSON.stringify(req.query['date']).split(",") + "'";
  var time = "'" + JSON.stringify(req.query['time']).split(",") + "'";
  var todo = "'" + JSON.stringify(req.query['todo']).split(",") + "'";
  var checkedIn = "'" + JSON.stringify(req.query['checkedIn']).split(",") + "'";
  var query = "UPDATE events SET date = " + dates + ", time = " + time + ", todo = " + todo + ", checkedIn = " + checkedIn + " WHERE id = " + id;
  db.all(query, function (err, rows) {
    if(err){
        console.log(err);
    }
    else{
      console.log("It Ran");
    }
  });
  db.close();



});

module.exports = router;
