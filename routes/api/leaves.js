const express = require('express');
const router = express.Router();

const leave = require('../../models/LeaveForm');

router.get('/test', (req, res) => res.send('testing routes here!!!'));

router.route('/add').post((req, res) => {
    console.log(req.body);
    const LeaveID = req.body.LeaveID;
    const EmpID = req.body.EmpID;
    const TypeOfLeave = req.body.TypeOfLeave;
    const DateFrom = req.body.DateFrom;
    const DateFromIsHalf = req.body.DateFromIsHalf;
    const DateTo = req.body.DateTo;
    const DateToIsHalf = req.body.DateToIsHalf;
    const PrefixDateFrom = req.body.PrefixDateFrom;
    const PrefixDateTo = req.body.PrefixDateTo;
    const SuffixDateFrom = req.body.SuffixDateFrom;
    const SuffixDateTo = req.body.SuffixDateTo;
    const StationLeavingDateFrom = req.body.StationLeavingDateFrom;
    const StationLeavingDateTo = req.body.StationLeavingDateTo;
    const ContactDetailName = req.body.ContactDetailName;
    const ContactDetailNumber = req.body.ContactDetailNumber;
    const Reason = req.body.Reason;
    const WorkArrangement = req.body.WorkArrangement;
    const Remark = req.body.Remark;
    const SubmissionDate = req.body.SubmissionDate;
    const Status = req.body.Status;

    const NewLeave = new leave({
        LeaveID,
        EmpID,
        TypeOfLeave,
        DateFrom,
        DateFromIsHalf,
        DateTo,
        DateToIsHalf,
        PrefixDateFrom,
        PrefixDateTo,
        SuffixDateFrom,
        SuffixDateTo,
        StationLeavingDateFrom,
        StationLeavingDateTo,
        ContactDetailName,
        ContactDetailNumber,
        Reason,
        WorkArrangement,
        Remark,
        SubmissionDate,
        Status
    });

    NewLeave.save()
        .then(() => res.json('Leave Added.'))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/').get((req, res) => {
    leave.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error : ' + err));
});


router.route('/:id').get((req, res) => {
    leave.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error : ' + err));
})

router.route('/update/:id').post((req, res) => {
    leave.findById(req.params.id)
        .then(data => {
            data.LeaveID = req.body.LeaveID;
            data.EmpID = req.body.EmpID;
            data.TypeOfLeave = req.body.TypeOfLeave;
            data.DateFrom = Date.parse(req.body.DateFrom);
            data.DateFromIsHalf = Boolean(req.body.DateFromIsHalf);
            data.DateTo = Date.parse(req.body.DateTo);
            data.DateToIsHalf = Boolean(req.body.DateToIsHalf);
            data.PrefixDateFrom = Date.parse(req.body.PrefixDateFrom);
            data.PrefixDateTo = Date.parse(req.body.PrefixDateTo);
            data.SuffixDateFrom = Date.parse(req.body.SuffixDateFrom);
            data.SuffixDateTo = Date.parse(req.body.SuffixDateTo);
            data.StationLeavingDateFrom = Date.parse(req.body.StationLeavingDateFrom);
            data.StationLeavingDateTo = Date.parse(req.body.StationLeavingDateTo);
            data.ContactDetailName = req.body.ContactDetailName;
            data.ContactDetailNumber = Number(req.body.ContactDetailNumber);
            data.Reason = req.body.Reason;
            data.WorkArrangement = req.body.WorkArrangement;
            data.Remark = req.body.Remark;
            data.SubmissionDate = Date.parse(req.body.SubmissionDate);
            data.Status = req.body.Status;

            data.save()
                .then(() => res.json('Leave details updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    leave.findByIdAndDelete(req.params.id)
        .then(() => res.json('Leave deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


// {
//         "LeaveID" : "LEV002",
//         "EmpID" : "FAC001",
//         "TypeOfLeave" : "Casual Leave",
//         "DateFrom" : "2022-01-01",
//         "DateFromIsHalf": false,
//         "DateTo" : "2022-02-01",
//         "DateToIsHalf" : false,
//         "PrefixDateFrom" : "2022-01-01",
//         "PrefixDateTo" : "2022-02-01",
//         "SuffixDateFrom" : "2022-01-01",
//         "SuffixDateTo" : "2022-02-01",
//         "StationLeavingDateFrom" : "2022-01-01",
//         "StationLeavingDateTo" : "2022-02-01",
//         "ContactDetailName" : "Test Person 1",
//         "ContactDetailNumber" : 123432155,
//         "Reason" : "Holiday Kavali",
//         "WorkArrangement" : "Will be available online",
//         "Remark" : "None",
//         "SubmissionDate" : "2021-12-12",
//         "Status" : "Granted"
// }


// Statuses :
//     Pending - 25%
//     Approved - 60%
//     Granted - 100%