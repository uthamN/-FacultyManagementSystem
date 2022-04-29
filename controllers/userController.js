// import asyncHandler from "express-async-handler";
const asyncHandler = require('express-async-handler');
const user = require('../models/user');
// import generateToken from "../utils/generateToken.js";

const authUser = asyncHandler(async (req, res) => {
    const {
        UserName,
        UserPassword
    } = req.body;

    const user = await user.findOne({
        UserName
    });

    if (user && (await user.matchPassword(UserPassword))) {
        res.json({
            _id: user._id,
            name: user.UserName,
            EmpID: user.EmpID,
            //token: generateToken(user._id),
        });
    } else {
        res.status(401);
    }
});

module.exports = authUser;