module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customers", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      customer_name: {
        type: Sequelize.STRING(50),
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
      is_cheque: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      no_of_cheque: {
        type: Sequelize.TINYINT(1),
        allowNull: false
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
    return Customer;
  };
  