import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Header = () => {

    let [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
    }, []);

    // let [adminLoginStatus, setAdminLoginStatus] = useState(false);
    // console.log(sessionStorage.getItem('isAdminLoggedIn'));
    // useEffect(() => {
    //     setAdminLoginStatus(sessionStorage.getItem('isAdminLoggedIn'));
    //     console.log(sessionStorage.getItem('isAdminLoggedIn'));
    // }, []);

    if (loginStatus) {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-danger text-white">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                        <img src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-bus-urban-infrastructure-inipagistudio-mixed-inipagistudio.png"/>
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                            
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bus" >BusData</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/reservation" >ReservationData</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/route" >Route</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/feedback" >Feedback</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" >Help</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" >Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
    
    else {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-danger text-white">
                    <div class="container">
                        <Link className="navbar-brand" to="/">
                        <img src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-bus-urban-infrastructure-inipagistudio-mixed-inipagistudio.png"/>
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">

                                <li className="nav-item">
                                <img src="https://img.icons8.com/external-glyph-geotatah/64/000000/external-register-training-management-system-glyph-glyph-geotatah.png"/>
                                    <Link className="nav-link" to="/addUser" >AddUser</Link>
                                </li>
                                <li className="nav-item">
                                <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-login-web-security-flatart-icons-solid-flatarticons.png"/>
                                    <Link className="nav-link" to="/login" >Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}

export default Header;





// import { Link } from "react-router-dom";

// const Header = () => {

//     return (
//         <header class="header sticky-top">
//             <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
//                 <div class="container">
//                     <Link className="navbar-brand" to="/">
//                         <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
//                             height="24px" alt="Capgemini" />
//                     </Link>
//                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarResponsive">
//                         <ul class="navbar-nav ml-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/hello" >Hello</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/emp" >Emp</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/spring" >Spring</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/register" >Register</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/login" >Login</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/logout" >Logout</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }

// export default Header;




// types of components in react 
// 1. function components 
// 2. class components 


// function component 
// const Header = () => {

//     return (
//         <div className="display-4">
//             <p>Header Component</p>
//         </div>
//     );
// }
// export default Header;

// class component  
// import React from "react";
// class Header extends React.Component {

//     // constructor() { super(); }

//     render = () => {
//         return (
//             <div className="display-4" >
//                 <p>Header Component</p>
//             </div>
//         )
//     }
// }
// export default Header;
