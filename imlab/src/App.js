import React, { createContext, useState } from "react";
import ListItems from "./tovars/ListItems";

export const Context = createContext(null);

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [action, setAction] = useState(null);
  const [id, setId] = useState('');
  const [result, setResult] = useState('');
  
  return (
    <div className="App">
      <Context.Provider value={{num1, setNum1, num2, setNum2, action, setAction, id, setId, result, setResult}}>
        <div>
          <ListItems/>
        </div>
      </Context.Provider>
    </div>
  )
}

export default App;

/* 

Товар 
хранить в локальном хранилище
создание товара путем введнеия его наименования и стоимости
количество
возможность выбрать товар
калькулятором задать сколько товара можно продать
выбрать через калькулятор наличные или нет
если меньше 0 то удалять из локального
и спользованием редакс

*/