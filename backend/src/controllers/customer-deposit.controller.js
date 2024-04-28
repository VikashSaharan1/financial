const { financialDB } = require("../models");
const Customer_Deposit = financialDB.customer_deposit;
const Op = financialDB.Sequelize.Op;


// Create and Save a new Salutation
exports.create = async (req, res) => {
  // Validate request
  console.log(req.body);
  
  //res.status(500).send(req.fields);
  if (!req.body.customer_id) {
    res.status(400).send({
      message: "Customer Id can not be empty!"
    }); 
    return;
  }
  


  // Create a Salutation
  const customer_deposit = {
    customer_id: req.body.customer_id,
    deposit_amount: req.body.deposit_amount,
    deposit_date: req.body.deposit_date,
    deposit_by: req.body.deposit_by,
  };

 

  // Save Salutation in the database
  Customer_Deposit.create(customer_deposit)
    .then(data => {
      res.send(data);      
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Agent."
      });
    });
};

// Retrieve all Salutations from the database.
exports.findAll = (req, res) => {
  // const customer_id = req.query.customer_id;
  // let where = { customer_id: customer_id};
  Customer_Deposit.findAll({
      // where: where,      
  })
    .then(data => {
      res.send(data);
    })       
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Customer Cheque."
      });
    });
};

// Find a single Salutation with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Customer_Deposit.findOne({
    where: { id: id },   
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Agent with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Agent with id=" + id
      });
    });
}; 

// Update a Salutation by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  const customer_deposit = {};
  if(req.body.customer_id)
  customer_deposit.customer_id = req.body.customer_id;
  if(req.body.deposit_amount)
  customer_deposit.deposit_amount = req.body.deposit_amount;
  if(req.body.deposit_date)
  customer_deposit.deposit_date = req.body.deposit_date;
  if(req.body.deposit_by)
  customer_deposit.deposit_by = req.body.deposit_by;
  
  

  Customer_Deposit.update(customer_deposit, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Customer Deposit was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Customer Deposit with id=${id}. Maybe agent was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Customer Deposit with id=" + id
      });
    });
};

// Delete a Salutation with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Customer_Deposit.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Customer Deposit was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Customer Deposit with id=${id}. Maybe Customer Deposit was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Customer Deposit with id=" + id
      });
    });
};


