import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import AppUser from './models/AppUser';
import User from './models/User';
import Admin from './models/Admin';

const Login = () => {

    // const history = useHistory();

    const [user, setUser] = useState(new User());
    const [credentials, setCredentials] = useState('');

    const handleUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const submitUser = (event) => {
        axios.post(`http://localhost:8082/loginUser`, user)
            .then((response) => {
                console.log(response.data);
                sessionStorage.setItem('isUserLoggedIn', true);
                alert('Success');
                window.location.assign('/home');
                // history.push('/home');
            }).catch((error) => {
                sessionStorage.setItem('isUserLoggedIn', false);
                sessionStorage.clear();
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }
    return (
        <div className="container"
        style={{
            backgroundImage: `url("https://ideausher.com/wp-content/uploads/2021/03/Instagram-Post-%E2%80%93-2-1.png")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            
        }}>
            
            <div className="col-4 mt-3" >
            <br/>
                <h1 className="display-4 text-danger">Login</h1>
                <form className="form form-group form-dark ">
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={user.userName}
                            onChange={handleUser}
                            autoFocus
                            required
                        />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={user.password}
                            onChange={handleUser}
                            required
                        />
                        
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-danger mb-3"
                            value="Login As User"
                            onClick={submitUser}
                        />
                        <Link to="/adminLogin" className="btn btn-danger col-12">Login as Admin</Link>
                    </div>
                </form>
                <p className="text-danger">{credentials}</p>
                
                <Link to="/register" className="btn btn-danger col-12">Not yet registered? Register</Link>
                
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
            </div>
        </div >
    )
}
export default Login;


