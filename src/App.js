import './App.css';
import 'antd/dist/antd.css';
import ActivityBooking from "./activitiesBooking/ActivityBooking";
import {useState} from "react";
import Calculator from "./calculator/Calculator";
import ExpensesTable from "./finansing/ExpensesTable";
import MainMenu from "./mainMenu/MainMenu";


function App() {

    const [visibleApp, setVisibleApp] = useState('calculator')

    return (
        <div className="App">
            <h1>Applications</h1>

            {/*<div> Monthly Expenses Plan*/}
            {/*    <button onClick={() => setVisibleApp('expenses')}> OK </button>*/}
            {/*</div>*/}

            {/*<div>Open a calculator*/}
            {/*    <button onClick={() => setVisibleApp('calculator')}> OK </button>*/}
            {/*</div>*/}

             <MainMenu />

            {/*{ visibleApp === 'activity' && <ActivityBooking />}*/}
            {/*{ visibleApp === 'expenses' && <ExpensesTable />}*/}
            {/*{ visibleApp === 'calculator' && <Calculator />}*/}

        </div>
    );
}

export default App;
