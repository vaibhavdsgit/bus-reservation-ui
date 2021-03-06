import { viewReservationService, viewAllReservationService, addReservationService, updateReservationService, deleteReservationService } from "./services/ReservationService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {  viewReservation,deleteReservation,updateReservation,addReservation,viewAllReservation} from '../redux/ReservationSlice';
import Reservation from './models/Reservation';
import axios from "axios";

const ReservationData = () => {


    const [newReservationObj, setNewReservationObj] = useState(new Reservation());
    const [displayReservationObj, setDisplayReservationObj] = useState(new Reservation());
    const [reservationId, setReservationId] = useState('');
    const dispatch = useDispatch();
    const reservationDataFromStore = useSelector((state) => state.reservation.reservationState);
    const reservationList = useSelector((state) => state.reservation.reservationList);

    const handleReservation1 = (e1) => {
        console.log('handleReservation1');
        setReservationId(e1.target.value);
    }

    const handleAddReservation = (e) => {
        console.log(e.target.value);
        setNewReservationObj({
            ...newReservationObj,
            [e.target.name]: e.target.value,
        });
    }

    const handleReservation2 = (e2) => {
        console.log('handleReservation2');
        setReservationId(e2.target.value);
    }

    const submitAddReservation = (evt) => {
        evt.preventDefault();
        console.log('addReservations');
        axios.post(`/addReservation`, newReservationObj)
            .then((response) => {
                setDisplayReservationObj(response.data);
                alert('Reservation added successfully.');
                setNewReservationObj({ reservationId: '', reservationStatus: '', reservationType: '', reservationDate: '', reservationTime: '', source: '', destination: '' })

            })
            .catch(() => {
                alert("Reservation could not be added.");
            });
    }

    const submitViewReservation = (evt) => {
        evt.preventDefault();
        console.log('submitViewReservation');
        viewReservationService(reservationId)
            .then((response) => { dispatch(viewReservation(response.data)) })
            .catch(() => {
                alert(`Reservation with ${reservationId} not found.`);
            });
        // console.log(Object.keys(reservationList));
        setReservationId('');
    }

    const submitDeleteReservation = (evt) => {
        evt.preventDefault();
        console.log('submitDeleteReservation');
        deleteReservationService(reservationId)
            .then((response) => { dispatch(deleteReservation(response.data)) })
            .catch(() => {
                alert(`Reservation with ${reservationId} not found.`);
            });
        // console.log(Object.keys(reservationList));
        setReservationId('');
    }

    const submitViewAllReservation = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllReservation');
        viewAllReservationService()
            .then((response) => {
                dispatch(viewAllReservation(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Ticket Booking...</h1>
            
            <div className="col-10 border border-light shadow p-3 mb-5 bg">

            <h2 className="display-5 text mt-3 mb-3">Add New Reservation</h2>
            <div id="addNewReservationDiv">
                <input className="form-control mt-3"
                    type="text"
                    id="reservationStatus"
                    name="reservationStatus"
                    value={newReservationObj.reservationStatus}
                    onChange={handleAddReservation}
                    placeholder="Enter reservation status"
                   />
                <input className="form-control mt-3"
                    type="text"
                    id="reservationType"
                    name="reservationType"
                    value={newReservationObj.reservationType}
                    onChange={handleAddReservation}
                    placeholder="Enter reservation type"
                   />
                <input className="form-control mt-3"
                    type="source"
                    id="source"
                    name="source"
                    value={newReservationObj.source}
                    onChange={handleAddReservation}
                    placeholder="Enter reservation source"
                    />
                <input className="form-control mt-3"
                    type="destination"
                    id="destination"
                    name="destination"
                    value={newReservationObj.destination}
                    onChange={handleAddReservation}
                    placeholder="Enter reservation destination"
                    />
                
                <input className="mt-3 btn btn-primary btn-block"
                    type="submit"
                    value="Add Reservation"
                    onClick={submitAddReservation}
                />
            </div>
            <br />

            <div className="col-10 border border-light shadow p-3 mb-5 bg-white">
                <p>Find reservation by id</p>
                <form className="form form-group form-primary" onSubmit={submitViewReservation}>
                    <input className="form-control mt-3" type="number" id="reservationId" name="reservationId" value={reservationId} onChange={handleReservation1} placeholder="Enter reservationid to search" autoFocus  />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Reservation" />
                </form>
                <p>Data from store: {reservationDataFromStore.reservationId} {reservationDataFromStore.reservationStatus} {reservationDataFromStore.reservationDate}{reservationDataFromStore.reservationTime} {reservationDataFromStore.source} {reservationDataFromStore.destination}</p>
            </div>

            <div className="col-10 border border-light shadow p-3 mb-5 bg-white">
                <p>Delete reservation by id</p>
                <form className="form form-group form-primary" onSubmit={submitDeleteReservation}>
                    <input className="form-control mt-3" type="number" id="reservationId" name="reservationId" value={reservationId} onChange={handleReservation2} placeholder="Enter reservationid to delete" required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Reservation" />
                </form>
                <p>Data from store: {reservationDataFromStore.reservationId} {reservationDataFromStore.reservationStatus} {reservationDataFromStore.reservationDate}{reservationDataFromStore.reservationTime} {reservationDataFromStore.source} {reservationDataFromStore.destination}</p>
            </div>

            <div>
                <div className="col-8.5 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find all reservation</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitViewAllReservation} value="Find All reservation" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>reservationId</th>
                                <th>reservationStatus</th>
                                <th> reservationDate</th>
                                <th>reservationTime</th>
                                <th>source</th>
                                <th>destination</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservationList.map((reservation, k) => {
                                return (
                                    <tr k={k}> <td>{reservation.reservationId}</td>  <td>{reservation.reservationStatu}</td> <td>{reservation.reservationDate}</td>  <td>{reservation.reservationTime}</td>  <td>{reservation.source}</td>  <td>{reservation.destination}</td> </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    );
}
export default ReservationData;