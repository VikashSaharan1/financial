module.exports = app => {
  const mentor = require("../controllers/mentor.controller.js");
  var router = require("express").Router();
  const { authJwt } = require("../middleware/index.js");

  // Create a new Brand
  router.post("/",
  [authJwt.verifyToken],
  mentor.create);

  // Retrieve all Brands
  router.get("/", 
  [authJwt.verifyToken],
  mentor.findAll);

  // Retrieve a single Brand with id
  router.get("/:id", 
  [authJwt.verifyToken],
  mentor.findOne);

  // Update a Brand with id
  router.put("/:id", 
  [authJwt.verifyToken],
  mentor.update);

  // Delete a Brand with id
  router.delete("/:id", 
  [authJwt.verifyToken],
  mentor.delete);

  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"

    );
    next();
  });

  app.use('/api/v1/mentors', router);
};
