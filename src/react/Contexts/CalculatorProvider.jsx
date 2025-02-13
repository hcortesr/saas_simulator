import { createContext, useState } from "react";

export const CalculatorContext = createContext();

export function CalculatorProvider(props) {

    const [pantalla, setPantalla] = useState("");

    // Función para manejar la entrada de números y operadores
    const manejarClick = (valor) => {
        setPantalla(pantalla + valor);
    };

    // Función para calcular el resultado
    const calcularResultado = () => {
        console.log("lkj");
        try {
            // Usamos eval() para calcular el resultado (¡cuidado con las vulnerabilidades!)
            const resultado = eval(pantalla);
            setPantalla(resultado.toString());
        } catch (error) {
            // Si hay un error (por ejemplo, una operación inválida), mostramos "Error"
            setPantalla("Error");
        }
    };

    // Función para limpiar la pantalla
    const limpiarPantalla = () => {
        setPantalla("");
    };

    return (
        <CalculatorContext.Provider
            value={{ calcularResultado, limpiarPantalla, pantalla, manejarClick }}>
            {props.children}
        </CalculatorContext.Provider >

    );
}