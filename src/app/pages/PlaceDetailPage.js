import React from 'react';
import PlaceDetails from '../components/PlaceDetail';
import {API_MAP_URL} from "../common/ApiUrls";
import GenericFetchPage from "./GenericFetchPage";

const PlaceDetailPage = ({match}) => {
    const {
        params: {placeId},
    } = match;
    const url = `${API_MAP_URL}/${placeId}`;
    return (
        <GenericFetchPage TargetPage={PlaceDetails} url={url}/>
    );
};

export default PlaceDetailPage;