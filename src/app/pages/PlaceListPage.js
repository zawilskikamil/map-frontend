import React from 'react'
import PlaceList from "../components/PlaceList";
import GenericFetchPage from "./GenericFetchPage";
import {API_MAP_URL} from "./ApiUrls";

const PlaceListPage = () => {
    return (
        <GenericFetchPage TargetPage={PlaceList} url={API_MAP_URL}/>
    );
};

export default PlaceListPage;