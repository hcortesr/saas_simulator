import { createContext, useState } from "react";

export const TasksContext = createContext();

export function TasksProvider(props) {

    return (
        <TasksContext.Provider
            value={10}>
            {props.children}
        </TasksContext.Provider>

    );
}