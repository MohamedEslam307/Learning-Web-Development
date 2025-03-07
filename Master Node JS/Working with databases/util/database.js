const mysql=require('mysql2');

module.exports = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejs-shop',
    password: '123456'
}).promise();

