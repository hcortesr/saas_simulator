import { useContext } from "react";
import { TasksContext } from "../../Contexts/TasksProvider";
import { IoMdCloseCircle } from "react-icons/io";

export function TaskModal() {

    const context = useContext(TasksContext);

    return (
        <div className="modal-bg">
            <div className="modal-border">
                <label htmlFor="f-title">Title: <input type="text" id="f-title" onChange={(event) => context.setTitleNote(event.target.value)} /></label>
                <label htmlFor="f-content">Content: <textarea type="text" id="f-content" onChange={(event) => context.setContentNote(event.target.value)} /></label>
                <div className="container-btn">
                    <button onClick={context.addNote} className="btn-cn">Create Note</button>
                </div>

                <IoMdCloseCircle className="modal-close" size={30} />
            </div>


        </div>
    )
}