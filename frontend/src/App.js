import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
import Login from './screens/Login/login';
import Dashboard from './screens/Dashboard/dashboard';
import Leaveapp from './screens/LeaveApplication/leaveapp';
import EmpDetails from './screens/EmpDetails/empDetails';
import AllEmp from './screens/AllEmpScreen/allEmp';
import LeaveDetails from './screens/LeaveDetails/leaveDetails';
import AddFaculty from './screens/AddFaculty/addFaculty';
import LeaveDetailsHOD from './screens/LeaveDetails/LeaveDetailsHOD';
import LeaveDetailsAdmin from './screens/LeaveDetails/LeaveDetailsAdmin';
import LeaveDetailsSH from './screens/LeaveDetails/LeaveDetailsSH';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes >
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/Dashboard' element={<Dashboard/>}/>
          <Route exact path='/Leaveapp' element={<Leaveapp/>}/>
          <Route exact path='/Employee' element={<EmpDetails/>}/>
          <Route exact path='/AllEmp' element={<AllEmp/>}/>
          <Route exact path='/LeaveDetails' element={<LeaveDetails/>}/>
          <Route exact path='/AddFaculty' element={<AddFaculty/>}/>
          <Route exact path='/LeaveDetailsHOD' element={<LeaveDetailsHOD/>}/>
          <Route exact path='/LeaveDetailsAdmin' element={<LeaveDetailsAdmin/>}/>
          <Route exact path='/LeaveDetailsSH' element={<LeaveDetailsSH/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
