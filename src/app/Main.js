import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import HomePage from "./pages/HomePage";
import PlaceListPage from "./pages/PlaceListPage";
import PlaceDetailPage from "./pages/PlaceDetailPage";

const NoMatchRoute = () => <div>404 Page</div>;

const Main = () => {
    return (
        <Router>
            <div>
                <div className="m-4">
                    <h1>
                        <Link to={`/`}>Home</Link>
                    </h1>
                    <h1>
                        <Link to={`/list/`}>List</Link>
                    </h1>
                    <h1>
                        <Link to={`/map`}>Map</Link>
                    </h1>
                </div>
            </div>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/list/" exact component={PlaceListPage}/>
                <Route path="/place/:placeId" exact component={PlaceDetailPage}/>
                <Route component={NoMatchRoute}/>
            </Switch>
        </Router>
    );
};

export default Main;