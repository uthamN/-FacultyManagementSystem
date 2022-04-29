const express = require('express');
const asyncHandler = require('express-async-handler');
const { authUser } = require('../../controllers/userController');
const router = express.Router();

const user = require('../../models/user');
const generateToken = require('../../utils/generateToken');

router.get('/test', (req, res) => res.send('testing routes here!!!'));

router.route('/add').post((req, res) => {
    const UserName = req.body.UserName;
    const UserPassword = req.body.UserPassword;
    const EmpID = req.body.EmpID;

    const NewUser = new user({
        UserName,
        UserPassword,
        EmpID
    });

    NewUser.save()
        .then(() => res.json('User Added.'))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/:id').delete((req, res) => {
    user.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/login').post(async (req, res) => {
    const {
        UserName,
        UserPassword
    } = req.body;

    const userMain = await user.findOne({
        UserName
    });
    console.log("hello");
    if (userMain && (await userMain.matchPassword(UserPassword))) {
        res.json({
            _id: userMain._id,
            name: userMain.UserName,
            EmpID: userMain.EmpID,
            token: generateToken(userMain._id)
        });
    } else {
        res.json(404);
        console.log("Incorrect Credentials");
        throw new Error("Invalid user credentials!");
    }
});

module.exports = router;