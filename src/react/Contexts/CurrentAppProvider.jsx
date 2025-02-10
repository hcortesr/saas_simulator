import { createContext, useState } from "react";

export const CurrentAppContext = createContext();

export function CurrentAppProvider(props) {
    const [currentApp, setCurrentApp] = useState("calculator");

    return (
        <CurrentAppContext.Provider
        value={{currentApp, setCurrentApp}}>
            {props.children}
        </CurrentAppContext.Provider>

    );
}