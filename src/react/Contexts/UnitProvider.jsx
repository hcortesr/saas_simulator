import { createContext, useEffect, useState } from "react";

export const UnitContext = createContext();

export function UnitProvider(props) {

    const [sel1, setSel1] = useState(0);
    const [sel2, setSel2] = useState(0);
    const [res, setRes] = useState(0);
    const [current, setCurrent] = useState(0);

    function updateRes() {
        console.log(current * sel1 * sel2)
        setRes(current * sel1 * sel2)
    }

    function hadleChangeSel1(event) {
        setSel1(event.target.value);
    }
    function hadleChangeSel2(event) {
        setSel2(1 / event.target.value);
    }

    useEffect(() => {
        console.log("--------")
        console.log("sel1:", sel1);
        console.log("sel2:", sel2);
    }, [sel1, sel2]);


    return (
        <UnitContext.Provider
            value={{ hadleChangeSel1, hadleChangeSel2, updateRes, res, setCurrent }}>
            {props.children}
        </UnitContext.Provider>

    );
}