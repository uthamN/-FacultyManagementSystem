import React, { useEffect, useState } from 'react';
import './SingleLeavePage.css';

function SingleLeaveDetails(props) {
    const [class_name, setclass_name] = useState("sb1 progress-bar progress-bar-striped progress-bar-animated")
    useEffect(() => {
        if(props.Status == "Pending"){
            setclass_name("sb1");
        }else if(props.Status == "Approved by HOD"){
            setclass_name("sb2 progress-bar progress-bar-striped progress-bar-animated");
        }else if(props.Status == "Checked by Admin"){
            setclass_name("sb3 progress-bar progress-bar-striped progress-bar-animated");
        }else if(props.Status == "Granted progress-bar progress-bar-striped progress-bar-animated"){
            setclass_name("sb4");
        }else if(props.Status == "rejected progress-bar progress-bar-striped progress-bar-animated"){
            setclass_name("sb5 progress-bar progress-bar-striped progress-bar-animated");
        }      
    }, []);

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
        </div>
    )
}

export default SingleLeaveDetails