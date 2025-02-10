export function ButtonsCalculator() {
    return (
        <div className="calc-btns">
            <Button val="0"/>
            <Button val="1"/>
            <Button val="2"/>
            <Button val="3"/>
            <Button val="4"/>
            <Button val="5"/>
            <Button val="6"/>
            <Button val="7"/>
            <Button val="8"/>
            <Button val="9"/>
            <Button val="10"/>
            <Button val="11"/>
            <Button val="12"/>
            <Button val="13"/>
            <Button val="14"/>
            <Button val="15"/>
        </div>
    );
}

function Button({val}) {
    return (
        <button>{val}</button>
    )
}