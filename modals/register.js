var doctor_schema = require('./doctor_schema');
var fs = require('fs');
var path = require('path');

exports.registration = function(data, callback) {
    let doc = new doctor_schema({
      firstname: data.body.firstname,
      lastname: data.body.lastname,
      specialist: data.body.specialist,
      qualification: data.body.qualification,
      streetname: data.body.streetname,
      location: data.location,
      city: data.body.city,
      state: data.body.state,
      pincode: data.body.pincode,
      yearsofexperience: data.body.yearsofexperience,
      mobile: data.body.mobile,
      email: data.body.email,
      phno: data.body.phno,      
      createdDate: new Date()
  }, {
          versionKey: false
  }); 
    //  File Upload
    if(data.files.length > 0) {        
        let extn = data.files[0].originalname.split('.')[1];
        let target_path = path.join(__dirname, '../uploads/' + doc._id + '.' + extn);
        let upload_file = fs.createReadStream(data.files[0].path);
        let destination = fs.createWriteStream(target_path);
        upload_file.pipe(destination);
        fs.unlink(data.files[0].path);
        upload_file.on('end', function () { console.log("File uploaded completed") });
        upload_file.on('error', function (err) { console.log(err) });
        doc.profile_img = '/uploads/'+doc._id + '.' + extn;
    }
    doc.save(function(err, data) {
        if(err) {
            callback(true);
        } else {
            callback(false, data);
        }
    });
};