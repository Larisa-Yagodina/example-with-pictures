import './App.css';
import ActivityBooking from "./activitiesBooking/ActivityBooking";
import {useState} from "react";
import Calculator from "./calculator/Calculator";

function App() {

    const [visibleApp, setVisibleApp] = useState('calculator')

    return (
        <div className="App">
            <h1>Applications</h1>

            {/*<div> To book an activity*/}
            {/*    <button onClick={() => setVisibleApp('activity')}> OK </button>*/}
            {/*</div>*/}

            {/*<div>Open a calculator*/}
            {/*    <button onClick={() => setVisibleApp('calculator')}> OK </button>*/}
            {/*</div>*/}

            {/*{ visibleApp === 'activity' && <ActivityBooking />}*/}
            { visibleApp === 'calculator' && <Calculator />}

        </div>
    );
}

export default App;
