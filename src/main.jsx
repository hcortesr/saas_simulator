import React from "react";
import ReactDOM from "react-dom/client"
import { SideBar } from "./react/SideBar";
import './css/style.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<>
    <header><h1>Mis Notas</h1></header>
    <SideBar />
</>);