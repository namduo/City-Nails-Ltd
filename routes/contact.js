var express = require('express');
var router = express.Router();
var key = require('../config/keys')

var mailgun = require('mailgun-js')({apiKey: key.mailgun.api_key, domain: key.mailgun.domain_key});


/* POST contact form. */
router.post('/', function(req, res) {
   var data = {
      from: ' City Nails Website  <postmaster@sandboxc23c218c34754889bcd25fb2e7baba2f.mailgun.org>',
      to: 'citynails@email.com',
      subject: 'Enquiry from: ' + req.body.name,
      text: req.body.message + ' - Telephone: ' + req.body.phone + ' - Email: ' + req.body.email
   };

   console.log(data);
   
   // mailgun.messages().send(data, function (error, body) {
   //    console.log(body);
   //    if(!error)
   //       res.json({});
   //    else
   //    res.send('Mail not sent');
   // });

});



module.exports = router;
