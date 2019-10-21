import React from "react";
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import routes from "./config/routes";
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


const App = () => {
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
                                {routes}
                            </Switch>
                        </Container>
                    </main>
                </div>
            </ThemeProvider>
        </Router>
    )
        ;
};

export default App;