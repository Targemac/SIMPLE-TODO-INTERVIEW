import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoProvider";

const TaskItem = ({ todo }) => {
  const {
    toggleComplete,
    todoEditing,
    editingText,
    setEditingText,
    deleteTodo,
    editTodo,
    setTodoEditing,
  } = useContext(TodoContext);

  return (
    <div className="task_item">
      <input
        className="task_checkbox"
        type="checkbox"
        onChange={() => toggleComplete(todo.id)}
        checked={todo.completed}
      />
      {/* 
            from the list of todos we are displaying, if anyone is equal to 
            the one we are editing, the input fields should be displayed
            else, display just the text
        */}
      {todoEditing === todo.id ? (
        <input
          className="task_edit_field"
          type="text"
          placeholder="Edit task here"
          onChange={(e) => setEditingText(e.target.value)}
          value={editingText}
        />
      ) : (
        <div className="task_text"> {todo.text} </div>
      )}

      <span>
        {todoEditing === todo.id ? (
          <button className="task_edit_btn" onClick={() => editTodo(todo.id)}>
            Update
          </button>
        ) : (
          <button
            className="task_edit_btn"
            onClick={() => setTodoEditing(todo.id)}
          >
            Edit
          </button>
        )}

        <button
          className="task_delete_btn"
          type="submit"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </span>
    </div>
  );
};

export default TaskItem;
