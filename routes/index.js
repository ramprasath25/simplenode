var express = require('express');
var router = express.Router();
var Validator = require('jsonschema').Validator;
var v = new Validator();
var register = require('../modals/register');
var doctorList = require('../modals/list');
var inputSchema = require('../helpers/input');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Doctorz app api endpoints..' });
});

/* Doctor Registration */
router.post('/register', function(req, res) {
  let output = v.validate(req.body, inputSchema.registration);
  if (output.errors.length == 0) {
    register.registration(req, function (err, data) {
      if (err) {
        res.status(500).json({ message: "Error, please try later" });
      } else {
        res.status(200).json({ message: "Registered successfully", data: data });
      }
    });
  } else {
    const errors = output.errors.map(function(error) {
      return error.message
    });
    res.status(400).json({ message: "Input fields missing", error: errors });
  }  
});

/* Get All Doctor List */
router.post('/getDoctorList', function(req, res){
  let output = v.validate(req.body, inputSchema.getList);
  if (output.errors.length == 0) {
  doctorList.getAllList(req.body, function (err, data, page_count) {
    if (err) {
      res.status(500).json({ message: "Error, please try later" });
    } else {
      res.status(200).json({ message: "Ok, success", data: data , page_count});
    }
  }); 
  } else {
    const errors = output.errors.map(function (error) {
      return error.message
    });
    res.status(400).json({ message: "Input fields missing", error: errors });
  } 
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
