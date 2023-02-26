var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Bob",
    add: new Date()
  },
  {
    text: "Hello World!",
    user: "Chuck",
    add: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
