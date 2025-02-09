import React from "react";
import ReactDOM from "react-dom/client"
import { SideBar } from "./react/SideBar";
import { Header } from "./react/Header";
import { CalculatorApp } from "./react/miniApps/Calculator/CalculatorApp";
import './css/style.css';
import './css/headerStyle.css'
import './css/calculatorStyle.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<>
    <Header/>
    <main>
        <SideBar />
        <CalculatorApp/>
    </main>

</>);