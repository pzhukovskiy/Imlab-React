import React from "react";
import './ButtonCalc.css';

function ButtonCalc() {
    return (
        <div className="App">
            <button onClick={() => console.log('1')}>1</button>
            <button onClick={() => console.log('2')}>2</button>
            <button onClick={() => console.log('3')}>3</button>
            <button onClick={() => console.log('4')}>4</button>
            <button onClick={() => console.log('5')}>5</button>
            <button onClick={() => console.log('6')}>6</button>
            <button onClick={() => console.log('7')}>7</button>
            <button onClick={() => console.log('8')}>8</button>
            <button onClick={() => console.log('9')}>9</button>
        </div>
    )
}

export default ButtonCalc;