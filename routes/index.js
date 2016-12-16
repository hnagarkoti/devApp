var express = require('express');
var router = express.Router();
var User = require('../models/user.schema.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index.html');

});

router.post('/createUser', function(req, res){
  console.log('createUser called');

  var userObj = new User({
    userName: req.body.userName,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age
  });
  User.find({email: req.body.email}, function(err, response){
    if(err){
      console.log('err',err);
    }
    console.log('res:- ',response.length);
    if(response.length){
      console.log('user already registerd');
      res.send({
        code:0,
        message: "user already registerd with same email id"
      })
    }
    else{
      console.log('USER NOT REGISTED');

      userObj.save(function(err){
        if(err){
          throw err;
        }
        console.log('user created');
        res.send({
          code: 200,
          message: "user registerd succesfully"
        })
      })
    }
  })



})


module.exports = router;
