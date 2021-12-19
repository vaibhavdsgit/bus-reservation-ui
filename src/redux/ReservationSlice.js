import { createSlice } from "@reduxjs/toolkit";
import Reservation from "../components/models/Reservation";

const ReservationSlice = createSlice({
    name: 'reservation',
    initialState: {
        reservationState: new Reservation(),
        reservationList: []
    },

    reducers: {
        addReservation: (state, action) => {
            console.log('ReservationSlice reducers addReservation');
            state.reservationState = action.payload;
        },
        
        updateReservation: (state, action) => {
            console.log('ReservationSlice reducers updateReservation');
            state.reservationState = action.payload;
        },

        deleteReservation: (state, action) => {
            console.log('ReservationSlice reducers deleteReservation');
            state.reservationState = action.payload;
        },

        viewAllReservation: (state, action) => {
            console.log('ReservationSlice reducers viewAllReservation');
            state.reservationList = action.payload;
        },
        viewReservation: (state, action) => {
            console.log('ReservationSlice reducers getById');
            state.reservationState = action.payload;
        },

        // getAllReservation: (state, action) => {
        //     console.log('ReservationSlice reducers getAllReservation');
        //     state.reservationState = action.payload;
        // },

        
    }
});
export const { viewReservation,deleteReservation,updateReservation,addReservation,viewAllReservation } = ReservationSlice.actions;

export default ReservationSlice.reducer;