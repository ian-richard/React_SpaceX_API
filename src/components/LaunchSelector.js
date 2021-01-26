import React from "react";

const LaunchSelector = ({launchIncrement, launchDecrement}) => {

return (
    <>
    <button onClick={launchDecrement}>Previous launch</button>
    <button onClick={launchIncrement}>Next launch</button>
    </>
)

}

export default LaunchSelector;