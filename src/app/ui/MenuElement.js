import React from "react";
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Button from "@material-ui/core/Button";

export const MenuElement = ({link, text}) => {
    return (
        <Link component={RouterLink} to={link}>
            <Button variant="h6">
                {text}
            </Button>
        </Link>
    )
};