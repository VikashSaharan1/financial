module.exports = app => {
  const user = require("../controllers/user.controller.js");
  var router = require("express").Router();
  const { authJwt } = require("../middleware/index.js");

  // Create a new User
  router.post("/", user.create);

  // Retrieve all Users
  router.get("/", user.findAll);

  // Retrieve all published Users
  router.get("/activated", user.findAllPublished);

  // Retrieve a single User with id
  router.get("/:id", user.findOne);

  // Update a User with id
  router.put("/:id", user.update);

  // Delete a User with id
  router.delete("/:id", user.delete);

  // Delete all Users
  //router.delete("/", user.deleteAll);

  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.get("/all", user.allAccess);

  router.get(
    "/user",
    [authJwt.verifyToken],
    user.userBoard
  );

  router.get(
    "/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    user.moderatorBoard
  );

  router.get(
    "/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    user.adminBoard
  );

  app.use('/api/v1/users', router);
};
