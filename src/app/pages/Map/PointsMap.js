import React from 'react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import Card from '@material-ui/core/Card';
import {PlaceDetailComponent} from '../Details/PlaceDetailPage'
import Paper from '@material-ui/core/Paper';

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
            <div>
                <Card open={true}>
                    <Paper>
                        <PlaceDetailComponent placeId={this.state.selectedId}/>
                    </Paper>
                </Card>
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
            </div>
        )
    }
}

export default PointsMap;
