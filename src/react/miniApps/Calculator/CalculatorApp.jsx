import {ScreenCalculator} from './ScreenCalculator';
import { ButtonsCalculator } from './ButtonsCalculator';

export function CalculatorApp() {
    return (
        <div className="calc-frame">
            <div className="calc-border">
               <ScreenCalculator/>
               <ButtonsCalculator/> 
            </div>
        </div>
    );
}