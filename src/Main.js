import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const Main = () => {
  const [items, setItems] = useState([
    {
      name: "onions",
      checked: false,
    },
    {
      name: "tomatoes",
      checked: false,
    },
    {
      name: "carrot",
      checked: false,
    },
    {
      name: "brinjal",
      checked: false,
    },
  ]);

  const handleCheck = (name) => {
    const listItems = items.map((item) =>
      item.name === name ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (name) => {
    const listItems = items.filter((item) => item.name !== name);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <main className="main-container">
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.name}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.name)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.name)}
              >
                {item.name}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.name)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default Main;
