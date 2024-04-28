const { financialDB } = require("../models");
const Customer = financialDB.customer;
const Op = financialDB.Sequelize.Op;

// Create and Save a new Salutation
exports.create = async (req, res) => {
  // Validate request
  console.log(req.body);
  
  //res.status(500).send(req.fields);
  if (!req.body.customer_name) {
    res.status(400).send({
      message: "Customer Id can not be empty!"
    }); 
    return;
  }
  
  // Create a Salutation
  const customer = {
    customer_name: req.body.customer_name,
    mobile: req.body.mobile,
    mobile2: req.body.mobile2,
    address: req.body.address,
    aadhar_no: req.body.aadhar_no,
    pan_no: req.body.pan_no,
    is_cheque: req.body.is_cheque,
    no_of_cheque: req.body.no_of_cheque,
  };

 

  // Save Salutation in the database
  Customer.create(customer)
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
  // const customer_id = req.query.id;
  // let where = { id: customer_id};
  Customer.findAll()
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

  Customer.findOne({
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
  const customer = {};
  if(req.body.customer_name)
  customer.customer_name = req.body.customer_name;
  if(req.body.mobile)
  customer.mobile = req.body.mobile;
  if(req.body.mobile2)
  customer.mobile2 = req.body.mobile2;
  if(req.body.address)
  customer.address = req.body.address;
  if(req.body.aadhar_no)
  customer.aadhar_no = req.body.aadhar_no;
  if(req.body.pan_no)
  customer.pan_no = req.body.pan_no;
  if(req.body.is_cheque)
  customer.is_cheque = req.body.is_cheque;
  if(req.body.no_of_cheque)
  customer.no_of_cheque = req.body.no_of_cheque;
 
  
  

  Customer.update(customer, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Customer was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Customer with id=${id}. Maybe agent was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Customer with id=" + id
      });
    });
};

// Delete a Salutation with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Customer.destroy({
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


