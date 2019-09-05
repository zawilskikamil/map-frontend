import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import PlaceListPage from "./pages/PlaceListPage";
import PlaceDetailPage from "./pages/PlaceDetailPage";
import {HOME, MAP, PLACES, PLACES_DETAILS} from "./common/RoutUrls";

const NoMatchRoute = () => <div>404 Page</div>;

const Main = () => {
    return (
        <Router>
            <div>
                <div className="m-4">
                    <h1>
                        <Link to={HOME}>Home</Link>
                    </h1>
                    <h1>
                        <Link to={PLACES}>List</Link>
                    </h1>
                    <h1>
                        <Link to={MAP}>Map</Link>
                    </h1>
                </div>
            </div>
            <Switch>
                <Route path={HOME} exact component={HomePage}/>
                <Route path={PLACES} exact component={PlaceListPage}/>
                <Route path={MAP} exact component={MapPage}/>
                <Route path={PLACES_DETAILS} exact component={PlaceDetailPage}/>
                <Route component={NoMatchRoute}/>
            </Switch>
        </Router>
    );
};

export default Main;