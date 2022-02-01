import { createSlice } from "@reduxjs/toolkit";
import Route from "../components/models/Route";

// step 3 for redux - create slices for each components 
const RouteSlice = createSlice({

    name: 'route',

    initialState: {
        RouteState: new Route(),
        RouteList: []
    },

    reducers: {

        getRouteById: (state, action) => {
            console.log('route slice reducer');
            state.RouteState = action.payload;
        },

        getAllRoute: (state, action) => {
            console.log('RouteSlice reducers getAllRoute');
            state.RouteList = action.payload;
        },
        deleteRouteById: (state, action) => {
            console.log('RouteSlice reducers deleteRouteById');
            state.RouteList = action.payload;
        },
        updateRoute: (state, action) => {
            console.log('RouteSlice reducers update RouteById');
            state.RouteList = action.payload;
        },
        insertRoute: (state, action) => {
            console.log('RouteSlice reducers addRouteById');
            state.RouteList = action.payload;
        },

        // more methods will be added 
    }
});

export const { getRouteById, getAllRoute, deleteRouteById, updateRoute, insertRoute } = RouteSlice.actions;

export default RouteSlice.reducer;