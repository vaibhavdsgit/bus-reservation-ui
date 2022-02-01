import { addBusService, updateBusService, deleteBusService, viewBusService, viewBusByTypeService, viewAllBusService} from "./services/BusService";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {addBus,  updateBus, deleteBus, viewBus, viewBusByType, viewAllBus} from '../redux/BusSlice';
import Bus from "./models/Bus";

const BusData = () => {

    let [adminLoginStatus, setAdminLoginStatus] = useState(false);
    console.log(sessionStorage.getItem('isAdminLoggedIn'));
    useEffect(() => {
        setAdminLoginStatus(sessionStorage.getItem('isAdminLoggedIn'));
        console.log(sessionStorage.getItem('isAdminLoggedIn'));
    }, []);

    const [bus, setBus] = useState(new Bus())
    const [busId, setBusId] = useState('');
    const [busType, setBusType] = useState('');
    const dispatch = useDispatch();
    const busDataFromStore = useSelector((state) => state.bus.busState);
    const busList = useSelector((state) => state.bus.busList);

    const handleBus1 = (b1) => {
        console.log('handleBus');
        setBusId(b1.target.value);
    }

    const handleBus2 = (b2) => {
        console.log('handleBus2');
        setBusType(b2.target.value);
    }

    const handleBus3 = (b3) => {
        console.log('handleBus3');
        setBusId(b3.target.value);
    }

    const handleAddBus = (b) => {
        setBus({
            ...bus,
            [b.target.name]: b.target.value
        });
    }

    const submitAddBus = (evt) => {
        evt.preventDefault();
        addBusService(bus)
        // axios.post(`http://localhost:8082/emp/addemp`, newEmpObj)
            .then((response) => {
                // setDisplayEmpObj(response.data);
                // alert('Employee added successfully.');
                // setNewEmpObj({ firstName: '', salary: '' })
                dispatch(addBus(response.data));
                alert("Bus added successfully.");
            })
            .catch(() => {
                alert("Bus could not be added.");
            });
    }

    const submitViewAllBus = (evt) => {
        evt.preventDefault();
        console.log('submitViewAllBus');
        viewAllBusService()
            .then((response) => {
                dispatch(viewAllBus(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    const submitViewBus = (evt) => {
        evt.preventDefault();
        console.log('submitViewAllBus');
        viewBusService(busId)
            .then((response) => {
                dispatch(viewBus(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    const submitDeleteBus = (evt) => {
        evt.preventDefault();
        console.log('submitDeleteAllBus');
        deleteBusService(busId)
            .then((response) => {
                dispatch(deleteBus(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    const submitViewBusByType = (evt) => {
        evt.preventDefault();
        console.log('submitViewBusByType');
        viewBusByTypeService(busType)
            .then((response) => {
                dispatch(viewBusByType(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    
        return(
            <div className="container">
                <h1 className="display-4 text-primary mt-3 mb-3" >Bus Component</h1>
                <p>Fetch data from backend, store it in redux store and get it to component</p>

                <div className="col-12 border border-light shadow p-3 mb-5 bg-white" id="addNewBusDiv">
                    <h5>Add New Bus</h5>
                    <form className="form form-group form-primary" onSubmit={submitAddBus}>
                        <input className="form-control mt-3"
                            type="number"
                            id="busId"
                            name="busId"
                            value={bus.busId}
                            onChange={handleAddBus}
                            placeholder="Enter bus no" />
                        <input className="form-control mt-3"
                            type="text"
                            id="busName"
                            name="busName"
                            value={bus.busName}
                            onChange={handleAddBus}
                            placeholder="Enter Bus Name" />
                        <input className="form-control mt-3"
                            type="text"
                            id="driverName"
                            name="driverName"
                            value={bus.driverName}
                            onChange={handleAddBus}
                            placeholder="Enter Driver Name" />
                        <input className="form-control mt-3"
                            type="text"
                            id="busType"
                            name="busType"
                            value={bus.busType}
                            onChange={handleAddBus}
                            placeholder="Enter Bus Type" />
                        <input className="form-control mt-3"
                            type="text"
                            id="routeFrom"
                            name="routeFrom"
                            value={bus.routeFrom}
                            onChange={handleAddBus}
                            placeholder="Enter Route From" />
                        <input className="form-control mt-3"
                            type="text"
                            id="routeTo"
                            name="routeTo"
                            value={bus.routeTo}
                            onChange={handleAddBus}
                            placeholder="Enter Route To" />
                        <input className="form-control mt-3"
                            type="text"
                            id="arrivalTime"
                            name="arrivalTime"
                            value={bus.arrivalTime}
                            onChange={handleAddBus}
                            placeholder="Enter arrivalTime" />
                        <input className="form-control mt-3"
                            type="text"
                            id="departureTime"
                            name="departureTime"
                            value={bus.departureTime}
                            onChange={handleAddBus}
                            placeholder="Enter departureTime" />
                        <input className="form-control mt-3"
                            type="number"
                            id="seats"
                            name="seats"
                            value={bus.seats}
                            onChange={handleAddBus}
                            placeholder="Enter total seats" />
                        <input className="form-control mt-3"
                            type="number"
                            id="seatsAvailable"
                            name="seatsAvailable"
                            value={bus.seatsAvailable}
                            onChange={handleAddBus}
                            placeholder="Enter total available" />
                        <input className="form-control mt-3 btn btn-primary"
                            type="submit"
                            // type="button"
                            value="Add Bus"
                            onClick={submitAddBus}
                        />
                    </form>
                </div>
    
                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                    <h5>Find bus by id</h5>
                    <form className="form form-group form-primary" onSubmit={submitViewBus}>
                        <input className="form-control mt-3" type="number" id="busId" name="busId" value={busId} onChange={handleBus1} placeholder="Enter busId to search" autoFocus required />
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Bus" />
                    </form>
                    <p>Data from store: {busDataFromStore.busId} {busDataFromStore.busName} {busDataFromStore.driverName} {busDataFromStore.busType} {busDataFromStore.routeFrom} {busDataFromStore.routeTo} {busDataFromStore.arrivalTime} {busDataFromStore.departureTime} {busDataFromStore.seats} {busDataFromStore.seatsAvailable}</p>
                </div>

                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                    <h5>Delete bus by id</h5>
                    <form className="form form-group form-primary" onSubmit={submitDeleteBus}>
                        <input className="form-control mt-3" type="number" id="busId" name="busId" value={busId} onChange={handleBus3} placeholder="Enter busId to delete" autoFocus required />
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Bus" />
                    </form>
                    <p>Data from store: {busDataFromStore.busId} {busDataFromStore.busName} {busDataFromStore.driverName} {busDataFromStore.busType} {busDataFromStore.routeFrom} {busDataFromStore.routeTo} {busDataFromStore.arrivalTime} {busDataFromStore.departureTime} {busDataFromStore.seats} {busDataFromStore.seatsAvailable}</p>
                </div>

                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                    <h5>Find Bus by type</h5>
                    <form className="form form-group form-primary" onSubmit={submitViewBusByType}>
                        <input className="form-control mt-3" type="text" id="busType" name="busType" value={busType} onChange={handleBus2} placeholder="Enter busType to search" autoFocus required />
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Bus" />
                    </form>
                    <p>Data from store: {busDataFromStore.busId} {busDataFromStore.busName} {busDataFromStore.driverName} {busDataFromStore.busType} {busDataFromStore.routeFrom} {busDataFromStore.routeTo} {busDataFromStore.arrivalTime} {busDataFromStore.departureTime} {busDataFromStore.seats} {busDataFromStore.seatsAvailable}</p>
                </div>

                <div>
                    <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                        <h5>Find all buses</h5>
                        <div>
                            <form className="form form-group form-primary">
                                <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitViewAllBus} value="Find All Buses" />
                            </form>
                        </div >
                        <table className="table table-light table-striped ">
                            <thead>
                                <tr>
                                    <th>BusId</th>
                                    <th>BusName</th>
                                    <th>Bus type</th>
                                    <th>Route from</th>
                                    <th>Route to</th>
                                    <th>Arrival time</th>
                                    <th>Departure time</th>
                                    <th>Seats</th>
                                    <th>Seats Available</th>
                                </tr>
                            </thead>
                            <tbody>
                                {busList.map((bus, k) => {
                                    return (
                                        <tr k={k}> <td>{bus.busId}</td>  <td>{bus.busName}</td> <td>{bus.busType}</td> <td>{bus.routeFrom}</td> <td>{bus.routeTo}</td> <td>{bus.arrivalTime}</td> <td>{bus.departureTime}</td> <td>{bus.seats}</td> <td>{bus.seatsAvailable}</td></tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    

}
export default BusData;