var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/iphone', function(req, res) {
  res.render('iphone');
   
});
router.get('/ipad', function(req, res) {
  res.render('ipad');
   
});
router.get('/watch', function(req, res) {
  res.render('watch');
   
});

module.exports = router;
