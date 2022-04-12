import React , { useState, useContext } from 'react';
import TrackerDisplay from "../components/TrackerDisplay";
import FormContainer from "./FormContainer";
import UserContext from '../context/UserContext'


const TrackerContainer = () => {

    const {name} = useContext(UserContext);
    const {goal} = useContext(UserContext);



    const [glasses, setGlasses] = useState(0);

    const handleUpdate = (updateAmount) => {
        if (glasses + updateAmount < 0) {
            setGlasses(0);
        }
        else {
            setGlasses(parseInt(glasses + updateAmount));
        }
    }

    const handleEmpty = () => {
        setGlasses(0);
    }

    return (
        <>
            <TrackerDisplay glasses={glasses} />
            <FormContainer handleUpdate={handleUpdate} handleEmpty={handleEmpty} />
  
        </>
    )
}

export default TrackerContainer;
