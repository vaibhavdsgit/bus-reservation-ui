import axios from 'axios';

const addRouteService = (route) => {
    console.log(`getRoutebyIdService`);
    return axios.post(`/addRoute`, route);
}

const updateRouteService = (route) => {
    console.log(`getRoutebyIdService`);
    return axios.post(`/updateRoute`, route);
}

const deleteRouteService = (routeId) => {
    console.log(`getRoutebyIdService`);
    return axios.post(`/deleteById${routeId}`);
}
const viewRouteByIdService = (routeId) => {
    console.log(`getRoutebyIdService`);
    return axios.get(`/getrouteById/${routeId}`);
}
const viewAllRouteService = () => {
    console.log(`getRoutebyIdService`);
    return axios.get(`/getAllRoute`);
}


export { addRouteService, updateRouteService, deleteRouteService,viewRouteByIdService, viewAllRouteService,};