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
            state.busState = action.payload;
        },
        
        updateBus: (state, action) => {
            console.log('BusSlice reducers updateBus');
            state.busState = action.payload;
        },

        deleteBus: (state, action) => {
            console.log('BusSlice reducers deleteBus');
            state.busState = action.payload;
        },

        viewBus: (state, action) => {
            console.log('BusSlice reducers viewBus');
            state.busState = action.payload;
        },

        viewBusByType: (state, action) => {
            console.log('BusSlice reducers viewBusByType');
            state.busState = action.payload;
        },

        viewAllBus: (state, action) => {
            console.log('BusSlice reducers viewAllBus');
            state.busList = action.payload;
        }
    }
});

export const {addBus, updateBus, deleteBus, viewBus, viewBusByType, viewAllBus} = BusSlice.actions;

export default BusSlice.reducer;