import { createSlice } from "@reduxjs/toolkit";
import Admin from "../components/models/Admin";

const AdminSlice = createSlice({

    name: 'admin',

    initialState: {
        adminState: new Admin(),
        adminList: []
    },

    reducers: {
        getAdminById: (state, action) => {
            console.log('AdminSlice reducers getAdminById');
            state.adminState = action.payload;
        }
        
    }
});

export const { getAdminById} = AdminSlice.actions;

export default AdminSlice.reducer;