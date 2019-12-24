// const config = require('../config');
// const mysql = require('mysql');
// const connection = mysql.createConnection(config.keys.db);


// const { name, phone, email, message } = req.body.data;
// const { endPoints: { emailJS }, emailJS: { serviceID, templateID, userID } } = config.keys;

// const person = { email, phone, name };

// const sqlQueryLookUp = `select * from users where email = ? `;
// const sqlInsert = table => `insert into ${table} set ?`;




// connection.query(sqlInsert('messages'), messageInsert, (error, result) => {
//    if (error) return console.error(error.message);
//    res.send(result);
// });



// function CheckUserExistSQL(sqlQueryLookUp, email) {
//    return new Promise((resolve, reject) => {
//       connection.query(sqlQueryLookUp, email, (error, result) => {
//          if (result.length === 0) {

//          }
//       });
//    })
// }
      


// connection.query(sqlQueryLookUp, email, (error, result) => {
//    if (error) return console.error(error.message);

//    if (result.length === 0) {
//       // insert into users
//       connection.query(sqlInsert('users'), person, (error, result) => {
//          if (error) return console.error(error.message);
         
//          // insert new users message
//          const messageInsert = { id: result.insertId, message: message };
//          connection.query(sqlInsert('messages'), messageInsert, (error, result) => {
//             if (error) return console.error(error.message);
//             res.send(result);
//          });
//       });

//    } else {
//       // insert into messages
//       const messageInsert = { id: result[0].id, message: message };
//       connection.query(sqlInsert('messages'), messageInsert, (error, result) => {
//          if (error) return console.error(error.message);
//          res.send(result);
//       });

//    }
   
// });


// module.exports = { };





