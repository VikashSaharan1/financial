
module.exports = app => {
  const { verifySignUp } = require("../middleware");
const auth = require("../controllers/auth.controller.js");
var router = require("express").Router();
 
  router.post(
    "/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
    ],
    auth.signup
  );

  router.post(
    "/adminSignup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
    ],
    auth.adminSignup
  );

  router.post("/login", auth.signin);
  router.post("/refreshtoken", auth.refreshToken);
  
  app.use('/api/v1/auth', router);
};