import React, {useEffect, useState} from 'react';
import './allEmp.css';
import Emp from './Emp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AllEmp(){
    const [UserDetails, setUserDetails] = useState([])
    const [isAdmin, setisAdmin] = useState(false)
    const [CSFac, setCSFac] = useState([])
    const [ECFac, setECFac] = useState([])
    const [MechFac, setMechFac] = useState([])
    const [DS, setDS] = useState([])
    var navigate = useNavigate();

    useEffect(()=>{
        var emp = localStorage.getItem("userInfo");
        emp = JSON.parse(emp);
        if(emp){
            var empDet = JSON.parse(localStorage.EmployeeInfo).data;
            if(empDet.isAdmin){setisAdmin(true);}
            axios.get('http://localhost:5500/faculty/')
            .then(res=>{
                console.log(res.data);
                setUserDetails(res.data);
                // console.log(res.data);
                var CS = [];
                var EC = [];
                var Mech = [];
                var DS = [];
                for(var i =0;i< res.data.length;i++){
                    if(res.data[i].Department == "Department of Computer Science"){
                        CS.push(res.data[i]);
                    }else if(res.data[i].Department == "Department of Electrical Engineering"){
                        EC.push(res.data[i]);
                    }else if(res.data[i].Department == "Department of Mechanical Engineering"){
                        Mech.push(res.data[i]);
                    }else if(res.data[i].Department == "Department of Sciences"){
                        DS.push(res.data[i]);
                    }
                }
                setCSFac(CS);
                setECFac(EC);
                setMechFac(Mech);
                setDS(DS);
            })
            .catch(err=>{
                console.log(err);
            })
        }else{
            navigate('/');
        }
        
     },[])

    const addfac = () => {
        navigate("/AddFaculty");
    }

    return (
        <div>
            <div className = 'header_ row d-flex align-items-center justify-content-between text-center'>
                <h2 className="main_title"> INDIAN INSTITUTE OF INFORMATION TECHNOLOGY DESIGN AND MANUFACTURING KURNOOL </h2>
            </div>
            <div className='dashboard_name abcd'>
                <h3 className="dash_title">ALL EMPLOYEE DETAILS</h3>
            </div>
            {isAdmin &&
                <div className='dashboard_name abcd'>
                <h6 className="dash_title" onClick={addfac}> + Add Faculty/Staff</h6>
                </div>
            }
            
            <h5 className='dept'>Department of Computer Science</h5>
            <div className='DeptCS do' id='DeptCS'>
                {CSFac.map((data, id)=>{
                    return  <Emp key={id} name = {data.EmpName} des = {data.Designation} dept = {data.Department} Email = {data.Email} dob={data.DOB_}></Emp>
                })}
            </div>
            <h5 className='dept'>Department of Electrical Engineering</h5>
            <div className='DeptEC do' id='DeptEC'>
                {ECFac.map((data, id)=>{
                    return  <Emp key={id} name = {data.EmpName} des = {data.Designation} dept = {data.Department} Email = {data.Email} dob={data.DOB_}></Emp>
                })}
            </div>

            <h5 className='dept'>Department of Mechanical Engineering</h5>
            <div className='DeptMech do' id='DeptMech'>
                {MechFac.map((data, id)=>{
                    return  <Emp key={id} name = {data.EmpName} des = {data.Designation} dept = {data.Department} Email = {data.Email} dob={data.DOB_}></Emp>
                })}
            </div>

            <h5 className='dept'>Department of Sciences</h5>
            <div className='DeptMech do' id='DeptMech'>
                {DS.map((data, id)=>{
                    return  <Emp key={id} name = {data.EmpName} des = {data.Designation} dept = {data.Department} Email = {data.Email} dob={data.DOB_}></Emp>
                })}
            </div>

        </div>
    )
}

export default AllEmp