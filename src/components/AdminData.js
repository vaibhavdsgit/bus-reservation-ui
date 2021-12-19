import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

const AdminData = (props) => {

    const adminDataFromStore = useSelector((state) => state.admin.adminState);

    return (
        <div>
            <h1 className="display-4 text-primary mt-3" >Admin Data Component</h1>
            <p>Admin data component</p>
            <p>Data from store: {adminDataFromStore.aName}</p>
        </div>
    );
}
export default AdminData;