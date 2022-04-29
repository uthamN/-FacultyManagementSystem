import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const postDetails = async(EmpName, EmpID, DOB_, Department, Designation, Email, UserPassword, Contact_Number, isHOD, isAdmin, isSH) => {
    isAdmin = Boolean(isAdmin);
    isSH = Boolean(isSH);
    isHOD = Boolean(isHOD);
    Contact_Number = Number(Contact_Number);
    var UserName = Email;

    try {
        const config = {
            headers: {
              "Content-type": "application/json",
            },
        };

        const info = {
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
        }

        console.log(info);

        const data = await axios.post(
            "http://localhost:5500/faculty/add/",
            info,
            config
        )
        console.log(data);

    } catch (error) {
        console.log(error)
    }

    try {
        const config = {
            headers: {
              "Content-type": "application/json",
            },
        };

        const info = {
            UserName,
            UserPassword,
            EmpID
        }

        console.log(info);

        const data = await axios.post(
            "http://localhost:5500/user/add/",
            info,
            config
        )
        console.log(data);

    } catch (error) {
        console.log(error)
    }


}

function AddFaculty() {
    const [EmpName, setEmpName] = useState("");
    const [EmpID, setEmpID] = useState("");
    const [Department, setDepartment] = useState("");
    const [Designation, setDesignation] = useState("");
    const [Email, setEmail] = useState("");
    const [UserPassword, setUserPassword] = useState("");
    const [Contact_Number, setContact_Number] = useState("");
    const [isAdmin, setisAdmin] = useState(false);
    const [isHOD, setisHOD] = useState(false);
    const [isSH, setisSH] = useState(false);
    const [DOB_, setDOB_] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        var emp = localStorage.getItem("userInfo");
        emp = JSON.parse(emp);
        if(!emp){
            navigate("/");
        }
    }, [])

    const submit_Handler = (e) => {
        e.preventDefault();
        if(EmpName == "" || EmpID == "" || Department == "" || DOB_ == "" || Designation == "" || Email == "" || UserPassword == "" || Contact_Number == ""){
            alert("Please fill in all the details!!!");
        }else{
            postDetails(EmpName, EmpID, DOB_, Department, Designation, Email, UserPassword, Contact_Number, isHOD, isAdmin, isSH);
        }
    };
    
    return (
        <div>
            <div className = 'header_ row d-flex align-items-center justify-content-between text-center'>
                <h2 className="main_title"> INDIAN INSTITUTE OF INFORMATION TECHNOLOGY DESIGN AND MANUFACTURING KURNOOL </h2>
            </div>
            <div className='dashboard_name abcd'>
                <h3 className="dash_title">ADD FACULTY</h3>
            </div>
            <form onSubmit={submit_Handler}>
                <div className="form-group">
                    <label className="form-label mt-4">Employee Name</label>
                    <input type="text" value={EmpName} onChange={(e) => setEmpName(e.target.value)} className="form-control" placeholder="Enter Employee Name" />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Employee ID</label>
                    <input type="text" value={EmpID} onChange={(e) => setEmpID(e.target.value)} className="form-control"  placeholder="Enter Employee ID" />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Department</label>
                    <input type="text" value={Department} onChange={(e) => setDepartment(e.target.value)} className="form-control"  placeholder="Enter Employee Department" />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Designation</label>
                    <input type="text" value={Designation} onChange={(e) => setDesignation(e.target.value)} className="form-control"  placeholder="Enter Employee Designation" />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Employee Email</label>
                    <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} className="form-control"  placeholder="Enter Employee Email" />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Employee Date of Birth</label>
                    <input type="date" value={DOB_} onChange={(e) => setDOB_(e.target.value)} className="form-control"  placeholder="Enter Employee Email" />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Employee Password</label>
                    <input type="password" value={UserPassword} onChange={(e) => setUserPassword(e.target.value)} className="form-control"  placeholder="Enter Employee Email Password" />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Employee contact Number</label>
                    <input type="text" value={Contact_Number} onChange={(e) => setContact_Number(e.target.value)} className="form-control"  placeholder="Enter Employee Contact Number" />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Is the Employee HOD</label>
                    <input type="text" value={isHOD} onChange={(e) => setisHOD(e.target.value)} className="form-control"  placeholder="true/false" />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Is the Employee Admin</label>
                    <input type="text" value={isAdmin} onChange={(e) => setisAdmin(e.target.value)} className="form-control"  placeholder="true/false" />
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Is the Employee Director/ Sanctioning Head</label>
                    <input type="text" value={isSH} onChange={(e) => setisSH(e.target.value)} className="form-control"  placeholder="true/false" />
                </div>
                <button type="submit" className="form-btn btn btn-primary">Submit</button>
            </form>
            
        </div>
    )
}

export default AddFaculty;