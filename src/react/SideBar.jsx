import { IoCalculatorOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { useContext } from "react";
import { CurrentAppContext } from "./Contexts/CurrentAppProvider";

function SideBarButton({ children, title, fun, textCon }) {
    const context = useContext(CurrentAppContext);

    return (<button className={`side-btn ${textCon == context.currentApp ? 'side-btn-selected' : ''}`} onClick={fun}>{children} {title}</button>);
}

export function SideBar(props) {

    const { setCurrentApp } = useContext(CurrentAppContext);

    return (<aside className="sideBar">
        <SideBarButton
            title="Calculator"
            fun={() => setCurrentApp("calculator")}
            textCon={"calculator"}>

            <IoCalculatorOutline />
        </SideBarButton>

        <SideBarButton
            title="Tasks"
            fun={() => setCurrentApp("tasks")}
            textCon={"tasks"}>
            <FaTasks />
        </SideBarButton>

        <SideBarButton
            title="Cronometer"
            fun={() => setCurrentApp("cronometer")}
            textCon={"cronometer"}>
            <MdOutlineTimer />
        </SideBarButton>

        <SideBarButton
            title="Unit Converter"
            fun={() => setCurrentApp("unit-converter")}
            textCon={"unit-converter"}>
            <AiOutlineFieldNumber />
        </SideBarButton>
    </aside>);
}