require('dotenv').config();

const keys = {
   db: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB
   },
   emailJS: {
      serviceID: process.env.EMJS_SERVICE_ID,
      templateID: process.env.EMJS_TEMPLATE_ID,
      userID: process.env.EMJS_USER_ID
   },
   endPoints: {
      emailJS: 'https://api.emailjs.com/api/v1.0/email/send'
   }
}

module.exports = { keys }