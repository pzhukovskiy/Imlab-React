import React, { useState, useContext } from "react";
import { useEffect } from "react";

import ButtonCalc from "./ButtonCalc";
import "./MyCalculator.css";

import { Context } from "../App";
import ShowHistory from "./HistoryResult";

function Calculator() {
  const {
    num1,
    setNum1,
    num2,
    setNum2,
    action,
    setAction,
    id,
    setId,
    result,
    setResult,
  } = useContext(Context);

  const addCalculate = (e) => {
    // console.log(action);
    if (action === null) return;
    switch (e.code) {
      case "Numpad0": {
        action ? setNum1(num1 + e.key) : setNum2(num2 + e.key);
        break;
      }
      case "Numpad1": {
        action ? setNum1(num1 + e.key) : setNum2(num2 + e.key);
        break;
      }
      case "Numpad2": {
        action ? setNum1(num1 + e.key) : setNum2(num2 + e.key);
        break;
      }
      case "Numpad3": {
        action ? setNum1(num1 + e.key) : setNum2(num2 + e.key);
        break;
      }
      case "Numpad4": {
        action ? setNum1(num1 + e.key) : setNum2(num2 + e.key);
        break;
      }
      case "Numpad5": {
        action ? setNum1(num1 + e.key) : setNum2(num2 + e.key);
        break;
      }
      case "Numpad6": {
        action ? setNum1(num1 + e.key) : setNum2(num2 + e.key);
        break;
      }
      case "Numpad7": {
        action ? setNum1(num1 + e.key) : setNum2(num2 + e.key);
        break;
      }
      case "Numpad8": {
        action ? setNum1(num1 + e.key) : setNum2(num2 + e.key);
        break;
      }
      case "Numpad9": {
        action ? setNum1(num1 + e.key) : setNum2(num2 + e.key);
        break;
      }
      case "Backspace": {
        action
          ? setNum1(num1.substring(0, num1.length - 1))
          : setNum2(num2.substring(0, num2.length - 1));
        break;
      } //BackSpace не работает
    }
  };

  function CalculateNumbers(num1, num2, id) {
    switch (id) {
      case "+": {
        setId("+");
        setResult(+num1 + +num2);
        break;
      }
      case "-": {
        setId("-");
        setResult(+num1 - +num2);
        break;
      }
      case "*": {
        setId("*");
        setResult(+num1 * +num2);
        break;
      }
      case "/": {
        if (num2 === 0) console.log("Нельзя делить на 0");
        else {
          setId("/");
          setResult(+num1 / +num2);
          break;
        }
      }
    }
    return result;
  }

  const addAction = (a) => {
    setAction(a);
    // console.log(action);
  };

  useEffect(() => {
    window.addEventListener("keypress", addCalculate);
    return () => window.removeEventListener("keypress", addCalculate);
  });

  //  =================================================================================
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => (
      <p key={number.toString()}>{number}</p>
    ));
    return <ul>{listItems}</ul>;
  }

  const numbers = [1, 2, 3, 4, 5];
  //  =================================================================================
  return (
    <div className="Calculator">
      <div className="container">
        <div className="box child_1">
          Введите 1-ое число
          <button id="button1" onClick={() => addAction(true)}>
            Ввести 1-ое число
          </button>
        </div>
        <div className="box child_2">
          Введите 2-ое число
          <button id="button2" onClick={() => addAction(false)}>
            Ввести 2-ое число
          </button>
        </div>
        <div className="box child_3">
          <p id="name">История:</p>
          {/* <NumberList numbers={numbers}/>НОВАЯ ФУНКЦИЯ */}
          <ShowHistory />
        </div>
        <div className="box child_4">
          <p id="name">Калькулятор</p>
          <div className="Output">
            <div>
              <div>Первое число - {num1}</div>
              <div>Второе число - {num2}</div>
              <div>Выбрано действие - {id}</div>
              <div>Результат - {result}</div>
            </div>
            <ButtonCalc />
          </div>
          <div className="BtnCalculate">
            <button onClick={() => CalculateNumbers(num1, num2, "+")}>
              Сложение
            </button>
            <button  onClick={() => CalculateNumbers(num1, num2, "-")}>
              Вычитание
            </button>
            <button onClick={() => CalculateNumbers(num1, num2, "*")}>
              Умножение
            </button>
            <button onClick={() => CalculateNumbers(num1, num2, "/")}>
              Деление
            </button>
            <button>Записать результат</button>
          </div>
        </div>
        <div className="box child_5">
          Кнопка очистки
          <button id="clearShow" onClick={() => console.log("Clear")}>
            Очистить историю
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;


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