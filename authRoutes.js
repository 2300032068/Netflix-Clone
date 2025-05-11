const express = require('express');
const router = express.Router();

// Dummy user data (in-memory)
let users = [
    { email: 'test@example.com', password: '123456' }
];

// Signup
router.post('/signup', (req, res) => {
    const { email, password } = req.body;

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    users.push({ email, password });
    res.status(201).json({ message: 'Signup successful' });
});

// Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

module.exports = router;
