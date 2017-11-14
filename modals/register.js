var Schema = require('./doctors');

exports.registration = function(data, callback) {
    
    let doctor = new Schema({
      firstname: data.firstname,
      lastname: data.lastname,
      specialist: data.specialist,
      qualification: data.qualification,
      streetname: data.streetname,
      location: data.location,
      city: data.city,
      state: data.state,
      pincode: data.pincode,
      yearsofexperience: data.yearsofexperience,
      mobile: data.mobile,
      email: data.email,
      phno: data.phno,
      createdDate: new Date()
  }, {
          versionKey: false
  })
  doctor.save(function(err, data) {
    if(err) {
        callback(true);
    } else {
        callback(false, data);
    }
  });
};