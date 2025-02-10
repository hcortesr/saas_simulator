import { useEffect, useState } from "react";

export function OptOff() {
    return (
        <div className="crono-btn-cont">
            <button>Iniciar</button>
        </div>
    );
}

export function OptOn() {
    return (
        <div className="crono-btn-cont">
            <button>Pausar</button>
            <button>Detener</button>
        </div>
    );
}

export function OptStopped() {
    return (
        <div className="crono-btn-cont">
            <button>Continuar</button>
            <button>Detener</button>
        </div>
    );
}

export function CronometerApp() {

    const [sec, setSec] = useState(0);
    const [cronoState, setCronoState] = useState("off");


    useEffect(() => {

        const intID = setInterval(() => {
            setSec((prevSec) => prevSec + 1);
        }, 1000);
        return () => clearInterval(intID);
    }, []);

    return (
        <div className="crono-frame">

            <h1>Cronometer App</h1>

            <div className="crono-border">
                <div className="crono-screen">{Math.floor(sec / 60)}:{sec % 60}</div>
                {(() => {
                    switch (cronoState) {
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