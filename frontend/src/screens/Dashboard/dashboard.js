import React, {useEffect, useState} from "react";
import { faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons';
import './dashboard.css';
import Icon from "./icon";
import {Link, useNavigate} from "react-router-dom";
import Header from "../../components/header/header";
// import { logout } from "../../actions/userActions";

function Dashboard() {
    let navigate = useNavigate();
    const [isAdmin, setisAdmin] = useState(false)
    const [isHOD, setisHOD] = useState(false)

    useEffect(() => {
        var emp = localStorage.getItem("userInfo");
        emp = JSON.parse(emp);
        if(emp){
            var empDet = JSON.parse(localStorage.EmployeeInfo).data;
            if(empDet.isAdmin){setisAdmin(true);}
            if(empDet.isHOD){setisHOD(true);}
        }else{
            navigate('/');
        }
    },[]);

    const logout = () => {
        localStorage.clear();
        console.log("data deleted");
    }

    return (
        <div className="haha">
            
            <div className = 'header_ row d-flex align-items-center justify-content-between text-center'>
                <h2 className="main_title"> INDIAN INSTITUTE OF INFORMATION TECHNOLOGY DESIGN AND MANUFACTURING KURNOOL </h2>
            </div>
            <div className='container'>
                <div className='row dashboard_name'>
                    <h6 className="dash_title log_out" onClick={logout}>
                        Logout
                    </h6>
                </div>
                <div className='row dashboard_name'>
                    <h3 className="dash_title">DASHBOARD</h3>
                </div>
                
                <section>
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-between text-center hahaha">

                            <div className="col-12 col-sm-6 col-md-4 dash_box">
                                <Link to='/employee' className=" linkDiv dash_box_in">
                                    <Icon 
                                        title = "User Details"
                                        icon = {faUser}
                                    />
                                </Link>
                            </div>
                            {(isHOD || isAdmin || 1) ? 
                                <div className="col-12 col-sm-6 col-md-4 dash_box">
                                    <Link to="/AllEmp" className=" linkDiv dash_box_in">
                                        <Icon 
                                            title = "All Employee Details"
                                            icon = {faUser}
                                        />
                                    </Link>
                                </div>
                                :
                                <div className="col-12 col-sm-6 col-md-4 dash_box">
                                    <div className="dash_box_in">
                                        <Link to="/">
                                            <Icon 
                                                title = ""
                                                icon = {faBriefcase}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            }
                            

                            <div className="col-12 col-sm-6 col-md-4 dash_box">
                                <div className="dash_box_in">
                                    <Link to="/">
                                        <Icon 
                                            title = ""
                                            icon = {faBriefcase}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 dash_box">
                                <div className=" dash_box_in">
                                    <Link to="/">
                                        <Icon 
                                            title = ""
                                            icon = {faBriefcase}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 dash_box">
                                <div className="dash_box_in ">
                                    <Link to="/">
                                        <Icon 
                                            title = ""
                                            icon = {faBriefcase}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 dash_box">
                                <Link to="/LeaveApp" className="linkDiv dash_box_in">
                                    <Icon 
                                        title = "Leave Management"
                                        icon = {faBriefcase}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard;