import React, { useState } from "react";
import { useTodo } from "../contexts/ToDoContext.jsx";

function ToDoItem({ todo }) {
  const [isTodoEditable, setTodoEditable] = useState(false);
  const [todoMessage, setTodoMessage] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = (e) => {
    updateTodo(todo.id, { ...todo, todo: todoMessage });
    setTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center gap-x-3 shadow-sm justify-between border-b border-black/10 px-3 py-2 ${
        todo.completed ? "bg-green-500" : " bg-orange-400"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`w-full border bg-transparent rounded-lg outline-none ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMessage}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMessage(e.target.value)}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-green-500 text-white hover:bg-green-600 shrink-0 disabled:opacity-50"
        onClick={(e) => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else {
            setTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-red-500 text-white hover:bg-red-600 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        🗑️
      </button>
    </div>
  );
}

export default ToDoItem;
