import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import { CurrentAppContext, CurrentAppProvider } from "./react/Contexts/CurrentAppProvider";
import { App } from "./react/App";
import './css/style.css';
import './css/headerStyle.css';
import './css/calculatorStyle.css';
import './css/tasksStyle.css';
import './css/cronometerStyle.css';
import './css/unitStyle.css';
import './css/taskModal.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<>
    <StrictMode>
        <CurrentAppProvider>
            <App />
        </CurrentAppProvider>
    </StrictMode>
</>);