module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true  
    },    
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },   
    is_active: {
      type: Sequelize.ENUM('No', 'Yes'),
      allowNull: false,
    },
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE
    },
    updatedAt: {
      field: 'modified_at',
      type: Sequelize.DATE
    },
    
  });

  return user;
};
