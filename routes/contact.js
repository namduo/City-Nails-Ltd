var express = require('express');
var router = express.Router();
const axios = require('axios');

/* POST contact form. */
router.post('/', function(req, res) {
   
   axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: 'citynails_gmail_19',
      template_id: 'template__2',
      user_id: 'user_eE3zF4XZczCQxqFROwutS',
      template_params: {
            email: req.body.email,
            from_name: req.body.name,
            phone: req.body.phone,
            message_html: req.body.message
         }
      })
      .then(() => {
         res.json({});
      })
      .catch(error => {
         res.send(`Error: ${error}`);
      })
});

module.exports = router;