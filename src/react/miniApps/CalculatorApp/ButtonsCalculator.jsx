import { useContext } from "react";
import { CalculatorContext } from "../../Contexts/CalculatorProvider";

export function ButtonsCalculator() {
    const context = useContext(CalculatorContext);
    return (

        <div className="calc-btns">
            <button onClick={() => context.manejarClick("7")} value="7">7</button>
            <button onClick={() => context.manejarClick("8")} value="8" >8</button>
            <button onClick={() => context.manejarClick("9")} value="9" >9</button>
            <button onClick={() => context.manejarClick("/")} value="/" >/</button>

            <button onClick={() => context.manejarClick("4")} value="4" >4</button>
            <button onClick={() => context.manejarClick("5")} value="5" >5</button>
            <button onClick={() => context.manejarClick("6")} value="6" >6</button>
            <button onClick={() => context.manejarClick("*")} value="*" >*</button>

            <button onClick={() => context.manejarClick("1")} value="1" >1</button>
            <button onClick={() => context.manejarClick("2")} value="2" >2</button>
            <button onClick={() => context.manejarClick("3")} value="3" >3</button>
            <button onClick={() => context.manejarClick("-")} value="-" >-</button>

            <button onClick={() => context.manejarClick("0")} value="0" >0</button>
            <button onClick={() => context.manejarClick(".")} value="." >.</button>
            <button onClick={context.calcularResultado} value="=" >=</button>
            <button onClick={() => context.manejarClick("+")} value="+" >+</button>

            <button onClick={() => context.manejarClick("(")} value="(" >(</button>
            <button onClick={() => context.manejarClick(")")} value=")" >)</button>
            <button onClick={context.limpiarPantalla} value="C" >C</button>
        </div>
    );
}