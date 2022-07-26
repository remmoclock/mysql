const mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs",
});

db.connect(function (err) {
  if (err) console.error("error connecting: " + err.stack);
  else console.log("connected as id " + db.threadId + db.database);
});
