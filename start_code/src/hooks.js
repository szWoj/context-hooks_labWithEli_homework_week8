import React, {useState} from "react";

export const useToggleMode = () => {

    const [currentMode, setCurrentMode] = useState(true);

    const handleSwitch = () => {
        setCurrentMode(!currentMode);
    }

    return [ currentMode, handleSwitch]

}

