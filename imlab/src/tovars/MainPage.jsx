import React, {useEffect, useState} from "react";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";

import './MainPage.css';

function MainPage() {

    const [item, setItem] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const addItem = () => {
        if ((name.trim().length) && (description.trim().length) && (price.trim().length) && (quantity.trim().length)) {
            setItem([
              ...item, //расширяет границы массива
              {
                id: new Date(),
                name,
                description,
                price, 
                quantity,
              }
            ])
          }
        setName('');
        setDescription('');
        setPrice('');
        setQuantity('');
    }

    return (
        <div className="MainPage">
            <div className="HeadPage">
                <h1>Название магазина</h1>
            </div>
            <div className="ContextPage">
                <div className="AddItem">
                    <input
                        placeholder="Введите название товара"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        placeholder="Введите описание товара"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Введите цену товара"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                        placeholder="Введите количество товара"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <Stack spacing={2} direction="row">
                        <Button 
                        variant="contained" 
                        color="success" 
                        onClick={addItem}>Добавить товар</Button>
                    </Stack>
                </div>
                <div className="ShowItems">
                    <ul>
                        {
                        item.map(show => 
                            <li key={show.id}>
                                <h2>
                                    Название: {show.name}
                                </h2>
                                <p>
                                    Описание: {show.description}
                                </p>
                                <p>
                                    Цена: {show.price}
                                </p>
                                <p>
                                    Количество: {show.quantity}
                                </p>
                                <Stack spacing={2} direction="row" className="ShowItemsBtn">
                                    <Button variant="contained" color="success">Добавить товар</Button>
                                </Stack>
                                <Stack spacing={2} direction="row" className="ShowItemsBtn">
                                    <Button variant="contained" color="error">Удалить товар</Button>
                                </Stack>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainPage;

/*

store - объект, с 2 параметрами (получить состояние, изменить состояние)
1 - reducer

reducer - функция, имеет 2 параметра (состояние, action)
action - js object, у которого обязательно должно быть поле type, по которому определятся как будет изменяться состояние
в action можно передать любое количество данных, их передают в payload

вся логика заключается в том, какой тип action был передан в функцию

состояние - чаще всего массив, в котором уже есть поля


state (банк) - reducer (система обращения) - action (что сделать) - dispatch (диспетчер) 
*/