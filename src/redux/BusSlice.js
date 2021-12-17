import { createSlice } from "@reduxjs/toolkit";
import Bus from "../components/models/Bus";

const BusSlice = createSlice({
    name: 'bus',
    initialState: {
        busState: new Bus(),
        busList: []
    },

    reducers: {
        addBus: (state, action) => {
            console.log('BusSlice reducers addBus');
            state.empState = action.payload;
        },
        
        updateBus: (state, action) => {
            console.log('BusSlice reducers updateBus');
            state.empState = action.payload;
        },

        deleteBus: (state, action) => {
            console.log('BusSlice reducers deleteBus');
            state.empState = action.payload;
        },

        viewBus: (state, action) => {
            console.log('BusSlice reducers viewBus');
            state.empState = action.payload;
        },

        viewBusByType: (state, action) => {
            console.log('BusSlice reducers viewBusByType');
            state.empState = action.payload;
        },

        viewAllBus: (state, action) => {
            console.log('BusSlice reducers viewAllBus');
            state.empState = action.payload;
        },
    }
});

export const{addBus, updateBus, deleteBus, viewBus, viewBusByType, viewAllBus} = BusSlice.actions;

export default BusSlice.reducer;