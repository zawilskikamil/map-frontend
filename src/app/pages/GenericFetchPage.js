import React, {useState, useEffect} from 'react'
import axios from "axios";
import LinearProgress from '@material-ui/core/LinearProgress';

const GenericFetchPage = ({TargetPage, url}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        const fetchPlaceList = async () => {
            setLoading(true);
            setError(false);
            try {
                const result = await axios.get(url);
                // await sleep(2000);
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
                <LinearProgress color="secondary"/>
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