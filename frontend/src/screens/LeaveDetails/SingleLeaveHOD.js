import React, { useEffect, useState } from 'react';
import './SingleLeavePage.css';
import axios from 'axios';


function SingleLeaveHOD(props) {
    const [LeaveList, setLeaveList] = useState([]);
    const [UsersList, setUsersList] = useState([]);

    const [class_name, setclass_name] = useState("sb1 progress-bar progress-bar-striped progress-bar-animated")
    useEffect(() => {
        if(props.Status == "Pending"){
            setclass_name("sb1");
        }else if(props.Status == "Approved by HOD"){
            setclass_name("sb2 progress-bar progress-bar-striped progress-bar-animated");
        }else if(props.Status == "Checked by Admin"){
            setclass_name("sb3 progress-bar progress-bar-striped progress-bar-animated");
        }else if(props.Status == "Granted"){
            setclass_name("sb4 progress-bar progress-bar-striped progress-bar-animated");
        }else if(props.Status == "Rejected"){
            setclass_name("sb5 progress-bar progress-bar-striped progress-bar-animated");
        }      
    }, []);

    const approveLeave = async() => {
        var response = await axios.get('http://localhost:5500/leave/');
            
        console.log(response.data);
        setLeaveList(response.data);

        var UL = [];
        for(var i=0;i<response.data.length;i++){
            if(response.data[i].Status == "Pending" && response.data[i].LeaveID == props.LeaveID){
                console.log("called");
                UL.push(response.data[i]);
                break;
            }
        }
        console.log(UL)
        setUsersList(UL);
        // console.log(UsersList)
        
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            console.log(UL[0])
            var hd = 'http://localhost:5500/leave/update/' + UL[0]._id;
            console.log(hd);
            var info = UL[0];
            info.Status = "Approved by HOD";
            console.log(info);
            const data = await axios.post(
                hd,
                info,
                config
            )
            console.log(data);
    
            if(data){
                console.log("Employee Details Recieved!!");
                console.log(data);  
                // localStorage.setItem("EmployeeInfo", JSON.stringify(response));
            }
                    
        } catch (error) {
            console.log("Cannot get the user Data");
        }
    }

    const rejectLeave = async() => {
        var response = await axios.get('http://localhost:5500/leave/');
            
        console.log(response.data);
        setLeaveList(response.data);

        var UL = [];
        for(var i=0;i<response.data.length;i++){
            if(response.data[i].Status == "Pending" && response.data[i].LeaveID == props.LeaveID){
                console.log("called");
                UL.push(response.data[i]);
                break;
            }
        }
        console.log(UL)
        setUsersList(UL);
        // console.log(UsersList)
        
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            console.log(UL[0])
            var hd = 'http://localhost:5500/leave/update/' + UL[0]._id;
            console.log(hd);
            var info = UL[0];
            info.Status = "Rejected";
            console.log(info);
            const data = await axios.post(
                hd,
                info,
                config
            )
            console.log(data);
    
            if(data){
                console.log("Employee Details Recieved!!");
                console.log(data);  
                // localStorage.setItem("EmployeeInfo", JSON.stringify(response));
            }
                    
        } catch (error) {
            console.log("Cannot get the user Data");
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 det_in'>
                    <h5>
                        Leave ID : {props.LeaveID}
                    </h5>
                    <h5>
                        EmpID : {props.EmpID}
                    </h5>
                    <h6>
                        Type of Leave : {props.TypeofLeave}
                    </h6>
                    <h6>
                        Applied on : {props.AppliedOn}
                    </h6>
                    <h6>
                        Date From : {props.DateFrom}
                    </h6>
                    <h6>
                        Date To : {props.DateTo}
                    </h6>
                    <h6>
                        Reason : {props.Reason}
                    </h6>
                    <h6>
                        Remark : {props.Remark}
                    </h6>
                    <h6>
                        WorkArrangement : {props.WorkArrangement}
                    </h6>
                    <h6>
                        PrefixDateFrom : {props.PrefixDateFrom}
                    </h6>
                    <h6>
                        PrefixDateTo : {props.PrefixDateTo}
                    </h6>
                    <h6>
                        SuffixDateFrom : {props.SuffixDateFrom}
                    </h6>
                    <h6>
                        SuffixDateTo : {props.SuffixDateTo}
                    </h6>
                    <h6>
                        StationLeavingDateFrom : {props.StationLeavingDateFrom}
                    </h6>
                    <h6>
                        StationLeavingDateTo : {props.StationLeavingDateTo}
                    </h6>
                    <h6>
                        Status : {props.Status}
                    </h6>
                </div>
            </div>
            <div className='statusBar'>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated stb" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                </div>
            </div>
            <button onClick={approveLeave} class="btn btn-primary">Approve</button>
            <button onClick={rejectLeave} class="btn btn-primary">Reject</button>
        </div>
    )
}

export default SingleLeaveHOD