const express = require('express')
const router = express.Router()
const axios = require('axios')
const config = require('../config')
const mysql = require('mysql')
const connection = mysql.createConnection(config.keys.db)

router.get('/', (req, res, next) => res.render('dev', { title: 'Dev Contact' }))

router.post('/', (req, res) => {
   
   const { name, phone, email, message } = req.body.data;
   const person = { email, phone, name }
   
   const sqlQueryLookUp = `select * from users where email = ? `
   const sqlInsert = table => `insert into ${table} set ?`
   
   connection.query(sqlQueryLookUp, email, (error, result) => {
      
      if (error) return console.error(error.message)
   
      if (result.length === 0) {
         // insert into users
         connection.query(sqlInsert('users'), person, (error, result) => {
            if (error) return console.error(error.message)
            
            // insert new message
            const messageInsert = { id: result.insertId, message: message };
            connection.query(sqlInsert('messages'), messageInsert, (error, result) => {
               if (error) return console.error(error.message)
               
               sendEmail(config.keys, req.body.data)
               res.send(result)
            });
         });
      } else {
         // insert into messages
         const messageInsert = { id: result[0].id, message: message };
         connection.query(sqlInsert('messages'), messageInsert, (error, result) => {
            if (error) return console.error(error.message);
            
            sendEmail(config.keys, req.body.data)
            res.send(result)
         })
      }
   })

   function sendEmail(userData, formData) {
      const { endPoints: { emailJS }, emailJS: { serviceID, templateID, userID } } = userData
      const { name, phone, email, message } = formData

      axios.post(emailJS, {
         service_id: serviceID,
         template_id: 'template__1',
         user_id: userID,
         template_params: {
               email: email,
               from_name: name,
               phone: phone,
               message_html: message
            }
         })
         .then(() => console.log({}))
         .catch(error => console.log(error))
   }

})

module.exports = router;