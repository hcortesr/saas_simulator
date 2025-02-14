import { ScreenCalculator } from './ScreenCalculator';
import { ButtonsCalculator } from './ButtonsCalculator';

export function CalculatorApp() {
    return (
        <div className="calc-frame">
            <h2 className='appTitle'>Calculator App</h2>
            <div className="calc-border">
                <ScreenCalculator />
                <ButtonsCalculator />
            </div>
        </div>
    );
}