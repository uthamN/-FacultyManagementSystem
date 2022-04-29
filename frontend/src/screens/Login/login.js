import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./login.css";
import image from "../../resources/Logo.png";
import { login } from "../../actions/userActions";
import ErrorMessage from "../../components/errorMessage";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

var GetEmpDetails = async(EmpDetails) => {
    try {
        const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
        EmpDetails = String(EmpDetails);
        console.log(EmpDetails)
        const hd = "http://localhost:5500/faculty/" + EmpDetails;
        console.log(hd)
        const response =  await axios.get(hd);

        if(response){
            console.log("Employee Details Recieved!!");
            console.log(response);  
            localStorage.setItem("EmployeeInfo", JSON.stringify(response));
        }
              
    } catch (error) {
        console.log("Cannot get user Data");
    }
}


function Login({ history }) {
    const [UserName, setUserName] = useState("");
    const [UserPassword, setUserPassword] = useState("");
    const dispatch = useDispatch();
    const userInfo = localStorage.getItem('userInfo');
    let navigate = useNavigate();

    // const userLogin = useSelector((state) => state.userLogin || {});
    // const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        console.log(history);
        
        if (userInfo) {
            console.log("push");
            if(JSON.parse(localStorage.getItem("userInfo")) != 404){
                // console.log(JSON.parse(localStorage.getItem("userInfo")));
                GetEmpDetails(JSON.parse(localStorage.getItem("userInfo")).EmpID);
                navigate('/dashboard');
            }else{
                localStorage.clear();
            }
            
            // history.push("/dashboard");
        }else{
            console.log("Invalid User");
        }
    }, [history, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(UserName, UserPassword));
    };


  return (
    <div>
        <div className = 'header_ row d-flex align-items-center justify-content-between text-center'>
            <h2> INDIAN INSTITUTE OF INFORMATION TECHNOLOGY DESIGN AND MANUFACTURING KURNOOL </h2>
        </div>
        <div className='container'>
            < div className = 'row input_form' >
                <div className='left col-sm-12 col-md-6 '>
                    <img src={image} className='img_logo'/>
                    <h4>Faculty Management System</h4>
                </div>
                <div className='right col-sm-12 col-md-5'>
                    {/* {(abc || error) && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
                    {/* {loading && false} */}
                    <form className='inp-form' onSubmit={submitHandler}>
                        <div className="form-group">
                            <label className="text_style form-label mt-4">Username</label>
                            <input type="email" className="form-control inp-box" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" value={UserName} onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label className=" text_style form-label mt-4">Password</label>
                            <input type="password" className="form-control inp-box" id="exampleInputPassword1" placeholder="Password" value={UserPassword} onChange={(e) => setUserPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary form-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;


// logout ----> () => {localstorage.removeItem("userDetails");}