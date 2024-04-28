const { Op } = require('sequelize');
const { financialDB } = require("../models");


exports.search = async (req, res) => {
  try {
    const { query } = req.q;
    
    // Search products, categories, and brands
    const products = await Product.findAll({
      where: {
        name: { [Op.like]: `%${query}%` }
      }
    });
    
    const categories = await Category.findAll({
      where: {
        name: { [Op.like]: `%${query}%` }
      }
    });

    const brands = await Brand.findAll({
      where: {
        brand_name: { [Op.like]: `%${query}%` }
      }
    });

    res.json({ products, categories, brands });
  } catch (error) {
    console.error('Error searching:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
