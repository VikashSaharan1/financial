module.exports = (sequelize, Sequelize) => {
    const Customer_Cheque = sequelize.define("customer_cheques", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      cheque_no: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      bank_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      ifsc_code: {
        type: Sequelize.STRING(20),
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
    return Customer_Cheque;
  };
  