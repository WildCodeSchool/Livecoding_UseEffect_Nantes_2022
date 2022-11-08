/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-07 12:18:41
 * @ Description: Server root
*/

/* SUMMARY
    * Imports
    * Express config
    * Routes
    * Server starting
*/

/* Imports */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
/***/

/* Express config */
const app = express();
app.use(express.json());
app.use(cors());
/***/

/* Routes */
const apiUsers = require('./api/users');

app.get('/api/users', apiUsers.getAll);
app.get('/api/users/:id', apiUsers.getById);
app.post('/api/users', apiUsers.createUser);
/***/

/* Server starting */
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
/***/