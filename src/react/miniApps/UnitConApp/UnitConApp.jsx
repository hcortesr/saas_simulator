import { useContext } from "react";
import { UnitContext } from "../../Contexts/UnitProvider";

export function UnitSelector({ fun }) {

    return (
        <select className="unit-selector" name="" id="" onChange={fun}>
            <option value={0.9144}>Yard</option>
            <option value={5.0292}>Rod</option>
            <option value={1609.344}>Mile</option>
            <option value={0.3048}>Feet</option>
            <option value={0.0254}>Inch</option>
            <option value={20.1168}>Chains</option>
            <option value={1852}>Nautical Mile</option>
            <option value={1}>Meter</option>
        </select>
    );
}



export function UnitConApp() {

    const context = useContext(UnitContext);

    return (
        <div className="unit-frame">
            <h1>Unit Converter App</h1>
            <div className="unit-border">
                <div className="unit-opt-cont">
                    <div className="unit-opt">
                        <UnitSelector
                            fun={context.hadleChangeSel1} />
                        <input onChange={(event) => {
                            context.setCurrent(event.target.value);
                        }} placeholder="Input the value to convert" className="unit-res" type="text" name="" id="" />
                    </div>

                    <div className="unit-opt">
                        <UnitSelector
                            fun={context.hadleChangeSel2} />
                        <div className="unit-res">{context.res}</div>
                    </div>
                </div>

                <button onClick={context.updateRes} className="unit-calc">Calcular</button>

            </div>
        </div>
    );
}