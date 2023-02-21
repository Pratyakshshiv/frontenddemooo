import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountCreated from './Screens/AccountCreated';
import AccountVerified from './Screens/AccountVerified';
import PasswordUpdated from './Screens/PasswordUpdated';
import Verify from './Screens/Verify';
import ForgotPassword from './Screens/ForgotPassword';
import ResetPassword from './Screens/ResetPassword';
import DisplayTable from './Screens/DisplayTable';
import EditTable from './Screens/EditTable';
import Home from './Screens/Home';
import Graph from './Screens/Graph';

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/edit/:id" element={<EditTable />} />
                    <Route exact path="/display" element={<DisplayTable />} />
                    <Route exact path="/accountVerified" element={<AccountVerified />} />
                    <Route exact path="/passUpdated" element={<PasswordUpdated />} />
                    <Route exact path="/graphPage" element={<Graph />} />
                    <Route exact path="/forgotPass" element={<ForgotPassword />} />
                    <Route exact path="/verify/:email" element={<Verify />} />
                    <Route exact path="/resetPass/:otp" element={<ResetPassword />} />
                    <Route exact path="/home" element={<Home />} />
                </Routes>
            </Router>
            {/* <Graph /> */}
            {/* <EditTable /> */}
            {/* <Signup /> */}
            {/* <AccountCreated /> */}
            {/* <AccountVerified /> */}
            {/* <Verify /> */}
            {/* <ForgotPassword /> */}
            {/*    */}
            {/* <ResetPassword /> */}
            {/* <DisplayTable /> */}
            {/* <TempDisplayTable /> */}
        </div>
    )
}

export default App