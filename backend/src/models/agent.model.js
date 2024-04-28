module.exports = (sequelize, Sequelize) => {
    const Agent = sequelize.define("agents", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      agent_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      mobile: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      mobile2: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      address: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      aadhar_no: {
        type: Sequelize.STRING(12),
        allowNull: true
      },
      pan_no: {
        type: Sequelize.STRING(10),
        allowNull: true
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
    return Agent;
  };
  