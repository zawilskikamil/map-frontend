// src/components/contacts.js

import React from 'react'

const MapList = ({ mapList }) => {
    return (
        <div>
            <h1 className="text-center">Map List</h1>
            {mapList.map((mapPoint, i) => (
                <div className="card mb-4" key={i}>
                    <div className="card-body">
                        <h5 className="card-title">{mapPoint.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            latitude: {mapPoint.latitude} longitude: {mapPoint.longitude}
                        </h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default MapList