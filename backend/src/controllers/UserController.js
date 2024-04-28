// src/controllers/UserController.js

const UserService = require('../services/UserService');

const UserController = {
  getAllUsers: async (req, res) => {
    const users = await UserService.getAllUsers();
    res.json(users);
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    const user = await UserService.getUserById(id);
    res.json(user);
  },

  createUser: async (req, res) => {
    const { name, email } = req.body;
    const newUser = await UserService.createUser(name, email);
    res.json(newUser);
  },
};

module.exports = UserController;