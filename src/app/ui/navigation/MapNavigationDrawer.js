import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from "./MenuList";

const drawerWidth = 140;

const useStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    menuButton: {
        position: 'fixed',
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

const MapNavigationDrawer = (props) => {
    const {container} = props;
    const classes = useStyles();
    const theme = useTheme();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon/>
            </IconButton>
            <nav className={classes.drawer} aria-label="mailbox folders">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <MenuList/>
                    </Drawer>
            </nav>
        </>
    );
};

export default MapNavigationDrawer;