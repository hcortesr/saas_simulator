import { useContext, useEffect, useState } from "react";
import { CronometerContext } from "../../Contexts/CronometerProvider";

export function OptOff() {
    const context = useContext(CronometerContext);
    return (
        <div className="crono-btn-cont">
            <button onClick={context.startTimer}>Iniciar</button>
        </div>
    );
}

export function OptOn() {
    const context = useContext(CronometerContext);

    return (
        <div className="crono-btn-cont">
            <button onClick={context.pauseTimer}>Pausar</button>
            <button onClick={context.resetTimer}>Detener</button>
        </div>
    );
}

export function OptStopped() {
    const context = useContext(CronometerContext);
    return (
        <div className="crono-btn-cont">
            <button onClick={context.startTimer}>Continuar</button>
            <button onClick={context.resetTimer}>Detener</button>
        </div>
    );
}

export function CronometerApp() {
    const context = useContext(CronometerContext);

    function zeroProblem(num) {
        if (num < 10) {
            return "0" + num;
        } else {
            return num;
        }
    }

    return (
        <div className="crono-frame">

            <h1 className="appTitle">Cronometer App</h1>

            <div className="crono-border">
                <div className="crono-screen">{Math.floor(context.sec / 60)}:{zeroProblem(context.sec % 60)}</div>
                {(() => {
                    switch (context.cronoState) {
                        case "off":
                            return <OptOff />
                        case "on":
                            return <OptOn />
                        case "stopped":
                            return <OptStopped />
                    }
                })()
                }
            </div>

        </div>
    );
}