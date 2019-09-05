import React from "react";
import {Link} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export const MenuElement = ({link, text}) => {
    const classes = useStyles();

    return (
        <Typography variant="h6" className={classes.menuButton}>
            <Link to={link}>{text}</Link>
        </Typography>
    )
};