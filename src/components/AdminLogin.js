import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import Admin from './models/Admin';

const AdminLogin = () => {
    const [admin, setAdmin] = useState(new Admin());
    const [credentials, setCredentials] = useState('');

    const handleAdmin = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setAdmin({
            ...admin,
            [event.target.name]: event.target.value
        });
    };

    const submitAdmin = (event) => {
        axios.post(`http://localhost:8082/loginAdmin`, admin)
            .then((response) => {
                console.log(response.data);
                alert('Success');
                sessionStorage.setItem('isAdminLoggedIn', true);
                window.location.assign('/home');
                // history.push('/home');
            }).catch((error) => {
                sessionStorage.clear();
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }

    return (
        <div className="container">
            <div className="col-4 mt-3" >
                <h1 className="display-4 text-primary">Admin Login</h1>
                <form className="form form-group form-dark " onSubmit={submitAdmin}>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            name="adminUsername"
                            id="adminUsername"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={admin.adminUsername}
                            onChange={handleAdmin}
                            autoFocus
                            required
                        />
                        <input
                            type="password"
                            className="form-control"
                            name="adminPassword"
                            id="adminPassword"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={admin.adminPassword}
                            onChange={handleAdmin}
                            required
                        />
                        {/* <div class="form-group">
                            <select class="form-control mb-3" name="role" id="role" onChange={handleAdmin}>
                                <option value="Role">Select a role</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="USER">USER</option>
                               
                            </select>
                        </div> */}
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Login"
                            onClick={submitAdmin}
                        />
                    </div>
                </form>
                <p className="text-danger">{credentials}</p>
                <Link to="/register" className="btn btn-primary col-12">Not yet registered? Register</Link>
            </div>
        </div >
    )
}
export default AdminLogin;