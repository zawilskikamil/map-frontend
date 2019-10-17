import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import PlaceListPage from "./pages/PlaceListPage";
import PlaceDetailPage from "./pages/PlaceDetailPage";
import {HOME, MAP, PLACES, PLACES_DETAILS} from "./common/RoutUrls";
import CssBaseline from "@material-ui/core/CssBaseline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import {ThemeProvider} from '@material-ui/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MapNavigationDrawer from "./ui/navigation/MapNavigationDrawer";
import {teal} from "@material-ui/core/colors";

const theme = createMuiTheme({
    spacing: 4,
    palette: {
        primary: teal,
        secondary: teal,
    },
});

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(4),
    },
}));

const NoMatchRoute = () => <div>404 Page</div>;

const Main = () => {
    const classes = useStyles();
    return (

        <Router>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <MapNavigationDrawer/>
                    <main className={classes.content}>
                        <Container maxWidth={false}>
                            <Switch>
                                <Route path={HOME} exact component={HomePage}/>
                                <Route path={PLACES} exact component={PlaceListPage}/>
                                <Route path={MAP} exact component={MapPage}/>
                                <Route path={PLACES_DETAILS} exact component={PlaceDetailPage}/>
                                <Route component={NoMatchRoute}/>
                            </Switch>
                        </Container>
                    </main>
                </div>
            </ThemeProvider>
        </Router>
    )
        ;
};

export default Main;