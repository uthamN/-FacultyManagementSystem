import axios from 'axios';
import React, { useState} from 'react';
import "./form.css";

const postDetails = async(EmpDept, EmpName, TypeOfLeave, DateFrom, DateFromIsHalf, DateTo, DateToIsHalf, PrefixDateFrom, PrefixDateTo, SuffixDateFrom, SuffixDateTo, StationLeavingDateFrom, StationLeavingDateTo, ContactDetailName, Reason, WorkArrangement, Remark) => {
    let emp = JSON.parse(localStorage.getItem("userInfo"));
    var EmpID = emp.EmpID;
    var LeaveID = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    LeaveID = "LEV" + String(LeaveID);
    var SubmissionDate = new Date().toLocaleString();
    var ContactDetailNumber = Number(1234567890);
    var Status = "Pending";
    try {
        const config = {
            headers: {
              "Content-type": "application/json",
            },
        };

        const info = {
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
        }

        console.log(info);

        const data = await axios.post(
            "http://localhost:5500/leave/add/",
            info,
            config
        )
        console.log(data);

    } catch (error) {
        console.log(error)
    }
}

function Form() {
    const [EmpDept, setEmpDept] = useState("CSE");
    const [EmpName, setEmpName] = useState("");
    const [TypeOfLeave, setTypeOfLeave] = useState("Casual Leave");
    const [DateFrom, setDateFrom] = useState("")
    const [DateTo, setDateTo] = useState("")
    const [DateFromIsHalf, setDateFromIsHalf] = useState(false)
    const [DateToIsHalf, setDateToIsHalf] = useState(false)
    const [PrefixDateFrom, setPrefixDateFrom] = useState("")
    const [PrefixDateTo, setPrefixDateTo] = useState("")
    const [SuffixDateFrom, setSuffixDateFrom] = useState("")
    const [SuffixDateTo, setSuffixDateTo] = useState("")
    const [StationLeavingDateFrom, setStationLeavingDateFrom] = useState("")
    const [StationLeavingDateTo, setStationLeavingDateTo] = useState("")
    const [ContactDetailName, setContactDetailName] = useState("")
    const [Reason, setReason] = useState("")
    const [WorkArrangement, setWorkArrangement] = useState("")
    const [Remark, setRemark] = useState("")

    const submitDetails = (e) => {
        e.preventDefault();
        if(EmpName == "" || DateFrom == "" || DateTo == "" || PrefixDateFrom == "" || PrefixDateTo == "" || SuffixDateFrom == "" || SuffixDateTo == "" || StationLeavingDateFrom == "" || StationLeavingDateTo == "" || ContactDetailName == "" || Remark == "" || Reason == "" || WorkArrangement == ""){
            alert("Please fill in all the details!!!");
        }else{
            postDetails(EmpDept, EmpName, TypeOfLeave, DateFrom, DateFromIsHalf, DateTo, DateToIsHalf, PrefixDateFrom, PrefixDateTo, SuffixDateFrom, SuffixDateTo, StationLeavingDateFrom, StationLeavingDateTo, ContactDetailName, Reason, WorkArrangement, Remark);
        }
    }

    return (
        <div>
            <form onSubmit={submitDetails}>
                <div className="row d-flex flex-wrap align-items-center justify-content-between text-center ">
                    <div className="row">
                        <div className="col-5 col-sm-5 text-center h6">
                            <label>Department</label>
                        </div>
                        <div className="col-7 col-sm-7 drpdwn_1 text-center">
                            <div className="input-group mb-3 drpdwn1_1">
                                <select className="custom-select dd" id="inputGroupSelect01" value={EmpDept} onChange={(e) => setEmpDept(e.target.value)}>
                                    <option value="1">CSE</option>
                                    <option value="2">ECE</option>
                                    <option value="3">Mech</option>
                                    <option value="4">Sciences</option>
                                    <option value="5">Administration</option>
                                    <option value="6">Accounts and Finance</option>
                                    <option value="7">Stores and Purchases</option>
                                    <option value="8">Academics</option>
                                </select>
                            </div>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-5 col-sm-5 text-center h6">
                            <label>Employee code/Name: </label>
                        </div>
                        <div className="col-7 col-sm-7 text-start">
                                <input type='text' className="text-center inpBoxLf" value={EmpName}  onChange={(e) => setEmpName(e.target.value)}></input>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-5 col-sm-5 text-center h6">
                            Type of Leave: 
                        </div>
                        <div className="col-7 col-sm-7 drpdwn_1 text-center">
                            <div className="input-group mb-3 drpdwn1_1">
                                <select className="custom-select dd" id="inputGroupSelect01" value={TypeOfLeave}  onChange={(e) => setTypeOfLeave(e.target.value)}>
                                    <option value="1">Casual leave</option>
                                    <option value="2">Special Casual Leave</option>
                                    <option value="3">Earned Leave</option>
                                    <option value="4">Half Pay Leave</option>
                                    <option value="5">Commuted Leave</option>
                                    <option value="6">Summer Vacation</option>
                                    <option value="7">Winter Vacation</option>
                                    <option value="8">Leave Not Due</option>
                                    <option value="9">Extra Ordinary leave</option>
                                    <option value="10">Maternity Leave</option>
                                    <option value="11">Adoption Leave</option>
                                    <option value="12">Paternity Leave</option>
                                    <option value="13">Study Leave</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 col-sm-5 text-center h6 Dte">
                        <label>Date </label>
                    </div>
                    <div className="col-7 col-md-7 text-center h6"></div>

                    <div className="col-12 col-sm-6 text-end h6">
                        <label>From &nbsp;&nbsp;</label>
                        <input type="date" className="DaInp" value={DateFrom} onChange={(e) => setDateFrom(e.target.value)}></input>
                        <div className="chkBox text-end">
                            <input type="checkbox" value={DateFromIsHalf} onChange={(e) => setDateFromIsHalf(e.target.value)}></input>
                            <label>&nbsp;1/2 Day</label>
                            </div>
                    </div>
                    <div className="col-12 col-sm-6 text-end h6">
                        <label>To &nbsp;</label>
                        <input type="date" className="DaInp" value={DateTo} onChange={(e) => setDateTo(e.target.value)}></input>
                        <div className="chkBox text-end">
                            <input type="checkbox" value={DateToIsHalf} onChange={(e) => setDateToIsHalf(e.target.value)}></input>
                            <label>&nbsp;1/2 Day</label>
                        </div>
                    </div>
                    
                    <div className="col-5 col-sm-5 text-center h6">
                        <label>Prefix Date </label>
                    </div>
                    <div className="col-7 col-md-7 text-center h6">
                        
                    </div>
                    <div className="col-12 col-sm-6 text-end h6">
                        <label>From &nbsp;&nbsp;</label>
                        <input type="date" className="DaInp" value={PrefixDateFrom} onChange={(e) => setPrefixDateFrom(e.target.value)}></input>
                    </div>
                    <div className="col-12 col-sm-6 text-end h6">
                        <label>To &nbsp;</label>
                        <input type="date" className="DaInp" value={PrefixDateTo} onChange={(e) => setPrefixDateTo(e.target.value)}></input>
                    </div>


                    <div className="col-5 col-sm-5 text-center h6">
                        <label>Suffix Date </label>
                    </div>
                    <div className="col-7 col-md-7 text-center h6">
                        
                    </div>
                    <div className="col-12 col-sm-6 text-end h6">
                        <label>From &nbsp;&nbsp;</label>
                        <input type="date" className="DaInp" value={SuffixDateFrom} onChange={(e) => setSuffixDateFrom(e.target.value)}></input>
                    </div>
                    <div className="col-12 col-sm-6 text-end h6">
                        <label>To &nbsp;</label>
                        <input type="date" className="DaInp" value={SuffixDateTo} onChange={(e) => setSuffixDateTo(e.target.value)}></input>
                    </div>


                    <div className="col-5 col-sm-5 text-center h6 ">
                        <label>Station Leaving Date </label>
                    </div>
                    <div className="col-7 col-md-7 text-center h6">
                        
                    </div>
                    <div className="col-12 col-sm-6 text-end h6">
                        <label>From &nbsp;&nbsp;</label>
                        <input type="date" className="DaInp" value={StationLeavingDateFrom} onChange={(e) => setStationLeavingDateFrom(e.target.value)}></input>
                    </div>
                    <div className="col-12 col-sm-6 text-end h6">
                        <label>To &nbsp;</label>
                        <input type="date" className="DaInp" value={StationLeavingDateTo} onChange={(e) => setStationLeavingDateTo(e.target.value)}></input>
                    </div>

                    <div className="row cdd">
                        <div className="col-5 col-sm-5 text-center h6 li-spacing">
                            <label>Contact Detail during Leave Period (With Phone no.): </label>
                        </div>
                        <div className="col-7 col-sm-7 text-start">
                                <input type='text' className="text-center inpBoxLf inpBoxLf-1" value={ContactDetailName} onChange={(e) => setContactDetailName(e.target.value)}></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-5 col-sm-5 text-center h6 li-spacing">
                            <label>Reason for Leave: </label>
                        </div>
                        <div className="col-7 col-sm-7 text-start ">
                                <input type='text' className="text-center inpBoxLf inpBoxLf-1" value={Reason} onChange={(e) => setReason(e.target.value)}></input>
                        </div>
                    </div>
                    
                    <div className="row">

                        <div className="col-5 col-sm-5 text-center h6 li-spacing">
                            <label>Work Arrangement Detail: </label>
                        </div>
                        <div className="col-7 col-sm-7 text-start">
                                <input type='text' className="text-center inpBoxLf inpBoxLf-1" value={WorkArrangement} onChange={(e) => setWorkArrangement(e.target.value)}></input>
                        </div>
                    </div>
                    
                    <div className="row">

                        <div className="col-5 col-sm-5 text-center h6 li-spacing">
                            <label>Remarks </label>
                        </div>
                        <div className="col-7 col-sm-7 text-start">
                                <input type='text' className="text-center inpBoxLf inpBoxLf-1" value={Remark} onChange={(e) => setRemark(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="row formSubmitButton">
                        <div className="col-6 col-sm-6 text-center">
                            {/* //commuted leave pdf medical certificate */}
                            <input type="submit" value="Apply" className="sbmtBtn"></input>
                        </div>
                        <div className="col-6 col-sm-6 text-center">
                            {/* //commuted leave pdf medical certificate */}
                            <input type="button" value="New" className="sbmtBtn"></input>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Form;