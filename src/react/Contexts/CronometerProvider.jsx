import { createContext, useState } from "react";

export const CronometerContext = createContext();

export function CronometerProvider(props) {

    return (
        <CronometerContext.Provider
            value={10}>
            {props.children}
        </CronometerContext.Provider >

    );
}