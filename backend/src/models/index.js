const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");



const financialSequelize = new Sequelize(dbConfig[0].DB, dbConfig[0].USER, dbConfig[0].PASSWORD, {
  host: dbConfig[0].HOST,
  dialect: dbConfig[0].dialect,
  operatorsAliases: false,
  
  pool: {
    max: dbConfig[0].pool.max,
    min: dbConfig[0].pool.min,
    acquire: dbConfig[0].pool.acquire,
    idle: dbConfig[0].pool.idle
  }
});



const financialDB = {};


financialDB.Sequelize = Sequelize;
financialDB.sequelize = financialSequelize;


financialDB.user = require("./user.model.js")(financialSequelize, Sequelize);
financialDB.role = require("./role.model.js")(financialSequelize, Sequelize);
financialDB.refreshToken = require("./refreshToken.model.js")(financialSequelize, Sequelize);

financialDB.agent = require("./agent.model.js")(financialSequelize, Sequelize);
financialDB.customer_cheque = require("./customer-cheque.model.js")(financialSequelize, Sequelize);
financialDB.customer_deposit = require("./customer-deposit.model.js")(financialSequelize, Sequelize);
financialDB.customer_file = require("./customer-file.model.js")(financialSequelize, Sequelize);
financialDB.customer = require("./customer.model.js")(financialSequelize, Sequelize);
financialDB.mentor = require("./mentor.model.js")(financialSequelize, Sequelize);

financialDB.role.belongsToMany(financialDB.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
financialDB.user.belongsToMany(financialDB.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

financialDB.refreshToken.belongsTo(financialDB.user, {
  foreignKey: 'userId', targetKey: 'id'
});
financialDB.user.hasOne(financialDB.refreshToken, {
  foreignKey: 'userId', targetKey: 'id'
});




financialDB.ROLES = ["customer", "admin", "SuperAdmin"];

module.exports = {
  financialDB,
}
