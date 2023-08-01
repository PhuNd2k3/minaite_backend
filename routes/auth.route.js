// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/index.js');
const router = express.Router();

const Users = db.Users;

const dotenv = require('dotenv');
dotenv.config();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    const user = await Users.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'Email not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Tạo token sử dụng jsonwebtoken
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
