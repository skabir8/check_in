var express = require('express');
var router = express.Router();
var fs = require('fs');


var sqlite3 = require('sqlite3').verbose();

function getEventData(callback, id){
  var db = new sqlite3.Database('data/users.db');
  var query = "SELECT * FROM events where id = " + id;
  var ret_val = "";
  db.all(query, function (err, rows) {
    if(err){
        console.log(err);
    }else{
        //console.log();
        callback(rows[0]);
    }
  });
}


function sendLocations(data){
  var ret_val = data.locations.substring(1,rows[0].locations.length-1).split(',');
  return ret_val;
}



/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = new sqlite3.Database('data/users.db');
  var query = "SELECT * FROM events";
  var ret_val = "";
  db.all(query, function (err, rows) {
    if(err){
        console.log(err);
    }else{
        //console.log();
        //console.log(rows);
        data = {"data": rows};
        res.send((data));
    }
  });
  db.close();
  //console.log(getEventData(sendLocations, 0));
  //res.json(getName(print_data));
});

module.exports = router;
