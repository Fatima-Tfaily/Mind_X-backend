require("dotenv").config();
const mysql = require("mysql2");
const DATABASE_HOST = "localhost";
const DATABASE_USER = "root";
const DATABASE_PASSWORD = "thief1245!";
const DATABASE_NAME = "mindx";

const connection = mysql.createPool({
  host: DATABASE_HOST,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
});

connection.getConnection((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connected successfully");
});

module.exports = connection.promise();
