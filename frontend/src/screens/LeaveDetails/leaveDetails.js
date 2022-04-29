import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleLeaveDetails from './SingleLeaveDetails';

function LeaveDetails() {
    const [LeaveList, setLeaveList] = useState([]);
    const [UsersList, setUsersList] = useState([]);

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
                    if(emp.EmpID == response.data[i].EmpID){
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

  return (
    <div>
        <div className = 'header_ row d-flex align-items-center justify-content-between text-center'>
            <h2 className="main_title"> INDIAN INSTITUTE OF INFORMATION TECHNOLOGY DESIGN AND MANUFACTURING KURNOOL </h2>
        </div>
        
        {UsersList.map((data, id)=>{
            return  (
                <SingleLeaveDetails key={id} LeaveID = {data.LeaveID} EmpID = {data.EmpID} TypeofLeave = {data.TypeOfLeave} AppliedOn = {data.createdAt} DateFrom = {data.DateFrom} DateTo = {data.DateTo} PrefixDateFrom = {data.PrefixDateFrom} PrefixDateTo = {data.PrefixDateTo} SuffixDateFrom = {data.SuffixDateFrom} SuffixDateTo = {data.SuffixDateTo} StationLeavingDateFrom = {data.StationLeavingDateFrom} StationLeavingDateTo = {data.StationLeavingDateTo} Reason = {data.Reason} Remark = {data.Remark} WorkArrangement = {data.WorkArrangement} Status = {data.Status} />
            )
        })}
    </div>
  )
}

export default LeaveDetails;