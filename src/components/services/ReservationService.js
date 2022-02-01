import axios from "axios";


const viewReservationService = (reservationId) => {
    console.log(`getReservationByIdService`);
    return axios.get(`/viewReservation/${reservationId}`);
};

const viewAllReservationService = () => {
    console.log(`getReservationAllService`);
    return axios.get(`/viewAllReservation`);
};

const addReservationService = (reservation) => {
  console.log(`addReservation`);
  return axios.post(`/addReservation`, reservation);
};

const updateReservationService = (reservation) => {
  console.log(`updateReservationService`);
  return axios.post(`/updateReservation`, reservation);
};

const deleteReservationService = (reservationId) => {
  console.log(`deleteReservationService`);
  return axios.post(`/deleteReservation/${reservationId}`);
};
export {
  viewReservationService ,
  viewAllReservationService,
  addReservationService,
  updateReservationService,
  deleteReservationService

};