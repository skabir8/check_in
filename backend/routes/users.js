var express = require('express');
var router = express.Router();
var fs = require('fs');


var sqlite3 = require('sqlite3').verbose();




/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = new sqlite3.Database('data/users.db');
  var username = req.query['username'];
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
