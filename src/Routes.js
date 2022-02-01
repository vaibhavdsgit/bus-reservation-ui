
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SpringBootData from "./components/SpringBootData";
import React, { useEffect, useState } from 'react';
import EmpData from "./components/EmpData";
import Header from "./components/Header";
import Hello from './components/Hello';
import Home from './components/Home';
import Login from "./components/Login";
import Logout from './components/Logout';
import Page404 from './components/Page404';
import AddUser from "./components/AddUser";
import BusData from './components/BusData';
import ReservationData from './components/ReservationData';
import AdminLogin from './components/AdminLogin';
import FeedbackData from './components/FeedbackData';
import RouteData from './components/RouteData';


const Routes = () => {

    let [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
    }, []);

    if (loginStatus) {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                <Route path="/hello"> <Hello /> </Route>
                                <Route path="/emp"> <EmpData /> </Route>
                                <Route path="/bus"> <BusData /> </Route>
                                <Route path="/reservation"> <ReservationData /> </Route>
                                <Route path="/route"> <RouteData /> </Route>
                                <Route path="/spring"> <SpringBootData /> </Route>
                                <Route path="/logout"> <Logout /> </Route>
                                <Route path="/feedback"> <FeedbackData /> </Route>
                                {/* <Route path="/adminUser"> <AdminUser /> </Route> */}
                                <Route path="/*"> <Page404 /> </Route>
                                
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
    else {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                <Route path="/addUser"> <AddUser /> </Route>
                                <Route path="/login"> <Login /> </Route>
                                {/* <Route path="/adminUser"> <AdminUser /> </Route> */}
                                <Route path="/adminLogin"> <AdminLogin /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
        
                                
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
}


export default Routes;
