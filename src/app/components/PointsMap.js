import React from 'react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import {Link} from "react-router-dom";

const PointMarker = ({mapPoint}) => {
  const position = [mapPoint.latitude, mapPoint.longitude];

  return (
      <Marker position={position}>
        <Popup>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">{mapPoint.name}</h5>
              <Link to={`/place/${mapPoint.id}/`}>
                <h5 className="card-title">Show details</h5>
              </Link>
            </div>
          </div>
        </Popup>
      </Marker>
  )
};

const PointsMap = ({data}) => {
  const state = {
    lat: 0,
    lng: 0,
    zoom: 5,
  };
  const position = [state.lat, state.lng];

  return (
      <div className={'leaflet-container'}>
        <Map center={position} zoom={state.zoom}>
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

export default PointsMap