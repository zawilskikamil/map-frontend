import React from 'react';

const PlaceDetail = ({ place }) => {
    const createDescMarkup = description => {
        return { __html: description };
    };
    return (
        <section>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">{place.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        latitude: {place.latitude} longitude: {place.longitude}
                    </h6>
                </div>
            </div>
        </section>
    );
};

export default PlaceDetail;