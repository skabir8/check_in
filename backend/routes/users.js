var express = require('express');
var router = express.Router();
var fs = require('fs');


var sqlite3 = require('sqlite3').verbose();

function getName(callback){
  var db = new sqlite3.Database('data/users.db');
  var query = "SELECT * FROM events";
  db.all(query, function (err, rows) {
    if(err){
        console.log(err);
    }else{
        callback(rows[0]);
    }
  });
}


function print_data(data){
  console.log(data);
}

getName(print_data)
/* GET users listing. */
router.get('/', function(req, res, next) {

  res.json(data);
});

module.exports = router;
