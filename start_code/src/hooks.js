import React, {useState} from "react";

export const toggleMode = () => {

    const [currentMode, setCurrentMode] = useState(true);

    const handleSwitch = () => {
        setCurrentMode(!currentMode);
    }

    return { handleSwitch, toggleMode}

}

