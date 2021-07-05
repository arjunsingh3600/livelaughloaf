const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Coldfire1234',
    database: 'verblist'

});



module.exports = pool.promise();