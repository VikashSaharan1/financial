const express = require('express');
const registerUser = require('../use-cases/userUseCases/register-user');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email } = req.body;
  try {
    const user = await registerUser(username, email);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
