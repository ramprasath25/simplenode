var express = require('express');
var router = express.Router();
var register = require('../modals/register');
var doctorList = require('../modals/list');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Doctorz app api endpoints..' });
});
/* Doctor Registration */
router.post('/register', function(req, res) {
  register.registration(req.body, function(err, data) {
    if(err) {
      res.status(500).json({message: "Error, please try later"});
    } else {
      res.status(200).json({message: "Registered successfully", data: data});
    }
  });
});
/* Get All Doctor List */
router.get('/getDoctorList', function(req, res){
  doctorList.getAllList(function(err, data) {
    if (err) {
      res.status(500).json({ message: "Error, please try later" });
    } else {
      res.status(200).json({ message: "Ok, success", data: data });
    }
  });  
});
/* Get Single Doctor details */
router.get('/getDoctorDetails/:id', function(req, res) {
  doctorList.getDetails(req.params.id, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Error, please try later" });
    } else {
      res.status(200).json({ message: "Ok, success", data: data });
    }
  });
});

module.exports = router;
