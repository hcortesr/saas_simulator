import { Task } from "./Task";
import { TasksContext } from "../../Contexts/TasksProvider";
import { useContext } from "react";
import { TaskModal } from "./TaskModal";

export function TasksApp() {

    const context = useContext(TasksContext);


    return (
        <div className="tasks-frame">

            {context.modal && <TaskModal />}

            <h2>Tasks App</h2>
            <div className="tasks-border">
                <button className="btn-new-note" onClick={() => context.setModal(true)}>
                    New Note
                </button>

                {context.notes.map((val, index) => {
                    return (
                        <Task
                            title={val.title}
                            content={val.text}
                            ID={val.id}
                            key={index}
                        />
                    )
                })}


            </div>
        </div>
    );
}