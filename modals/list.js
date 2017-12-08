var doctors = require('./doctors');
/* get all doctor list */
exports.getAllList = function(data, callback) {
    var query = doctors.find({}).select({ __v:0});
     query.exec(function(err, result) {
       if(err) {
           callback(true, "Error, fetching data");
       } else {            
            let page_no = parseInt(data.page_no);
            let per_page = parseInt(data.per_page);
            let docLength = parseInt( result.length / per_page);
            let finalResult = result.slice((page_no * per_page), (page_no + 1) * per_page);
            callback(false, finalResult, docLength);
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