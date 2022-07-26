const mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejss",
});

db.connect(function (err) {
  if (err) console.log("error connecting: " + err.message);
  else console.log("state", db.state);
});
