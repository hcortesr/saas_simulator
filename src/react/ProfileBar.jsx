import { FaPlus } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";

export function ProfileBar () {
    return (
        <div className="profileBar">
            <div className="profileBar-sub1">
                <FaPlus/>
                <p>Create</p>
            </div>

            <FaBell/>

            <div></div>
            
        </div>
    );
}