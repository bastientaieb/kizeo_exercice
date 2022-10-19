const mysql = require("mysql");

const database = mysql.createConnection({
  database: "kizeoforms",
  host: "localhost",
  user: "root",
  password: process.env.DATABASE_PASSWORD,
});

database.connect((error) => {
  if (error) {
    console.log("Can't connect to database :", error);
  }
  console.log("Connect to database");
});

module.exports = database;
