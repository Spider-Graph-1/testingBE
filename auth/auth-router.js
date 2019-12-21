const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

const Users = require('../users/users-model.js');

router.post('/register', (req, res) => {
    // Pull the user's credentials from the body of the request.
    const user = req.body;

    // Hash the user's password, and set the hashed password as the
    // user's password in the request.
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then((newUser) => {
            const token = generateToken(newUser);
            res.status(201).json({created_user: newUser, token: token})
        })
        .catch(() => {
            res.status(500).json({message: "There was an error adding a user to the database."})
        })
});

// router.post('/login', (req, res) => {

// })

function generateToken(user) {
    const payload = {
      userid: user.id,
      username: user.username 
    };
    const options = {
        expiresIn: '1h'
    }
    const token = jwt.sign(payload, secrets.jwtSecret, options);
  
    return token;
  }

module.exports = router;