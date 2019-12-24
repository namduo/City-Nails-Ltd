const express = require('express');
const router = express.Router();
const axios = require('axios');
const mysql = require('mysql');
const config = require('../config');
const connection = mysql.createConnection(config.keys.db);

router.post('/', (req, res) => {
   
   const { emailJS: { serviceID, templateID, userID } } = config.keys;

   axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: serviceID,
      template_id: templateID,
      user_id: userID,
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