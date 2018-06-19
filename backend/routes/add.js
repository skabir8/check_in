var express = require('express');
var router = express.Router();
var fs = require('fs');

var users;
var exists = fs.existsSync('data.json');
if (exists) {
  var txt = fs.readFileSync('data.json', 'utf8');
  data = JSON.parse(txt);
} else {
  data = {};
}


router.get('/', function(req, res, next) {
  var new_todo = req.query['todo'];
  console.log(new_todo);
  data["lists"].push(new_todo);
  fs.writeFile ("data.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
  }
);
res.json(data);


});

module.exports = router;
