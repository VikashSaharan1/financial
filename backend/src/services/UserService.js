// src/services/UserService.js

const UserModel = require('../models/UserModel');

const UserService = {
  getAllUsers: async () => {
    return UserModel.find();
  },

  getUserById: async (id) => {
    return UserModel.findById(id);
  },

  createUser: async (name, email) => {
    const newUser = new UserModel({name, email});
    return newUser.save();
  },
};

module.exports = UserService;