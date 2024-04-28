const { financialDB } = require("../models");
const Mentor = financialDB.mentor;
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
  const mentor = {
    customer_id: req.body.customer_id,
    agent_id: req.body.agent_id,
    mentor_name: req.body.mentor_name,
    mobile: req.body.mobile,
  };

  // Save Salutation in the database
  Mentor.create(mentor)
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
  Mentor.findAll({
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

  Mentor.findOne({
    where: { id: id },   
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Mentor with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Mentor with id=" + id
      });
    });
}; 

// Update a Salutation by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  const mentor = {};
  if(req.body.customer_id)
  mentor.customer_id = req.body.customer_id;
  if(req.body.agent_id)
  mentor.agent_id = req.body.agent_id;
  if(req.body.mentor_name)
  mentor.mentor_name = req.body.mentor_name;
  if(req.body.mobile)
  mentor.mobile = req.body.mobile;
   

  Mentor.update(mentor, {
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

  Mentor.destroy({
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


