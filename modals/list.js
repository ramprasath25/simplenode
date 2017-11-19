var doctors = require('./doctors');
/* get all doctor list */
exports.getAllList = function(callback) {
    var query = doctors.find({}).select({ __v:0});
     query.exec(function(err, result) {
       if(err) {
           callback(true, "Error, fetching data");
       } else {
           callback(false, result);
       }
    });
};
/* Get Particular doctor details */
exports.getDetails = function(id, callback) {
    var query = doctors.findOne({_id: id}).select({__v:0});
    query.exec(function(err, result) {
        if (err) {
            callback(true, "Error, fetching data");
        } else {
            callback(false, result);
        }
    });
};