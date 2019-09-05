import React from 'react'
import { Link } from "react-router-dom";
import {PLACES} from "../common/RoutUrls";

const PlaceList = ({ data }) => {
    return (
        <div>
            <h1 className="text-center">Map List</h1>
            {data.map((mapPoint, i) => (
                <div className="card mb-4" key={i}>
                    <div className="card-body">
                        <h5 className="card-title">{mapPoint.name}</h5>
                        <Link to={PLACES + mapPoint.id}>
                            <h5 className="card-title">Show details</h5>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default PlaceList;