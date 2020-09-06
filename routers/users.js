const express = require('express');
const usersController = require('../controller/users');
const router = express.Router();

// Creating Routes inside users.js //

// Get/users--returns all users
router.get('/users', usersController.listUsers)

// Get/users/by id
router.get('/users/:id', usersController.showUser)

// Post/users
router.post('/users', usersController.createUser)

// Put/users/by id
router.put('/users/:id', usersController.updateUser)

// Delete/users/by id
router.delete('/users/:id', usersController.deleteUser)

module.exports = router;