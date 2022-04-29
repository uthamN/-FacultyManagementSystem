const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facultyStaffSchema = new Schema({
    EmpID : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    EmpName : {
        type : String,
        required : true,
        trim : true
    },
    Department : {
        type : String,
        required : true,
        trim : true
    },
    Designation : {
        type : String,
        required : true,
        trim : true
    },
    Email : {
        type : String,
        required : true,
        trim : true
    },
    DOB_ : {
        type : String,
        required : true,
        trim : true
    },
    isHOD : {
        type : Boolean,
        required : true,
        trim : true
    },
    isAdmin : {
        type : Boolean,
        required : true,
        trim : true
    },
    isSH : {
        type : Boolean,
        required : true,
        trim : true
    },
    Contact_Number : {
        type : Number,
        required : true,
        trim : true
    }
},{
    timestamps : true,
});

var FacStaff = mongoose.model('FacStaff',facultyStaffSchema);

module.exports=FacStaff;

// {
//     "EmpID" : "FAC004",
//     "EmpName" : "Test Faculty SH",
//     "Department" : "Department of Computer Science",
//     "Designation" : "Assistant Professor",
//     "Email" : "testFaculty@iiitk.ac.in",
//     "DOB_" : "2001-01-01",
//     "isHOD" : false,
//     "isAdmin" : false,
//     "isSH" : true,
//     "Contact_Number" : 3333333333
// }