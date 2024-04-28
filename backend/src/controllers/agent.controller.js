const { financialDB } = require("../models");
const Agent = financialDB.agent;
const Op = financialDB.Sequelize.Op;

// Create and Save a new Salutation
exports.create = async (req, res) => {
  // Validate request
  console.log(req.body);
  
  //res.status(500).send(req.fields);
  if (!req.body.agent_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    }); 
    return;
  }
 
  // Create a Salutation
  const agent = {
    agent_name: req.body.agent_name,
    mobile: req.body.mobile,
    mobile2: req.body.mobile2,
    address: req.body.address,
    aadhar_no: req.body.aadhar_no,
    pan_no: req.body.pan_no,
  };

  // Save Salutation in the database
  Agent.create(agent)
    .then(data => {
      // if(uploadFiles(req, res, ProductImage)) {
      //   if(res) {
      //     res.send(data);
      //   }
      // }
      //uploadFileMiddleware(req, res);
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
  // const name = req.query.agent_name;
  // let where = { agent_name: name};
  Agent.findAll()
    .then(data => {
      res.send(data);
    })       
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Product."
      });
    });
};

// Find a single Salutation with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Agent.findOne({
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
  const agent = {};
  if(req.body.agent_name)
    agent.agent_name = req.body.agent_name;
  if(req.body.mobile)
    agent.mobile = req.body.mobile;
  if(req.body.mobile2)
    agent.mobile2 = req.body.mobile2;
  if(req.body.address)
    agent.address = req.body.address;
  if(req.body.aadhar_no)
    agent.aadhar_no = req.body.aadhar_no;
  if(req.body.pan_no)
    agent.pan_no = req.body.pan_no;
  

  Agent.update(agent, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Agent was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update agent with id=${id}. Maybe agent was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating agent with id=" + id
      });
    });
};

// Delete a Salutation with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Agent.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Agent deleted successfully!"
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


