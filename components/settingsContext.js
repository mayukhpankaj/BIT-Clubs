import React, {useState, createContext } from "react";


export const SettingsContext = createContext();

export const SettingsProvider = (props) => {
    const [adminMode, setAdminMode] = useState(false);

    return(
        <SettingsContext.Provider value={[adminMode, setAdminMode]}>
            {props.children}
        </SettingsContext.Provider>
    )
}