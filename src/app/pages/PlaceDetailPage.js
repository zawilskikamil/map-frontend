import React from 'react';
import PlaceDetails from '../components/PlaceDetail';
import {API_MAP_URL} from "./ApiUrls";
import GenericPage from "./GenericPage";

const PlaceDetailPage = ({match}) => {
    const {
        params: {placeId},
    } = match;
    const url = `${API_MAP_URL}/${placeId}`;
    return (
        <GenericPage TargetPage={PlaceDetails} url={url}/>
    );
};

export default PlaceDetailPage;