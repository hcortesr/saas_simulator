import { Task } from "./Task";

export function TasksApp() {
    return (
        <div className="tasks-frame">
            <h2>Tasks App</h2>
            <div className="tasks-border">
                <Task
                title="La primera nota"
                content="Este es el primer contenido de mi gran nota que estoy a punto de poner."
                />
                <Task
                title="La primera nota"
                content="Este es el primer contenido de mi gran nota que estoy a punto de poner."
                />

<Task
                title="La primera nota"
                content="Este es el primer contenido de mi gran nota que estoy a punto de poner."
                />

<Task
                title="La primera nota"
                content="Este es el primer contenido de mi gran nota que estoy a punto de poner."
                />

            </div>
        </div>
    );
}