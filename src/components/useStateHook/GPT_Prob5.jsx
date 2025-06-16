//Todo List App
import { useRef, useState } from "react";

const GPT_Prob5 = () => {
  const inputField = useRef(null);
  const [todoItems, setTodoItems] = useState([]);
  const addItems = () => {
    const text = inputField.current.value;
    setTodoItems([...todoItems, text]);
  };
  const removeItems = (removeIndexItem) => {
    setTodoItems(todoItems.filter((_, index) => index !== removeIndexItem));
  };
  return (
    <>
      <div>
        <input type="text" ref={inputField} />
        <button onClick={addItems}>Add</button>
      </div>
      <div>
        <span>To-do list:</span>
        <ul>
          {todoItems.map((item, index) => {
            return (
              <li key={index}>
                {item}{" "}
                <button onClick={() => removeItems(index)}>Remove</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default GPT_Prob5;
