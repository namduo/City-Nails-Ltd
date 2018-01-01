var express = require('express');
var router = express.Router();
var key = require('../config/keys')

var mailgun = require('mailgun-js')({apiKey: key.mailgun.api_key, domain: key.mailgun.domain_key});


/* POST contact form. */
router.post('/', function(req, res) {
  var data = {
    from: req.body.email + ' via -- <postmaster@sandboxc23c218c34754889bcd25fb2e7baba2f.mailgun.org>',
    to: 'citynails@email.com',
    subject: 'City Nails Enqury from: ' + req.body.name,
    text: req.body.message + ' - Telephone: ' + req.body.phone
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
