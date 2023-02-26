// var express = require('express');
// var router = express.Router();

// var messages = [];

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// // // STEP 5 LOOP 
// // router.get('/', function(req, res, next) {
// //   res.render('index', { title: 'Mini Messageboard', messages: messages });
// // });

// // STEP 6
// router.get('/new', function(req, res, next) {
//   res.render('form', { title: 'New Message' });
// });


// module.exports = router;

var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

// STEP 6
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message' });
});

module.exports = router;
