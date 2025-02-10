import { createContext, useState } from "react";

export const CalculatorContext = createContext();

export function CalculatorProvider(props) {

    return (
        <CalculatorContext.Provider
            value={10}>
            {props.children}
        </CalculatorContext.Provider >

    );
}