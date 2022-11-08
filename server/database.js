/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-07 12:53:07
 * @ Description: Manage database connection
*/

/* SUMMARY
  * Imports
*/

/* Imports */
require('dotenv').config();
const mysql = require('mysql2/promise');
/***/

const database = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

module.exports = database;