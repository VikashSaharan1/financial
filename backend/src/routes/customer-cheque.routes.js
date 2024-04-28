module.exports = app => {
  const customer_cheque = require("../controllers/customer-cheque.controller.js");
  var router = require("express").Router();
  const { authJwt } = require("../middleware/index.js");

  // Create a new Brand
  router.post("/",
  [authJwt.verifyToken],
  customer_cheque.create);

  // Retrieve all Brands
  router.get("/", 
  [authJwt.verifyToken ],
  customer_cheque.findAll);

  // Retrieve a single Brand with id
  router.get("/:id", 
  [authJwt.verifyToken],
  customer_cheque.findOne);

  // Update a Brand with id
  router.put("/:id", 
  [authJwt.verifyToken],
  customer_cheque.update);

  // Delete a Brand with id
  router.delete("/:id", 
  [authJwt.verifyToken],
  customer_cheque.delete);

  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"

    );
    next();
  });

  app.use('/api/v1/customer-cheques', router);
};
