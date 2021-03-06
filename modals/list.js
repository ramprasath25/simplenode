var doctor_schema = require('./doctor_schema');
/* get all doctor list */
exports.getAllList = function(data, callback) {
    var query = doctor_schema.find({}).select({ __v:0});
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
    var query = doctor_schema.findOne({_id: id}).select({__v:0});
    query.exec(function(err, result) {
        if (err) {
            callback(true, "Error, fetching data");
        } else {
            callback(false, result);
        }
    });
};
/* Search Doctor */
exports.searchData = function(searchParams, callback) {

    // var query = doctor_schema.find({
    //    $text:{
    //        $search: searchParams
    //    },
    // }, { score: { $meta: "textScore" } }).sort({
    //     score: { $meta: "textScore" }
    // });
    // query.exec(function(err, result) {
    //     if (err) {
    //         callback(true, "Error, fetching data");
    //     } else {
    //         callback(false, result);
    //     }
    // });
    const searchParam = searchParams.split(/ /).join("|");
    doctor_schema.find({
        $or:
            [{ firstname: { $regex: new RegExp(searchParam, "i") }},
            { lastname: { $regex: new RegExp(searchParam, "i") }}]
    }, function(err, result) {
        if (err) {
            callback(true, "Error, fetching data");
        } else {
            callback(false, result);
        }
    });
};