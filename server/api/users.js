/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-07 12:22:42
 * @ Description: Manage users api routes
*/

/*  SUMMARY
    * Imports
    * Name: getAll
    * Name: getById
*/

/* Imports */
const database = require('../database');
/***/

/*
* Name: getAll
* Description: Get all users in table
*
* Return (Array): Users list
*/
const getAll = (req, res) => {
    database.query('SELECT * FROM users').then(([users]) => {
        return res.status(200).send(users);
    }).catch((err) => {
        console.error(err);
        return res.status(500).send({message: "An error occured"});
    });
}
/***/

/*
* Name: getById
* Description: Get one user in table by id
*
* Params:
* - id (Number): User id to get
*
* Return (Object): User data
*/
const getById = (req, res) => {
    database.query('SELECT * FROM users WHERE id=?', [req.params.id]).then(([[user]]) => {
        if (user) return res.status(200).send(user);
        else return res.status(404).send({message: "User not found"});
    }).catch((err) => {
        console.error(err);
        return res.status(500).send({message: "An error occured"});
    });
}
/***/

const createUser = (req, res) => {
    let b = req.body;

    if (b.firstName && b.lastName && b.age && b.email) {
        database.query('INSERT INTO users (firstName, lastName, age, email) VALUES (?, ?, ?, ?)', 
                        [b.firstName, b.lastName, b.age, b.email])
            .then((data) => {
                return res.status(201).send({message: "User created"});
            })
            .catch((err) => {
                console.error(err);
                return res.status(500).send({message: "An error occured"});
            });
    } else {
        return res.status(400).send({message: "Invalid request"});
    }
}

module.exports = {
    getAll,
    getById,
    createUser
};