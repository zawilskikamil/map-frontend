import React from 'react';
import Divider from '@material-ui/core/Divider';
import MaterialMenuList from '@material-ui/core/MenuList';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import {HOME, MAP, PLACES} from "../../common/RoutUrls";
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
}));

const MenuList = () => {
    const classes = useStyles();

    const menuListElements = [
        {
            'to': HOME,
            'key': 'HOME',
            'text': 'Home',
        },
        {
            'to': MAP,
            'key': 'MAP',
            'text': 'Map',
        },
        {
            'to': PLACES,
            'key': 'PLACES',
            'text': 'Places',
        },
    ];

    return (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <MaterialMenuList>
                {menuListElements.map((prop) => {
                    return (
                        <Link component={RouterLink} to={prop.to} key={prop.key}>
                            <ListItem button>
                                <ListItemText primary={prop.text}/>
                            </ListItem>
                        </Link>
                    )
                })};
            </MaterialMenuList>
        </div>
    );
};

export default MenuList;