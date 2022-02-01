import empReducer from './EmpSlice';
import depReducer from './DepSlice';
import busReducer from './BusSlice';
import reservationReducer from './ReservationSlice';
import adminReducer from './AdminSlice';
import feedbackReducer from './FeedbackSlice';
import userReducer from './UserSlice';
import routeReducer from './RouteSlice'

// steps - 
// 1. create store - only one 
// 2. provide the store to index.js 
// 3. create slices for components (one for each)
// 4. use slices in components 

import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from 'react';

// note - redux store can be created in multiple different ways. 
// latest way 

// step 1 for redux 
console.log('store');
const store = configureStore(
    {
        reducer: {
            emp: empReducer,
            dep: depReducer,
            bus: busReducer,
            reservation: reservationReducer,
            admin: adminReducer,
            feedback: feedbackReducer,
            user: userReducer,
            route: routeReducer
            // ,
            // anotherComponent: anotherComponentReducer
        }
    }
);

export default store;