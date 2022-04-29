import React, { useEffect, useState} from 'react';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Form from './form';
import './leaveapp.css';
import LeaveTable from './leaveTable';
import HOD_Table from './HOD_Table';
import AdminTable from './AdminTable';
import SHTable from './SHTable';

function Leaveapp() {
    const [isSH, setisSH] = useState(false)
    const [isAdmin, setisAdmin] = useState(false)
    const [isHOD, setisHOD] = useState(false)
    useEffect(() => {
        var EmpDetails = JSON.parse(localStorage.getItem("EmployeeInfo"));
        setisAdmin(EmpDetails.data.isAdmin);
        setisHOD(EmpDetails.data.isHOD);
        setisSH(EmpDetails.data.isSH);
    }, [])
    

  return (
    <div>
        {/* <Header /> */}
        <div className='leaveApp_main'>
            <div className = 'header_ row d-flex align-items-center justify-content-between text-center'>
                    <h2 className="main_title"> INDIAN INSTITUTE OF INFORMATION TECHNOLOGY DESIGN AND MANUFACTURING KURNOOL </h2>
            </div>
            <div className='container'>
                <div className='row dashboard_name'>
                        <h3 className="dash_title">LEAVE APPLICATION</h3>
                </div>
                <section className='form_border'>
                    <div className="container ">
                        <div className=" row d-flex align-items-center justify-content-between text-center">
                            <div className="col-12 text-start">
                                <p>Please fill the criteria, for Apply leave</p>
                            </div>
                        </div>
                    </div>
                    <Form />
                </section>
            </div>
        </div>
        <LeaveTable />
        {isHOD &&
            <HOD_Table />
        }
        {isAdmin &&
            <AdminTable />
        }
        {isSH &&
            <SHTable />
        }

        {/* <Footer /> */}

    </div>
  )
}

export default Leaveapp