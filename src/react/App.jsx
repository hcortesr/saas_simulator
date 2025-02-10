import { SideBar } from "./SideBar";
import { Header } from "./Header";
import { TasksApp } from "./miniApps/TasksApp/TasksApp";
import { CalculatorApp } from "./miniApps/CalculatorApp/CalculatorApp";
import { CronometerApp } from "./miniApps/CronometerApp/CronometerApp";
import { useContext } from "react";
import { CurrentAppContext } from "./Contexts/CurrentAppProvider";

export function App() {
    
    const {currentApp} = useContext(CurrentAppContext);

    return (<>
        <Header />

        <main>
        <SideBar />
            {(() => {
                switch (currentApp) {
                    case 'calculator':
                        return <CalculatorApp />
                    case 'tasks':
                        return <TasksApp />
                    case 'cronometer':
                        return <CronometerApp/>
                }
            })()}
        </main>
    </>

    );
}