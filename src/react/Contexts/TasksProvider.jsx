import { createContext, useState } from "react";

export const TasksContext = createContext();

export function TasksProvider(props) {

    const [modal, setModal] = useState(false);

    const [notes, setNotes] = useState([]);
    const [contentNote, setContentNote] = useState("");
    const [titleNote, setTitleNote] = useState("");

    // Función para agregar una nueva nota
    const addNote = () => {
        if (contentNote.trim() === "" || titleNote.trim() === "") return; // Evita agregar notas vacías
        const nuevaNotaObj = {
            id: Date.now(), // Usamos la fecha actual como ID único
            text: contentNote,
            title: titleNote,
        };


        setNotes([...notes, nuevaNotaObj]); // Agrega la nueva nota al estado
        setContentNote(""); // Limpia el campo de texto
        setTitleNote(""); // Limpia el campo de texto
        setModal(false);
    };

    // Función para eliminar una nota
    const removeNote = (id) => {
        const notasActualizadas = notes.filter((nota) => nota.id !== id);
        setNotes(notasActualizadas);
    };

    return (
        <TasksContext.Provider
            value={{ removeNote, addNote, modal, setModal, notes, contentNote, titleNote, setContentNote, setTitleNote }}>
            {props.children}
        </TasksContext.Provider>

    );
}