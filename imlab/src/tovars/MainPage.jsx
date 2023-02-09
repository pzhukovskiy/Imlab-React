import React, {useState} from "react";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";

import './MainPage.css';

function MainPage() {

    const [item, setItem] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const addItem = () => {
        if ((name.trim().length) && (description.trim().length)) {//trim - удалить пробелы
            setItem([
              ...item, //rest - добавить все существующие тудушки
              {
                id: new Date(),
                name,
                description,
              }
            ])
          }
        setName('');
        setDescription('');
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
                                <Stack spacing={2} direction="row" className="ShowItemsBtn">
                                    <Button variant="contained" color="success">Выбрать товар</Button>
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