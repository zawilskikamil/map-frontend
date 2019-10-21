import React from 'react';

import {API_MAP_URL} from "../../config/ApiUrls";
import GenericFetchPage from "../GenericFetchPage";
import PointsMap from "./PointsMap";

const PlaceDetailPage = () => {
    const url = `${API_MAP_URL}`;
    return (
        <GenericFetchPage TargetPage={PointsMap} url={url}/>
    );
};

export default PlaceDetailPage;