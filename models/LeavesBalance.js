const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaveBalanceSchema = new Schema({
    LeaveID: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    EmpID: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    LeaveType: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    OpeningBalance: {
        type: Number,
        required: true,
        trim: true
    },
    LeaveEarned: {
        type: Number,
        required: true,
        trim: true
    },
    TotalDue: {
        type: Number,
        required: true,
        trim: true
    },
    TakenLeave: {
        type: Number,
        required: true,
        trim: true
    },
    LeaveEncash: {
        type: Number,
        required: true,
        trim: true
    },
    LeaveOnAccount: {
        type: Number,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
});

var leaveBal = mongoose.model('leaveBal', leaveBalanceSchema);

module.exports = leaveBal;