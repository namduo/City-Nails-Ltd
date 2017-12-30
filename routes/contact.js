var express = require('express');
var router = express.Router();
var key = require('../config/keys')

var mailgun = require('mailgun-js')({apiKey: key.mailgun.api_key, domain: key.mailgun.domain_key});

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* POST contact form. */
router.post('/form', function(req, res) {
  var data = {
    from: 'City Nails - Website <postmaster@sandboxc23c218c34754889bcd25fb2e7baba2f.mailgun.org>',
    to: 'citynails@email.com',
    subject: 'Message from ' + req.body.name + ': ' + req.body.email,
    text: req.body.message
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    if(!error)
			res.json({});
    else
      res.send('Mail not sent');
  });

});



module.exports = router;
