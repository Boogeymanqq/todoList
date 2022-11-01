import React from "react";
import { propsAdd } from "../../@types/types";
import s from "./addtodo.module.css";

export const AddTodo = ({ onSubmit, value, onChange }: propsAdd) => {
  function submitValue(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && value.trim()) {
      onSubmit(value);
    }
  }

  return (
    <div className={s.block__input}>
      <input
        className={s.input}
        value={value}
        onChange={onChange}
        onKeyDown={submitValue}
        type="text"
        placeholder="What needs to be done, and then click ENTER"
      />
    </div>
  );
};
