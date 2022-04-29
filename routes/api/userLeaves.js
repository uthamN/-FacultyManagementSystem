const express = require('express');
const router = express.Router();

const leaveDetails = require('../../models/LeavesBalance');

router.get('/test', (req, res) => res.send('testing routes here!!!'));

router.route('/add').post((req, res) => {
    const LeaveID = req.body.LeaveID;
    const EmpID = req.body.EmpID;
    const LeaveType = req.body.LeaveType;
    const OpeningBalance = req.body.OpeningBalance;
    const LeaveEarned = req.body.LeaveEarned;
    const TotalDue = req.body.TotalDue;
    const TakenLeave = req.body.TakenLeave;
    const LeaveEncash = req.body.LeaveEncash;
    const LeaveOnAccount = req.body.LeaveOnAccount;

    const NewLeaveDetails = new leaveDetails({
        LeaveID,
        EmpID,
        LeaveType,
        OpeningBalance,
        LeaveEarned,
        TotalDue,
        TakenLeave,
        LeaveEncash,
        LeaveOnAccount
    });

    NewLeaveDetails.save()
        .then(() => res.json('Leave Added.'))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/').get((req, res) => {
    leaveDetails.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error : ' + err));
});


router.route('/:id').get((req, res) => {
    leaveDetails.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error : ' + err));
})

router.route('/update/:id').post((req, res) => {
    leaveDetails.findById(req.params.id)
        .then(data => {
            data.LeaveID = req.body.LeaveID;
            data.EmpID = req.body.EmpID;
            data.LeaveType = req.body.LeaveType;
            data.OpeningBalance = req.body.OpeningBalance;
            data.LeaveEarned = req.body.LeaveEarned;
            data.TotalDue = req.body.TotalDue;
            data.TakenLeave = req.body.TakenLeave;
            data.LeaveEncash = req.body.LeaveEncash;
            data.LeaveOnAccount = req.body.LeaveOnAccount;

            data.save()
                .then(() => res.json('Leave details updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    leaveDetails.findByIdAndDelete(req.params.id)
        .then(() => res.json('Leave details deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;