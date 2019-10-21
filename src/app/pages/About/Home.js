import React from 'react'

const Home = ({data}) => {
    return (
        <div>
            {data.map((data, i) => (
                <div key={i}>
                    <div>
                        <h5>{data.content}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Home;