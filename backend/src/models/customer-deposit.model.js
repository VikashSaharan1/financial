module.exports = (sequelize, Sequelize) => {
    const Customer_Deposit = sequelize.define("customer-deposits", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      deposit_amount: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      deposit_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deposit_by: {
        type: Sequelize.STRING(30),
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
    return Customer_Deposit;
  };
  