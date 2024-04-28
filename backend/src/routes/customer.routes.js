module.exports = app => {
  const customer = require("../controllers/customer.controller.js");
  var router = require("express").Router();
  const { authJwt } = require("../middleware/index.js");

  // Create a new Brand
  router.post("/",
  [authJwt.verifyToken],
  customer.create);

  // Retrieve all Brands
  router.get("/", 
  [authJwt.verifyToken],
  customer.findAll);

  // Retrieve a single Brand with id
  router.get("/:id", 
  [authJwt.verifyToken],
  customer.findOne);

  // Update a Brand with id
  router.put("/:id", 
  [authJwt.verifyToken],
  customer.update);

  // Delete a Brand with id
  router.delete("/:id", 
  [authJwt.verifyToken],
  customer.delete);

  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"

    );
    next();
  });

  app.use('/api/v1/customers', router);
};
