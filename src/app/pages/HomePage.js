import React from 'react';

import {API_BASE_URL} from "./ApiUrls";
import GenericFetchPage from "./GenericFetchPage";
import Home from "../components/Home";

const PlaceDetailPage = () => {
    const url = `${API_BASE_URL}/page/home`;
    return (
        <GenericFetchPage TargetPage={Home} url={url}/>
    );
};

export default PlaceDetailPage;