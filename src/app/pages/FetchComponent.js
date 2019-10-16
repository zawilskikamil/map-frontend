import React from 'react';
import axios from "axios";
import LinearProgress from '@material-ui/core/LinearProgress';

export default class FetchComponent extends React.Component {

    constructor(props) {
        super(props);
        const { url } = props;
        this.state = {
            placeId: url,
            loading: true,
            error: false,
            response: null,
        };
    }

    fetchData = (url) => {
        axios
            .get(url)
            .then((result) => {
                const response = result.data;
                this.setState(
                    {
                        loading: false,
                        error: false,
                        response: response,
                    }
                );
            })
            .finally(function () {
            });
    };

    componentDidUpdate(prevProps) {
        if (this.props.url !== prevProps.url) {
            this.fetchData(this.props.url);
        }
    }

    componentDidMount() {
        this.fetchData(this.props.url);
    }

    render() {
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
                {this.state.response && <PlaceDetailContent data={this.state.response}/>}
            </>
        )
    }
}
