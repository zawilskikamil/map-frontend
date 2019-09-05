import React from 'react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import {Link} from "react-router-dom";
import {PLACES} from "../common/RoutUrls";

const PointMarker = ({mapPoint}) => {
    const position = [mapPoint.latitude, mapPoint.longitude];

    return (
        <Marker position={position}>
            <Popup>
                <Link to={PLACES + mapPoint.id}>
                    <h5 >{mapPoint.name}</h5>
                </Link>
                <h5>{mapPoint.address}</h5>
            </Popup>
        </Marker>
    )
};

export const DetailsMap = ({data}) => {
    const position = [data.latitude, data.longitude];

    return (
        <div className={'leaflet-container'}>
            <Map center={position} zoom={15}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <PointMarker mapPoint={data}/>

            </Map>
        </div>
    )
};


const PointsMap = ({data}) => {
    const Leaflet = window.L;

    const positions = data.map((mapPoint) => {
        return [mapPoint.latitude, mapPoint.longitude]
    });

    const bounds = Leaflet.latLngBounds(positions);

    return (
        <div className={'leaflet-container'}>
            <Map center={positions[0]} zoom={5} bounds={bounds}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {data.map((mapPoint, i) => (
                    <PointMarker mapPoint={mapPoint} key={i}/>
                ))}

            </Map>
        </div>
    )
};

export default PointsMap;
