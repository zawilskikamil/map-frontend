import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import {MenuElement} from "./MenuElement";
import {HOME, MAP, PLACES} from "../common/RoutUrls";
import AppBar from "@material-ui/core/AppBar/AppBar";

export const MainMenu = () => {
    return (
            <AppBar >
                <Toolbar>
                    <MenuElement link={HOME} text={'Home'}/>
                    <MenuElement link={PLACES} text={'List'}/>
                    <MenuElement link={MAP} text={'Map'}/>
                </Toolbar>
            </AppBar>
    )
};