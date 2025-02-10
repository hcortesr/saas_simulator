import { useContext } from "react";
import { UnitContext } from "../../Contexts/UnitProvider";

export function UnitSelector({ fun }) {
    return (
        <select className="unit-selector" name="" id="" onChange={fun}>
            <option value="aaa">opcion 1</option>
            <option value="aaaa">opcion 2</option>
            <option value="aaaba">opcion 3</option>
            <option value="aaav">opcion 4</option>
            <option value="aaare">opcion 5</option>
            <option value="aaahs">opcion 6</option>
        </select>
    );
}



export function UnitConApp() {

    const context = useContext(UnitContext);

    function handleChangeSel1(e) {
        context.setSet1(e.target.value);
    }
    function handleChangeSel2(e) {
        context.setSet2(e.target.value);
    }

    return (
        <div className="unit-frame">
            <h1>Unit Converter App</h1>
            <div className="unit-border">
                <div className="unit-opt-cont">
                    <div className="unit-opt">
                        <UnitSelector
                            fun={handleChangeSel1} />
                        <input className="unit-res" type="text" name="" id="" />
                    </div>

                    <div className="unit-opt">
                        <UnitSelector
                            fun={handleChangeSel2} />
                        <div className="unit-res">ñlkj</div>
                    </div>
                </div>

                <button className="unit-calc">Calcular</button>

            </div>
        </div>
    );
}