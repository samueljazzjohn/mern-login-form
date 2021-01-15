var express = require('express');
var router = express.Router();
var userHelper = require('../Helper/userhelper')

let users=[
  {
    email:"samueljazzjohn@gmail.com",
    password:"jazz1999",
    displayname:"samueljazzjohn"
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.body)
  res.send("Welcome to api page");
});

router.post('/registration', function (req, res, next) {
  if (req.body.mail && req.body.password && req.body.displayname) {
    userHelper.addUser(req.body).then((response) => {
      if (response.status) {
        res.status(200).json("Registration successfull")
      }
      else {
        res.status(201).json("This user is already registered")
      }
    })
  } else {
    res.status(202).json("please enter your details")
  }
});

router.post('/login', function (req, res, next) {
  if (req.body.username && req.body.password) {
    userHelper.getUser(req.body).then((response) => {
      if (response.status) {
        res.status(200).json("Login successfull")
      } else {
        res.status(201).json("Invalid username or password")
      }
    });
  }else{
    res.status(202).json("please enter password and username")
  }


});
  


module.exports = router;
