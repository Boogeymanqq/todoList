import React, { useState } from "react";
import { Todo } from "./components/todo/Todo";
import { AddTodo } from "./components/addTodo/AddTodo";
import { Indicator } from "./components/indicator/Indicator";
import { todoTypes } from "./@types/types";
import s from "./app.module.css";

function App() {
  const [todos, setTodos] = useState<todoTypes[] | []>([]);
  const [activeTodo, setActiveTodo] = useState<todoTypes[]>([]);
  const [active, setActive] = useState(0);
  const [value, setValue] = useState("");

  function comletedTodo(id: string) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function onSubmit(title: string) {
    setTodos([
      ...todos,
      { id: Date.now().toString(), title, completed: false },
    ]);
    setValue("");
  }

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <>
      <h1>todos</h1>
      <div className={s.app}>
        <AddTodo onSubmit={onSubmit} value={value} onChange={changeHandler} />
        <ul>
          {(active === 1 || active === 2 ? activeTodo : todos).map((todo) => (
            <Todo
              onClick={() => comletedTodo(todo.id)}
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
        <Indicator
          todos={todos}
          setTodos={setTodos}
          setActiveTodo={setActiveTodo}
          active={active}
          setActive={setActive}
        />
      </div>
    </>
  );
}

export default App;
