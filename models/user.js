const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    UserName : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    UserPassword : {
        type : String,
        required : true,
        trim : true
    },
    EmpID : {
        type : String,
        required : true,
        unique : true,
        trim : true
    }
},{
    timestamps : true,
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.UserPassword);
};

userSchema.pre("save", async function (next) {
    if (!this.isModified("UserPassword")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.UserPassword = await bcrypt.hash(this.UserPassword, salt);
});

var Users = mongoose.model('Users', userSchema);

module.exports = Users;