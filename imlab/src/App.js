import React, { createContext, useState } from "react";
import Calculator from "./components/MyCalculator";

export let Context = createContext(null);

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [action, setAction] = useState(null);
  const [id, setId] = useState('');
  let [result, setResult] = useState(0);
  
  return (
    <div className="App">
      <Context.Provider value={{num1, setNum1, num2, setNum2, action, setAction, id, setId, result, setResult}}>
        <Calculator/>
      </Context.Provider>
    </div>
  )
}

export default App;

//Воссоздать мой калькулятор на React, для хранения данных использовать useContext();


//import {MyButton} from "./components/MyButton"; - export - именованный экспорт
//import MyButton from "./components/MyButton"; - export default - экспорт компонента как одного целого