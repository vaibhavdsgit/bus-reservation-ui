import { addBusService, updateBusService, deleteBusService, viewBusService, viewBusByTypeService, viewAllBusService} from "./services/BusService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {addBus,  updateBus, deleteBus, viewBus, viewBusByType, viewAllBus} from '../redux/BusSlice';

const BusData = () => {

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
        console.log('handleBus');
        setBusType(b2.target.value);
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

    return(
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Bus Component</h1>
            <p>Fetch data from backend, store it in redux store and get it to component</p>

            <div>
                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find all buses</p>
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