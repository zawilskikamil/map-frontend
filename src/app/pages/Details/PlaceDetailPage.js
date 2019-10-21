import React from 'react';
import {API_MAP_URL} from "../../config/ApiUrls";
import axios from "axios";
import LinearProgress from '@material-ui/core/LinearProgress';

const PlaceDetailContent = ({data}) => {
    return (
        <section>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="mb-2">
                        address {data.id}
                    </p>
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

export class PlaceDetailComponent extends React.Component {

    constructor(props) {
        super(props);
        const { placeId } = props;
        this.state = {
            placeId: placeId,
            loading: false,
            error: false,
            response: null,
        };
    }

    fetchData = (placeId) => {
        const url = `${API_MAP_URL}/${placeId}`;
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
        if (this.props.placeId !== prevProps.placeId) {
            this.fetchData(this.props.placeId);
        }
    }

    componentDidMount() {
        console.log("Mount");

        this.fetchData(this.props.placeId);
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

export class PlaceDetailPage extends React.Component {

    constructor(props) {
        super(props);
        const { match } = props;
        const { params } = match;
        const { placeId } = params;
        this.state = {
            placeId: placeId,
        };
    }

    render() {
        console.log("PlaceDetailPage");

        return (
            <PlaceDetailComponent placeId={this.state.placeId}/>
        )
    }
}

export default PlaceDetailPage;
