import { AiOutlineHome } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";
import { GrStorage } from "react-icons/gr";


function SideBarButton({ children, title }) {
    return (<button>{children} {title}</button>);
}

export function SideBar(props) {
    return (<aside className="sideBar">
        <SideBarButton
            title="Home">
            <AiOutlineHome />
        </SideBarButton>

        <SideBarButton
            title="Home">
            <TbWorldWww />
        </SideBarButton>

        <SideBarButton
            title="Home">
            <MdMailOutline />
        </SideBarButton>

        <SideBarButton
            title="Home">
            <GrStorage />
        </SideBarButton>
    </aside>);
}