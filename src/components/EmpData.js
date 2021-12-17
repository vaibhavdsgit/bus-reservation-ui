import { getEmpByIdService, getAllEmpsService } from "./services/EmpService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getEmpById, getAllEmps } from '../redux/EmpSlice';

import { Store } from "redux";
import { Provider } from "react";

const EmpData = () => {

    const [eid, setEid] = useState('');
    const dispatch = useDispatch();
    const empDataFromStore = useSelector((state) => state.emp.empState);
    const empList = useSelector((state) => state.emp.empList);

    const handleEmp = (e) => {
        console.log('handleEmp');
        setEid(e.target.value);
    }

    const submitGetEmpById = (evt) => {
        evt.preventDefault();
        console.log('submitGetEmpById');
        getEmpByIdService(eid)
            .then((response) => { dispatch(getEmpById(response.data)) })
            .catch(() => {
                alert(`Employee with ${eid} not found.`);
            });
        console.log(Object.keys(empList));
        setEid('');
    }

    const submitGetAllEmps = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllEmps');
        getAllEmpsService()
            .then((response) => {
                dispatch(getAllEmps(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Employee Component</h1>
            <p>Fetch data from backend, store it in redux store and get it to component</p>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find employee by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetEmpById}>
                    <input className="form-control mt-3" type="number" id="eid" name="eid" value={eid} onChange={handleEmp} placeholder="Enter eid to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Employee" />
                </form>
                <p>Data from store: {empDataFromStore.eid} {empDataFromStore.firstName} {empDataFromStore.salary}</p>
            </div>

            <div>
                <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find all employees</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllEmps} value="Find All Employees" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>Eid</th>
                                <th>Name</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empList.map((emp, k) => {
                                return (
                                    <tr k={k}> <td>{emp.eid}</td>  <td>{emp.firstName}</td> <td>{emp.salary}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Some other functionality</p>
            </div>



        </div>
    );
}
export default EmpData;