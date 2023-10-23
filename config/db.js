require('dotenv').config();
const mysql = require("mysql2");
const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_NAME = process.env.DATABASE_NAME;
// const connection = mysql.createConnection({
//   host:DATABASE_HOST,
//   user:DATABASE_USER,
//   database: DATABASE_NAME,
//   password:DATABASE_PASSWORD,
// })
const connection = mysql.createPool({
  host: DATABASE_HOST,
  user: DATABASE_USER,
  database: DATABASE_NAME,
  password: DATABASE_PASSWORD,
})

// connection.connect((err) => {
  connection.getConnection((err)=>{
  if (err) {
    console.log(err);
    return;
  }
  console.log("connected");
  
  })
connection.query("SELECT * FROM users", (err, result, field) => {
  console.log(result);
});
module.exports = connection.promise();