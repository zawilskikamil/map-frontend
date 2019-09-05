import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import PlaceListPage from "./pages/PlaceListPage";
import PlaceDetailPage from "./pages/PlaceDetailPage";
import {HOME, MAP, PLACES, PLACES_DETAILS} from "./common/RoutUrls";
import CssBaseline from "@material-ui/core/CssBaseline";
import {MainMenu} from "./ui/MainMenu";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";


const NoMatchRoute = () => <div>404 Page</div>;

const useStyles = makeStyles(() => ({
    mainContent: {
        paddingTop: 80,
    },
}));

const Main = () => {
    const classes = useStyles();
    return (
        <Router>
            <CssBaseline/>
            <MainMenu/>
            <Container className={classes.mainContent}>
                <Switch>
                    <Route path={HOME} exact component={HomePage}/>
                    <Route path={PLACES} exact component={PlaceListPage}/>
                    <Route path={MAP} exact component={MapPage}/>
                    <Route path={PLACES_DETAILS} exact component={PlaceDetailPage}/>
                    <Route component={NoMatchRoute}/>
                </Switch>
            </Container>
        </Router>
    );
};

export default Main;