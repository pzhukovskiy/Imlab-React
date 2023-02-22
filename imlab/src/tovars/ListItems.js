import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemAction, deleteItemAction, showItemActionMessage } from "../redux/actions";

function ListItems() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.item.items);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");


  const person = {
    id: new Date(),
    name,
    quantity,
    price
  }

  const addItem = (name, quantity, price) => {
    if (name.trim && quantity && price) {
      dispatch(addItemAction(person));
      setName("");
      setQuantity("");
      setPrice("");
    }
    else {
      alert("Введите корректные данные");
    }
  }

  const deleteItem = (item) => {
    dispatch(deleteItemAction(item.id))
  }

  const handleAddItem = (item) => {
    dispatch(showItemActionMessage(item.id));
    alert(`Вы добавили предмет: ${item.name}, \nего количество: ${item.quantity}, \nего цена: ${item.price} $`);
  }

  return (
    <div className="App">
      <div className="trash">
        <button><span>Корзина</span></button>
      </div>
      <hr/>
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
                <button onClick={() => handleAddItem(person)}>Добавить</button>
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