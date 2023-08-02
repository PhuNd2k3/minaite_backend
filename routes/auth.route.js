// routes/auth.js
const express = require('express');
const hashHelper = require(process.cwd() +'/helpers/password-encrypter')
const jwt = require('jsonwebtoken');
const db = require('../models/index.js');
const router = express.Router();
const authController = require('../controllers/auth')

const User = db.User;

const dotenv = require('dotenv');
dotenv.config();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'Email not found' });
    }

    const isPasswordValid = await hashHelper.compare(hashHelper.hash(password), user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' , password : hashHelper.hash(password), password2 : user.password});
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

router.post('/register', authController.register)

module.exports = router;
