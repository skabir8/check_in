var express = require('express');
var router = express.Router();
var fs = require('fs');



/* GET users listing. */
router.get('/', function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  var users;
  var exists = fs.existsSync('data.json');
  if (exists) {
    var txt = fs.readFileSync('data.json', 'utf8');
    data = JSON.parse(txt);
  } else {
    data = {};
  }
  console.log(data);
  res.json(data);
});

module.exports = router;
