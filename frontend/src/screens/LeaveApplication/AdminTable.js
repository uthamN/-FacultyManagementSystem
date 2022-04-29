import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import './HOD_Table.css';
import { useNavigate } from "react-router-dom";

function AdminTable() {
    const [LeaveList, setLeaveList] = useState([]);
    const [UsersList, setUsersList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        var emp = localStorage.getItem("userInfo");
        emp = JSON.parse(emp);
        if(emp){
            axios.get('http://localhost:5500/leave/')
            .then(response => {
                console.log(response.data);
                setLeaveList(response.data);

                var UL = [];
                for(var i=0;i<response.data.length;i++){
                    // console.log(emp.EmpID + " " + typeof(emp.EmpID) + " " + response.data[i].EmpID + " " + typeof(response.data[i].EmpID));
                    if(response.data[i].Status == "Approved by HOD"){
                        console.log("called");
                        UL.push(response.data[i]);
                    }
                }
                console.log(UL)
                setUsersList(UL);
                // console.log(UsersList)
            })
        }
    }, []);

    const changePage = () => {
        navigate("/LeaveDetailsAdmin");
    }
    
    return (
        <div>
            <h4>Approved Leaves from HOD</h4>
            <table className="table table-hover qwerty">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Leave</th>
                        <th scope="col">Employee ID</th>
                        <th scope="col">From Date</th>
                        <th scope="col">To Date</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Type of Leave</th>
                        <th scope="col">Status</th>
                        <th scope="col">More Details</th>
                    </tr>
                </thead>
                <tbody>
                    {UsersList.map((data, id)=>{
                        return  (
                            <tr className="table-primary" key={id}>
                                <th scope="row">{data.LeaveID}</th>
                                <td>{data.EmpID}</td>
                                <td>{data.DateFrom}</td>
                                <td>{data.DateTo}</td>
                                <td>{data.Reason}</td>
                                <td>{data.TypeOfLeave}</td>
                                <td>{data.Status}</td>
                                <td className='changePage' onClick={changePage}>Details</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AdminTable;