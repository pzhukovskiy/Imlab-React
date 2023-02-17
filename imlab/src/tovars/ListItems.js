import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ListItems() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.item.items);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const addItem = (name, quantity, price) => {
    const person = {
      id: new Date(),
      name,
      quantity,
      price
    }
    dispatch({type: "ADD_ITEM", payload: person});
    setName("");
    setQuantity("");
    setPrice("");
  }

  const deleteItem = (item) => {
    dispatch({type: "DELETE_ITEM", payload: item.id})
  }


  return (
    <div className="App">
      <input 
        placeholder="Введите название"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        placeholder="Введите количество"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input 
        placeholder="Введите цену"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <div>
        <button onClick={() => addItem(name, +quantity, +price)}>Добавить</button>
      </div>
      <hr/>
      <div>
        {item && item.length > 0 ? (
          <div>
            {item.map((person) => (
              <div key={person.id}>
                <h1>Название: {person.name}</h1>
                <p>Количество: {person.quantity}</p>
                <p>Цена: {person.price}</p>
                <button>Добавить</button>
                <button onClick={() => deleteItem(person)}>Удалить</button>
              </div>
            ))}
          </div>
        ) : (
          <div>Товары отсутствуют</div>
        )}
      </div>
    </div>
  );
}

export default ListItems;
//написать thunk
//alert - вы положили то то