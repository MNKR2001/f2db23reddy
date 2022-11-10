var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('motorcycle', { title: 'Search Results motor cycle' });
});

module.exports = router;