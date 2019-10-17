import React, {useState, useEffect} from 'react'
import axios from "axios";
import LinearProgress from '@material-ui/core/LinearProgress';

export class GenericFetchPage extends React.Component {
    constructor(props) {
        super(props);
        const {TargetPage, url} = props;
        this.state = {
            url: url,
            TargetPage: TargetPage,
            loading: false,
            error: false,
            response: null,
        };
    }

    componentDidMount() {
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

export default GenericFetchPage;