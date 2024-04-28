const { financialDB } = require("../models");
const config = require("../config/auth.config");
const RefreshToken = financialDB.refreshToken;
const User = financialDB.user;
const Role = financialDB.role;
const Op = require("sequelize").Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {

    //verifySignUp.checkDuplicateUsernameOrEmail(),
    //verifySignUp.checkRolesExisted();
  
  // Save User to Database
  User.create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    user_name: req.body.userName,
    is_active: 'Yes',
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
        user.setRoles([1]).then(async () => {
          returnUser = await returnAfterLogin(user);
          res.status(200).send(returnUser);
          // user role = 1
        //res.send({ message: "User was registered successfully!" });
      });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.adminSignup = (req, res) => {

// Save User to Database
User.create({
  first_name: req.body.firstName,
  last_name: req.body.lastName,
  user_name: req.body.userName,
  is_active: 'No',
  password: bcrypt.hashSync(req.body.password, 8)
})
  .then(user => {     
      // admin role = 1
      user.setRoles([2]).then(() => {
        res.send({ message: "Admin was registered successfully!" });
      });    
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

exports.signin = (req, res) => {

  User.findOne({
    where: {
      user_name: req.body.userName,
      is_active: 'Yes'
    }
  })
    .then(async (user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
     
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      } 
      
     

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      let refreshToken = await RefreshToken.createToken(user);

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push(roles[i].name.toUpperCase());
        }
        res.status(200).send({
          user: { 
            id: user.id,
            name: user.user_name,
            first_name: user.first_name,
            last_name: user.last_name,
            roles: authorities,
          },
          accessToken: token,
          refreshToken: refreshToken,
          expiryTime: new Date().addHours(24)
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
// user, accessToken, refreshToken, expiryTime
exports.refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (requestToken == null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  try {
    let refreshToken = await RefreshToken.findOne({ where: { token: requestToken } });

    console.log(refreshToken)

    if (!refreshToken) {
      res.status(403).json({ message: "Refresh token is not in database!" });
      return;
    }

    if (RefreshToken.verifyExpiration(refreshToken)) {
      RefreshToken.destroy({ where: { id: refreshToken.id } });
      
      res.status(403).json({
        message: "Refresh token was expired. Please make a new signin request",
      });
      return;
    }

   

    const user = await refreshToken.getUser();
    let newAccessToken = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: config.jwtExpiration,
    });

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.token,
      expiryTime: new Date().addHours(24)
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
}

// app.delete("/logout", (req,res)=>{
//   refreshTokens = refreshTokens.filter( (c) => c != req.body.token)
//   //remove the old refreshToken from the refreshTokens list
//   res.status(204).send("Logged out!")
//   })

const returnAfterLogin = async (user) => {
  
  var token = jwt.sign({ id: user.id }, config.secret, {
    expiresIn: 86400 // 24 hours
  });

    let refreshToken = await RefreshToken.createToken(user);

    var authorities = [];
    const response = await user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        authorities.push(roles[i].name.toUpperCase());
      }
      return({
        user: { 
          id: user.id,
          name: user.user_name,
          first_name: user.first_name,
          last_name: user.last_name,
          roles: authorities,
        },
        accessToken: token,
        refreshToken: refreshToken,
        expiryTime: new Date().addHours(24)
      });
    });
    return response; 
}