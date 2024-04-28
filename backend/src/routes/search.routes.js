module.exports = app => {
  const search = require('../controllers/searchController');
  var router = require("express").Router();
  const { authJwt } = require("../middleware/index.js");


  // Retrieve all Brands
  router.get("/", search.search);

  
  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"

    );
    next();
  });

  app.use('/api/v1/search', router);
};
