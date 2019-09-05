import React from 'react';

const PlaceDetail = ({ data }) => {
    return (
        <section>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        latitude: {data.latitude} longitude: {data.longitude}
                    </h6>
                </div>
            </div>
        </section>
    );
};

export default PlaceDetail;