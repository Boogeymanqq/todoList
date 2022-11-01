import React, { useState, useEffect } from "react";
import s from "./indicator.module.css";
import { propsIndicator } from "../../@types/types";

export const Indicator = ({
  todos,
  setTodos,
  setActiveTodo,
  active,
  setActive,
}: propsIndicator) => {
  const [lengthTodo, setLengthTodo] = useState(0);

  const arr = ["All", "Active", "Completed"];

  function deleteTodos() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  function activeHandler(i: number, elem: string): void {
    setActive(i);
    if (elem === "Active") {
      setActiveTodo(todos.filter((todo) => !todo.completed));
    }
    if (elem === "Completed") {
      setActiveTodo(todos.filter((todo) => todo.completed));
    }
    if (elem === "All") {
      setActiveTodo(todos);
    }
  }

  useEffect(() => {
    setLengthTodo(todos.filter((todo) => !todo.completed).length);
  }, [todos]);

  return (
    <div className={s.indicator__block}>
      <p className={s.indicator__length}>{lengthTodo} items left</p>
      <div className={s.indicator__items}>
        {arr.map((elem, i) => (
          <p
            key={i}
            onClick={() => activeHandler(i, elem)}
            className={i === active ? s.indicator__item : s.item}
          >
            {elem}
          </p>
        ))}
      </div>
      <p onClick={deleteTodos}>Clear completed</p>
    </div>
  );
};
