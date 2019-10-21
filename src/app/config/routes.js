import React from 'react'
import HomePage from "../pages/About/HomePage";
import PlaceListPage from "../pages/List/PlaceListPage";
import MapPage from "../pages/Map/MapPage";
import PlaceDetailPage from "../pages/Details/PlaceDetailPage";
import {Route} from 'react-router-dom';

export const HOME = '/';
export const MAP = '/map/';
export const PLACES = '/places/';
export const PLACES_DETAILS = PLACES + ':placeId/';

const NoMatchRoute = () => <div>404 Page</div>;

const routes = [
    <Route path={HOME} exact component={HomePage}/>,
    <Route path={PLACES} exact component={PlaceListPage}/>,
    <Route path={MAP} exact component={MapPage}/>,
    <Route path={PLACES_DETAILS} exact component={PlaceDetailPage}/>,
    <Route component={NoMatchRoute}/>,
];

export default routes;