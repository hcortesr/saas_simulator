import { useContext } from "react";
import { CalculatorContext } from "../../Contexts/CalculatorProvider";


export function ScreenCalculator() {
    const context = useContext(CalculatorContext);
    return (
        <div className="calc-screen">
            {context.pantalla}
        </div>
    );
}