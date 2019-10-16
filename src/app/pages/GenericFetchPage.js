import React, {useState, useEffect} from 'react'
import axios from "axios";
import LinearProgress from '@material-ui/core/LinearProgress';
import {API_MAP_URL} from "../common/ApiUrls";

const GenericFetchPage = ({TargetPage, url}) => {
    console.log("GenericFetchPage");
    console.log("TargetPage");
    console.log(TargetPage);
    console.log("url" + url);


    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    console.log("response" + response);
    console.log("error" + error);
    console.log("loading" + loading);

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

export class GenericFetchPageV2 extends React.Component {

    constructor(props) {
        super(props);
        const {TargetPage, url} = props
        this.state = {
            url: url,
            TargetPage: TargetPage,
            loading: false,
            error: false,
            response: null,
        };
    }

    componentDidMount() {
        console.log("321");
        axios
            .get(this.state.url)
            .then((result) => {
                const response = result.data;
                this.setState(
                    {
                        url: this.state.url,
                        TargetPage: this.state.TargetPage,
                        loading: false,
                        error: false,
                        response: response,
                    }
                );
            })
            .finally(function () {
            });
    }

    render() {
        console.log("Asd")

        return (
            <>
                {this.state.loading && (
                    <LinearProgress color="secondary"/>
                )}
                {this.state.error && (
                    <div style={{color: `red`}}>
                        some error occurred, while fetching api
                    </div>
                )}
                {this.state.response && <this.state.TargetPage data={this.state.response}/>}
            </>
        )
    }
}

export default GenericFetchPageV2;