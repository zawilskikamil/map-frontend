import React from 'react';

import {API_BASE_URL} from "./ApiUrls";
import GenericPage from "./GenericPage";
import Home from "../components/Home";

const PlaceDetailPage = () => {
    const url = `${API_BASE_URL}/page/home`;
    return (
        <GenericPage TargetPage={Home} url={url}/>

    );
};

export default PlaceDetailPage;