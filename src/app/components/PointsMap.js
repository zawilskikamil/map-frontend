import React from 'react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import {Link} from "react-router-dom";
import {PLACES} from "../common/RoutUrls";
import PlaceDetails from "./PlaceDetail";
import GenericFetchPageV2 from "../pages/GenericFetchPage";
import {API_MAP_URL} from "../common/ApiUrls";
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import {PlaceDetailComponent} from '../pages/PlaceDetailPage'

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

class PointsMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedId: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(props) {
        const selectedIdFromButton = props;

        this.setState((state) => (
                {
                    selectedId: selectedIdFromButton
                }
            )
        );

    };

    render() {

        const Leaflet = window.L;
        const {data} = this.props;

        const positions = data.map((mapPoint) => {
            return [mapPoint.latitude, mapPoint.longitude]
        });

        const bounds = Leaflet.latLngBounds(positions);
        return (
            <>
                <Card>
                    <div className={'leaflet-container'}>
                        <Map center={positions[0]} zoom={5} bounds={bounds}>
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {data.map((mapPoint) => (
                                <Marker key={mapPoint.id}
                                        position={[mapPoint.latitude, mapPoint.longitude]}
                                        onClick={() => this.handleClick(mapPoint.id)}
                                />
                            ))}
                        </Map>
                    </div>
                </Card>
                <Container maxWidth='xs'>
                    <Card>
                        <PlaceDetailComponent placeId={this.state.selectedId}/>
                    </Card>

                </Container>

            </>
        )
    }
}

// const Details = (props) => {
//     const {selectedId} = props;
//     return (
//         <div>
//             <PlaceDetailComponent placeId={selectedId}/>
//         </div>
//     )
// };

export default PointsMap;
