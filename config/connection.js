var mysql = require("mysql");    
var connection;

if(process.env.JAWSDB_URL) {            
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({ // Set local connection parameters
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "burgers_db"
    });
};

//creating connection
connection.connect(function(err) {     
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//exporting for ORM
module.exports = connection;           