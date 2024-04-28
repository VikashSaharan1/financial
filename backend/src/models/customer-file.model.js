module.exports = (sequelize, Sequelize) => {
    const Customer_File = sequelize.define("customers_files", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      file_amount: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false
      },
      agent_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      credit_amount: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false
      },
      no_of_days: {
        type: Sequelize.SMALLINT(4),
        allowNull: false
      },
      interest: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false
      },
      agent_commission: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false
      },
      amount_date: {
        type: Sequelize.DATE,
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
    return Customer_File;
  };
  