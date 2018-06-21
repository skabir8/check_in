var express = require('express');
var router = express.Router();
var fs = require('fs');

var sqlite3 = require('sqlite3').verbose();


router.get('/', function(req, res, next) {
  var id = parseInt(req.query['id']);
  console.log(id);
  var db = new sqlite3.Database('data/users.db');
  var query = "DELETE FROM events WHERE id =" + id;
  db.all(query, function (err, rows) {
    if(err){
        console.log(err);
    }
    else{
      console.log("Deleted " + id);
    }
  });
  db.close();

});

module.exports = router;
