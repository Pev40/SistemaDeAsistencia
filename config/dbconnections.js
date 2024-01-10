
const mysql = require('mysql2');
    // create the pool
const pool = mysql.createPool({host:'localhost', user: 'root', database: 'universitydb', password:'root'});
module.exports = pool;
