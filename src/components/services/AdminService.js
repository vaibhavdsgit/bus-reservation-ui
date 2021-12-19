import axios from 'axios';

const addAdminService = (admin) => {
    console.log(`getAdminByIdService`);
    return axios.post(`/addAdmin`, admin);
}

export {addAdminService};