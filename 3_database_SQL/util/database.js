const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    root:'user',
    database:'node-complete',
    password:'nodecomplete'
});

module.exports = pool.promise();
