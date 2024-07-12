// import { useEffect, useState } from "react";

// export default function ToDoList() {
//   const [count, setCount] = useState("");
//   const [todosText, setTodosText] = useState([]);

//   useEffect(() => {
//     const listMasiv = localStorage.getItem("list");
//     if (listMasiv) {
//       setTodosText(JSON.parse(listMasiv));
//     }
//   }, []);

//   const countInput = (e) => {
//     setCount(e.target.value);
//   };
//   const display = () => {
//     if (count.trim() !== "") {
//       setTodosText([...todosText, count]);
//       setCount("");
//     }
//   };
//   useEffect(() => {
//     localStorage.setItem("list", JSON.stringify(todosText));
//   }, [todosText]);

//   return (
//     <>
//       <div className="card">
//         <input type="text" value={count} onChange={countInput}></input>
//         <button onClick={display}>Дабавить</button>
//       </div>

//       <ol>
//         {todosText.map((todo, index) => (
//           <li key={index}>{todo !== "" && <p>{todo}</p>}</li>
//         ))}
//       </ol>
//     </>
//   );
// }

// import { useEffect, useState } from "react";

// export default function ToDoList() {
//   const [count, setCount] = useState("");
//   const [todosText, setTodosText] = useState([]);

//   useEffect(() => {
//     const listMasiv = localStorage.getItem("list");
//     if (listMasiv) {
//       setTodosText(JSON.parse(listMasiv));
//     }
//   }, []);

//   const countInput = (e) => {
//     setCount(e.target.value);
//   };

//   const display = () => {
//     if (count.trim() !== "") {
//       setTodosText([...todosText, count]);
//       setCount("");
//     }
//   };
//   const delateItem = (index) => {
//     const update = todosText.filter((todo, i) => i !== index);
//     setTodosText(update);
//     localStorage.setItem("list", JSON.parse(update));
//   };

//   useEffect(() => {
//     if (todosText.length > 0) {
//       localStorage.setItem("list", JSON.stringify(todosText));
//     }
//   }, [todosText]);

//   return (
//     <>
//       <div className="card">
//         <input type="text" value={count} onChange={countInput}></input>
//         <button className="btn1" onClick={display}>
//           Добавить
//         </button>
//       </div>

//       <ol>
//         {todosText.map((todo, index) => (
//           <li key={index}>
//             {todo !== "" && <p>{todo}</p>}
//             <button onClick={() => delateItem(index)}>Удалить</button>
//           </li>
//         ))}
//       </ol>
//     </>
//   );
// }

import { useEffect, useState } from "react";

export default function ToDoList() {
  const [count, setCount] = useState("");
  const [todosText, setTodosText] = useState([]);

  useEffect(() => {
    const listMasiv = localStorage.getItem("list");
    if (listMasiv) {
      setTodosText(JSON.parse(listMasiv));
    }
  }, []);

  const countInput = (e) => {
    setCount(e.target.value);
  };

  const display = () => {
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
    // Исправлено: заменил delateItem на deleteItem
    const update = todosText.filter((todo, i) => i !== index);
    setTodosText(update);
    if (todosText.length > 0) {
      localStorage.setItem("list", JSON.stringify(update));
    }
  };

  return (
    <>
      <div className="card">
        <input type="text" value={count} onChange={countInput} />
        <button className="btn1" onClick={display}>
          Добавить
        </button>
      </div>

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
