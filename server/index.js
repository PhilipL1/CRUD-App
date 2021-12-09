const express = require("express");
const app = express();
const port = 3001;
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  //find a way to hide this later
});

app.post("/create", (req, res) => {
  const db_name = req.body.name_obj;
  const db_age = req.body.age_obj;
  const db_position = req.body.position_obj;
  const db_country = req.body.country_obj;
  const db_wage = req.body.wage_obj;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [db_name, db_age, db_country, db_position, db_wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted!!");
      }
    }
  );
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM  employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log("your server is running on " + port);
});
