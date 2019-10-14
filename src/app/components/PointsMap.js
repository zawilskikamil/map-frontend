import React, {Component} from 'react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import {Link} from "react-router-dom";
import {PLACES} from "../common/RoutUrls";
import PlaceDetails from "./PlaceDetail";
import GenericFetchPage from "../pages/GenericFetchPage";
import {API_MAP_URL} from "../common/ApiUrls";

export const DetailsMap = ({data}) => {
    const position = [data.latitude, data.longitude];

    return (
        <div className={'leaflet-container'}>
            <Map center={position} zoom={15}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={position}
                />
            </Map>
        </div>
    )
};


/*
const PointsMap = ({data}) => {
    const Leaflet = window.L;
    const [selectedId, setSelectedId] = React.useState(null);

    const handleClick = (props) => {
        setSelectedId(props);
    };

    const positions = data.map((mapPoint) => {
        return [mapPoint.latitude, mapPoint.longitude]
    });

    const bounds = Leaflet.latLngBounds(positions);

    return (
        <>
            <div className={'leaflet-container'}>
                <Map center={positions[0]} zoom={5} bounds={bounds}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {data.map((mapPoint, i) => (
                        <Marker key={i}
                            position={[mapPoint.latitude, mapPoint.longitude]}
                            onClick={() => handleClick(mapPoint.id)}
                        />
                    ))}
                </Map>
            </div>
            {selectedId ? (
                <div>
                    <GenericFetchPage TargetPage={PlaceDetails} url={API_MAP_URL + '/' + selectedId}/>
                </div>
            ) : null}
        </>
    )
};
*/

class PointsMap extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedId: null,
        };
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick = (props) => {
        this.setState({
            selectedId: null,
        });
        this.setState((state) => {
            return {selectedId: props}
        });
    };

    render() {

        const Leaflet = window.L;
        const { data } = this.props;

        const positions = data.map((mapPoint) => {
            return [mapPoint.latitude, mapPoint.longitude]
        });

        const bounds = Leaflet.latLngBounds(positions);


        const details = <div>
            {this.state.selectedId ? (
                <div>
                    <GenericFetchPage TargetPage={PlaceDetails} url={API_MAP_URL + '/' + this.state.selectedId}/>
                </div>
            ) : null}
        </div>;

        return (
            <>
                <div className={'leaflet-container'}>
                    <Map center={positions[0]} zoom={5} bounds={bounds}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {data.map((mapPoint) => (
                            <Marker key={mapPoint.id}
                                    position={[mapPoint.latitude, mapPoint.longitude]}
                                    onClick={this.handleClick.bind(this, mapPoint.id)}
                            />
                        ))}
                    </Map>
                </div>
                {details}
            </>
        )
    }
}


export default PointsMap;
