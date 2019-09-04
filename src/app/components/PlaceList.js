import React, { Component }  from 'react'
import { Link } from "react-router-dom";

const PlaceList = ({ places }) => {
    return (
        <div>
            <h1 className="text-center">Map List</h1>
            {places.map((mapPoint, i) => (
                <div className="card mb-4" key={i}>
                    <div className="card-body">
                        <h5 className="card-title">{mapPoint.name}</h5>
                        <Link to={`/place/${mapPoint.id}/`}>
                            <h5 className="card-title">Show details</h5>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
};

class PlaceListComponent extends Component {

    state = {
        placeList: []
    };

    componentDidMount() {
        fetch('http://localhost:8080/map')
            .then(res => res.json())
            .then((data) => {
                this.setState({ placeList: data })
            })
            .catch(console.log)

    }

    render() {
        return (
            <PlaceList places={this.state.placeList}/>
        );
    }
}

export default PlaceListComponent;