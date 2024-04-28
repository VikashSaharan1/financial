const express = require('express');
const cors = require('cors')
//const formidable = require('express-formidable');
const bodyParser = require('body-parser');
const logger = require('./src/utils/logger');
const routes = require('./src/routes');
const migrations = require('./src/helpers/migrations');

const { financialDB } = require("./src/models");
global.__basedir = __dirname;


const app = express();

//app.use(formidable);
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(uploadFiles());





// // drop the table if it already exists
financialDB.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
  const Role = financialDB.role;
  const User = financialDB.user; 
  migrations.insertRole(Role);
  migrations.createSuperAdmin(User);
  //initial();
});

// Routes
//  app.use('/', routes);
require("./src/routes/role.routes")(app);
require("./src/routes/auth.routes")(app);
require("./src/routes/agent.routes")(app);
require("./src/routes/customer-cheque.routes")(app);
require("./src/routes/customer-deposit.routes")(app);
require("./src/routes/customer-file.routes")(app);
require("./src/routes/customer.routes")(app);
require("./src/routes/mentor.routes")(app);

// API For Photos
app.use('/photos', express.static(`./resources/static/assets/uploads/products`))


app.use('/', ( req, res) => {
  console.log('Test');
  res.status(200).send('Api Working!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  // logger.info(`Server is running on http://localhost:${PORT}`);
  console.log(`Server is running on http://localhost:${PORT}`);
});