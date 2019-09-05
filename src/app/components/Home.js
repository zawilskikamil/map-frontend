import React from 'react'

const Home = ({ data }) => {
    return (
        <div>
            {data.map((data, i) => (
                <div className="card mb-4" key={i}>
                    <div className="card-body">
                        <h5 className="card-title">{data.content}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Home;