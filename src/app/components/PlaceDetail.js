import React from 'react';
import {DetailsMap} from "./PointsMap";

const PlaceDetail = ({data}) => {
    return (
        <section>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="mb-2">
                        address {data.address}
                    </p>
                    <p className="mb-2">
                        city {data.city}
                    </p>
                    <p className="mb-2">
                        web Page {data.webPage}
                    </p>
                    <p className="mb-2">
                        google Map Tag {data.googleMapTag}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PlaceDetail;