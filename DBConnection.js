const mysql = require('mysql')

const con = mysql.createConnection({
    host: "dbmysql.cuejicokttpc.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "egu3rr42201",
    database: "dbTiendaMusical"
  });

module.exports = con