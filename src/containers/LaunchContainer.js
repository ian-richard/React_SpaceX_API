import React, {useState, useEffect} from "react";
import LaunchSelector from "../components/LaunchSelector";
import LaunchDetails from "../components/LaunchDetails";

const LaunchContainer = () => {

    const [launch, setLaunch] = useState({});
    const [selectedLaunchId, setSelectedLaunchId] = useState(1);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getLaunch();
    }, [selectedLaunchId])

    const incrementSelectedLaunch = () => {
        const nextLaunchIndex = selectedLaunchId + 1;
        if(nextLaunchIndex <= 90){
        setSelectedLaunchId(nextLaunchIndex);
    }
    }

    const decrementSelectedLaunch = () => {
        const nextLaunchIndex = selectedLaunchId -1
        if(nextLaunchIndex >= 1){
            setSelectedLaunchId(nextLaunchIndex);
        }
    }

    const getLaunch = () => {
        console.log("getting launch info");
        fetch(`https://api.spacexdata.com/v3/launches/${selectedLaunchId}`)
        .then(res => res.json())
        .then(data => setLaunch(data))
        .then(() => setLoaded(true))
    }

    return (
        <>
            <h1>SpaceX Launch Details</h1>
            <LaunchSelector
            launchIncrement={() => incrementSelectedLaunch()}
            launchDecrement={() => decrementSelectedLaunch()}
            />
            <LaunchDetails launch={launch} loaded={loaded}/>
        </>
    )
}

export default LaunchContainer;