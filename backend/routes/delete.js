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
  var index = parseInt(req.query['index']);
  console.log(index);

  data["lists"].splice(index, 1);
  fs.writeFile ("data.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
  }
);
res.json(data);



});

module.exports = router;
