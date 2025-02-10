import { useEffect, useState } from "react";


export function CronometerApp() {


    const [sec, setSec] = useState(0);
   
    useEffect(() => {
        const intID = setInterval(() => {
            setSec((prevSec) => prevSec + 1);
        }, 1000);
        return () => clearInterval(intID);
    }, []);

    return (
        <div className="crono-frame">
            <h1>{Math.floor(sec/60)}:{sec%60}</h1>
        </div>
    );
}