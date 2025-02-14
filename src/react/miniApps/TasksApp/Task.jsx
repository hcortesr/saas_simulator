import { useContext } from "react";
import { TasksContext } from "../../Contexts/TasksProvider";
import { IoMdCloseCircle } from "react-icons/io";

export function Task({ title, content, ID }) {

    const context = useContext(TasksContext);

    return (
        <div className="task">
            <IoMdCloseCircle className="task-close" size={30} onClick={() => context.removeNote(ID)} />
            <h3 className="note-title">{title}</h3>
            <p>{content}</p>
        </div>
    );
}