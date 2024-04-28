const express = require('express');
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', /* authMiddleware,*/ UserController.getUserById);
router.post('/', UserController.createUser);

module.exports = router;