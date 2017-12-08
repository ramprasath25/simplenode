var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

module.exports = mongoose.model('doctors', new Schema({
    firstname : {
        type : String
    },
    lastname: {
        type: String
    },
    specialist: {
        type: String
    },
    qualification: {
        type: String
    },
    streetname: {
        type: String
    },
    location: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    pincode: {
        type: String
    },
    yearsofexperience: {
        type: String
    },
    mobile: {
        type: String
    },
    email: {
        type: String
    },
    phno: {
        type: String
    },
    createdDate: {
        type: String
    },
    profile_img: {
        type: String
    }
}));