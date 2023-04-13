const mysql = require('mysql')

const con = mysql.createConnection({
    host: "proyectoaws.cuejicokttpc.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "12345678",
    database: "dbTiendaMusical"
  });

module.exports = con