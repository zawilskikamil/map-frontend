import React from 'react'
import PlaceList from "../components/PlaceList";
import GenericPage from "./GenericPage";
import {API_MAP_URL} from "./ApiUrls";

const PlaceListPage = () => {
    return (
        <GenericPage TargetPage={PlaceList} url={API_MAP_URL}/>
    );
};

export default PlaceListPage;