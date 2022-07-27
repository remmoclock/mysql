const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs",
});

db.connect(function (err) {
  if (err) console.log("error connecting: " + err.message);
  else {
    console.log("state", db.state);
    db.query("SELECT * FROM MEMBERS", function (err, result) {
      if (err) {
        console.log(err.message);
      } else console.log(result);
    });
  }
});
