const express = require("express");
const router = express.Router();
const userRoutes = require('./user.routes');
const roleRoutes = require('./role.routes');

router.use(userRoutes);
router.use(roleRoutes);

// module.exports = app => {
//   require('./role.routes')(app);
//   //require(userRoutes)(app);
//   //require(roleRoutes)(app);
// }