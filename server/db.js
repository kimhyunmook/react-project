const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'dev01',
    port: 3306,
    password: '1234',
    database: 'dev'
});

module.exports = db