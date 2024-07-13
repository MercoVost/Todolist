import { useEffect, useState } from "react"; //

export default function ToDoList() {
  const [count, setCount] = useState("");
  const [todosText, setTodosText] = useState([]);

  useEffect(() => {
    const err = localStorage.getItem("list");
    if (err) {
      setTodosText(JSON.parse(err));
    }
  }, []);

  const countInput = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (count.trim() !== "") {
      setTodosText((prevTodos) => {
        const updatedTodos = [...prevTodos, count];
        localStorage.setItem("list", JSON.stringify(updatedTodos));
        return updatedTodos;
      });
      setCount("");
    }
  };

  const deleteItem = (index) => {
    const update = todosText.filter((todo, i) => i !== index);
    setTodosText(update);
    if (todosText.length > 0) {
      localStorage.setItem("list", JSON.stringify(update));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <input
            type="text"
            value={count}
            onChange={countInput}
            placeholder="Введите текст"
          />
          <button className="btn1" type="submit">
            Добавить
          </button>
        </div>
      </form>
      <ol>
        {todosText.map((todo, index) => (
          <li key={index}>
            {todo !== "" && <p>{todo}</p>}
            <button onClick={() => deleteItem(index)}>Удалить</button>{" "}
          </li>
        ))}
      </ol>
    </>
  );
}
