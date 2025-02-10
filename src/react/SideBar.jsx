import { IoCalculatorOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { useContext } from "react";
import { CurrentAppContext } from "./Contexts/CurrentAppProvider";

function SideBarButton({ children, title, fun }) {
    return (<button className="side-btn" onClick={fun}>{children} {title}</button>);
}

export function SideBar(props) {

    const {setCurrentApp} = useContext(CurrentAppContext);

    return (<aside className="sideBar">
        <SideBarButton
            title="Calculator"
            fun={() => setCurrentApp("calculator")}>
            <IoCalculatorOutline />
        </SideBarButton>

        <SideBarButton
            title="Tasks"
            fun={() => setCurrentApp("tasks")}>
            <FaTasks />
        </SideBarButton>

        <SideBarButton
            title="Cronometer"
            fun={() => setCurrentApp("cronometer")}>
            <MdOutlineTimer />
        </SideBarButton>

        <SideBarButton
            title="Unit Converter">
            <AiOutlineFieldNumber />
        </SideBarButton>
    </aside>);
}