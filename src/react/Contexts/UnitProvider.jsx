import { createContext, useState } from "react";

export const UnitContext = createContext();

export function UnitProvider(props) {

    const [sel1, setSet1] = useState("");
    const [sel2, setSet2] = useState("");


    return (
        <UnitContext.Provider
            value={{ setSet1, setSet2 }}>
            {props.children}
        </UnitContext.Provider>

    );
}