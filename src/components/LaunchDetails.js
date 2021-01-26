import React from "react";

const LaunchDetails = ({launch, loaded}) => {

    if(!loaded){
        return <p>loading...</p>
    }

    return(
        <>
        <h3>Mission name: {launch.mission_name}</h3>
        <h4>Launch year:{launch.launch_year}</h4>
        <p>Rocket: {launch.rocket.rocket_name}</p>
        <h5>Details</h5>
        <p>{launch.details}</p>
        </>
    )
}

export default LaunchDetails;