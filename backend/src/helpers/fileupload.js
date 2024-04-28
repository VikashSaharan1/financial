const util = require("util");
const multer = require("multer");
const path = require('path');
var fs = require('fs');
const { financialDB } = require("../models");
//const ProductImage = financialDB.ProductImage;
const maxSize = 2097152;
let imageName = [];

let storage = multer.diskStorage({
  
  destination: (req, file, cb) => {
    var dir =  __basedir + "/resources/static/assets/uploads/products/";
    console.log(dir);
    const directory = `${dir}`
      console.log(directory);
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true })
      }
    cb(null, directory);
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    let newFileName = 'image-'+ + Date.now() + path.extname(file.originalname);
    imageName.push(newFileName)
    cb(null, newFileName);
  },
  
});
function checkFileType(file, cb){
  console.log('test2');
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|webp|heic/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  
  if(mimetype && extname){
    return cb(null,true);
  } else {
    return cb(new Error('file is not allowed'))
  }
}

const uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: (req, file, cb) => {

   if(checkFileType(file, cb)) {
    //if() size limit is pending
    return cb(null,true);
   } else {
    return cb(null,false);
   }
   
  }
}).array('uploadedImages', 5)


const uploadFiles = async (req, res) => {
    
  const { productId } = req.params;
  console.log(productId);
  uploadFile(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      imageName = [];
      // Multer error handling
      return res.status(500).json({ message: 'Multer error occurred', error: err });
    } else if (err) {
      imageName = [];
      // Generic error handling
      return res.status(500).json({ message: 'An error occurred', error: err });
    }

    try {
      // Save file paths in database
      
      const savedData = [];
      for (const file of imageName) {
        console.log(file);
        // await ProductImage.create({ image_name: file, product_id: productId });  
        // savedData.push(file);  
        // console.log(savedData); 
      }
      imageName = [];
      //return true;
      // Return success response
      res.status(200).json({ message: 'Files uploaded successfully', data: savedData });
    } catch (error) {
      // Database error handling
      res.status(500).json({ message: 'Error saving data to database', error: error });
    }
  });
};


const uploadFileMiddleware = util.promisify(uploadFile);
module.exports = { uploadFileMiddleware, uploadFiles };