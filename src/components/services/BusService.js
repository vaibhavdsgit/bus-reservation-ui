import axios from "axios";

const addBus = (bus) => {
    console.log(`addBusService`);
    return axios.post(`/addBus`,bus);
}
const addBus = (bus) => {
    console.log(`addBusService`);
    return axios.post(`/addBus`,bus);
}

export {addBus}