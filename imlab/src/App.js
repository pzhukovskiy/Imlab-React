import React, { createContext, useState } from "react";
import Calculator from "./components/MyCalculator";

export let Context = createContext(null);

function App() {

  const [value, setValue] = useState(0);
  
  return (
    <div className="App">
      <Context.Provider value={{value, setValue}}>
        <Calculator/>
      </Context.Provider>
    </div>
  )
}

export default App;

//Воссоздать мой калькулятор на React, для хранения данных использовать useContext();


//import {MyButton} from "./components/MyButton"; - export - именованный экспорт
//import MyButton from "./components/MyButton"; - export default - экспорт компонента как одного целого