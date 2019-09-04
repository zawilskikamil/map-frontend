import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import PlaceDetails from '../components/PlaceDetail';

const PlaceDetailPage = ({match}) => {
    const {
        params: {placeId},
    } = match;

    const [place, setPlace] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const API_BASE_URL = `http://localhost:8080/map/`;
        const fetchPlace = async () => {
            setLoading(true);
            setError(false);
            try {
                const result = await axios.get(`${API_BASE_URL}/${placeId}`);
                setPlace(result.data);
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };
        // Call the API
        fetchPlace();
    }, [placeId]);

    return (
        <>
            <div className="card mb-4 mt-4">
                <div className="card-body">
                    <Link to={`/`}>Go back to List</Link>
                </div>
            </div>
            {loading && (
                <div style={{color: `green`}}>
                    loading place detail for place ID: <strong>{placeId}</strong>
                </div>
            )}
            {error && (
                <div style={{color: `red`}}>
                    some error occurred, while fetching api
                </div>
            )}
            {place && <PlaceDetails place={place}/>}
        </>

    );
};

export default PlaceDetailPage;