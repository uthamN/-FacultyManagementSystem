import React, { useState, useEffect } from 'react';
import image from '../../resources/Logo.png';
import './empDetails.css';
import { useNavigate } from 'react-router-dom';


function EmpDetails() {
    var emp = localStorage.getItem("EmployeeInfo");
    emp = JSON.parse(emp);
    let navigate = useNavigate();
    var EmpName = emp.data.EmpName;
    var Designation = emp.data.Designation;
    var Department = emp.data.Department;
    var Email = emp.data.Email;
    var cd = emp.data.Contact_Number;

    useEffect(() => {
        var emp = localStorage.getItem("EmployeeInfo");
        emp = JSON.parse(emp);
        if(emp){
            
        }else{
            navigate('/');
        }
    },[]);

    

    return (
        <div>
            <div className='leaveApp_main'>
                <div className = 'header_ row d-flex align-items-center justify-content-between text-center'>
                        <h2 className="main_title"> INDIAN INSTITUTE OF INFORMATION TECHNOLOGY DESIGN AND MANUFACTURING KURNOOL </h2>
                </div>
            </div>
            <div className='container'>
                < div className = 'row input_form' >
                    <div className='left col-sm-12 col-md-6 '>
                        <img src={image} className='img_logo'/>
                    </div>
                    <div className='right text-black col-sm-12 col-md-5 card_emp_details'>
                        <div className="card  border-primary mb-3 abc">
                            <div className="card-body">
                                <h4 className="card-title">{EmpName}</h4>
                                <div className="card-text">
                                    <ul className='list_emp'>
                                        <li>{Designation}</li>
                                        {/* <li>{empID}</li> */}
                                        <li>{Department}</li>
                                        <li>Email : {Email}</li>
                                        <li>Ph. No. +91 {cd}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpDetails