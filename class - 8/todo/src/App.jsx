import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(task);
    setTodos([
      ...todos,
      {
        value: task,
        checked: false,
      },
    ]);
    console.log(todos);
    setTask("");
  };

  return (
    <div className="App">
      <h1>
        To Do Apps
        <h2>
          Vijay
          <h3>Anand123</h3>
        </h2>
      </h1>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          value={task}
          placeholder="Add a task"
          onChange={(e) => {
            // console.log(e.target.value);
            setTask(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>

      <section>
        <ul>
          {todos.map((todo, idx) => (
            <li key={idx}>
              <input
                type="checkbox"
                onChange={(e) => {
                  console.log(e.target.checked, idx);
                  todos[idx] = {
                    value: todos[idx].value,
                    checked: e.target.checked,
                  };

                  setTodos([...todos]);
                }}
              />

              <span className={todo.checked ? "checked" : ""}>
                {todo.value}
              </span>

              <button
                onClick={() => {
                  todos.splice(idx, 1);
                  setTodos([...todos]);
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
