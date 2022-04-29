const express = require('express');
const router = express.Router();

const faculty = require('../../models/facultyStaff');

router.get('/test', (req, res) => res.send('testing routes here!!!'));

router.route('/').get((req, res) => {
    faculty.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req, res) => {
    const EmpID = req.body.EmpID;
    const EmpName = req.body.EmpName;
    const Department = req.body.Department;
    const Designation = req.body.Designation;
    const Email = req.body.Email;
    const DOB_ = req.body.DOB_;
    const isHOD = req.body.isHOD
    const isAdmin = req.body.isAdmin;
    const isSH = req.body.isSH;
    const Contact_Number = req.body.Contact_Number;

    const NewFaculty = new faculty({
        EmpID,
        EmpName,
        Department,
        Designation,
        Email,
        DOB_,
        isHOD,
        isAdmin,
        isSH,
        Contact_Number
    });
    NewFaculty.save()
        .then(() => res.json('Faculty Added'))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/:EmpID').get((req, res) => {
    faculty.findOne({EmpID : req.params.EmpID})
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/update/:id').post((req, res) => {
    faculty.findById(req.params.id)
        .then(data => {
            data.EmpID = req.body.EmpID;
            data.EmpName = req.body.EmpName;
            data.Department = req.body.Department;
            data.Designation = req.body.Designation;
            data.Email = req.body.Email;
            data.DOB_ = req.body.DOB_;
            data.isHOD = Boolean(req.body.isHOD);
            data.isAdmin = Boolean(req.body.isAdmin);
            data.isSH = Boolean(req.body.isSH);
            data.Contact_Number = Number(req.body.Contact_Number);

            data.save()
                .then(() => res.json('Faculty details updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    faculty.findByIdAndDelete(req.params.id)
        .then(() => res.json('Faculty deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;