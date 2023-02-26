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

// POST route to submit a new message
router.post('/new', function(req, res, next) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/');
});


module.exports = router;
