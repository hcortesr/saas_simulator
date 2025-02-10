import { SideBar } from "./SideBar";
import { Header } from "./Header";
import { TasksApp } from "./miniApps/TasksApp/TasksApp";
import { CalculatorApp } from "./miniApps/CalculatorApp/CalculatorApp";
import { CronometerApp } from "./miniApps/CronometerApp/CronometerApp";
import { useContext } from "react";
import { CurrentAppContext } from "./Contexts/CurrentAppProvider";
import { UnitConApp } from "./miniApps/UnitConApp/UnitConApp";
import { CalculatorProvider } from "./Contexts/CalculatorProvider";
import { CronometerProvider } from "./Contexts/CronometerProvider";
import { TasksProvider } from "./Contexts/TasksProvider";
import { UnitProvider } from "./Contexts/UnitProvider";

export function App() {

    const { currentApp } = useContext(CurrentAppContext);

    return (<>
        <Header />

        <main>
            <SideBar />
            {(() => {
                switch (currentApp) {
                    case 'calculator':
                        return (<CalculatorProvider>
                            <CalculatorApp />
                        </CalculatorProvider>)
                    case 'tasks':
                        return (
                            <TasksProvider>
                                <TasksApp />
                            </TasksProvider>
                        )
                    case 'cronometer':
                        return (
                            <CronometerProvider>
                                <CronometerApp />
                            </CronometerProvider>
                        )
                    case 'unit-converter':
                        return (
                            <UnitProvider>
                                <UnitConApp />
                            </UnitProvider>
                        )
                }
            })()}
        </main>
    </>

    );
}