module.exports = (sequelize, Sequelize) => {
    const Mentor = sequelize.define("mentors", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      agent_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      mentor_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      mobile: {
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
    return Mentor;
  };
  