const { financialDB } = require("../models");
const ROLES = financialDB.ROLES;
const User = financialDB.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {

  try{
  // Username
  console.log("Test");
  User.findOne({
    where: {
      user_name: req.body.userName
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! user name is already in use!"
      });
      return;
    }
    next();
    // // Email
    // User.findOne({
    //   where: {
    //     email: req.body.email
    //   }
    // }).then(user => {
    //   if (user) {
    //     res.status(400).send({
    //       message: "Failed! Email is already in use!"
    //     });
    //     return;
    //   }

    //   next();
    // });
  });
} catch(e) {
  console.log(e);
}
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;
