import React, { useState } from "react";
import ButtonCalc from "./ButtonCalc";
import './MyCalculator.css';

function Calculator() {
    return (
        <div className="Calculator">
            <div className="container">
                <div className="box child_1">
                    Введите 1-ое число
                    <button id="button1">Ввести 1-ое число</button>
                </div>
                <div className="box child_2">
                    Введите 2-ое число
                    <button id="button2">Ввести 1-ое число</button>
                </div>
                <div className="box child_3">
                    <p id="name">История:</p>
                    <span id="historyres"></span>
                </div>
                <div className="box child_4">
                    <p id="name">Калькулятор</p>
                    <ButtonCalc/>
                    <p>Первое число - <span id="num1"></span></p>
                    <p>Второе число - <span id="num2"></span></p>
                    <p>Выбрано действие - <span id="action"></span></p>
                    <p>Результат - <span id="result"></span></p>
                    <div>
                    <button onClick={() => console.log('Сложение')}>Сложение</button>
                    <button onClick={() => console.log('Вычитание')}>Вычитание</button>
                    <button onClick={() => console.log('Умножение')}>Умножение</button>
                    <button onClick={() => console.log('Деление')}>Деление</button>
                    <button id="btnShow">Записать результат</button>
                    </div>
                </div>
                <div className="box child_5">
                    Кнопка очистки
                    <button id="clearShow">Очистить историю</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;