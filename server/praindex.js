const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  host: "localhost",
  password: "NewPassword",
  database: "employeeSystem",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Node connnected to mysql");
});
