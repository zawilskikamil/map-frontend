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
import {ThemeProvider} from '@material-ui/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
    spacing: 4,
    palette: {
        primary: {
            light: "#263238",
            main: "#FFCA28",
            dark: "#607D8B",
            contrastText: "#CFD8DC",
        },
    }
});

const useStyles = makeStyles(() => ({
    mainContent: {
        paddingTop: 80,
    },
}));

const NoMatchRoute = () => <div>404 Page</div>;

const Main = () => {
    const classes = useStyles();
    return (

        <Router>
            <CssBaseline/>

            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
        </Router>
    );
};

export default Main;