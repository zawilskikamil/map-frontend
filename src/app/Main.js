import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import PlaceListComponent from "./components/PlaceList";
import PlaceDetailPage from "./components/PlaceDetailPage";

const NoMatchRoute = () => <div>404 Page</div>;

function Main() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={PlaceListComponent}/>
                <Route path="/place/:placeId" exact component={PlaceDetailPage}/>

                <Route component={NoMatchRoute}/>
            </Switch>
        </Router>
    );
}

export default Main;