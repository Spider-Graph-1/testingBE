const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
    // Pull the user's credentials from the body of the request.
    const user = req.body;

    // Hash the user's password, and set the hashed password as the
    // user's password in the request.
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    // Include helpers from users model.
});

// router.post('/login', (req, res) => {

// })

module.exports = router;