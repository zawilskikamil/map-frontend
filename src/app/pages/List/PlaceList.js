import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import {PLACES} from "../../config/routes";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4, 2),
        margin: theme.spacing(4, 4),
    },
}));

const PlaceList = ({data}) => {
    const classes = useStyles();

    return (
        <div>
            {data.map((mapPoint, i) => (
                <Paper className={classes.root} key={i}>
                    <Typography variant="h6" component="h3">
                        <Link component={RouterLink} to={PLACES + mapPoint.id}>
                            {mapPoint.name}
                        </Link>
                    </Typography>
                    <Typography variant="body1" component="h3">
                        {mapPoint.address}
                    </Typography>
                </Paper>
            ))}
        </div>
    )
};

export default PlaceList;