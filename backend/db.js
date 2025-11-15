const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "password",
  database: "testdb",
  "port": 3306
});

module.exports = pool.promise();
