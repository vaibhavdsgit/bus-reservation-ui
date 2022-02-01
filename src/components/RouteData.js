import axios from "axios";
import { useEffect, useState } from "react";
import Route from "./models/Route";

const RouteData = () => {

    // state - for the component 
    const [route, setRoute] = useState(new Route());
    const [newRouteObj, setNewRouteObj] = useState(new Route());
    const [newRouteObj1, setNewRouteObj1] = useState(new Route());
    const [displayRouteObj, setDisplayRouteObj] = useState(new Route());
    const [routeList, setRouteList] = useState([]);

    const handleRoute = (e) => {
        setRoute({
            ...route,
            [e.target.name]: e.target.value
        });
    }

    const handleAddRoute = (e) => {
        console.log(e.target.value);
        setNewRouteObj({
            ...newRouteObj,
            [e.target.name]: e.target.value
        });
    }

    const handleDeleteRoute = (e1) => {
        console.log(e1.target.value);
        setNewRouteObj1({
            ...newRouteObj1,
            [e1.target.name]: e1.target.value
        });
    }

    const submitGetAllRoute = () => {
        axios.get(`http://localhost:8082/viewRoute`)
            .then((response) => {
                setRouteList(response.data);
                console.log(response.data);
                console.log(routeList);
            })
            .catch(() => {
                alert('Something is wrong!');
            });
    }

    const submitGetRouteById = (evt) => {
        console.log(route.routeId);
        axios.get(`http://localhost:8082/viewRoute/${route.routeId}`)
            .then((response) => {
                setRoute(response.data);
            })
            .catch(() => {
                setRoute({});
                alert("Route not found.");
            });
        // evt.preventDefault();
    }

    const submitDeleteRouteById = (evt) => {
        console.log(route.routeId);
        axios.get(`http://localhost:8082/deleteRoute/${route.routeId}`)
            .then((response) => {
                setRoute(response.data);
            })
            .catch(() => {
                setRoute({});
                alert("Route not found.");
            });
        // evt.preventDefault();
    }

    const submitAddRoute = (evt) => {
        evt.preventDefault();
        axios.post(`http://localhost:8082/addRoute`, newRouteObj)
            .then((response) => {
                setDisplayRouteObj(response.data);
                alert('Route added successfully.');
                setNewRouteObj({ routeFrom: '', routeTo: '', distance: ''})
            })
            .catch(() => {
                alert("Route could not be added.");
            });
    }

    return (
        <div className="container">
            <p className="display-4 text-primary mt-3">Route Data</p>
            <p>Search Route By Id</p>
            <input type="number" id="routeId" name="routeId" value={route.routeId} onChange={handleRoute} placeholder="Enter route Id to search" />
            <input type="submit" name="Find Route" onClick={submitGetRouteById} />
            <p className="text-primary">{route.routeId} {route.routeFrom} {route.routeTo} {route.distance} </p>
            <p>----------------</p>
            <div>
                <p>Add New Route</p>
                {/* <form onSubmit={submitAddRoute}> */}
                <div id="addNewRouteDiv">
                    <input
                        type="text"
                        id="routeFrom"
                        name="routeFrom"
                        value={newRouteObj.routeFrom}
                        onChange={handleAddRoute}
                        placeholder="Enter Route From" />
                    <input
                        type="text"
                        id="routeTo"
                        name="routeTo"
                        value={newRouteObj.routeTo}
                        onChange={handleAddRoute}
                        placeholder="Enter Route To" />
                    <input
                        type="number"
                        id="distance"
                        name="distance"
                        value={newRouteObj.distance}
                        onChange={handleAddRoute}
                        placeholder="Enter Distance" />
                    <input
                        type="submit"
                        // type="button"
                        value="Add Route"
                        onClick={submitAddRoute}
                    />
                </div>
                {/* </form> */}
                <p>New Route Data: {displayRouteObj.routeId} {displayRouteObj.routeFrom} {displayRouteObj.routeTo} {displayRouteObj.distance}</p>
            </div>
            <p>----------------</p>
            <p>Delete Route By Id</p>
            <input type="number" id="routeId" name="routeId" value={route.routeId} onChange={handleDeleteRoute} placeholder="Enter route Id To Delete" />
            <input type="submit" name="Find Route" onClick={submitDeleteRouteById} />
            <p className="text-primary">{route.routeId} {route.routeFrom} {route.routeTo} {route.distance} </p>
            
            <p>----------------</p>
            <div>
                <div>
                    <p>Get All Routes</p>
                    <input
                        className="btn btn-primary mb-3"
                        type="button"
                        value="Search All Routes"
                        onClick={submitGetAllRoute}
                    />
                </div>
                <div className="col-4">
                    <div className="border border-light">
                    </div>
                </div>
                <p>----------------</p>
            </div>
            {/* Google Material UI Table  */}
            <div className="container">
                <div class="mdc-data-table">
                    <div class="mdc-data-table__table-container">
                        <table class="mdc-data-table__table">
                            <thead>
                                <tr class="mdc-data-table__header-row">
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">routeId</th>
                                    <th class="mdc-data-table_header-cell mdc-data-table_header-cell--numeric" role="columnheader" scope="col">routeFrom</th>
                                    <th class="mdc-data-table_header-cell mdc-data-table_header-cell--numeric" role="columnheader" scope="col">routeTo</th>
                                </tr>
                            </thead>
                            <tbody class="mdc-data-table__content">
                                {routeList.map((route, k) => {
                                    return (
                                        <tr k={k} className="mdc-data-table__row" scope="row">
                                            <td className="mdc-data-table__cell">{route.routeId}</td>
                                            <td className="mdc-data-table__cell">{route.routeFrom}</td>
                                            <td className="mdc-data-table__cell">{route.routeTo}</td></tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RouteData;