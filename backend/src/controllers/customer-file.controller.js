const { financialDB } = require("../models");
const Customer_File = financialDB.customer_file;
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
  const customer_file = {
    customer_id: req.body.customer_id,
    file_amount: req.body.file_amount,
    agent_id: req.body.agent_id,
    credit_amount: req.body.credit_amount,
    no_of_days: req.body.no_of_days,
    interest: req.body.interest,
    agent_commission: req.body.agent_commission,
    amount_date: req.body.amount_date,
  };

 

  // Save Salutation in the database
  Customer_File.create(customer_file)
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
  Customer_File.findAll({
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

  Customer_File.findOne({
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
  const customer_file = {};
  if(req.body.customer_id)
  customer_file.customer_id = req.body.customer_id;
  if(req.body.file_amount)
  customer_file.file_amount = req.body.file_amount;
  if(req.body.agent_id)
  customer_file.agent_id = req.body.agent_id;
  if(req.body.credit_amount)
  customer_file.credit_amount = req.body.credit_amount;
  if(req.body.no_of_days)
  customer_file.no_of_days = req.body.no_of_days;
  if(req.body.interest)
  customer_file.interest = req.body.interest;
  if(req.body.agent_commission)
  customer_file.agent_commission = req.body.agent_commission;
  if(req.body.amount_date)
  customer_file.amount_date = req.body.amount_date;
 
  
  

  Customer_File.update(customer_file, {
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

  Customer_File.destroy({
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


