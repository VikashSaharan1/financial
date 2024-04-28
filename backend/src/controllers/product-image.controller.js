const { financialDB } = require("../models");
const ProductImage = financialDB.ProductImage;
const Op = financialDB.Sequelize.Op;


// Create and Save a new Salutation
exports.create = async (req, res) => {
  // Validate request
  console.log(req.file);

  // if (!req.files) {
    res.status(400).send({ 
      message: "Brand name can not be empty!"
    });
    return;
  // }


  // Create a Salutation
  // const brand = {
  //   brand_name: req.body.brand_name,    
  // };

  // Save Salutation in the database
  // Brand.create(brand)
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while creating the Salutation."
  //     });
  //   });
};

// Retrieve all Salutations from the database.
exports.findAll = (req, res) => {
  const product_id = req.query.product_id;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Brand.findAll({where: { product_id: product_id}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Salutation."
      });
    });
};

// Find a single Salutation with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Brand.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Salutation with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Salutation with id=" + id
      });
    });
};

// Update a Salutation by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  console.log(id);
  // Brand.update({ brand_name: req.body.brand_name }, {
  //   where: { id: id }
  // })
  //   .then(num => {
  //     console.log(num);
  //     if (num == 1) {
  //       res.send({
  //         message: "Brand was updated successfully."
  //       });
  //     } else {
  //       res.send({
  //         message: `Cannot update Brand with id=${id}. Maybe Brand Name was not found!`
  //       });
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "Error updating Brand  with id=" + id
  //     });
  //   });
};

// Delete a Salutation with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  // Brand.destroy({
  //   where: { id: id }
  // })
  //   .then(num => {
  //     if (num == 1) {
  //       res.send({
  //         message: "Brand was deleted successfully!"
  //       });
  //     } else {
  //       res.send({
  //         message: `Cannot delete Brand with id=${id}. Maybe Brand was not found!`
  //       });
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "Could not delete Brand with id=" + id
  //     });
  //   });
};

// Delete all Brand from the database.
exports.deleteAll = (req, res) => {
  // Brand.destroy({
  //   where: {},
  //   truncate: false
  // })
  //   .then(nums => {
  //     res.send({ message: `${nums} Brand were deleted successfully!` });
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while removing all Brand."
  //     });
  //   });
};

