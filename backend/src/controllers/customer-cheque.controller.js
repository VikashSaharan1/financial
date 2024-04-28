const { financialDB } = require("../models");
const Customer_Cheque = financialDB.customer_cheque;
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
  const customer_cheque = {
    customer_id: req.body.customer_id,
    cheque_no: req.body.cheque_no,
    bank_name: req.body.bank_name,
    ifsc_code: req.body.ifsc_code,
  };

 

  // Save Salutation in the database
  Customer_Cheque.create(customer_cheque)
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
  Customer_Cheque.findAll()
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

  Customer_Cheque.findOne({
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
  const customer_cheque = {};
  if(req.body.customer_id)
  customer_cheque.customer_id = req.body.customer_id;
  if(req.body.cheque_no)
  customer_cheque.cheque_no = req.body.cheque_no;
  if(req.body.bank_name)
  customer_cheque.bank_name = req.body.bank_name;
  if(req.body.ifsc_code)
  customer_cheque.ifsc_code = req.body.ifsc_code;
  
  

  Customer_Cheque.update(customer_cheque, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Customer Cheque was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Customer Cheque with id=${id}. Maybe agent was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Customer Cheque with id=" + id
      });
    });
};

// Delete a Salutation with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Customer_Cheque.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe City was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};


