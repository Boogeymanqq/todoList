import React from "react";
import s from "./todo.module.css";
import { propsTodo } from "../../@types/types";

export const Todo = ({ todo, onClick }: propsTodo) => {
  const style: any = todo.completed
    ? { textDecoration: "line-through", color: "#bfbdbd" }
    : null;

  return (
    <li style={style} className={s.item}>
      <div
        className={todo.completed ? s.item__completed : s.item__left}
        onClick={onClick}
      ></div>
      {todo.title}
    </li>
  );
};
