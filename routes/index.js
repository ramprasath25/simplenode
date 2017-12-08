var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var register = require('../modals/register');
var doctorList = require('../modals/list');
const upload = multer({ dest: path.join(__dirname,'../uploads/') });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Doctorz app api endpoints..' });
});
/* Doctor Registration */
router.post('/register', upload.single('profile_img'), function(req, res) {
  register.registration(req, function(err, data) {
    if(err) {
      res.status(500).json({message: "Error, please try later"});
    } else {
      res.status(200).json({message: "Registered successfully", data: data});
    }
  });
});
/* Get All Doctor List */
router.post('/getDoctorList', function(req, res){
  doctorList.getAllList(req.body, function (err, data, page_count) {
    if (err) {
      res.status(500).json({ message: "Error, please try later" });
    } else {
      res.status(200).json({ message: "Ok, success", data: data , page_count});
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
