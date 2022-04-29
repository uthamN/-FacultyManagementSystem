const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaveFormSchema = new Schema({
    LeaveID : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    EmpID : {
        type : String,
        required : true,
        trim : true
    },
    TypeOfLeave : {
        type : String,
        required : true,
        trim : true
    },
    DateFrom : {
        type : Date,
        required : true,
        trim : true
    },
    DateFromIsHalf : {
        type : Boolean,
        required : true,
        trim : true
    },
    DateTo : {
        type : Date,
        required : true,
        trim : true
    },
    DateToIsHalf : {
        type : Boolean,
        required : true,
        trim : true
    },
    PrefixDateFrom : {
        type : Date,
        required : true,
        trim : true
    },
    PrefixDateTo : {
        type : Date,
        required : true,
        trim : true
    },
    SuffixDateFrom : {
        type : Date,
        required : true,
        trim : true
    },
    SuffixDateTo : {
        type : Date,
        required : true,
        trim : true
    },
    StationLeavingDateFrom : {
        type : Date,
        required : true,
        trim : true
    },
    StationLeavingDateTo : {
        type : Date,
        required : true,
        trim : true
    },
    ContactDetailName : {
        type : String,
        required : true,
        trim : true
    },
    ContactDetailNumber : {
        type : String,
        required : true,
        trim : true
    },
    Reason : {
        type : String,
        required : true,
        trim : true
    },
    WorkArrangement : {
        type : String,
        required : true,
        trim : true
    },
    Remark : {
        type : String,
        required : true,
        trim : true
    },
    SubmissionDate : {
        type : Date,
        required : true,
        trim : true
    },
    Status : {
        type : String,
        required : true,
        trim : true
    }
},{
    timestamps : true,
});

var LeaveForm = mongoose.model('LeaveForm', LeaveFormSchema);

module.exports = LeaveForm;