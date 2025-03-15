import React, { useState } from "react";
import { useTodo } from "../contexts/ToDoContext";

function ToDoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.50"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-l-rg px-3 py-1 bg-green-600 text-white font-semibold duration-150"
      >
        Add
      </button>
    </form>
  );
}

export default ToDoForm;
