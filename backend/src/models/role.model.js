module.exports = (sequelize, Sequelize) => {
  const role = sequelize.define("roles", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      unique: true
    },
   
    is_active: {
      type: Sequelize.ENUM('No', 'Yes'),
    },
    
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE,
    },
    updatedAt: {
      field: 'modified_at',
      type: Sequelize.DATE,
    },
    
  });

  return role;
};
