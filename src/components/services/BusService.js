import axios from "axios";

const addBusService = (bus) => {
    console.log(`addBusService`);
    return axios.post(`/addBus`,bus);
}
const updateBusService = (bus) => {
    console.log(`updateBusService`);
    return axios.post(`/updateBus`,bus);
}
const deleteBusService = (busId) => {
    console.log(`deleteBusService`);
    return axios.post(`/deleteBus/${busId}`);
}
const viewBusService = (busId) => {
    console.log(`viewBusService`);
    return axios.post(`/viewBus/${busId}`);
}
const viewBusByTypeService = (busType) => {
    console.log(`updateBusService`);
    return axios.post(`/viewBusByType/${busType}`);
}
const viewAllBusService = () => {
    console.log(`addBusService`);
    return axios.post(`/viewAllBus`);
}

export {addBusService, updateBusService, deleteBusService, viewBusService, viewBusByTypeService, viewAllBusService};
