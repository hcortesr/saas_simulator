import { createContext, useState } from "react";

export const CronometerContext = createContext();

export function CronometerProvider(props) {

    const [cronoState, setCronoState] = useState("off");
    const [sec, setSec] = useState(0);
    const [intID, setIntID] = useState(null);

    function startTimer() {
        setCronoState("on");
        const intID = setInterval(() => {
            setSec((prevSec) => prevSec + 1);
        }, 1000);
        setIntID(intID);
    }
    function pauseTimer() {
        setCronoState("stopped");
        clearInterval(intID);

    }
    function resetTimer() {
        setCronoState("off");
        clearInterval(intID);
        setSec(0);

    }

    return (
        <CronometerContext.Provider
            value={{ startTimer, pauseTimer, resetTimer, sec, cronoState }}>
            {props.children}
        </CronometerContext.Provider >

    );
}