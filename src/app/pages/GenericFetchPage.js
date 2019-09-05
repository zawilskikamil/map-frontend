import React, {useState, useEffect} from 'react'
import axios from "axios";


const GenericFetchPage = ({TargetPage, url}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPlaceList = async () => {
            setLoading(true);
            setError(false);
            try {
                const result = await axios.get(url);
                setResponse(result.data);
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };
        fetchPlaceList();
    }, []);

    return (
        <>
            {loading && (
                <div style={{color: `green`}}>
                    loading place detail for place ID: <strong>asd</strong>
                </div>
            )}
            {error && (
                <div style={{color: `red`}}>
                    some error occurred, while fetching api
                </div>
            )}
            {response && <TargetPage data={response}/>}
        </>
    );
};

export default GenericFetchPage;