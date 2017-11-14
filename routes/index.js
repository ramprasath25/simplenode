var express = require('express');
var router = express.Router();
var register = require('../modals/register');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Doctorz app api endpoints..' });
});

router.post('/register', function(req, res) {
  register.registration(req.body, function(err, data) {
    if(err) {
      res.status(500).json({message: "Error, please try later"});
    } else {
      res.status(200).json({message: "Registered successfully", data: data});
    }
  });
});
router.get('/getDoctorList', function(req, res){

  
})
module.exports = router;
