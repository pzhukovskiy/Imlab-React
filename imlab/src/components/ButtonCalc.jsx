import React, {useContext} from "react";
import './ButtonCalc.css';
import { Context } from "../App";

function ButtonCalc() {

    const {
        num1,
        setNum1,
        num2,
        setNum2,
        action,
    } = useContext(Context);

    return (
        <div className="App">
            <button onClick={() => action === null ? null : action ? setNum1(num1 + 1) : setNum2(num2 + 1)}>1</button>
            <button onClick={() => action === null ? null : action ? setNum1(num1 + 2) : setNum2(num2 + 2)}>2</button>
            <button onClick={() => action === null ? null : action ? setNum1(num1 + 3) : setNum2(num2 + 3)}>3</button>
            <button onClick={() => action === null ? null : action ? setNum1(num1 + 4) : setNum2(num2 + 4)}>4</button>
            <button onClick={() => action === null ? null : action ? setNum1(num1 + 5) : setNum2(num2 + 5)}>5</button>
            <button onClick={() => action === null ? null : action ? setNum1(num1 + 6) : setNum2(num2 + 6)}>6</button>
            <button onClick={() => action === null ? null : action ? setNum1(num1 + 7) : setNum2(num2 + 7)}>7</button>
            <button onClick={() => action === null ? null : action ? setNum1(num1 + 8) : setNum2(num2 + 8)}>8</button>
            <button onClick={() => action === null ? null : action ? setNum1(num1 + 9) : setNum2(num2 + 9)}>9</button>
        </div>
    )
}

export default ButtonCalc;