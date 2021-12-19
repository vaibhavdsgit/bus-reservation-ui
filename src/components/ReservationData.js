import { viewReservationService, viewAllReservationService, addReservationService, updateReservationService, deleteReservationService } from "./services/ReservationService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {  viewReservation,deleteReservation,updateReservation,addReservation,viewAllReservation} from '../redux/ReservationSlice';

import { Store } from "redux";
import { Provider } from "react";

const ReservationData = () => {

    const [reservationId, setReservationId] = useState('');
    const dispatch = useDispatch();
    const reservationDataFromStore = useSelector((state) => state.reservation.reservationState);
    const reservationList = useSelector((state) => state.reservation.reservationList);

    // const handleReservation = (e) => {
    //     console.log('handleEmp');
    //     setRid(e.target.value);
    // }

    // const submitViewReservation = (evt) => {
    //     evt.preventDefault();
    //     console.log('submitGetEmpById');
    //     viewReservationService(reservationId)
    //         .then((response) => { dispatch(getReservationById(response.data)) })
    //         .catch(() => {
    //             alert(`Reservation with ${eid} not found.`);
    //         });
    //     console.log(Object.keys(reservationList));
    //     setRid('');
    // }

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
            

            {/* <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find reservation by id</p>
                <form className="form form-group form-primary" onSubmit={submitViewReservation}>
                    <input className="form-control mt-3" type="number" id="reservationId" name="reservationId" value={reservationId} onChange={handleReservation} placeholder="Enter reservationid to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Reservation" />
                </form>
                <p>Data from store: {reservationDataFromStore.reservationId} {reservationDataFromStore.reservationStatus} {reservationDataFromStore.reservationDate}{reservationDataFromStore.reservationTime} {reservationDataFromStore.source} {reservationDataFromStore.destination}</p>
            </div> */}

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
    );
}
export default ReservationData;