module.exports = app => {
  const agent = require("../controllers/agent.controller.js");
  var router = require("express").Router();
  const { authJwt } = require("../middleware/index.js");

  // Create a new Brand
  router.post("/",
  [authJwt.verifyToken],
  agent.create);

  // Retrieve all Brands
  router.get("/", 
  [authJwt.verifyToken ],
  agent.findAll);

  // Retrieve a single Brand with id
  router.get("/:id", 
  [authJwt.verifyToken],
  agent.findOne);

  // Update a Brand with id
  router.put("/:id", 
  [authJwt.verifyToken],
  agent.update);

  // Delete a Brand with id
  router.delete("/:id", 
  [authJwt.verifyToken],
  agent.delete);

  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"

    );
    next();
  });

  app.use('/api/v1/agents', router);
};
